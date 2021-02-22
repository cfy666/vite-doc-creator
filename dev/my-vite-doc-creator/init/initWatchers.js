const { watch } = require('fs');

const {
  outerPath: {
    htmlPath,
    mdPath
  }
} = require('../config');

const {
  createIndexHtml,
  mdToHtml
} = require('../compiler');

//watch监听文件或者或者文件夹的变化 -> watch的回调函数
//watch
/**
 * param path 需要监听的文件夹或者文件路径
 * param callback 当文件或文件夹变化的时候执行的回调函数
 */
// callback
/**
 *  param event 变化的时候告诉你是什么变化 change
 * param filename 变化的问价是什么
 */

//watchers初始化函数
function initWatchers (options) {
  watchHtml(options);
  watchMarkdown();
}

//监听html文件夹以及文件变化
function watchHtml (options) {
  watch(htmlPath, (event, filename) => {
    //如果文件变化
    if (filename) {
      //event === change文件更改
      //重新生成index.html文件
      //如果说event === change传入filename
      //see createHtml.js -> createIndexHtml
      createIndexHtml(options, event === 'change' && filename);
    }
  })
}

//监听workspace文件夹及文件的变化
function watchMarkdown () {
  
};

module.exports = initWatchers;