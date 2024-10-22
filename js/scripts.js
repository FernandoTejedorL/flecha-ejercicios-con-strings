/* 1. Crea una funcion que reciba una palabra, 
si la palabra tiene más de 5 caracteres la imprimirá en mayúsculas, si no en minúsculas.*/

const wordToUpper = (word) => {
    const wordToNum = word.length;
    if (wordToNum > 5) {
        return word.toUpperCase();
    } else {
        return word.toLowerCase();
    }
}
const result1 = wordToUpper('cantimplora');
console.log(result1)

/* 2. Crea una función que reciba una palabra e imprime por consola una letra aleatoria de esa palabra.*/

const randomLetter = (wordA) => {
    const randomPosition = Math.random()*wordA.length
    console.log(wordA.charAt(randomPosition));
}
randomLetter('asdf');



/* 3. Crea una función que reciba dos palabras y devuelva cuál de las dos es más larga.
Si ambas palabras tienen la misma longitud, deberá indicarlo.*/

const longerWord = (wordB, wordC) => {
    const lengthB = wordB.length;
    const lengthC = wordC.length;
    if (lengthB > lengthC) {
        return wordB;
    } else if (lengthC > lengthB) {
        return wordC;
    } else {
        return 'Son iguales';
    }
}
const result3 = longerWord('perro', 'teniente');
console.log(result3);

/* 4. Crear una función generateWord que reciba 3 palabras y genere una palabra usando 2 letras
aleatorias de cada palabra. Por ejemplo, "Hola", "Adios" y "Mano" podrían generar "aldona".*/

const generateWord = (wordD, wordE, wordF) => {
    const randLet1 = wordD.charAt(Math.random() * wordD.length);
    const randLet2 = wordD.charAt(Math.random() * wordD.length);
    const randLet3 = wordE.charAt(Math.random() * wordE.length);
    const randLet4 = wordE.charAt(Math.random() * wordE.length);
    const randLet5 = wordF.charAt(Math.random() * wordF.length);
    const randLet6 = wordF.charAt(Math.random() * wordF.length);
    return randLet1 + randLet2 + randLet3 + randLet4 + randLet5 + randLet6;
}
const result4 = generateWord('hola', 'adios', 'mano');
console.log(result4);


/* 5. Crea una función que reciba un email e imprima por separado el nombre y el dominio.
Por ejemplo, si recibe "dorian@gmail.com" deberá imprimir "El usuario es dorian" y por otro
lado "El dominio es gmail.com".*/

const emailDomain = (email) => {
    const atPos = email.indexOf('@');
    const user = email.substring(0, atPos);
    const domain = email.substring(atPos + 1);    
    return `El usuario es ${user} y el dominio es ${domain}`;
}
const result5 = emailDomain('fernandotejedorlopez@gmail.com');
console.log(result5);


/* 6. Crea una función que reciba una palabra de 5 letras y la devuelva intercalando mayúsculas
 y minúsculas, por ejemplo adios, sería aDiOs*/

const wordToAlt = (wordG) => {
    const letterAt1 = wordG.charAt(0).toLowerCase();
    const letterAt2 = wordG.charAt(1).toUpperCase();
    const letterAt3 = wordG.charAt(2).toLowerCase();
    const letterAt4 = wordG.charAt(3).toUpperCase();
    const letterAt5 = wordG.charAt(4).toLowerCase();    
    return letterAt1 + letterAt2 + letterAt3 + letterAt4 + letterAt5;
}
const result6 = wordToAlt('casas');
console.log(result6)

/* 7. Crea una función que reciba un nombre y un apellido, y devuelva un nombre de usuario compuesto
por la primera letra del nombre, el apellido completo, y un número aleatorio del 1 al 100. Por ejemplo, 
"Juan Perez" podría convertirse en "JPerez87". */

const userName = (nameAndSurname) => {
    const spaceToUsername = nameAndSurname.indexOf(' ')
    const capName = nameAndSurname.charAt(0)
    const surname = nameAndSurname.substring(spaceToUsername + 1)
    const randomNum100 = Math.floor(Math.random() * 101);
    return capName+surname+randomNum100
}
const result7 = userName('Fernando Tejedor')
console.log(result7)


/* 8. Crea una función que reciba 2 verbos en infinitivo. La función debe imprimir a qué conjugación
pertenecen. Por ejemplo, si la función recibe "andar" y "correr" debe imprimir "El verbo andar es
de la primera conjugación y el verbo correr de la segunda conjugación".*/

