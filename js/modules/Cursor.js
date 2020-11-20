export default class Cursor {
  constructor(cursor, follower, delay = 300) {
    this.cursor = document.querySelector(cursor)
    this.follower = document.querySelector(follower)
    this.delay = delay
    // this.init()
  }

  setActions() {
    this.links = document.querySelectorAll('a')
    this.buttons = document.querySelectorAll('button')
    this.hovers = document.querySelectorAll('[data-action="hover"]')
    this.actions = [...this.links, ...this.buttons, ...this.hovers]

    this.actions.forEach(action => {
      action.addEventListener('mouseenter', () => {
        this.addActionClass()
      })
      action.addEventListener('mouseleave', () => {
        this.removeActionClass()
      })
    })
  }

  addListeners() {
    window.addEventListener('mousemove', (event) => {
      // this.addHoverAction(event)
      this.setElemsPosition(event)
    })
    document.addEventListener('mousedown', () => {
      this.addClickClass()
    })
    document.addEventListener('mouseup', () => {
      this.removeClickClass()
    })
  }

  addHoverAction({target}) {
    const tagName = target.tagName.toLowerCase()
    const dataType = target.dataset.action // <li data-action="hover"></li>
    const ACTIONS = ['a', 'button', 'hover']

    if(ACTIONS.includes(tagName) || ACTIONS.includes(dataType)) {
      this.addActionClass()
    } else {
      this.removeActionClass()
    }
  }

  addActionClass() {
    this.follower.classList.add('action')
  }
  removeActionClass() {
    this.follower.classList.remove('action')
  }

  addClickClass() {
    this.follower.classList.add('click')
  }
  removeClickClass() {
    this.follower.classList.remove('click')
  }

  async setElemsPosition({x, y}) {
    // if the cursor needs a delay too
    // or faster delet => this.delay / 2
    // await this.sleep(this.delay)
    this.setCoodrs(this.cursor, x, y)

    await this.sleep(this.delay)
    this.setCoodrs(this.follower, x, y)
  }

  setCoodrs(elem, x, y) {
    elem.style.cssText = `
      left: ${x}px;
      top: ${y}px;
    `
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  init() {
    this.setActions() // more optimized than method addHoverAction({target})
    this.addListeners()
  }
}
