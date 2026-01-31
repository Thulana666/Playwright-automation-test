const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
});

// Helper function
async function runPositiveTest(page, inputText, expectedText) {
  const input = page.locator('textarea');

  const output = page.locator(
    "//div[contains(text(),'Sinhala')]/following-sibling::div[1]"
  );

  await input.fill(inputText);

  await expect(output).not.toHaveText('');

  const result = await output.textContent();

  expect(result).toContain(expectedText);
}

/* ================= POSITIVE TEST CASES ================= */

test('Pos_Fun_0001', async ({ page }) => {
  await runPositiveTest(page,
    'api paasal yanavaa.',
    'අපි පාසල් යනවා.'
  );
});

test('Pos_Fun_0002', async ({ page }) => {
  await runPositiveTest(page,
    'api kaema kanna yanavaa.',
    'අපි කැම කන්න යනවා.'
  );
});

test('Pos_Fun_0003', async ({ page }) => {
  await runPositiveTest(page,
    'oyaa kavadhdha enna hithan inne?',
    'ඔයා කවද්ද එන්න හිතන් ඉන්නේ?'
  );
});

test('Pos_Fun_0004', async ({ page }) => {
  await runPositiveTest(page,
    'issarahata yanna.',
    'ඉස්සරහට යන්න.'
  );
});

test('Pos_Fun_0005', async ({ page }) => {
  await runPositiveTest(page,
    'mama ehema karanne naehae.',
    'මම එහෙම කරන්නේ නැහැ.'
  );
});

test('Pos_Fun_0006', async ({ page }) => {
  await runPositiveTest(page,
    'karuNaakaralaa mata podi udhavvak karanna puLuvandha?',
    'කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?'
  );
});

test('Pos_Fun_0007', async ({ page }) => {
  await runPositiveTest(page,
    'mama heta enavaa.',
    'මම හෙට එනවා.'
  );
});

test('Pos_Fun_0008', async ({ page }) => {
  await runPositiveTest(page,
    'WhatsApp message ekak yavanna puluvandha?',
    'WhatsApp message එකක් යවන්න පුලුවන්ද?'
  );
});

test('Pos_Fun_0009', async ({ page }) => {
  await runPositiveTest(page,
    'mama dhaen vaeda karanavaa.',
    'මම දැන් වැඩ කරනවා.'
  );
});

test('Pos_Fun_0010', async ({ page }) => {
  await runPositiveTest(page,
    'mama iiyee gedhara giyaa.',
    'මම ඊයේ ගෙදර ගියා.'
  );
});

test('Pos_Fun_0011', async ({ page }) => {
  await runPositiveTest(page,
    'api iiLaGa sathiyee gedhara yamu.',
    'ඊළඟ සතියේ ගෙදර යමු.'
  );
});

test('Pos_Fun_0012', async ({ page }) => {
  await runPositiveTest(page,
    'mata eeka epaa.',
    'මට ඒක එපා.'
  );
});

test('Pos_Fun_0013', async ({ page }) => {
  await runPositiveTest(page,
    'oyaalaa enavadha?',
    'ඔයාලා එනවද?'
  );
});

test('Pos_Fun_0014', async ({ page }) => {
  await runPositiveTest(page,
    'hariyata vaeda karanna.',
    'හරියට වැඩ කරන්න.'
  );
});

test('Pos_Fun_0015', async ({ page }) => {
  await runPositiveTest(page,
    'hari hari lassanayi.',
    'හරි හරි ලස්සනයි.'
  );
});

test('Pos_Fun_0016', async ({ page }) => {
  await runPositiveTest(page,
    'api trip eka Kandy valata yamudha.',
    'අපි trip එක Kandy වලට යමුද.'
  );
});

test('Pos_Fun_0017', async ({ page }) => {
  await runPositiveTest(page,
    'bill eka Rs. 5343.',
    'bill එක Rs. 5343.'
  );
});

test('Pos_Fun_0018', async ({ page }) => {
  await runPositiveTest(page,
    'meeka hariyata vaeda karanavaadha?',
    'මේක හරියට වැඩ කරනවාද?'
  );
});

test('Pos_Fun_0019', async ({ page }) => {
  await runPositiveTest(page,
    'meeting eka 7.30 ta patan gannavaa.',
    'meeting එක 7.30 ට පටන් ගන්නවා.'
  );
});

test('Pos_Fun_0020', async ({ page }) => {
  await runPositiveTest(page,
    'NIC saha ID details tika thiyenavaa.',
    'NIC සහ ID details ටික තියෙනවා.'
  );
});

test('Pos_Fun_0021', async ({ page }) => {
  await runPositiveTest(page,
    'mama gedhara yanavaa.oyaa enavadha maath ekka?',
    'මම ගෙදර යනවා.ඔයා එනවද මාත් එක්ක?'
  );
});

test('Pos_Fun_0022', async ({ page }) => {
  await runPositiveTest(page,
    'ela machan, hari lassanayi!',
    'එල මචන්, හරි ලස්සනයි!'
  );
});

test('Pos_Fun_0023', async ({ page }) => {
  await runPositiveTest(page,
    'mama adha udheema friends laa ekka cricket match ekak balanna stadium yanna plan kalaa. tickets online gaththaa, passe traffic eka nisaa tikak parakku vunaath api hariyata match eka patan gannata kalin stadium eka athulata giyaa. crowd eka godak hitiyaa, flags thiyenavaa, cheers gahanavaa, saha players la warm-up karanavaa balanna puluvan vunaa. match eka athara thibba rain break ekath ekka api snacks gaththaa, photos gaththaa, saha memorable experience ekak labuna kiyalaa hithenavaa.',
    'මම අද උදේම friends ලා එක්ක cricket match එකක් බලන්න stadium යන්න plan කලා. tickets online ගත්තා, පස්සෙ traffic එක නිසා ටිකක් පරක්කු වුනාත් අපි හරියට match එක පටන් ගන්නට කලින් stadium එක අතුලට ගියා. crowd එක ගොඩක් හිටියා, flags තියෙනවා, cheers ගහනවා, සහ players ල warm-up කරනවා බලන්න පුලුවන් වුනා. match එක අතර තිබ්බ rain break එකත් එක්ක අපි snacks ගත්තා, photos ගත්තා, සහ memorable experience එකක් ලබුන කියලා හිතෙනවා.'
  );
});

test('Pos_Fun_0024', async ({ page }) => {
  await runPositiveTest(page,
    'appointment eka 25/12/2025 thiyenavaa.',
    'appointment එක 25/12/2025 තියෙනවා.'
  );
});
