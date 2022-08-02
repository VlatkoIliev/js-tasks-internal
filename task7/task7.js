const myForm = document.getElementsByTagName('form')[0];
const nameInput = document.querySelectorAll('input');
console.log(nameInput);

const name = nameInput[0].value;
const email = nameInput[1].value;
const password = nameInput[2].value;
const confirmPassword = nameInput[3].value;

const isPasswordSecure = (password) => {
  const re = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
  );
  return re.test(password);
};

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameInput[0].value;
  const fieldName = nameInput[0].getAttribute('name');
  const email = nameInput[1].value;
  const password = nameInput[2].value;
  const confirmPassword = nameInput[3].value;
  let submitFlag = true;

  if (!name) {
    alert('Please enter yourname');
    submitFlag = false;
  }
  if (
    email.indexOf('text') == -1 ||
    email.indexOf('@') == -1 ||
    email.indexOf('.com') == -1
  ) {
    alert('Email is invalid');
    submitFlag = false;
  }

  if (!isPasswordSecure(password) || !password) {
    alert('Password is invalid');
    submitFlag = false;
  }

  if (password !== confirmPassword) {
    alert("Passwords don't match");
    submitFlag = false;
  }

  if (submitFlag) {
    alert('Form is successfully submitted');
  }
});
