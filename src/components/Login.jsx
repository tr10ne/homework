import React, { useState } from "react";
import CryptoJS from "crypto-js";

const Login = ({ onLogin }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();
    const inputPassword = CryptoJS.MD5(password).toString();
    if (
      login === "denis" &&
      inputPassword === "827ccb0eea8a706c4c34a16891f84e7b"
    ) {
      onLogin();
      setErrorMessage("");
    } else {
      setErrorMessage("Логин и пароль неверны, попробуйте ввести ещё раз");
    }
  };

  return (
    <div className="login-page">
      <h1>Добро пожаловать!</h1>
      <form onSubmit={loginSubmit}>
        <input
          type="text"
          id="login"
          placeholder="Логин"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          required
        />
        <input
          type="password"
          id="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn" type="submit">
          Отправить
        </button>
      </form>
      {errorMessage && (
        <div id="notification-container">
          <div className="notification error show">{errorMessage}</div>
        </div>
      )}
    </div>
  );
};

export default Login;
