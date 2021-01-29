const validate = {
    email: (values, errors)=>{
        if (!values.email) {
            errors.email = "Введите email";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Введите корректные данные";
          }
    },
    password: (values, errors) =>{
        if (!values.password) {
            errors.password = "Введите пароль";
          } else if (
            !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.{8,})/.test(values.password)
          ) {
            errors.password = "Слабый пароль";
          }
    },
    passwordAuth: (values, errors) =>{
        if (!values.password) {
            errors.password = "Введите пароль";
          } 
    },
    repeatPassword: (values, errors) =>{
        if (!values.repeatPassword) {
            errors.repeatPassword = "Повторите пароль";
          } else if (values.repeatPassword !== values.password) {
            errors.password = "Пароли не совпадают";
            errors.repeatPassword = "Пароли не совпадают";
          }
    },
    username: (values, errors) =>{
        console.log(values);
        if (!values.username) {
            errors.username = "Введите логин";
          } else if (values.username.length <= 2) {
            errors.username = "Введите логин длинне 3-х символов";
          }
    }

}

export default validate;