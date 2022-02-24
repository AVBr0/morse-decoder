const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let finDateArray = [];

    // Деление по десяткам
    for (let i = 0; i < expr.length; i += 10)  {
        const decimalPart = expr.slice(i, i + 10);

        //Обрезка нулей перед искомым значением
        const withoutNullPart = decimalPart.slice(decimalPart.indexOf('1'));
        let resultString = '';
            for (let i = 0; i < withoutNullPart.length; i += 2) {  // Начало перевода 10,11,* в ключи словаря
                const binaryPart = withoutNullPart.slice(i, i + 2);  
                    switch (binaryPart) {

                    case '10':
                    resultString += '.';
                    break;

                    case '11':
                    resultString += '-';
                    break;

                    case '*':
                    resultString += ' ';
                    break;
                 }
             }
      finDateArray.push(resultString);
    }

    // Возвращение финального значения после сравнения со словарем
    return finDateArray.map((key) => (key === ' ' ? ' ' : MORSE_TABLE[key])).join('');
}

module.exports = {
    decode
}