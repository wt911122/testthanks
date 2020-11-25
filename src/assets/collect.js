const { promisify } = require('util');
const { resolve, relative } = require('path');
const fs = require('fs');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

async function getFiles(dir) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(subdirs.map(async (subdir) => {
    const res = resolve(dir, subdir);
    const path = relative(__dirname, res)
    return (await stat(res)).isDirectory() ? getFiles(res) : path;
  }));
  return files.reduce((a, f) => a.concat(f), []);
}

getFiles(__dirname)
  .then(files => {
      files.forEach(f => {
            console.log(`require('${f}'),`)
      });
      
  })
  .catch(e => console.error(e));