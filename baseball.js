const input = document.querySelector("input");
const numberForm = document.querySelector(".number_form");
const numberList = document.querySelector(".number_list");
const correct = document.querySelector(".correct")
const answer = document.querySelector(".answer")

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
correct_number = []


const numberPickUp = (number) => {
    numbers = numbers.filter(value => value !== number)
    correct_number.push(number)

}

const createAnswerNumber = () => {
    const first = numbers[Math.floor(Math.random() * numbers.length)];
    numberPickUp(first)
    const second = numbers[Math.floor(Math.random() * numbers.length)];
    numberPickUp(second)
    const third = numbers[Math.floor(Math.random() * numbers.length)];
    numberPickUp(third)
    const fourth = numbers[Math.floor(Math.random() * numbers.length)];
    numberPickUp(fourth)
    return correct_number
}


const createNumber = () => {
    console.log(correct_number)
    correct_number = createAnswerNumber()
    correct.innerText = createAnswerNumber()
}


const paintNumber = number => {
    answer_number = []
    const li = document.createElement("li")
    const span = document.createElement("span")
    const numberId = numbers.length + 1
    li.appendChild(span)
    first = Math.floor(number / 1000)
    second = Math.floor(number / 100) - (first * 10)
    third = Math.floor(number / 10) - (first * 100) - (second * 10)
    fourth = number - (first * 1000) - (second * 100) - (third * 10)
    answer_number.push(first, second, third, fourth)
    span.innerText = answer_number
    numberList.appendChild(li)
    const numberObject = {
        text: number,
        id: numberId
    }
    numbers.push(numberObject)
    console.log(numbers.length)
    if (numbers.length === 10) {
        input.classList.add("hiding")
        answer.classList.remove("hiding")
    }
    return answer_number
}



correct.innerText = createAnswerNumber()

numberForm.addEventListener("submit", handleSubmit = e => {
    e.preventDefault();
    const currentValue = input.value
    if (currentValue / 1000 < 1 || currentValue / 10000 > 1) {
        alert("4자리숫자만 입력 가능합니다.")
        handleSubmit()
    }
    paintNumber(currentValue);
    const compareNumber = (correct_number)=>{
        currentValue
    }

})

