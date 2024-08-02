import { useState } from 'react'

import styles from './index.module.scss'
import checkmark from '../../assets/icons/checkmark.png'
import markSendForm from '../../assets/icons/send_form.png'

export function ApplicationForm() {
  const [lastName, setLastName] = useState('')
  const [name, setName] = useState('')
  const [patronumic, setPatronymic] = useState('')
  const [emptyField, setEmptyField] = useState(false)
  const [sendForm, setSendForm] = useState(false)

  const handlerButton = () => {
    if (!lastName || !name || !patronumic) {
      setEmptyField(true)
      return
    }

    setSendForm(true)
  }

  return (
    <article id="application-form" className={sendForm ? styles.formSend : styles.form}>
      {sendForm ? (
        <div className={styles.formSendMessage}>
          <img src={markSendForm} alt="send form" />
          <span>Спасибо за предоставленную информацию, мы свяжемся с вами в ближайшее время.</span>
        </div>
      ) : (
        <>
          <span>Заявка на диагностику</span>
          <span>
            Доверьте свои медицинские исследования надежным капибарам-лаборантам и получите
            качественные результаты в кратчайшие сроки!
          </span>
          <div className={styles.formInput}>
            <input
              className={emptyField && !lastName ? styles.formInputEmpty : styles.formInputActive}
              type="text"
              placeholder="Фамилия"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              className={emptyField && !name ? styles.formInputEmpty : styles.formInputActive}
              type="text"
              placeholder="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className={emptyField && !patronumic ? styles.formInputEmpty : styles.formInputActive}
              type="text"
              placeholder="Отчество"
              value={patronumic}
              onChange={(e) => setPatronymic(e.target.value)}
            />
          </div>
          <button onClick={handlerButton}>
            Отправить
            <img src={checkmark} alt="checkmark" />
          </button>
        </>
      )}
    </article>
  )
}
