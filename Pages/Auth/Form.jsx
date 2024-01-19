import { useState } from "react";
import './form.css'
import { validate } from "./components/Validate/validate";

// eslint-disable-next-line react/prop-types
export const Form = ({login}) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;

    setData({ ...data, [property]: value });
    validate({ ...data, [property]: value },setError, error);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    login(data)
  }
  return (
    <div className="Login-body">
    <form onSubmit={handleSubmit} className="rick-and-morty-form">
      <div>
        Email:
        <input
          type="email"
          placeholder="Email..."
          name="email"
          value={data.email}
          onChange={handleChange}
          />
        <span>{error.email}</span>
      </div>
      
      <div>
        Password:
        <input
          type="password"
          placeholder="Password..."
          name="password"
          value={data.password}
          onChange={handleChange}
          />
          <br/>
        <span>{error.password}</span>
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
  );
};
