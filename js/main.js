import Cursor from './modules/Cursor.js'

document.addEventListener('DOMContentLoaded', () => {
  const cursor = new Cursor('#cursor', '#follower', 100)
  cursor.init()
})
