// const sendForm = (event) => {
//   event.preventDefault();

//   if (inputEmail.value === "" || inputPassword.value === "") {
//     alert("Введіть логін і пароль");
//   } else {
//     const formData = {
//       mailText: inputEmail.value,
//       passwordText: inputPassword.value,
//     };
//     console.log(formData);
//   }

//   form.reset();
// };

const formRef = document.querySelector(`.login-form`);
// const inputEmailRef = formRef.email;
// const inputPasswordRef = formRef.password;

formRef.addEventListener(`submit`, onFormRefSubmit);

function onFormRefSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені");
  } else {
    const formData = {
      mail: email.value,
      password: password.value,
    };

    event.currentTarget.reset();
    console.log(formData);
  }
}
