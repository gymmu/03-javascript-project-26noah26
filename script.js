export function aufgabe01(args) {//Diese Aufgabe soll aus der Eingabe alle 'e' löschen.
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

export function aufgabe02(args) {//Diese Aufgabe soll den Input in Grossbuchstaben umwandeln.
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
     const currentElement = input[i]

     const capitalizedElement = currentElement.toUpperCase()//Hier sollen die Buchstaben gross gemacht werden.
     result.push(capitalizedElement)
  }

  return result.join("")
}

export function aufgabe03(args) {//Diese Aufgabe soll alle 'e' des Inputs zählen.
  const input = args 
  const result = []
    let count = 0
   
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      //Der Input soll kleine 'e' zählen.
  if (currentElement === 'e'){
    count = count + 1
  }
    //Der Input soll grosse 'E' zählen.
  else if (currentElement === 'E'){
    count = count + 1
  }
    }
    return count
  }

  export function aufgabe05(args) {//Diese Aufgabe soll prüfen, ob ein Grossbuchstabe vorhanden ist.
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

    export function aufgabe06(args) {
      const input = args; //Diese Aufgabe soll testen, ob in der Eingabe ein Sonderzeichen vorkommt.
   
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i] ;
      const ascii = currentElement.charCodeAt(0)
   
      if (65 <= ascii && ascii <= 90) {
        //Prüft, ob es sich hier um einen Grossbuchstaben handelt.
      } else if (97 <= ascii && ascii <=122) {
        //Prüft, ob es sich hier um einen Kleinbuchstaben handelt.
      } else if (currentElement === ' ') {
      }else {
        return true
      }
    }
    return false
  }

  export function aufgabe07(args) {//Diese Aufgabe soll prüfen, ob das Wort 'und' vorhanden ist.
    const input = args 
    const result = []
   
    let capitalLetters = 0
     
    for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement=== ".") {}
    else if (currentElement===" "){}
     
    else if (currentElement === currentElement.toUpperCase())
    {capitalLetters++}
    }
     
    if (capitalLetters > 0) {
      return true
    } else {
       return false
    }
  }
     

  export function aufgabe08(args) {//Dieser Knopf soll alle 'e' in einem Text mit '3' ersetzen
    const input = args 
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === 'e') {//Hier soll erkannt werden, ob das Element ein e ist.
      result.push("3")//Wenn es ein e ist, soll es durch eine 3 ersetzt werden.
    } 
    else {
    result.push(currentElement)//Wenn es kein e ist, soll nichts geschehen.
    }
  }
  return result.join("")

  }

  export function aufgabe09(args) {//Diese Aufgabe soll prüfen, ob die Eingabe genau sechs Zeichen lang ist.
    const input = args 
    let len = 0
    for (let i = 0; i < input.length; i++) {
    len++
    }

   if (len === 6) {
    return true
   } else {
    return false
   }
  }

  export function aufgabe10(args) {//Diese Aufgabe soll prüfen, ob die Eingabe ein korrekter RGB Hexcode ist.
    const input = args 
    
    if (input.length !== 7) return false
    if (input[0] !== "#") return false

    for (let i = 1; i < input.length; i++) {
      const currentElement = input[i]
      const ascii = currentElement.charCodeAt(0)
      if (48 <= ascii && ascii <= 57) {
       } else if (65 <= ascii && ascii <= 70) {
       }   else {
            return false
        
        
      }
      
    }

    return true
  }
  
  export function aufgabe11 (args) {
    const input = args //Diese Aufgabe soll den ascii Code eines einzelnen Buchstaben angeben.
    let ascii = null
  if (input.length > 1){ return null} //Funktionswächter
   
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    ascii = currentElement.charCodeAt(0)
    return ascii
  }
  return null
  }

  export function aufgabe12(args) {
    const input = args //Diese Aufgabe soll die Position des ersten 'e' im Text finden
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === 'e') {
      return i
    } 
  }
  return -1
    
  }
   
  export function aufgabe13(args) {
    const input = args //Diese Aufgabe soll die Position des letzten 'e' im Text finden
  const result = []
  for (let i = 1; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === 'e') {
      return i
    } 
  }
  return -1
    
  }
   
  export function aufgabe14(args) {
    const input = args //Diese Aufgabe soll die Position des dritten 'e' im Text finden
  const result = []
    let countE = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === 'e') {
      countE++
      if (countE === 3) {
        return i
      }
    }
   
  }
  return -1
    
  }

  export function aufgabe15(args) {
    const input = args
    const result = []
 
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
 
  if (currentElement=== ' ' ) {
  return result.join("")
  }
 
      result.push(currentElement)
  }
    return result.join("")
  }

  export function aufgabe18(args) {
    const input = args //Diese Aufgabe soll den Namen und das Alter angeben.
    const result = []
    
    return result.join("")
  }

  export function aufgabe19(args) {
    const input = args //Diese Aufgabe soll jedes Zeichen in der Aufgabe verdoppeln
    const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
    result.push(currentElement)
    
  }
    return result.join("")
  }

  export function aufgabe20 (args) {
    const input = args
    const result = []
   
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      
    if (currentElement === '.' )  
    if (input [i+1] === ' ') {
      return true
    }
     
    }
   
  return false
   
  }

  export function aufgabe22(args) {
    const input = args
    const result = []
    
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      if (currentElement === '') {
        result.push("1")
      } 
      else {
      result.push(currentElement)
      }
    }

    return result.join("")
  }

  export function aufgabe26 (args) {//Diese Aufgabe soll die ersten beiden Zeichen der Eingabe alphanumerisch sortieren.
   
    const list = args.split("")  //Der Text wird in eine Liste umgewandelt, damit er sortiert werden kann.
    for (let i = 0; i < list.length - 1; i++) {
      const currentElement = list[i]
      const nextElement = list[i+1]
      if ( currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {//Wenn die Reihenfolge nicht stimmt, müssen die beiden Elemente getauscht werden.
        const tmp = list[i+1]
        list[i+1] = list[i]
        list[i] = tmp
        i = 0 //Wenn die zwei Elemente vertauscht wurden, startet es neu.
      }
    }
    const result = list.join("")
    return (result)
   
  }

  export function aufgabe27(args) {
    const input = args

    if (input.length === 0) return false
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      const ascii = currentElement.charCodeAt (0)
      if(48 <= ascii && ascii <= 57) {
    
      } else {
        return false
      }
   
    }
    return true
  }

  export function bubbleSort (args) { //Diese Aufgabe soll die Elemente der Eingabe alphabetisch oder der Grösse nach ordnen
 
    const list = args.split("") 
    for (let i = 0; i < list.length - 1; i++) {
      const currentElement = list[i]
      const nextElement = list[i+1]
      if ( currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
      
   
        const tmp = list[i+1]
        list[i+1] = list[i]
        list[i] = tmp
        i = -1 
      }
   
   
    }
    const result = list.join("")
    return result
  }