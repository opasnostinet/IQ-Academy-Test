import styles from "./Toggler.module.css";
export function Toggler(props) {
  return <div className={styles.toggler + ' ' + props.className}>
    <label className={styles.selected}> RU
      <input type="radio" name="language" value="ru" />
    </label>
    <div className={styles.separator}></div>
    <label> EN
      <input type="radio" name="language" value="en" />
    </label>
  </div>
}

