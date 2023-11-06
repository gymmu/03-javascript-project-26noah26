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
     //Der Input soll in Grossbuchstaben umgewandelt werden
     const capitalizedElement = currentElement.toUpperCase()
     result.push(capitalizedElement)
  }

  return result.join("")
}

export function aufgabe03(args) {
  const input = args
  const result = []
    let count = 0
   
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      //Der Input soll nur ein 'e' enthalten
  if (currentElement === 'e'){
    count = count + 1
  }
   
    //Der Input soll grosse 'E' zählen
  else if (currentElement === 'E'){
    count = count + 1
  }
    }
    return count
  }

  export function aufgabe04(args) {
    const input = args
    const result = []
      let count = 0
     
      for (let i = 0; i < input.length; i++) {
        const currentElement = input[i]
        //
    if (currentElement === 'e'){
      count = count + 1
    }
     
      //Der Input soll grosse 'E' zählen
    else if (currentElement === 'E'){
      count = count + 1
    }
      }
      return count

  }
   
   
   