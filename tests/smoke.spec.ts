import { test, expect } from "@playwright/test";

test.describe("Climato landing page", () => {
  test("loads with no console errors and all sections present", async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(msg.text());
    });

    await page.goto("/");

    await expect(page.locator("h1")).toBeVisible();
    await expect(page.getByText("Everything you need to read the sky")).toBeVisible();
    await expect(page.getByText("A look inside Climato")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();

    expect(consoleErrors).toEqual([]);
  });

  test("App Store and Google Play links point to the correct listings", async ({ page }) => {
    await page.goto("/");

    const appStoreLink = page.locator('a[href*="apps.apple.com"]').first();
    const playStoreLink = page.locator('a[href*="play.google.com"]').first();

    await expect(appStoreLink).toHaveAttribute(
      "href",
      "https://apps.apple.com/us/app/climato/id6755456353"
    );
    await expect(appStoreLink).toHaveAttribute("target", "_blank");

    await expect(playStoreLink).toHaveAttribute(
      "href",
      "https://play.google.com/store/apps/details?id=com.climato"
    );
    await expect(playStoreLink).toHaveAttribute("target", "_blank");
  });

  test("includes answer-focused FAQ content and FAQ schema", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: "What is Climato?" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "How does Skye help with weather?" })).toBeVisible();

    const faqSchema = await page.locator('script[type="application/ld+json"]').evaluateAll((nodes) =>
      nodes.map((node) => {
        const raw = node.textContent || "{}";
        try {
          return JSON.parse(raw);
        } catch {
          return {};
        }
      })
    );

    expect(
      faqSchema.some(
        (script) =>
          script["@type"] === "FAQPage" ||
          (script["@graph"] || []).some((item: { "@type"?: string }) => item["@type"] === "FAQPage")
      )
    ).toBeTruthy();
  });

  test("legal pages declare their own canonical URL", async ({ page }) => {
    for (const path of ["/privacy", "/terms"]) {
      await page.goto(path);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        `https://climato-peach.vercel.app${path}`
      );
    }
  });

  test("header logo returns to the top of the home page on every click", async ({ page }) => {
    await page.goto("/");
    const logo = page.getByRole("link", { name: "Climato home" });

    for (let i = 0; i < 2; i++) {
      await page.mouse.wheel(0, 3000);
      await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(500);
      await logo.click();
      await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
    }
  });

  test("Faircode links open in the same tab so Back returns to Climato", async ({ page }) => {
    await page.goto("/");
    const links = page.locator('a[href*="faircodetech.com"]');
    expect(await links.count()).toBeGreaterThan(0);
    for (const link of await links.all()) {
      expect(await link.getAttribute("target")).toBeNull();
    }
  });

  test("Get the App shows the whole hero, heading and phone included", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto("/");
    await page.mouse.wheel(0, 3000);
    await page.locator("header").getByRole("link", { name: "Get the App" }).click();
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
    await expect(page.locator("h1")).toBeInViewport({ ratio: 1 });
    // The phone image is the tallest part of the hero; it must fit too.
    await expect(page.locator("#hero img").first()).toBeInViewport({ ratio: 1 });
  });

  test("nav links from a legal page land on the home page section", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto("/privacy");
    await page.locator("header").getByRole("link", { name: "Features" }).click();
    await expect(page).toHaveURL(/\/#features$/);
    await expect(page.locator("#features h2")).toBeInViewport();
  });

  test("footer links to every page section", async ({ page }) => {
    await page.goto("/");
    const footerNav = page.locator("footer nav");
    for (const name of ["Why Climato", "Features", "Screens", "Meet Skye", "FAQ", "About"]) {
      await expect(footerNav.getByRole("link", { name })).toBeVisible();
    }
    await footerNav.getByRole("link", { name: "Meet Skye" }).click();
    await expect(page.locator("#skye h2")).toBeInViewport();
  });

  test("renders correctly on a mobile viewport", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();
  });
});
