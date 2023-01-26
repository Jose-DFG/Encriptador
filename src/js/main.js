import { encriptar } from './modules/encriptar.js'
import { desencriptar } from './modules/desencriptar.js'

const textAreaOne = document.querySelector('.text-area-1')
const textAreaTwo = document.querySelector('.text-area-2')

const encr = document.querySelectorAll('.encriptar')
const desencr = document.querySelectorAll('.desencriptar')
const rever = document.querySelectorAll('.reverse')

let txt

textAreaOne.addEventListener('keydown', () => {
  if (encr[0].classList.contains('use')) {
    setTimeout(() => {
      textAreaTwo.innerHTML = encriptar(textAreaOne.value)
    }, 500)
  } if (desencr[0].classList.contains('use')) {
    setTimeout(() => {
      textAreaTwo.innerHTML = desencriptar(textAreaOne.value)
    }, 500)
  }
})

encr[0].addEventListener('click', () => {
  if (desencr[0].classList.contains('use')) {
    encr.forEach(btn => btn.classList.toggle('use'))
    desencr.forEach(btn => btn.classList.toggle('use'))

    txt = textAreaTwo.value
    textAreaTwo.value = textAreaOne.value
    textAreaOne.value = txt
  }
})

desencr[0].addEventListener('click', () => {
  if (encr[0].classList.contains('use')) {
    desencr.forEach(btn => btn.classList.toggle('use'))
    encr.forEach(btn => btn.classList.toggle('use'))

    txt = textAreaTwo.value
    textAreaTwo.value = textAreaOne.value
    textAreaOne.value = txt
  }
})

rever[0].addEventListener('click', () => {
  if (desencr[0].classList.contains('use')) {
    encr.forEach(btn => btn.classList.toggle('use'))
    desencr.forEach(btn => btn.classList.toggle('use'))

    txt = textAreaTwo.value
    textAreaTwo.value = textAreaOne.value
    textAreaOne.value = txt
  } else {
    desencr.forEach(btn => btn.classList.toggle('use'))
    encr.forEach(btn => btn.classList.toggle('use'))

    txt = textAreaTwo.value
    textAreaTwo.value = textAreaOne.value
    textAreaOne.value = txt
  }
})
