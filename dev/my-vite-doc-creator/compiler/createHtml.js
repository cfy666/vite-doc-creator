const {
  readdirSync,
  copyFileSync,
  writeFileSync
} = require('fs');

const {
  readFile
} = require('../libs/utils');

const {
  outerPath: {
    htmlPath,
    rootPath
  },
  innerDir: {
    htmlDir
  }
} = require('../config');

//创建index.html
function createIndexHtml (options, outerFilename) {
  const _htmlFiles = readdirSync(htmlPath);

  //如果外层html文件夹为空，讲模板index.html直接复制到外层根目录下
  if (!_htmlFiles.length) {
    copyFileSync(htmlDir + '/index.html', rootPath + '/index.html', 0, function (err) {
      if (err) {
        throw new Error('File is failed to copy.' + err);
      }
    })
    return;
  }

  console.log(readFile(htmlDir + '/index.html'));
}

module.exports = {
  createIndexHtml
}