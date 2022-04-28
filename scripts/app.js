const timeRemaining = document.querySelector('#time-left')
const score = document.querySelector('#score')
const start = document.querySelector('#start-button')

const grid = document.querySelectorAll('.grid div')

const ironmanLeft = document.querySelectorAll('.ironman-left')
const thanosStartPosition = 115
let thanosCurrentPosition = 115
const width = 11
function moveThanos(e) {
  console.log(e)
  grid[thanosCurrentPosition].classList.remove('thanos')

  const right = 39
  const left = 37
  const up = 38
  const down = 40
  console.log('Previous Position', thanosCurrentPosition)

  if (e.keyCode === right && thanosCurrentPosition % width !== width - 1) {
    // if the right arrow is pressed and the thanos is not on the right edge
    console.log('Right')
    thanosCurrentPosition++ // redefine thanos position index to be previous position plus 1
    console.log('New Postion', thanosCurrentPosition)
  } else if (e.keyCode === left && thanosCurrentPosition % width !== 0) {
    // if the left arrow is pressed and the thanos is not on the left edge
    console.log('Left')
    thanosCurrentPosition-- // redefine thanos position index to be previous position minus 1
    console.log('New Postion', thanosCurrentPosition)
  } else if (e.keyCode === up && thanosCurrentPosition - width >= 0) {
    console.log('Up')
    thanosCurrentPosition -= width
    console.log('New Postion', thanosCurrentPosition)
  } else if (e.keyCode === down && thanosCurrentPosition + width < width * width) {
    console.log('Down')
    thanosCurrentPosition += width
    console.log('New Postion', thanosCurrentPosition)
  } else {
    console.log('INVALID KEY')
  }

  grid[thanosCurrentPosition].classList.add('thanos')
}
document.addEventListener('keydown', moveThanos)

function autoIronman() {
  ironmanLeft.forEach(ironmanLeft => moveIronmanLeft(ironmanLeft))
}

function moveIronmanLeft(ironmanLeft) {
  if (ironmanLeft === 'iron-l1') {
    ironmanLeft.remove('iron-l1')
    ironmanLeft.add('iron-l2')
  } else if (ironmanLeft === 'iron-l2') {
    ironmanLeft.remove('iron-l2')
    ironmanLeft.add('iron-l3')
  } else if (ironmanLeft === 'iron-l3') {
    ironmanLeft.remove('iron-l3')
    ironmanLeft.add('iron-l4')
  } else if (ironmanLeft === 'iron-l4') {
    ironmanLeft.remove('iron-l4')
    ironmanLeft.add('iron-l1')
  } else {
    console.log('NO MOVEMENT')
  }
}
//setInterval(autoIronman, 1000)


// function init() {

//   const grid = document.querySelector('.grid')

//   const width = 10
//   const cellCount = width * width
//   const cells = []

//   const thanosClass = 'thanos'
//   const thanosStartPosition = 5
//   let thanosCurrentPosition = 5

//   function createGrid() {
//     for (let i = 0; i < cellCount; i++) {
//       const cell = document.createElement('div')
//       cell.innerText = i
//       grid.appendChild(cell)
//       cells.push(cell)
//     }
//     addThanos(thanosStartPosition)
//   }

//   function addThanos(position) {
//     console.log('Position being passed in', position)
//     console.log('cell picked based on the position index being passed in', cells[position])
//     cells[position].classList.add(thanosClass)
//   }
//   function removeThanos(position) {
//     cells[position].classList.remove(thanosClass)
//   }

//   function handleKeyDown(event) {
//     const key = event.keyCode
//     const left = 37
//     const right = 39
//     const up = 38
//     const down = 40
//     console.log('position before redefining', thanosCurrentPosition)
//     removeThanos(thanosCurrentPosition)

//     if (key === right && thanosCurrentPosition % width !== width - 1) {
//       thanosCurrentPosition++
//     } else if (key === left && thanosCurrentPosition % width !== 0) {
//       thanosCurrentPosition--
//     } else if (key === up && thanosCurrentPosition >= width) {
//       thanosCurrentPosition -= width
//     } else if (key === down && thanosCurrentPosition + width <= cellCount - 1) {
//       thanosCurrentPosition += width
//     } else {
//       console.log('INVALID KEY')
//     }
//     console.log('position after redefining', thanosCurrentPosition)
//     addThanos(thanosCurrentPosition)
//   }
//   document.addEventListener('keydown', handleKeyDown)

//   createGrid(thanosStartPosition)
// }
// window.addEventListener('DOMContentLoaded', init)