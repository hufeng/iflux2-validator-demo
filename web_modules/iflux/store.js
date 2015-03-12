var Immutable = require('immutable');
var Cursor = require('immutable/contrib/cursor');
var _ = require('./_util');


/**
 * 封装应用的核心Store，使用Immutable来trace change
 *
 */
module.exports = function Store(/*Immutable.Map*/arg) {
  /**
   * 当前应用的数据
   */
  var state = Immutable.fromJS(arg || {});

  /**
   * 注册store change的callback
   */
  var callbacks = [];


  /**
   * 应用的数据
   */
  var data = () => {
    return state;
  };


  /**
   * 注册监听
   */
  var onStoreChange = (callback) => {
    callbacks.push(callback);
  };


  /**
   * 获取应用的cursor
   */
  var cursor = () => {
    var change = function (nextState, preState, path) {
      var nextData = nextState[_.isArray(path) ? 'getIn' : 'get'](path);
      _.log('cursor path: [', path.join(), '] store: ',
        (typeof(nextData) !== 'undefined') ? nextData.toString() : 'was deleted.');

      if (preState != state) {
        throw new Error('attempted to altere expired data.');
      }

      state = nextState;

      callbacks.forEach(function (callback) {
        callback(nextState, path);
      });
    };

    return Cursor.from(state, change);
  };

  /**
   * 暴露给外面的方法
   */
  return {
    data: data,
    onStoreChange: onStoreChange,
    cursor: cursor
  };
};
