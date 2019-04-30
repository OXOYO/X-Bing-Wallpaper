'use strict';

/**
 * Created by yangfan9244 on 2019/4/30.
 *
 * config
 */

exports = module.exports = {
  name: 'XBW',
  version: 'v1.0.0',
  options: {
    host: 'http://cn.bing.com',
    api: 'HPImageArchive.aspx'
  },
  params: {
    week: {
      // 数据格式 js: JSON  xml: xml
      format: 'js',
      // 图片截止天数
      idx: 0,
      n: 7
    },
    today: {
      format: 'js',
      idx: 0,
      n: 1
    },
    tomorrow: {
      format: 'js',
      idx: -1,
      n: 1
    }
  }
};