// validate full name 
const nameInput = $("fullName");
const nameMsg = $("nameMsg");

const validateFullName = (input, validate) => {
  let invalidate = `<span class="text-danger">Full name is required and maximum of character is 50</span>`;
  let check = false;

  if (!input.value.length || input.value.length > 50) {
    validate.innerHTML = invalidate;
  } else {
    validate.innerHTML = "";
    check = true;
  }
  return check;
};

// validate email 
const emailInput = $("email");
const emailMsg = $("emailMsg");

const validateEmail = (input, validate) => {
  const emailReXPres = /^([a-zA-Z0-9])+(\@)([a-z])+\.([a-z])+(\.([a-z])+)?$/;
  let invalidate = `<span class="text-danger">Email is required and email is kind of xxx@xx.x(.x)</span>`;
  let check = false;

  if (!input.value.length || !emailReXPres.test(input.value)) {
    validate.innerHTML = invalidate;
  } else {
    validate.innerHTML = "";
    check = true;
  }
  return check;
};

// validate high 
const heightInput = $("height");
const heighMsg = $("heighMsg");

const validateHeight = (input, validate) => {
  let invalidate = `<span class="text-danger">Your heigh is required</span>`;
  let check = false;

  if (!input.value.length) {
    validate.innerHTML = invalidate;
  } else {
    validate.innerHTML = "";
    check = true;
  }
  return check;
};

const roundingHeighVal = (input) => {
  let roundedVal = parseFloat(input.value).toFixed(2);
  return (input.value = roundedVal);
};

// validate weight 
const weightInput = $("weight");
const weightMsg = $("weightMsg");

const validateWeight = (input, validate) => {
  let invalidate = `<span class="text-danger">Your weight is required</span>`;
  let check = false;
  if (!input.value.length) {
    validate.innerHTML = invalidate;
  } else {
    validate.innerHTML = "";
    check = true;
  }
  return check;
};

const roundingWeightVal = (input) => {
  let roundedVal = parseFloat(inputVal.value).toFixed(1);
  return (input.value = roundedVal);
};

// add
const validateForm = () => {
  if (
    validateFullName(nameInput, textName) &&
    validateEmail(emailInput, textEmail) &&
    validateHeight(heightInput, textHeight) &&
    validateWeight(weightInput, textWeight)
  ) {
    const fullName = $("fullName").value;
    const age = parseFloat($("age").value);
    const email = $("email").value;
    const heigh = parseFloat($("heigh").value);
    const weight = parseFloat($("weight").value);
    const address = $("address").value;

    // get value of gender
    const getGenderVal = (radioArr) => {
      let gender = "";
      radioArr.forEach((element) => {
        if (element.checked) {
          gender = element.value;
        }
      });
      return gender;
    };

    let genderRadio = document.getElementsByName("gender");
    const gender = getGenderVal(genderRadio);

  }
};

