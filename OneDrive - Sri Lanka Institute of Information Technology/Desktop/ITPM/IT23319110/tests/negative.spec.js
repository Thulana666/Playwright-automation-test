const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
});

// Helper
async function runNegativeTest(page, inputText, unexpectedText) {

  const input = page.locator('textarea');

  const output = page.locator(
    "//div[contains(text(),'Sinhala')]/following-sibling::div[1]"
  );

  await input.fill(inputText);

  await expect(output).not.toHaveText('');

  const result = await output.textContent();

  expect(result).toContain(expectedText);
}

/* ================= NEGATIVE TEST CASES ================= */

test('Neg_Fun_0001', async ({ page }) => {
  await runNegativeTest(page,
    'ma mage day anav aa',
    ' මම ගෙදර යනවා. '
  );
});

test('Neg_Fun_0002', async ({ page }) => {
  await runNegativeTest(page,
    'ad oWel aamkiri ma chain?',
    'අඩෝ එල කිරි මචං!'
  );
});

test('Neg_Fun_0003', async ({ page }) => {
  await runNegativeTest(page,
    'matim,ni mayi yw',
    'මට නිදිමතයි.'
  );
});

test('Neg_Fun_0004', async ({ page }) => {
  await runNegativeTest(page,
    'ma ekata enna kalin karamnmwa cek doc tika',
    'මම කාර්යාලයට යන්න කලින් document එක check කරනවා.'
  );
});

test('Neg_Fun_0005', async ({ page }) => {
  await runNegativeTest(page,
    'mama AAdaiofFiseyawNna hadhan, Tapic nisaalat wennapulu,vankiyalahitwenaWaa',
    'මම අද office යන්න හදන්නෙ traffic නිසා late වෙන්න පුලුවන් කියල හිතෙනවා.'
  );
});

test('Neg_Fun_0006', async ({ page }) => {
  await runNegativeTest(page,
    'mama,gemDhara ynehthwa.nmuth trfc nisa,lte una',
    'මම ගෙදර යන්න හිතුවා, නමුත් ට්‍රැෆික් නිසා පරක්කු වුණා.'
  );
});

test('Neg_Fun_0007', async ({ page }) => {
  await runNegativeTest(page,
    'IsKoLeg,iHiN sElAm KaLaitepas.geDaraaVa',
    'ඉස්කෝලේ ගිහින් සෙල්ලම් කරා. ඊට පස්සේ ගෙදර ආවා.'
  );
});

test('Neg_Fun_0008', async ({ page }) => {
  await runNegativeTest(page,
    'MaLlu pAn dEkAk gEnNa',
    'මාළු පාන් දෙකක් ගේන්න.'
  );
});

test('Neg_Fun_0009', async ({ page }) => {
  await runNegativeTest(page,
    'crktmch,ek nala',
    'ක්‍රිකට් මැච් එක දිනලා.'
  );
});

test('Neg_Fun_0010', async ({ page }) => {
  await runNegativeTest(page,
    'bdtikaga.DaraaRanenawada.',
    'බඩු ටික ගෙදර අරන් එනවාද?'
  );
});
