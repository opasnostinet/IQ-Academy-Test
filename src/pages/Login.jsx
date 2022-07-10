import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toggler } from "../components/Toggler";
import styles from "./Login.module.css";

export function Login(props) {
  const router = useNavigate();
  const [state, setState] = useState({
    login: '',
    password: '',
  });

  const changeLogin = (event) => setState({
    ...state,
    login: event.target.value,
  });
  const changePassword = (event) => setState({
    ...state,
    password: event.target.value
  });
  const login = (event) => {
    event.preventDefault();
    const body = new FormData();
    body.append('phone_or_mail', state.login);
    body.append('password', state.password);
    fetch('https://api.iq.academy/api/account/login', {
      method: "POST",
      body: body,
    }).then((response) => {
      return response.json();
    })
      .then((data) => {
        if (data.token === undefined) return;
        props.onUpdateToken(data.token);
        router("/dashboard");
      });
  }

  return (
    <div className={styles.login}>
      <div className={styles.half1}>
        <header className={styles.header}>
          <img className={styles.logo} src="./img/logo.svg" alt="logo" width="41px" />
          <h1 className={styles.title}>iq.academy</h1>
          <Toggler className={styles.languageTogglerMobile}></Toggler>
        </header>
        <div className={styles.slogan}>
          <p>Learning</p>
          <p>Management</p>
          <p>System</p>
          <picture className={styles.picture}>
            <source srcSet="./img/Saly-desktop-1x.png, ./img/Saly-desktop-2x.png 2x" media="(min-width: 700px)" />
            <img src="./img/Saly-mobile-1x.png" alt="Saly studies our courses" srcSet="./img/Saly-mobile-2x.png 2x" />
          </picture>
        </div>
      </div>

      <div className={styles.half2}>
        <img className={styles.crossDesktop} src="./img/cross.svg" alt="cross" />
        <div className={styles.half2Wrapper}>
          <Toggler className={styles.languageTogglerDesktop}></Toggler>
          <h1 className={styles.titleDesktop}>Настоящий мастер – это вечный ученик</h1>
          <form onSubmit={login} className={styles.form}>
            <h2>Вход</h2>
            <input className={styles.field} onChange={changeLogin} type="text" placeholder="Введите email или телефон" value={state.login} />
            <div className={styles.password}>
              <input className={styles.field} onChange={changePassword} type="password" placeholder="Введите пароль" value={state.password} />
              <img className={styles.eye} src="./img/eye.svg" alt="eye" />
              <img className={styles.question} src="./img/question.svg" alt="question" />
            </div>
            <input className={styles.submit} type="submit" value="войти" />
          </form>
          <footer className={styles.footer}>
            <span>Нет аккаунта?&nbsp;</span>
            <a href="/">Зарегистрироваться</a>
          </footer>
        </div>
      </div>
    </div>
  );
}