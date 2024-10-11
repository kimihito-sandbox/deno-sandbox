import { chromium } from "npm:playwright";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("http://deno.com");

  await sleep(2000);
  await page.screenshot({ path: "deno.png" });

  await browser.close();
}

if (import.meta.main) {
  await main();
}
