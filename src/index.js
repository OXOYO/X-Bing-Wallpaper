/**
 * Created by OXOYO on 2019/4/30.
 *
 * XBW
 */

const axios = require('axios')
const config = require('./config')

exports = module.exports = function (options) {
  let _t = this
  
  _t.name = config.name
  _t.version = config.version
  _t.options = {
    ...config.options,
    options
  }
  _t.params = config.params
  _t.api = _t.options.host + '/' + _t.options.api
  const handleResult = function (list) {
    let arr = []
    for (let i = 0, len = list.length; i < len; i++) {
      let item = list[i]
      arr[i] = {
        ...item,
        url: _t.options.host + item.url
      }
    }
    return arr
  }
  _t.getToday = async function (params) {
    let res = await axios.get(_t.api, {
      params: {
        ..._t.params.today
      }
    })
    if (res.status === 200 && res.data) {
      return handleResult(res.data.images || [])
    }
    return null
  }
  _t.getTomorrow = async function (params) {
    let res = await axios.get(_t.api, {
      params: {
        ..._t.params.tomorrow
      }
    })
    if (res.status === 200 && res.data) {
      return handleResult(res.data.images || [])
    }
    return null
  }
  _t.getWeek = async function (params) {
    let res = await axios.get(_t.api, {
      params: {
        ..._t.params.week,
        ...params
      }
    })
    if (res.status === 200 && res.data) {
      return handleResult(res.data.images || [])
    }
    return null
  }
}
