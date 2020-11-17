const input = document.querySelector("input");
const numberForm = document.querySelector(".number_form");
const numberList = document.querySelector(".user__number-list");
const correct = document.querySelector(".correct_number")
const answer = document.querySelector(".answer")

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
correct_number = []
answer_number_list = []

// 선택한 숫자를, 리스트에서 제거
const numberPickUp = (number) => {
    numbers = numbers.filter(value => value !== number)
    correct_number.push(number)

}

// 4자리의 숫자 정하기 
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


// 같은 숫자가 있는지 확인하고 값추가
const paintNumber = number => {
    answer_number = []
    compare_number_list = []
    const li = document.createElement("li")
    const span = document.createElement("span")
    li.appendChild(span)
    first = Math.floor(number / 1000)
    second = Math.floor(number / 100) - (first * 10)
    third = Math.floor(number / 10) - (first * 100) - (second * 10)
    fourth = number - (first * 1000) - (second * 100) - (third * 10)
    answer_number.push([first, second, third, fourth])
    for (let i = 0; i < answer_number.length; i++) {
        for (let j = i + 1; j < answer_number.length; j++) {
            if (answer_number[i] === answer_number[j]) {
                alert("같은 숫자는 입력 안되요~")
                handleSubmit()
            }
        }
    }

    for (let i = 0; i < correct_number.length; i++) {
        for (let j = 0; j < correct_number.length; j++) {
            if (correct_number[i] === answer_number[0][j]) {
                if (i === j) {
                    compare_number_list.push("S")
                } else {
                    compare_number_list.push("B")
                }
            }

        }

    }
    span.innerText = answer_number + compare_number_list
    numberList.appendChild(li)
    const numberObject = {
        text: number,
    }
    answer_number_list.push(numberObject)
    if (compare_number_list[0] === "S" && compare_number_list[1] === "S" && compare_number_list[2] === "S" && compare_number_list[3] === "S") {
        alert("정답!")
        input.classList.add("hiding")
        answer.classList.remove("hiding")
    }

    if (answer_number_list.length === 10) {
        input.classList.add("hiding")
        answer.classList.remove("hiding")
    }
}
//정답은 미리 추가 해놓음.
correct.innerText = createAnswerNumber()

//정답 콘솔에 노출
console.log(correct_number)

//핸들, form event 추가 
numberForm.addEventListener("submit", handleSubmit = e => {
    e.preventDefault();
    const currentValue = input.value
    if (currentValue / 1000 < 1 || currentValue / 10000 > 1) {
        alert("4자리 숫자를 입력해주세요!")
        handleSubmit()
    }
    paintNumber(currentValue);

})
