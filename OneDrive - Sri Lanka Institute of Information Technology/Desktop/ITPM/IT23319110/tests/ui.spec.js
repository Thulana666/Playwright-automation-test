const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
});

/* ================= UI TEST CASES ================= */

test('Pos_UI_0001 - Real-time Sinhala output update', async ({ page }) => {

  const input = page.locator('textarea');

  const output = page.locator(
    "//div[contains(text(),'Sinhala')]/following-sibling::div[1]"
  );

  await input.type('api paasal yanavaa', { delay: 120 });

  await expect(output).not.toHaveText('');

  await expect(output).toContainText('අපි පාසල් යනවා');

});
