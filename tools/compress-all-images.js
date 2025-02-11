import getFiles from "./get-files.js";

const allImagePaths = getFiles('./src/img');

allImagePaths.map((path) => {
  console.log(path);
});
