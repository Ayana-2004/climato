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

  test("renders correctly on a mobile viewport", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();
  });
});
