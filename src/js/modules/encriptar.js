export const encriptar = (text) => {
  if (text === null) throw new Error('parameter provided is null')

  const dictionary = { a: 'ai', e: 'enter', i: 'imes', o: 'ober', u: 'ufat' }
  const letters = Array.from(text)

  const message = letters.map(letter => {
    if (Object.keys(dictionary).some(key => key === letter)) return dictionary[letter]

    else return letter
  })

  return message.join('')
}
