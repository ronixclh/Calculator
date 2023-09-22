let a = '' //first number
let b = '' //second number
let sign = '' //operation sign
let finish = false

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['-', '+', 'X', '/']

//screen

const out = document.querySelector('.calc-screen p')

function clearAll() {
  a = '' //clears first nr and result
  b = '' //clear second nr
  sign = '' //clears sign
  finish = false
  out.textContent = 0
}

document.querySelector('.ac').onclick = clearAll

document.querySelector('.buttons').onclick = (event) => {
  //toogled not button
  if (!event.target.classList.contains('btn')) return
  //toggled gutton clearAll ac
  if (event.target.classList.contains('ac')) return

  out.textContent = ''
  //receiving toggled button
  const key = event.target.textContent
  //if toggled button 0-9
  if (digit.includes(key)) {
    if (b === '' && sign === '') {
      a += key
      out.textContent = a
    } else if (a !== '' && b !== '' && finish) {
      b = key
      finish = false
      out.textContent = b
    } else {
      b += key
      out.textContent = b
    }
    return
  }

  //if toggled button + - / X
  if (action.includes(key)) {
    sign = key
    out.textContent = sign
    return
  }

  //toggled equal
  if (key === '=') {
    if (b === '') b = a
    switch (sign) {
      case '+':
        a = +a + +b
        break
      case '-':
        a = a - b
        break
      case 'X':
        a = a * b
        break
      case '/':
        if (b === '0') {
          out.textContent = 'Error'
          a = ''
          b = ''
          sign = ''
          return
        }
        a = a / b
        break
    }
    finish = true
    out.textContent = a
    console.log(a, b, sign)
  }
}
