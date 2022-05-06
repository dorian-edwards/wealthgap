const html = document.querySelector('html')
const menuToggle = document.querySelector('.burger')
const burger = document.querySelector('.burger__line')
const nav = document.querySelector('.main-nav')
const overlay = document.querySelector('.overlay')
const header = document.querySelector('header')

menuToggle.addEventListener('click', toggleNavigation)

nav.addEventListener('click', (e) => {
  const classList = Array.from(e.target.classList)
  classList.includes('main-nav__anchor') && clearActive()
})

window.addEventListener('resize', () => {
  window.innerWidth > 506 && clearActive()
})

window.addEventListener('scroll', () => {
  if (window.innerWidth < 507) return
  const clearHeader = html.scrollTop / header.offsetHeight
  const scrollFactor = html.scrollTop / 1000
  nav.style.background = `rgb(10, 42, 67, ${
    scrollFactor > 1 ? 1 : scrollFactor
  })`
})

function clearActive() {
  burger.classList.remove('active')
  nav.classList.remove('active')
  overlay.classList.remove('active')
  html.classList.remove('active')
}

function toggleNavigation() {
  burger.classList.toggle('active')
  nav.classList.toggle('active')
  overlay.classList.toggle('active')
  html.classList.toggle('active')
}
