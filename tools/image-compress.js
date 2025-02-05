import { argv } from "node:process";
import path from "node:path";
import sharp from "sharp";

// Destructuring the Array from Node which includes data we need
const [node, thisFile, filePath, fileEvent] = argv;
// White-list of events which should cause Sharp to generate images
const triggerEvents = ['add', 'change'];

// If the wrong kind of event triggers this script, do nothing
if (triggerEvents.includes(fileEvent)) {

  const trimPath = thisPath => thisPath.replace('src', '');

  // The path from the root of the Node application to the filename of the image
  const dirName = path.dirname(filePath).replaceAll('\\', '/');
  // The image name, plus file extension
  const baseName = path.basename(filePath);
  // The image file extension
  const extName = path.extname(filePath);
  // The path to the source image, minus the `src` bit
  const subPath = trimPath(dirName);
  // The name of the image, without the file extension
  const fileName = baseName.replace(extName, '');
  const distPath = `./dist${subPath}`;

  sharp(filePath)
    .webp()
    .toFile(`${distPath}/${fileName}.webp`);

}
