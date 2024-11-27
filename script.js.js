/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/*
let num1 = 7
let num2 = 7
let totSum = crazySum(num1,num2)
console.log(totSum)

function crazySum(a,b){
    let tot = a + b 
    if(a === b){
        tot = (a+b) *3
    }
    return tot
}
*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/*
let num = 90
let cont = boundary(num)

function boundary(a){
    let k =  Number.isInteger(a) && a >= 20 && a <= 100 || a === 400
    return k
}

console.log(cont)
*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/*
let text = "EPICODE"
let txtReverse = strRev(text)
console.log(txtReverse)

function strRev(str){
    let contTxt = str.split("")
    contTxt = contTxt.toReversed()
    contTxt = contTxt.join("")
    return contTxt
}
*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/
/*
let text = "hello world"
let contTxt = upperFirst(text)
console.log(contTxt)

function upperFirst(tx){
    const cont = tx.split(" ")    
    const upperWords = []
    for(let el of cont){            
      let word = el.charAt(0).toUpperCase()+ el.slice(1)
      upperWords.push(word)
      }  
    
    return upperWords.join(" ")
}
/*
/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/
/*
let num2 = Math.floor(Math.random()*10)
let arrRandom = giveMeRandom(num2)
console.log(arrRandom)

function giveMeRandom(n){
    let arr = []
    for(let i = 0; i <= 10;i++){
        n = Math.floor(Math.random()*10)
        arr.push(n)
    }

    return arr
}
*/

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
/*
let altezza = 50
let larghezza = 80
const areaRettangolo = area(h, w) 
console.log(areaRettangolo)

function area(l1,l2){
    let tot = l1*l2
    return tot
} 
*/
/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/
/*
let num1 = -10
let result = crazyDiff(num1)
console.log(result)

function crazyDiff(el){
    let difference = el -19
    let absDifference = Math.abs(difference)
   if(absDifference > 19){
        absDifference *= 3
    }
    return absDifference
}
*/
/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/
/*
let str = "hello world "
let codeStr = codify(str)
console.log(codeStr)

function codify(el){
    let str2 = "code"
    let arrStr = []
    let controllo
    arrStr = el.split(" ")
    if(controllo = arrStr[0].includes(str2)){
        return el
    } else {
        controllo = arrStr.unshift(str2)
        controllo = arrStr.join(" ")
        return controllo
    }
}
*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/*
let number = 21
let controllo = check3and7(number)
console.log(controllo)
function check3and7(n){
    let x = Number.isInteger(n) && (n % 3) === 0 && (n % 7) === 0
    return x

}
*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/*
let stringa = "hello world"
let cont = cutString(stringa)
console.log(cont)
function cutString(el){
    let str = el.slice(1,-1)
    return str
}
*/