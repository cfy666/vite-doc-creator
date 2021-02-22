//导入三个初始化程序
const {
  initFiles,
  initFolders,
  initWatchers
} = require('./init');

class ViteDocCreator {
  constructor (options) {
    this.options = {
      //页面标题
      title: undefined,
      //程序端口号
      port: 0,
      //域名配置
      domain: undefined
    }


    if (options) {
      Object.assign(this.options, options);
    }

    //执行工具初始化函数
    this.initialize();
  }

  initialize () {
    initFolders(this.options);
    initFiles(this.options);
    initWatchers(this.options);
  }
}

module.exports = ViteDocCreator;