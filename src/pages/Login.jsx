import { Component } from "react";
import { Toggler } from "../components/Toggler";
import styles from "./Login.module.css";
export class Login extends Component {
  constructor() {
    super();
    this.state = {
      login: '',
      password: '',
    };
    this.changeLogin = this.changeLogin.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.login = this.login.bind(this)

  }

  changeLogin(event) {
    this.setState({ login: event.target.value })
  }

  changePassword(event) {
    this.setState({ password: event.target.value })
  }

  login(event) {
    event.preventDefault()
  }

  render() {
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
            <form onSubmit={this.login} className={styles.form}>
              <h2>Вход</h2>
              <input className={styles.field} onChange={this.changeLogin} type="text" placeholder="Введите email или телефон" value={this.state.login} />
              <div className={styles.password}>
                <input className={styles.field} type="password" placeholder="Введите пароль" />
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
    )
  }
}