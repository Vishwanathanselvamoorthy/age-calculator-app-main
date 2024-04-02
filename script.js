const dayInputValue = document.getElementById('day-input');
const monthInputValue = document.getElementById('month-input');
const yearInputValue = document.getElementById('year-input');

const yearResult = document.getElementById('year-result');
const monthResult = document.getElementById('month-result');
const dayResult = document.getElementById('day-result');

const dayInputErrorMsg = document.getElementById('error-day');
const monthInputErrorMsg = document.getElementById('error-month');
const yearInputErrorMsg = document.getElementById('error-year');

const calcBtn = document.querySelector('.calc-button');
let isValid = true;

dayInputValue.addEventListener('input', function (e) {
  if (dayInputValue.value > 31 || dayInputValue.value < 1) {
    dayInputErrorMsg.textContent = 'Must be a valid date';
    isValid = false;
  } else {
    dayInputErrorMsg.textContent = '';
    isValid = true;
  }
});

monthInputValue.addEventListener('input', function (e) {
  if (monthInputValue.value < 1 || monthInputValue.value > 12) {
    monthInputErrorMsg.textContent = 'Must be a Valid Month';
    isValid = false;
  } else {
    monthInputErrorMsg.textContent = '';
    isValid = true;
  }
});

yearInputValue.addEventListener('input', function (e) {
  if (yearInputValue.value > 2024) {
    yearInputErrorMsg.textContent = 'You Are Not Even Born';
    isValid = false;
  } else if (yearInputValue.value == 0) {
    yearInputErrorMsg.textContent = 'Not a Valid Year';
    isValid = false;
  } else {
    isValid = true;
  }
});

// const calcAgeFunc = function () {
//   const currentYear = new Date().getFullYear();
//   const myYear = currentYear - yearInputValue.value;
//   yearResult.textContent = myYear;

//   const currentMonth = new Date().getMonth();
//   const myMonth = currentMonth - monthInputValue.value;
//   montResult.textContent = Math.abs(myMonth);
// };

calcBtn.addEventListener('click', function () {
  requiredErrorShowingFunc();
  calcAgeFunc();
});

function requiredErrorShowingFunc() {
  if (
    dayInputValue.value === '' ||
    monthInputValue.value === '' ||
    yearInputValue.value === ''
  ) {
    dayInputErrorMsg.textContent = 'Required';
    monthInputErrorMsg.textContent = 'Required';
    yearInputErrorMsg.textContent = 'Required';
    isValid = false;
  } else {
    isValid = true;
  }
}

function calcAgeFunc() {
  if (isValid) {
    let DOB = `${yearInputValue.value}-${monthInputValue.value}-${dayInputValue.value}`; // 
    let DOBobj = new Date(DOB);
    let ageDiffMill = Date.now() - DOBobj;
    let ageDate = new Date(ageDiffMill);
    console.log(ageDate);
    let ageYears = ageDate.getUTCFullYear() - 1970;
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDate() - 2;
    dayResult.textContent = ageDay;
    monthResult.textContent = ageMonth;
    yearResult.textContent = ageYears;
  } else {
    alert('error');
  }
}
