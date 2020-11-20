import Cursor from './modules/Cursor.js'

document.addEventListener('DOMContentLoaded', () => {
  const cursor = new Cursor('#cursor', '#folower', 100)
  cursor.init()
})
