question = document.getElementById("question")
dispplay = document.getElementById("display")
let working = ""
let ans = 0

function changeInput(displayed, value){
 working += value
 question.innerHTML += displayed
 display.innerHTML = displayed
}

function clearAll(){
    question.innerHTML = ""
    working = ""
    display.innerHTML = ""
}

function backspace(){
    display.innerHTML = ""
    let spliced = question.innerHTML.slice(0, -1)
    question.innerHTML = spliced
    spliced = working.slice(0, -1)
    working = spliced
}

function solution(){
    console.log(working)
    ans = eval(working).toString()
    display.innerHTML = ans
}