const conjugation = (verb) => {
    if (verb.endsWith('ar')) {
        return 'primera conjugación';
    } else if (verb.endsWith('er')) {
        return 'segunda conjugación';
    } else {
        return 'tercera conjugación'
    }
}
const conjugBoth = (verbA, verbB) => `El verbo ${verbA} es de la ${conjugation(verbA)} y el verbo ${verbB} es de la ${conjugation(verbB)}`
const result8 = conjugBoth('tejer', 'crujir');
console.log(result8);


/* 9. Crea una función que reciba una palabra de 4 letras y devuelva la palabra invertida.
Por ejemplo, si recibe "casa", deberá devolver "asac".*/

const reverseWord = (wordH) => wordH.charAt(3) + wordH.charAt(2) + wordH.charAt(1) + wordH.charAt(0);
const result9 = reverseWord('mudo');
console.log(result9);


/* 10. Crea una función que reciba 3 palabras y calcule cuántos caracteres tienen en total. 
Por ejemplo, si recibe "Hola", "Mundo" y "Javascript", deberá imprimir 17.*/

const sumChar = (wordI, wordJ, wordK) => wordI.length + wordJ.length + wordK.length;
const result10 = sumChar('perro', 'casas', 'gato');
console.log(result10)

/* 11. Crea una función que reciba una frase de dos palabras y devuelva la frase con el formato de título, es decir, 
que cada palabra comience con mayúscula. Por ejemplo, "hola mundo" se convertiría en "Hola Mundo".*/

const toTitle = (sentence) => {
    const spaceInSent = sentence.indexOf(' ');
    const firstCap = sentence.charAt(0).toUpperCase();
    const firstWord = sentence.substring(1, spaceInSent);
    const secondCap = sentence.charAt(spaceInSent + 1).toUpperCase();
    const secondWord = sentence.substring(spaceInSent + 2);
    return firstCap + firstWord + ' ' + secondCap + secondWord;
}
const result11 = toTitle('casa morcillo')
console.log(result11)

/* 12. Crea una función que reciba un nombre y un apellido y devuelva las iniciales en mayúsculas. 
Por ejemplo, si recibe "Carlos Pérez", deberá devolver "C.P.".*/

const initials = (nameAndSurname2) => {
    const spaceInName = nameAndSurname2.indexOf(' ');
    const firstLet = nameAndSurname2.charAt(0).toUpperCase() + '.';
    const secondLet = nameAndSurname2.charAt(spaceInName + 1).toUpperCase() + '.';
    return firstLet + secondLet;
}
const result12 = initials('fernando tejedor');
console.log(result12)

/* 13. Crea una función que reciba 3 palabras y calcule el promedio de la longitud de esas palabras. 
Por ejemplo, si recibe "hola", "adiós" y "mundo", el promedio sería 4.67.*/

const averageOfThree = (wordL, wordM, wordN) => (wordL.length + wordM.length + wordN.length) / 3;
const result13 = averageOfThree('hola', 'adios', 'mundo');
console.log(result13)

/* 14. Crea una función que reciba un número de teléfono de 10 dígitos (como "1234567890") y 
lo formatee de la siguiente manera: "(123) 456-7890".*/

const numToCute = (number) => {
    const telephone = String(number)
    const prefix = '(' + telephone.substring(0, 3) + ') ';
    const startNum = telephone.substring(3, 6) + '-';
    const endNum = telephone.substring(6);
    return prefix+startNum+endNum
}
const result14 = numToCute(1234567890)
console.log(result14)

/* 15. Crea una función que reciba una palabra de 4 letras y la devuelva en orden inverso, 
duplicando cada letra. Por ejemplo, si recibe "hola", devolvería "aalloohh". */

const backWords = (wordO) => wordO.charAt(3) + wordO.charAt(3) + wordO.charAt(2) + wordO.charAt(2) + wordO.charAt(1) + wordO.charAt(1) + wordO.charAt(0) + wordO.charAt(0);
const result15 = backWords('hola')
console.log(result15);

/* 16. Crea una función que reciba un número de dos dígitos y devuelva true si ambos dígitos son pares. 
Por ejemplo, si recibe 24, devolvería true, pero si recibe 23, devolvería false.*/



/* 17. Crea una función que reciba dos palabras de 4 letras y verifique si contienen las mismas 
letras en diferente orden, por ejemplo "amor" y "mora"*/


/* 18. Crea una función que reciba un string y un número n, y devuelva los primeros n caracteres 
del string (puedes usar el método slice). */




/* 19. Crea una función que reciba una frase y una palabra, y te diga si la palabra está o no en la frase*/


