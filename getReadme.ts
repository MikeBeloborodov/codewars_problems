import puppeteer from "puppeteer";
import Jimp from "jimp";
import * as fs from "fs";

const URL = process.argv[2];
const PATH = process.argv[3];

async function getTitleAndScreenshot() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.goto(URL);

  const description = await page.waitForSelector("#description");
  const titleEl = await page.waitForSelector("h4");
  const title = await titleEl?.evaluate((el) => el.textContent);
  await description?.screenshot({ path: `./${PATH}/description.png` });

  await browser.close();

  return title;
}

function processImage() {
  Jimp.read(`./${PATH}/description.png`, (err, img) => {
    if (err) throw err;
    img.quality(30).write(`./${PATH}/description.jpg`);
  });
}

function deleteImage() {
  fs.unlink(`./${PATH}/description.png`, (err) =>
    err ? console.log(err) : null,
  );
}

function redactReadme(title: string) {
  const str = `### ${title}

${URL}

![description](./description.jpg "Description")
`;
  fs.writeFileSync(`${PATH}/README.md`, str);
}

async function main() {
  const title = await getTitleAndScreenshot();
  processImage();
  deleteImage();
  redactReadme(title ? title : "");
}

main();
