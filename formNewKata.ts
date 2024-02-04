import puppeteer from "puppeteer";
import Jimp from "jimp";
import * as fs from "fs";

const URL = "https://www.codewars.com/kata/" + process.argv[2];
let FULL_PATH = "";

async function getTitleAndScreenshot() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.goto(URL);

  const description = await page.waitForSelector("#description");
  const titleEl = await page.waitForSelector("h4");
  const title = await titleEl?.evaluate((el) => el.textContent);
  const kyuEl = await page.waitForSelector(
    ".inner-small-hex.is-extra-wide span",
  );
  const kyu = await kyuEl?.evaluate((el) => el.textContent);
  const kyu_path = `./${kyu?.replace(" ", "_")}`;
  const clean_title = title
    ?.split(" ")
    .map((s) =>
      s
        .toLowerCase()
        .replace(/[^0-9\w]/g, "")
        .trim(),
    )
    .filter((s) => s)
    .join("_");
  FULL_PATH = kyu_path + `/${clean_title}`;
  if (!fs.existsSync(kyu_path)) {
    fs.mkdirSync(kyu_path);
  }
  if (fs.existsSync(FULL_PATH)) throw new Error("This path already exists.");
  fs.mkdirSync(FULL_PATH);
  fs.writeFileSync(FULL_PATH + `/${clean_title}.test.ts`, "");
  fs.writeFileSync(FULL_PATH + `/${clean_title}.ts`, "");
  fs.writeFileSync(FULL_PATH + `/README.md`, "");
  console.log(kyu?.replace(" ", "_") + "_" + clean_title);

  await description?.screenshot({ path: FULL_PATH + `/description.png` });

  await browser.close();

  return title;
}

function processImage() {
  Jimp.read(FULL_PATH + `/description.png`, (err, img) => {
    if (err) throw err;
    img.quality(30).write(FULL_PATH + `/description.jpg`);
  });
}

function deleteImage() {
  fs.unlink(FULL_PATH + `/description.png`, (err) =>
    err ? console.log(err) : null,
  );
}

function redactReadme(title: string) {
  const str = `### ${title}

${URL}

![description](./description.jpg "Description")
`;
  fs.writeFileSync(FULL_PATH + `/README.md`, str);
}

async function main() {
  const title = await getTitleAndScreenshot();
  processImage();
  deleteImage();
  redactReadme(title ? title : "");
}

main();
