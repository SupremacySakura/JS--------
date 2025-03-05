class Vue {
  constructor() {

  }
  /**
   * 将一个对象转换为响应式对象
   * @param {Object|Array} obj - 要转换的目标对象或数组
   * @returns {void}
   * @description
   * 1. 如果传入的不是对象类型，直接返回
   * 2. 如果是数组，遍历数组元素并递归处理
   * 3. 如果是对象，遍历对象的每个属性：
   *    - 为每个属性创建一个闭包作用域的订阅者列表
   *    - 如果属性值是对象，递归处理
   *    - 使用 Object.defineProperty 设置 getter/setter
   *    - getter 收集依赖（订阅者）
   *    - setter 触发更新（通知订阅者）
   */
  observe(obj) {
    if (typeof obj !== 'object') {
      return
    }
    if (Array.isArray(obj)) {
      obj.forEach(item => this.observe(item))
      return
    }
    for (let key in obj) {
      let temp = obj[key]
      let __fnList__ = []
      if (typeof temp === 'object') {
        this.observe(temp)
      }
      Object.defineProperty(obj, key, {
        get() {
          if (__fnList__.includes(window.fn)) {
            return
          } else {
            __fnList__.push(window.fn)
          }
          return temp
        },
        set(val) {
          temp = val
          __fnList__.forEach(fn => fn())
        }
      })
    }
  }
  /**
  * 自动收集依赖并执行回调函数
  * @param {Function} fn - 需要执行的回调函数，在执行过程中会自动收集其依赖的响应式属性
  * @returns {void}
  * @description
  * 1. 将回调函数临时存储在全局变量 window.fn 中
  * 2. 执行回调函数，在执行过程中会触发响应式属性的 getter，从而收集依赖
  * 3. 执行完成后清空全局变量
  */
  autoRun(fn) {
    window.fn = fn
    fn()
    window.fn = null
  }
}
const vue = new Vue()
const state = {
  name: '小明',
  age: 18,
  list: [
    { id: 1, text: '测试1' },
    { id: 2, text: '测试2' },
    { id: 3, text: '测试3' },
  ],
  numberList: [1, 2, 3, 4, 5]
}
const dom = {
  name: document.getElementById('name'),
  age: document.getElementById('age'),
  listContainer: document.getElementById('list-container'),
}
const render = () => {
  dom.name.innerHTML = state.name
  dom.age.innerHTML = state.age
  dom.listContainer.innerHTML = state.list.map(item => `<li>${item.text}</li>`).join('')
}
vue.observe(state)
vue.autoRun(render)