import * as fs from "fs";

/**
 * Returns an array of file names in the root directory.
 * @param root A path to root directory.
 */
function getFolders(root: string): string[] {
  return fs.readdirSync(root);
}

/**
 * Returns a filtered array of folders by name.
 * @param folders A string of folder names.
 * @param name A substring to filter by.
 */
function filterFolders(folders: string[], name: string): string[] {
  return folders.filter((item) => item.includes(name));
}

interface FilesObject {
  [k: string]: number;
}

/**
 * Returns an object, where keys are folder names
 * and values are number of subfolders.
 * @param folders A string of folder names.
 */
function getFilesObj(folders: string[]): FilesObject {
  return folders.reduce((obj, path) => {
    const innerFolders = getFolders(path);
    obj[path] = innerFolders.length;
    return obj;
  }, {} as FilesObject);
}

/**
 * Returns a sum of all files in every folder.
 * and values are number of subfolders.
 * @param filesObj An object, where keys are subfolders
 */
function getTotalFiles(filesObj: FilesObject) {
  let total = 0;
  for (let key in filesObj) {
    total += filesObj[key];
  }
  return total;
}

/**
 * Reads and returns a string from a file.
 * @param file A path to file.
 */
function getFileString(filePath: string): string {
  return fs.readFileSync(filePath, { encoding: "utf8" });
}

/**
 * Returns a string with new amounts of kata solved
 * @param  str A string from readme.
 * @param filesObj An object, where keys are subfolders
 */
function refreshFilesCount(str: string, filesObj: FilesObject): string {
  const re = (value: string) => new RegExp(`(?<=${value}.+: )\\d+`, "g");

  for (let path in filesObj) {
    str = str.replace(re(path), () => filesObj[path].toString());
  }

  str = str.replace(re("Total"), () => getTotalFiles(filesObj).toString());

  return str;
}

/**
 * Writes new data to a file
 * @param filePath A path to file.
 * @param str New string to write.
 */
function writeFileString(filePath: string, str: string): void {
  fs.writeFileSync(filePath, str);
}

function main(): void {
  const folders = getFolders("./");
  const filteredFolders = filterFolders(folders, "kyu");
  const filesObj = getFilesObj(filteredFolders);
  const oldReadme = getFileString("./README.md");
  const newReadme = refreshFilesCount(oldReadme, filesObj);
  writeFileString("./README.md", newReadme);
}

main();
