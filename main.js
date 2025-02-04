const button = document.querySelector('.dropdown-btn')
const innerElement1 = document.querySelector('.line1')
const innerElement2 = document.querySelector('.line2')
const innerElement3 = document.querySelector('.line3')

button.addEventListener('mouseover', function () {
  innerElement1.style.backgroundColor = 'rgba(0, 0, 0, 0.5)' // grey
  innerElement2.style.backgroundColor = 'rgba(0, 0, 0, 0.5)' // grey
  innerElement3.style.backgroundColor = 'rgba(0, 0, 0, 0.5)' // grey
})

button.addEventListener('mouseout', function () {
  innerElement1.style.backgroundColor = 'rgba(0, 0, 0, 1)' // black
  innerElement2.style.backgroundColor = 'rgba(0, 0, 0, 1)' // black
  innerElement3.style.backgroundColor = 'rgba(0, 0, 0, 1)' // black
})

// eslint-disable-next-line no-unused-vars
function toggle () {
  const line1 = document.querySelector('.line1')
  const line3 = document.querySelector('.line3')
  const line2 = document.querySelector('.line2')

  if (line1.style.transform === 'rotate(45deg)') {
    line1.style.transform = 'rotate(0deg)'
    line3.style.transform = 'rotate(0deg)'
    line2.style.display = 'none'
  } else {
    line1.style.transform = 'rotate(45deg)'
    line3.style.transform = 'rotate(-45deg)' // Rotating in the opposite direction
    line2.style.display = 'block'
  }
}
