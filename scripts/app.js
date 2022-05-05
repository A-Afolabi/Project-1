const timeRemaining = document.querySelector('#time-left')
const score = document.querySelector('#score')
// const lives = document.querySelector('#lives')
const start = document.querySelector('#start-button')

const grid = document.querySelectorAll('.grid div')

const heroesRight = document.querySelectorAll('.other-heroes-right')
const thorLeft = document.querySelectorAll('.thor-left')
const hawkeyeRight = document.querySelectorAll('.hawkeye-right')
const capShieldLeft = document.querySelectorAll('.capShield-left')
const blackWidowRight = document.querySelectorAll('.blackWidow-right')
const ironmanLeft = document.querySelectorAll('.ironman-left')
const hulkRight = document.querySelectorAll('.hulk-right')


//const thanosStartPosition = 115
let thanosCurrentPosition = 115
const width = 11
let timer
let currentTime = 20

function moveThanos(e) {
  //console.log(e)
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

function autoMove1() {
  currentTime--
  timeRemaining.textContent = currentTime
  ironmanLeft.forEach(ironmanLeft => moveIronmanLeft(ironmanLeft))
  heroesRight.forEach(heroesRight => moveHeroesRight(heroesRight))
  thorLeft.forEach(thorLeft => moveThorLeft(thorLeft))
  capShieldLeft.forEach(capShieldLeft => moveCapShieldLeft(capShieldLeft))
}

function moveIronmanLeft(ironmanLeft) {
  if (ironmanLeft.classList.contains('l1')) {
    ironmanLeft.classList.remove('l1')
    ironmanLeft.classList.add('l2')
  } else if (ironmanLeft.classList.contains('l2')) {
    ironmanLeft.classList.remove('l2')
    ironmanLeft.classList.add('l3')
  } else if (ironmanLeft.classList.contains('l3')) {
    ironmanLeft.classList.remove('l3')
    ironmanLeft.classList.add('l4')
  } else if (ironmanLeft.classList.contains('l4')) {
    ironmanLeft.classList.remove('l4')
    ironmanLeft.classList.add('l1')
  } else {
    console.log('NO IRONMAN MOVEMENT')
  }

  // Alternative to use, but I manageged to get the if statement working.

  // switch (true) {
  //   case ironmanLeft.classList.contains('l1'):
  //     ironmanLeft.classList.remove('l1')
  //     ironmanLeft.classList.add('l2')
  //     break
  //   case ironmanLeft.classList.contains('l2'):
  //     ironmanLeft.classList.remove('l2')
  //     ironmanLeft.classList.add('l3')
  //     break
  //   case ironmanLeft.classList.contains('l3'):
  //     ironmanLeft.classList.remove('l3')
  //     ironmanLeft.classList.add('l4')
  //     break
  //   case ironmanLeft.classList.contains('l4'):
  //     ironmanLeft.classList.remove('l4')
  //     ironmanLeft.classList.add('l1')
  //     break
  // }
}


function autoMove2() {
  hulkRight.forEach(hulkRight => moveHulkRight(hulkRight))
  blackWidowRight.forEach(blackWidowRight => moveBlackWidowRight(blackWidowRight))
}

function moveHulkRight(hulkRight) {
  if (hulkRight.classList.contains('hulk-r3')) {
    hulkRight.classList.remove('hulk-r3')
    hulkRight.classList.add('hulk-r2')
  } else if (hulkRight.classList.contains('hulk-r2')) {
    hulkRight.classList.remove('hulk-r2')
    hulkRight.classList.add('hulk-r1')
  } else if (hulkRight.classList.contains('hulk-r1')) {
    hulkRight.classList.remove('hulk-r1')
    hulkRight.classList.add('hulk-r3')
  } else {
    console.log('NO HULK MOVEMENT')
  }
}


function moveHeroesRight(heroesRight) {
  if (heroesRight.classList.contains('r6')) {
    heroesRight.classList.remove('r6')
    heroesRight.classList.add('r5')
  } else if (heroesRight.classList.contains('r5')) {
    heroesRight.classList.remove('r5')
    heroesRight.classList.add('r4')
  } else if (heroesRight.classList.contains('r4')) {
    heroesRight.classList.remove('r4')
    heroesRight.classList.add('r3')
  } else if (heroesRight.classList.contains('r3')) {
    heroesRight.classList.remove('r3')
    heroesRight.classList.add('r2')
  } else if (heroesRight.classList.contains('r2')) {
    heroesRight.classList.remove('r2')
    heroesRight.classList.add('r1')
  } else if (heroesRight.classList.contains('r1')) {
    heroesRight.classList.remove('r1')
    heroesRight.classList.add('r6')
  } else {
    console.log('NO HEROES MOVEMENT')
  }
}

function moveThorLeft(thorLeft) {
  if (thorLeft.classList.contains('thor-l1')) {
    thorLeft.classList.remove('thor-l1')
    thorLeft.classList.add('thor-l2')
  } else if (thorLeft.classList.contains('thor-l2')) {
    thorLeft.classList.remove('thor-l2')
    thorLeft.classList.add('thor-l3')
  } else if (thorLeft.classList.contains('thor-l3')) {
    thorLeft.classList.remove('thor-l3')
    thorLeft.classList.add('thor-l4')
  } else if (thorLeft.classList.contains('thor-l4')) {
    thorLeft.classList.remove('thor-l4')
    thorLeft.classList.add('thor-l5')
  } else if (thorLeft.classList.contains('thor-l5')) {
    thorLeft.classList.remove('thor-l5')
    thorLeft.classList.add('thor-l1')
  } else {
    console.log('NO THOR MOVEMENT')
  }
}

function autoMove3() {
  hawkeyeRight.forEach(hawkeyeRight => moveHawkeyeRight(hawkeyeRight))
}

function moveHawkeyeRight(hawkeyeRight) {
  if (hawkeyeRight.classList.contains('hawk-r4')) {
    hawkeyeRight.classList.remove('hawk-r4')
    hawkeyeRight.classList.add('hawk-r3')
  } else if (hawkeyeRight.classList.contains('hawk-r3')) {
    hawkeyeRight.classList.remove('hawk-r3')
    hawkeyeRight.classList.add('hawk-r2')
  } else if (hawkeyeRight.classList.contains('hawk-r2')) {
    hawkeyeRight.classList.remove('hawk-r2')
    hawkeyeRight.classList.add('hawk-r1')
  } else if (hawkeyeRight.classList.contains('hawk-r1')) {
    hawkeyeRight.classList.remove('hawk-r1')
    hawkeyeRight.classList.add('hawk-r4')
  } else {
    console.log('NO HAWKEYE MOVEMENT')
  }
}


function moveCapShieldLeft(capShieldLeft) {
  if (capShieldLeft.classList.contains('cap-l1')) {
    capShieldLeft.classList.remove('cap-l1')
    capShieldLeft.classList.add('cap-l2')
  } else if (capShieldLeft.classList.contains('cap-l2')) {
    capShieldLeft.classList.remove('cap-l2')
    capShieldLeft.classList.add('cap-l3')
  } else if (capShieldLeft.classList.contains('cap-l3')) {
    capShieldLeft.classList.remove('cap-l3')
    capShieldLeft.classList.add('cap-l1')
  } else {
    console.log('NO SHIELD MOVEMENT')
  }
}

function moveBlackWidowRight(blackWidowRight) {
  if (blackWidowRight.classList.contains('widow-r5')) {
    blackWidowRight.classList.remove('widow-r5')
    blackWidowRight.classList.add('widow-r4')
  } else if (blackWidowRight.classList.contains('widow-r4')) {
    blackWidowRight.classList.remove('widow-r4')
    blackWidowRight.classList.add('widow-r3')
  } else if (blackWidowRight.classList.contains('widow-r3')) {
    blackWidowRight.classList.remove('widow-r3')
    blackWidowRight.classList.add('widow-r2')
  } else if (blackWidowRight.classList.contains('widow-r2')) {
    blackWidowRight.classList.remove('widow-r2')
    blackWidowRight.classList.add('widow-r1')
  } else if (blackWidowRight.classList.contains('widow-r1')) {
    blackWidowRight.classList.remove('widow-r1')
    blackWidowRight.classList.add('widow-r5')
  } else {
    console.log('NO BLACK-WIDOW MOVEMENT')
  }
}

function aliveChecker() {
  dies()
  stoneReached()
}

setInterval(aliveChecker)

function dies() {
  if (grid[thanosCurrentPosition].classList.contains('l1') ||
    grid[thanosCurrentPosition].classList.contains('l2') ||
    grid[thanosCurrentPosition].classList.contains('hulk-r1') ||
    grid[thanosCurrentPosition].classList.contains('r1') ||
    grid[thanosCurrentPosition].classList.contains('r2') ||
    grid[thanosCurrentPosition].classList.contains('r3') ||
    grid[thanosCurrentPosition].classList.contains('r4') ||
    grid[thanosCurrentPosition].classList.contains('thor-l1') ||
    grid[thanosCurrentPosition].classList.contains('thor-l2') ||
    grid[thanosCurrentPosition].classList.contains('thor-l3') ||
    grid[thanosCurrentPosition].classList.contains('hawk-r1') ||
    grid[thanosCurrentPosition].classList.contains('cap-l1') ||
    grid[thanosCurrentPosition].classList.contains('cap-l2') ||
    grid[thanosCurrentPosition].classList.contains('widow-r1') ||
    currentTime <= 0) {
    score.textContent = 'I Know What It Is Like To Lose, To Feel So Desperately That You Are Right But To Fail Nonetheless'
    clearInterval(timer)
    grid[thanosCurrentPosition].classList.remove('thanos')
    document.removeEventListener('keydown', moveThanos)
  }
}

function stoneReached() {
  if (grid[thanosCurrentPosition].classList.contains('power-stone') ||
    grid[thanosCurrentPosition].classList.contains('space-stone') ||
    grid[thanosCurrentPosition].classList.contains('reality-stone') ||
    grid[thanosCurrentPosition].classList.contains('soul-stone') ||
    grid[thanosCurrentPosition].classList.contains('time-stone') ||
    grid[thanosCurrentPosition].classList.contains('mind-stone')) {
    score.textContent = 'I AM INEVITABLE!!!'
    clearInterval(timer)
    grid[thanosCurrentPosition].classList.remove('thanos')
    grid[thanosCurrentPosition].classList.add('infinityGauntletSnap')
    document.removeEventListener('keydown', moveThanos)
  }
}

start.addEventListener('click', () => {
  if (timer) {
    clearInterval(timer)
    timer = null
    document.removeEventListener('keydown', moveThanos)
  } else {
    timer = setInterval(autoMove1, 1000)
    setInterval(autoMove2, 750)
    setInterval(autoMove3, 1250)
    document.addEventListener('keydown', moveThanos)
  }
})


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