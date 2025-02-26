import { argv } from "node:process";
import getDistPath from "./get-dist-path.js";
import callPostHTML from "./call-posthtml.js";

// Destructuring the Array from Node which includes data we need
const [node, thisFile, srcPath, fileEvent] = argv;

// White-list of events which should cause PostHTML to rebuild pages
const triggerEvents = ['add', 'change'];

// If the wrong kind of event triggers this script, do nothing
if (triggerEvents.includes(fileEvent)) {

  const { distPath, fileName, extName } = getDistPath(srcPath);
  const editedSrcPath = srcPath.replaceAll('\\', '/');
  const editedDistPath = distPath.replace('/views', '');

  // Pass `callPostHTML()` all our paths
  callPostHTML(editedSrcPath, `${editedDistPath}/${fileName}${extName}`);
}
