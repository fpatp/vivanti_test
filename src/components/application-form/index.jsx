// import { useState } from 'react'

import styles from './index.module.scss'
import checkmark from '../../assets/icons/checkmark.png'

export function ApplicationForm() {
  // const [name, setName] = useState

  return (
    <article className={styles.form}>
      <span>Заявка на диагностику</span>
      <span>
        Доверьте свои медицинские исследования надежным капибарам-лаборантам и получите качественные
        результаты в кратчайшие сроки!
      </span>
      <div className={styles.formInput}>
        <input type="text" placeholder="Имя" />
        <input type="text" placeholder="Имя" />
        <input type="text" placeholder="Имя" />
      </div>
      <button>
        Отправить
        <img src={checkmark} alt="checkmark" />
      </button>
    </article>
  )
}
