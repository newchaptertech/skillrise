import { test, expect } from "@playwright/test";

test("can sign in with seeded learner and enroll", async ({ page }) => {
  await page.goto("http://localhost:3000/auth/signin");
  await page.getByLabel("Email").fill("learner@skillrise.me");
  await page.getByLabel("Password").fill("Password123!");
  await page.getByRole("button", { name: "Sign in" }).click();

  await page.waitForURL(/.*courses/);
  await page.getByRole("link", { name: /AI Personal Trainer/i }).click();
  await page.getByRole("button", { name: "Enroll" }).click();

  await page.waitForURL(/.*dashboard/);
  await expect(page.getByText(/AI Personal Trainer/i)).toBeVisible();
});
