const {
  copyFileSync,
  readdirSync,
} = require('fs');

const {
  outerPath: {
    cssPath,
    jsPath,
    htmlPath
  },
  innerDir: {
    cssDir,
    jsDir,
    htmlDir
  }
} = require('../config');

function initFiles () {
  copyFiles('css');
  copyFiles('js');
}

function copyFiles (field) {
  let _innerFiles = [];
  let _outerFiles = [];
  let _dir = '';
  let _path = '';

  switch (field) {
    case 'css':
      _dir = cssDir;
      _path = cssPath;
      _innerFiles = readdirSync(cssDir);
      _outerFiles = readdirSync(cssPath);
      break;
    case 'js':
      _dir = jsDir;
      _path = jsPath;
      _innerFiles = readdirSync(jsDir);
      _outerFiles = readdirSync(jsPath);
      break
    default:
      break
  }

  //copyFileSync 拷贝文件
  /**
   * param origin file 源文件路径
   * param targer file 需创建的目标文件路径及名称
   */
  _innerFiles.map(function (innerFile) {
    if (_outerFiles.indexOf(innerFile) === -1) {
      copyFileSync(_dir + '/' + innerFile, _path + '/' + innerFile,
      0, function (err) {
        if (err) {
          throw new Error('File is failed to copy.', err);
        }
      });
    }
  })
}

module.exports = initFiles;