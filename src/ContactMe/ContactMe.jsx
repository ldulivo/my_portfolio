import { useState } from 'react'
import Content from '../Content'
import { ContactMeBlobsvg } from './ContactMeBlobsvg'
import styles from './ContactMe.module.css'

const ContactMe = () => {
  const [dataInput, setDataInput] = useState({
    name: {text: '', isCorrect: true},
    email: {text: '', isCorrect: true},
    message: {text: '', isCorrect: true},
  })

  const handleInput = (event) => {
    setDataInput({
      ...dataInput,
      [event.target.name]: {text: event.target.value, isCorrect: event.target.value !== '' ? true : false}
    })
    console.log('dataInput', dataInput)
  }

  return (
    <section>
      <Content>
        <h2>Contáctame</h2>
      </Content>
      <Content>
        <div className={styles.box}>
          <div className={styles.boxContent}>
            <form action="">
              <label>
                <input
                  type="text"
                  name='name'
                  placeholder='Nombre'
                  onChange={handleInput}
                />
                {!dataInput.name.isCorrect && <span>Ingresa un nombre</span>}
              </label>

              <label>
                <input
                  type="email"
                  name='email'
                  placeholder='Correo electrónico'
                  onChange={handleInput}
                />
                {!dataInput.email.isCorrect && <span>Ingresa un correo</span>}
              </label>

              <label>
                <textarea
                  name="message"
                  placeholder='Tu mensaje'
                  onChange={handleInput}
                ></textarea>
                {!dataInput.message.isCorrect && <span>Ingresa un mensaje</span>}
              </label>
            </form>
            <ContactMeBlobsvg fill='#e1893d' />
          </div>
        </div>
      </Content>
    </section>
  )
}

export default ContactMe
