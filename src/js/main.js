import { encriptar } from './modules/encriptar.js'
import { desencriptar } from './modules/desencriptar.js'

const textAreaOne = document.querySelector('.text-area-1')
const textAreaTwo = document.querySelector('.text-area-2')

const encr = document.querySelectorAll('.encriptar')
const desencr = document.querySelectorAll('.desencriptar')
const rever = document.querySelectorAll('.reverse')

let txt

textAreaOne.addEventListener('keydown', () => {
  console.log('evento registrado')
  if (encr[0].classList.contains('use')) {
    setTimeout(() => {
      textAreaTwo.value = encriptar(textAreaOne.value)
    }, 1500)
  } else {
    setTimeout(() => {
      textAreaTwo.value = desencriptar(textAreaOne.value)
    }, 1500)
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
  desencr.forEach(btn => btn.classList.toggle('use'))
  encr.forEach(btn => btn.classList.toggle('use'))

  txt = textAreaTwo.value
  textAreaTwo.value = textAreaOne.value
  textAreaOne.value = txt
})
