const { mkdirSync, existsSync } = require('fs');

const {
  outerPath: {
    srcPath, //src
    jsPath, //src/js
    cssPath, //src/css
    htmlPath, //src/html
    mdPath //workspace
  }
} = require('../config');


function initFolders () {
  //相应的文件不存在的情况下创建
  if (!existsSync(mdPath)) {
    createFolders(srcPath);
  }

  if (!existsSync(mdPath)) {
    createFolders(jsPath);
  }

  if (!existsSync(mdPath)) {
    createFolders(cssPath);
  }

  if (!existsSync(mdPath)) {
    createFolders(htmlPath);
  }

  if (!existsSync(mdPath)) {
    createFolders(mdPath);
  }
}

function createFolders (path) {
  //mkdirSync 同步创建文件夹
  /**
   * param path 文件夹路径
   * param callback 创建失败，错误信息抛出
   */
  mkdirSync (path, function (err) {
    if (err) {
      throw new Error('Folder is failed to create.', err);
    }
  })
}

module.exports = initFolders;