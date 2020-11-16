const input = document.querySelector("input");
const numberForm = document.querySelector(".number_form");
const numberList = document.querySelector(".number_list");
const correct = document.querySelector(".correct")
const answer = document.querySelector(".answer")

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
correct_number = []

const numberPickUp = (number) => {
    numbers = numbers.filter(value => value !== number)

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
    console.log(first, second, third, fourth)
}

correct.innerText = createAnswerNumber()


const createNumber = () => {
    a = 1
}


const paintNumber = number => {
    const li = document.createElement("li")
    const span = document.createElement("span")
    const numberId = numbers.length + 1
    li.appendChild(span)
    span.innerText = number
    numberList.appendChild(li)
    const numberObject = {
        text: number,
        id: numberId
    }

    numbers.push(numberObject)
    if (numbers.length === 10) {
        input.classList.add("hiding")
        answer.classList.remove("hiding")
    }
}

numberForm.addEventListener("submit", handleSubmit = e => {
    e.preventDefault();
    const currentValue = input.value
    paintNumber(currentValue);

})