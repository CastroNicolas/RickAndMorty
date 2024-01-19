// export const validate = (data, setError, error) => {

//     if (!data.email) setError({ ...error, email: "Email vacío" });
//     else {
//       if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/.test(data.email))
//         setError({ ...error, email: "Formato de email incorrecto" });
//       else {
//         setError({ ...error, email: "" });
//       }
//     }

//     if (!data.password) setError({ ...error, password: "Password vacío" });
//     else {
//       if (!/^(?=.*[0-9])[a-zA-Z0-9]{6,10}$/.test(data.password))
//         setError({ ...error, password: "La contraseña debe tener al menos un número y tener una longitud entre 6 y 10 caracteres" });
//       else {
//         setError({ ...error, password: "" });
//       }
//     }

// }

export const validate = (data, setError) => {
  setError((prevError) => ({
    ...prevError,
    email: !data.email ? "Email vacío" : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/.test(data.email)
      ? ""
      : "Formato de email incorrecto",
    password: !data.password ? "Password vacío" : /^(?=.*[0-9])[a-zA-Z0-9]{6,10}$/.test(data.password)
      ? ""
      : "La contraseña debe tener al menos un número y tener una longitud entre 6 y 10 caracteres",
  }));
};
