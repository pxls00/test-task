import getFormatedTime from '@/helpers/getFormatedTime'

class GenerateWatchTime {
  #_time
  #_id
  #_isStoped

  constructor () {
    this.#_time = 0
    this.#_id = new Date().getTime().toString()
    this.#_isStoped = false
  }

  get time () {
    return this.#_time
  }

  set time (newValue) {
    this.#_time = newValue
  }

  get id () {
    return this.#_id
  }

  get isStoped () {
    return this.#_isStoped
  }

  set isStoped (newValue) {
    this.#_isStoped = newValue
  }

  get formatedTime () {
    return getFormatedTime(this.#_time)
  }
}

export default GenerateWatchTime
