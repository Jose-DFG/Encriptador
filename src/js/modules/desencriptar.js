export const desencriptar = (message) => {
  if (message === null) throw new Error('parameter provided is null')

  const dictionary = { ai: 'a', enter: 'e', imes: 'i', ober: 'o', ufat: 'u' }
  let text = message

  Object.keys(dictionary).forEach(key => {
    text = text.replace(new RegExp(key, 'g'), dictionary[key])
  })

  return text
}
