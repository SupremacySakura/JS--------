/**
 * 模拟数组的 map 方法，对数组中的每个元素执行回调函数，并返回新数组
 * @param {Function} callback 回调函数，接收三个参数：
 *   @param {*} currentValue - 当前正在处理的元素
 *   @param {number} index - 当前元素的索引
 * @returns {Array} 返回一个新数组，每个元素都是回调函数的返回值
 */
Array.prototype.myMap = function myMap(callback) {
  let res = []
  for (let i = 0; i < this.length; i++) {
    let item = callback(this[i], i)
    res.push(item)
  }
  return res
}
/**
 * 模拟数组的 forEach 方法，对数组中的每个元素执行回调函数
 * @param {Function} callback 回调函数，接收三个参数：
 *   @param {*} currentValue - 当前正在处理的元素
 *   @param {number} index - 当前元素的索引
 * @returns {void}
 */
Array.prototype.myForEach = function myForEach(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i)
  }
}
let arr = [1, 2, 3, 4]
let res = arr.myMap((item, index) => {
  return item * 2
})
console.log(res)
// arr.map((item,index)=>{
//   console.log(item,index)
// })