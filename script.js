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

export function aufgabe05(args) {
    const input = args
      const result = []
    let capitalLetters = 0
     
    for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Prüft, ob ein Grossbuchstabe vorhanden ist
    if (currentElement=== ".") {}
    else if (currentElement===" "){}
    //Wenn ein Element gleich ist, wird plus 1 gerechnet
    else if (currentElement === currentElement.toUpperCase())
    {capitalLetters++}
    }
     
    if (capitalLetters > 0) {
      return true
    } else {
       return false
    }
     
    }  

  export function aufgabe08(args) {
    const input = args //Dieser Knopf soll alle 'e' in einem Text mit '3' ersetzen
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === 'e') {
      result.push("3")
    } 
    else {
    result.push(currentElement)
    }
  }
  return result.join("")

  }
   
  export function aufgabe12(args) {
    const input = args //Dieser Button soll die Position des ersten 'e'  im Text finden
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === 'e') {
      return i
    } 
  }
  return -1
    
  }
   