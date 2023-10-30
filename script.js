export function aufgabe01(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === 'e') {
      result.push("")
    } else if (currentElement === 'E') {
      result.push("") 
    }
    else {
    result.push(currentElement)
    }
  }
  return result.join("")
}

export function aufgabe02(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
     const currentElement = input[i]
     const capitalizedElement = currentElement.toUpperCase()
     result.push(capitalizedElement)
  }

  return result.join("")
}

export function aufgabe03(args) {
  const input = args
  const result = []

}