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

  test("renders correctly on a mobile viewport", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();
  });
});
