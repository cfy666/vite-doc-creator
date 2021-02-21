const {
  readdirSync,
  copyFileSync,
  writeFileSync
} = require('fs');

const {
  readFile,
  createMenuItem,
  replaceHtml,
  createIframe
} = require('../libs/utils');

const {
  title,
  outerPath: {
    htmlPath,
    rootPath
  },
  innerDir: {
    htmlDir
  },
  regexp: {
    reg_ulContent,
    reg_titleContent,
    reg_headerTitleContent,
    reg_iframeContent
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

  //读取模板index.html内的html字符串
  const _indexHtmlStr = readFile(htmlDir + '/index.html');

  let menulist = '';
  let newHtml = '';
  
  //遍历外层html文件夹下所有的文件，并组合成menulist
  _htmlFiles.map(function (filename, index) {
    menulist += createMenuItem(filename, options.domain, options.port, index);
  })

  //替换ul中的内容
  newHtml = replaceHtml(reg_ulContent, _indexHtmlStr, menulist);
  //替换title中的内容
  newHtml = replaceHtml(reg_titleContent, newHtml, options.title || title);
  //替换header-title中的内容
  newHtml = replaceHtml(reg_headerTitleContent, newHtml, options.title || title);
  //替换iframe-title中的内容
  newHtml = replaceHtml(reg_iframeContent, newHtml, createIframe(_htmlFiles[0], options.domain, options.port));


  /**
   * path: 创建一个文件的路径即文件名
   * content: 在这个文件中写入什么内容
   */
  writeFileSync(rootPath + '/index.html', newHtml, function(err) {
    if (err) {
      throw new Error('File is failed to write.', err);
    }
  })
}

module.exports = {
  createIndexHtml
}