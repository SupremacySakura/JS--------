class MyPromise {
  #state = 'pending'
  #result = null
  constructor(executor) {
    this.resolve = (value) => {
      this.changeState('fulfilled', value)
    }
    this.reject = (error) => {
      this.changeState('rejected', error)
    }
    try{
      executor(this.resolve, this.reject)
    } catch (error) {
      this.reject(error)
    }
  }
  /**
   * 改变 Promise 的状态和结果
   * @param {'pending'|'fulfilled'|'rejected'} state - 新的 Promise 状态
   * @param {*} value - Promise 的结果值或错误原因
   * @returns {void}
   * @description
   * 1. 检查当前状态是否为 pending，如果不是则直接返回（Promise 状态只能改变一次）
   * 2. 更新 Promise 的状态和结果值
   * 3. 打印当前状态和结果（用于调试）
   */
  changeState(state, value) {
      if (this.#state !== 'pending') {
        return
      }
      this.#state = state
      this.#result = value
      console.log(this.#state, this.#result)
  }
}
const p = new MyPromise((resolve, reject) => {
  // resolve(1)
  // reject(2)
  throw new Error('错误')
})

const cp = new Promise((resolve, reject) => {
  // resolve(1)
  // reject(2)
  // throw new Error('错误')
})