export function aufgabe01(args) {//Diese Aufgabe soll aus der Eingabe alle 'e' löschen.
  const input = args 
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === 'e') {//Ein e wird erkannt
      result.push("")
    } else if (currentElement === 'E') {//Ein E wird erkannt
      result.push("") 
    }
    else {
    result.push(currentElement)//Wenn kein e da ist, geht der Computer weiter und das Element kommt im Output vor.
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
     result.push(capitalizedElement)//Alle Grossbuchstaben sollen im Output landen.
  }

  return result.join("")
}

export function aufgabe03(args) {//Diese Aufgabe soll alle 'e' des Inputs zählen.
  const input = args 
  const result = []
    let count = 0
   
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
  if (currentElement === 'e'){ //Erkennt e
    count = count + 1 //Zählt e
  }
    
  else if (currentElement === 'E'){ //Erkennt E
    count = count + 1 //Zählt E
  }
    }
    return count //Im Output soll die Anzahl der gezählten e/E angezeigt werden
  }

  
    export function aufgabe05(args) {
      const input = args
      const result = []
      let capitalLetters = 0
     
      for (let i = 0; i < input.length; i++) {
        const currentElement = input [i]
        if (currentElement === ".") { //Erkennt '.'
     
        } else if (currentElement === " ") {} //Erkennt Leerschläge
     
        
        else if (currentElement !== currentElement.toLowerCase()) {} //Erkennt Gross- und Kleinbuchstaben
          capitalLetters++
        
      }
     
      if (capitalLetters> 0) { //Zeigt nur die Grossbuchstaben im Output an
        return true
      }else {
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
    if (currentElement === 'e') {//Erkennt e
      result.push("3")//Wenn es ein e ist, soll es durch eine 3 ersetzt werden.
    } 
    else {
    result.push(currentElement)//Wenn es kein e ist, bleibt das Element gleich und wird im Output angezeigt.
    }
  }
  return result.join("")

  }

  export function aufgabe09(args) {//Diese Aufgabe soll prüfen, ob die Eingabe genau sechs Zeichen lang ist.
    const input = args 
    let len = 0 //Fängt bei null an zu zählen
    for (let i = 0; i < input.length; i++) {
    len++
    }

   if (len === 6) {//Bei einer Input-Länge von 6 Zeichen stehtt im Output true.
    return true
   } else {//Bei einer Input-Länge von mehr/weniger als 6 zeichen steht im Output false.
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
    if (currentElement === 'e') {//Erkennt e
      return i//
    } 
  }
  return -1 //Die Position des ersten e minus 1 wird im Output angezeigt
    
  }
   
  export function aufgabe13(args) {
    const input = args //Diese Aufgabe soll die Position des letzten 'e' im Text finden
  const result = []
  for (let i = 1; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === 'e') {
      return i //Position des letzten e steht im Output
    } 
  }
  return -1
    
  }
   
  export function aufgabe14(args) {
    const input = args //Diese Aufgabe soll die Position des dritten 'e' im Text finden
  const result = []
    let countE = 0
  for (let i = 0; i < input.length; i++) {//Bei jedem e zählt der Computer +1
    const currentElement = input[i]
    if (currentElement === 'e') {
      countE++
      if (countE === 3) {//Wenn 3 e gefunden wurde, wir ddie Position des dritten angegeben
        return i
      }
    }
   
  }
  return -1
    
  }

  export function aufgabe15(args) {//Liest die Eingabe nur bis zum ersten Leerschlag ein.
    const input = args
    const result = []
 
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
 
  if (currentElement=== ' ' ) {//Erkennt Leerschlag
  return result.join("")
  }
 
      result.push(currentElement)//Gibt den Output bis zum ersten Leerschlag zurück
  }
    return result.join("")
  }

  export function aufgabe18(args) {//Diese Aufgabe soll den Namen und das Alter angeben.
    const input = args 
    const result = []
    
    return result.join("")
  }

  export function aufgabe19(args) {//Diese Aufgabe soll jedes Zeichen in der Aufgabe verdoppeln
    const input = args 
    const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
    result.push(currentElement)//Fügt das Element doppelt in den Output
    
  }
    return result.join("")
  }

  export function aufgabe20 (args) {//Prüft, ob nach jedem . ein Leerschlag kommt
    const input = args
    const result = []
   
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      
    if (currentElement === '.' ) //Erkennt '.'
    if (input [i+1] === ' ') {//Prüft, ob eine Position nach dem . ein Lerschlag kommt.
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

  export function aufgabe27(args) {//Testet ob die Eingabe eine Zahl ist
    const input = args

    if (input.length === 0) return false
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      const ascii = currentElement.charCodeAt (0)
      if(48 <= ascii && ascii <= 57) {//Prüft, ob das Element eine Zahl zwischen 0 und 9 ist
    
      } else {
        return false//Keine Zahl --> return false
      }
   
    }
    return true//Zahl gefunden
  }

  export function bubbleSort (args) { //Diese Aufgabe soll die Elemente der Eingabe alphabetisch oder der Grösse nach ordnen
 
    const list = args.split("") //Erstellt eine Liste mit den Elementen
    for (let i = 0; i < list.length - 1; i++) {
      const currentElement = list[i]
      const nextElement = list[i+1]
      if ( currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {//Wenn die Reihenfolge falsch ist, werden die Elemente vertauscht
      
   
        const tmp = list[i+1]
        list[i+1] = list[i]
        list[i] = tmp
        i = -1 //Überprüft und tauscht so lange, bis die reihenfolge stimmt
      }
   
   
    }
    const result = list.join("")
    return result //Im Output erscheint die sortierte Liste
  }