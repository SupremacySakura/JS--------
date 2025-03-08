/**
 * 模拟数组的 map 方法，对数组中的每个元素执行回调函数，并返回新数组
 * @param {Function} callback 回调函数，接收三个参数：
 *   @param {*} currentValue - 当前正在处理的元素
 *   @param {number} index - 当前元素的索引
 *   @param {Array} array - 原始数组
 * @returns {Array} 返回一个新数组，每个元素都是回调函数的返回值
 */
Array.prototype.myMap = function myMap(callback) {
  let res = []
  for (let i = 0; i < this.length; i++) {
    let item = callback(this[i], i, this)
    res.push(item)
  }
  return res
}
/**
 * 模拟数组的 forEach 方法，对数组中的每个元素执行回调函数
 * @param {Function} callback 回调函数，接收三个参数：
 *   @param {*} currentValue - 当前正在处理的元素
 *   @param {number} index - 当前元素的索引
 *   @param {Array} array - 原始数组
 * @returns {void}
 */
Array.prototype.myForEach = function myForEach(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}
/**
 * 模拟数组的 findIndex 方法，返回数组中满足测试函数的第一个元素的索引
 * @param {Function} callback 回调函数，接收三个参数：
 *   @param {*} currentValue - 当前正在处理的元素
 *   @param {number} index - 当前元素的索引
 *   @param {Array} array - 原始数组
 * @returns {number} 返回第一个满足测试函数的元素的索引，如果没有找到则返回 -1
 */
Array.prototype.myFindIndex = function myFindIndex(callback) {
  for (let i = 0; i < this.length; i++) {
    const res = callback(this[i], i, this)
    if (res) {
      return i
    }
  }
  return -1
}
/**
 * 模拟数组的 find 方法，返回数组中满足测试函数的第一个元素
 * @param {Function} callback 回调函数，接收三个参数：
 *   @param {*} currentValue - 当前正在处理的元素
 *   @param {number} index - 当前元素的索引
 *   @param {Array} array - 原始数组
 * @returns {*} 返回第一个满足测试函数的元素，如果没有找到则返回 undefined
 */
Array.prototype.myFind = function myFind(callback) {
  for (let i = 0; i < this.length; i++) {
    const res = callback(this[i], i, this)
    if (res) {
      return this[i]
    }
  }
  return undefined
}
/**
 * 模拟数组的 filter 方法，创建一个新数组，包含所有通过测试函数的元素
 * @param {Function} callback 回调函数，接收三个参数：
 *   @param {*} currentValue - 当前正在处理的元素
 *   @param {number} index - 当前元素的索引
 *   @param {Array} array - 原始数组
 * @returns {Array} 返回一个新数组，包含所有通过测试函数的元素
 */
Array.prototype.myFilter = function myFilter(callback) {
  let result = []
  for (let i = 0; i < this.length; i++) {
    const res = callback(this[i], i, this)
    if (res) {
      result.push(this[i])
    }
  }
  return result
}
/**
 * 模拟数组的 includes 方法，判断数组是否包含指定的元素
 * @param {*} searchElement 要查找的元素
 * @param {number} [fromIndex=0] 开始查找的位置。默认为0
 * @returns {boolean} 如果找到指定元素则返回 true，否则返回 false
 */
Array.prototype.myIncludes = function myIncludes(searchElement, fromIndex){
  for(let i = fromIndex || 0;i<this.length;i++){
    if(this[i] === searchElement){
      return true
    }
  }
  return false
}
let arr = [1, 2, 3, 4]
// console.log(arr.findIndex())
console.log(arr.myIncludes(10))
// console.log(arr.map())