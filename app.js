// let name = 'Alex';
// alert(name);
// console.log('UserName:', name);

// let num = 13;
// console.log('Your number: ', num);
// console.log('Your number: ', num + 10);
// console.log('Your number: ', num - 10);
// console.log('Your number: ', num * 10);
// console.log('Your number: ', num / 10);


// console.log(resultElement.textContent);

// const resultElement = document.getElementById('result');
// sum = resultElement.textContent = Number(1234);
// sum = Number(sum);
// console.log(resultElement.textContent);

// console.log(typeof sum);


// const userNameI = document.getElementById('input2Name');
// const userNameF = document.getElementById('input1Name');
// const userNameO = document.getElementById('input3Name');
// console.log(userNameF.value);
// console.log(userNameI.value);
// console.log(userNameO.value);
// console.log(" ");

// userNameF.textContent = "Сидоров";
// userNameI.value = "ИВАН";
// console.log(userNameF.textContent);
// console.log(userNameI.textContent);
// console.log(userNameO.textContent);

// const resultElement = document.getElementById('result');
// resultElement.textContent = userNameF.value + ' ' + userNameI.value + ' ' + userNameO.value;
// resultElement.textContent = "Вывод ваших данных";

const userNameF = document.getElementById('input1Name').value;
const userNameI = document.getElementById('input2Name').value;
const userNameO = document.getElementById('input3Name').value;
const userMail = document.getElementById('mail').value;
const anceta = userNameF + '\n' + userNameF + '\n' + userNameF + '\n' + userMail;

// console.log(userNameF.value + " - " + typeof userNameF.value);
// console.log(userNameI.value + " - " + typeof userNameI.value);
// console.log(userNameO.value + " - " + typeof userNameO.value);
// console.log(userMail.value + " - " + typeof userMail.value);


const btnWork = document.getElementById("btnWork");
btnWork.onclick = function () {
    const anceta = userNameF + '\n' + userNameI + '\n' + userNameO + '\n' + userMail;
    console.log(anceta);
}