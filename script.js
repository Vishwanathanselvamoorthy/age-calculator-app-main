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

// Input Fields Validation Codes:

let isValid = true;

const daysInMonth = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

function emptyFieldsRequiredFunc() {
  if (yearInputValue.value === '') {
    yearInputErrorMsg.textContent = 'Required';
    document.getElementById('year-label').style.color = 'red';
    yearInputValue.style.border = '1px solid red';
  }
  if (monthInputValue.value === '') {
    monthInputErrorMsg.textContent = 'Required';
    document.getElementById('month-label').style.color = 'red';
    monthInputValue.style.border = '1px solid red';
  }
  if (dayInputValue.value === '') {
    dayInputErrorMsg.textContent = 'Required';
    document.getElementById('day-label').style.color = 'red';
    dayInputValue.style.border = '1px solid red';
  }
}

function inputValidations() {
  dayErrorMessages();
  monthErrorMessages();

  yearErrorMessages();
}

function dayErrorMessages() {
  // const maxDaysInAMonth = daysInMonth[monthInputValue.value];
  if (dayInputValue.value === '') {
    dayInputErrorMsg.textContent = '';
    isValid = false;
  } else if (dayInputValue.value > 31 || dayInputValue.value < 1) {
    dayInputErrorMsg.textContent = 'Must Be A Valid Day';
    isValid = false;
  } else {
    isValid = true;
    dayInputErrorMsg.textContent = '';
    document.getElementById('day-label').style.color = 'hsl(0, 1%, 44%)';
    dayInputValue.style.border = '1px solid hsl(0, 1%, 44%)';
  }
}
function monthErrorMessages() {
  const maxDaysInAMonth = daysInMonth[monthInputValue.value];
  const enteredDay = parseInt(dayInputValue.value);
  if (enteredDay > maxDaysInAMonth) {
    dayInputErrorMsg.textContent = 'No Date In This Month';
    dayInputValue.style.border = '1px solid red';
    document.getElementById('day-label').style.color = 'red';
    isValid = false;
  } else {
    isValid = true;
    dayInputErrorMsg.textContent = '';
    document.getElementById('day-label').style.color = 'hsl(0, 1%, 44%)';
    dayInputValue.style.border = '1px solid hsl(0, 1%, 44%)';
  }
  if (monthInputValue.value === '') {
    monthInputErrorMsg.textContent = '';
    isValid = false;
  } else if (monthInputValue.value < 1 || monthInputValue.value > 12) {
    monthInputErrorMsg.textContent = 'Must Be A Valid Month';
    isValid = false;
  } else {
    isValid = true;
    monthInputErrorMsg.textContent = '';
    document.getElementById('month-label').style.color = 'hsl(0, 1%, 44%)';
    monthInputValue.style.border = '1px solid hsl(0, 1%, 44%)';
  }
}
function yearErrorMessages() {
  if (yearInputValue.value === '') {
    yearInputErrorMsg.textContent = '';
  } else if (yearInputValue.value > 2024 || yearInputValue.value < 1000) {
    yearInputErrorMsg.textContent = 'Must Be In The Past';
    isValid = false;
  } else if (yearInputValue.value == 0) {
    yearInputErrorMsg.textContent = 'Must Be A Valid Year';
    isValid = false;
  } else {
    isValid = true;
    yearInputErrorMsg.textContent = '';
    document.getElementById('year-label').style.color = 'hsl(0, 1%, 44%)';
    yearInputValue.style.border = '1px solid hsl(0, 1%, 44%)';
  }
}

// Input Fields Responses Code

dayInputValue.addEventListener('input', function () {
  dayErrorMessages();
  monthErrorMessages();
});
monthInputValue.addEventListener('input', monthErrorMessages);
yearInputValue.addEventListener('input', yearErrorMessages);

// Calculator Age Button

calcBtn.addEventListener('click', function () {
  inputValidations();
  emptyFieldsRequiredFunc();
  calcAgeFunc();
});

// Main Calculation Functions

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
    alert('Something Went Wrong Try Again Later');
  }
}
