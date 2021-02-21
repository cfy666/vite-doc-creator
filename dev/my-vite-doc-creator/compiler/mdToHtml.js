const {
  writeFileSync
} = require('fs');

const markdown = require('marked');
const hightlight = require('highlight.js');

const {
  readFile
} = require('../libs/utils');

const {
  outerPath: {
    mdPath,
    htmlPath
  },
  innerDir: {
    htmlDir
  }
} = require('../config');

//markdown插件配置
markdown.setOptions({
  //配置hilight插件
  highlight: function (code) {
    return hightlight.highlightAuto(code).value;
  }
})

//html = markdown(_mdStr);
//markdown转html的方法
function mdToHtml (filename) {
  //读取markdown文件
  const _mdStr = readFile(mdPath + '/' + filename);
  //读取markdown的模板html文件 -md.html
  let _htmlStr = readFile(htmlDir + '/md.html');
  //将markdown文件的内容通过markdown插件转换成html字符串
  const newStr = markdown(_mdStr)
  console.log(newStr);
}

module.exports = mdToHtml;