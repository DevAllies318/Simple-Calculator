const inputbox = document.getElementById("inputt")
const operators = "+-x/%"
const numbers = "0123456789"
function checkValid() {
  return inputbox.value && !operators.includes(inputbox.value.slice(-1))
}
function solve(op, n1, n2) {
  if (op === "x") {
    return String(Number(n1) * Number(n2))
  } else if (op === "/") {
    return String((Number(n1) / Number(n2)).toFixed(1))
  } else if (op === "%") {
    return String(Number(n1) % Number(n2))
  } else if (op === "+") {
    return String(Number(n1) + Number(n2))
  } else if (op === "-") {
    return String(Number(n1) - Number(n2))
  }
}
document.getElementById("zeroBtn").onclick = function () {
  if (inputbox.value) {
    inputbox.value += 0
  }
}
document.querySelectorAll(".numberBtn").onclick = function () {
  inputbox.value += document.querySelectorAll(".numberBtn")
}
document.getElementById("oneBtn").onclick = function () {
  inputbox.value += 1
}
document.getElementById("twoBtn").onclick = function () {
  inputbox.value += 2
}
document.getElementById("threeBtn").onclick = function () {
  inputbox.value += 3
}
document.getElementById("fourBtn").onclick = function () {
  inputbox.value += 4
}
document.getElementById("fiveBtn").onclick = function () {
  inputbox.value += 5
}
document.getElementById("sixBtn").onclick = function () {
  inputbox.value += 6
}
document.getElementById("sevenBtn").onclick = function () {
  inputbox.value += 7
}
document.getElementById("eightBtn").onclick = function () {
  inputbox.value += 8
}
document.getElementById("nineBtn").onclick = function () {
  inputbox.value += 9
}
document.getElementById("clearBtn").onclick = function () {
  inputbox.value = ""
}
document.getElementById("modBtn").onclick = function () {
  if (checkValid()) {
    inputbox.value += "%"
  }
}
document.getElementById("divideBtn").onclick = function () {
  if (checkValid()) {
    inputbox.value += "/"
  }
}
document.getElementById("multBtn").onclick = function () {
  if (checkValid()) {
    inputbox.value += "x"
  }
}
document.getElementById("minusBtn").onclick = function () {
  if (checkValid()) {
    inputbox.value += "-"
  }
}
document.getElementById("plusBtn").onclick = function () {
  if (checkValid()) {
    inputbox.value += "+"
  }
}
document.getElementById("decimalBtn").onclick = function () {
  if (inputbox.value) {
    inputbox.value += "."
  }
}
document.getElementById("backspaceBtn").addEventListener("click", () => {
  inputbox.value = inputbox.value.slice(0, -1)
})

document.getElementById("resultBtn").onclick = function () {
  if (operators.includes(inputbox.value.slice(-1))) {
    inputbox.value = inputbox.value.slice(0, -1)
  }
  let answer = inputbox.value
  let n
  
  for (let i = 0; i < answer.length; i++) {
    n = answer.length
    if (answer[i] == "x" || answer[i] == "/" || answer[i] == "%") {
      let operatorAt = i
      let start = operatorAt - 1,
        end = operatorAt + 1
      while (start >= 0 && !operators.includes(answer[start])) {
        start -= 1
      }
      start++
      while (end < n && !operators.includes(answer[end])) {
        end += 1
      }
      let num1 = Number(answer.substring(start, i))
      let num2 = Number(answer.substring(i + 1, end))
      let firstPart = answer.substring(0, start)
      secondPart = solve(answer[i], num1, num2)
      let lastPart = answer.substring(end, n)
      console.log(`f: ${firstPart}`)
      console.log(`s: ${secondPart}`)
      console.log(`l: ${lastPart}`)
      answer = firstPart + secondPart + lastPart
      console.log(`ans: ${answer}`)
      i -= 1
    }
  }

  n = answer.length
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] == "+" || answer[i] == "-") {
      let operatorAt = i
      let start = operatorAt - 1,
        end = operatorAt + 1
      while (start >= 0 && !operators.includes(answer[start])) {
        start -= 1
      }
      start++
      while (end < n && !operators.includes(answer[end])) {
        end += 1
      }
      let num1 = Number(answer.substring(start, i))
      let num2 = Number(answer.substring(i + 1, end))
      let firstPart = answer.substring(0, start)
      secondPart = solve(answer[i], num1, num2)
      let lastPart = answer.substring(end, n)
      console.log(firstPart)
      console.log(secondPart)
      console.log(lastPart)
      answer = firstPart + secondPart + lastPart
    }
  }
  inputbox.value = answer
}
