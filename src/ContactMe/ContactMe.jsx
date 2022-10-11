import { useState } from 'react'
import Content from '../Content'
import { ContactMeBlobsvg } from './ContactMeBlobsvg'
import styles from './ContactMe.module.css'
import { CheckSVG } from '../Svg'
import Spinner from '../Spinner/Spinner'

const ContactMe = () => {
  const [spinnerActive, setSpinnerActive] = useState(false)
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
    if(event.target.name === 'email') {
      const validRegEx = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
      if ( dataInput.email.text !== '' && !dataInput.email.text.match(validRegEx) ) {
        setDataInput({
          ...dataInput,
          [event.target.name]: {text: event.target.value, isCorrect: false}
        })
      }
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(!dataInput.name.isCorrect) return
    if(!dataInput.email.isCorrect) return
    if(!dataInput.message.isCorrect) return

    setSpinnerActive(true)
    event.target.submit('submit')
  }

  return (
    <section className={styles.ContactMe} id='ContactMe'>
      <Content>
        <h2>Contáctame</h2>
      </Content>
      <Content>
        <div className={styles.box}>
          <div className={styles.boxContent}>
            <h3>Ponte en contacto</h3>
            <p>Si tienes alguna proyecto, sugerencia o incluso quieres saludarme...
            por favor llena el siguiente formulario y te responderé a la brevedad.
            </p>
            <form
              action="https://formsubmit.co/ldulivo@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
            >
              <label>
                <input
                  type="text"
                  name='name'
                  placeholder='Nombre'
                  onChange={handleInput}
                />
                {!dataInput.name.isCorrect && <span>Ingresa un nombre</span>}
                {(dataInput.name.isCorrect && dataInput.name.text.length >= 3) && <CheckSVG styleSVG='2ad508' />}
              </label>

              <label>
                <input
                  type="email"
                  name='email'
                  placeholder='Correo electrónico'
                  onChange={handleInput}
                />
                {(!dataInput.email.isCorrect && dataInput.email.text.length <= 0) && <span>Ingresa un correo</span>}
                {(dataInput.email.isCorrect && dataInput.email.text.length >= 3) && <CheckSVG styleSVG='2ad508' />}
              </label>

              <label>
                <textarea
                  name="message"
                  placeholder='Tu mensaje'
                  onChange={handleInput}
                ></textarea>
                {!dataInput.message.isCorrect && <span>Ingresa un mensaje</span>}
              </label>

              <input type="submit" value="Enviar" className='btn' />

              <input type="hidden" name="_next" value={`${window.location.origin}${window.location.pathname}#ContactFormContent`}/>
              <input type="hidden" name="_captcha" value="false"/>
              <input type="hidden" name="_subject" value={`My Portfolio - ${dataInput.name.text}`}/>
            </form>
          </div>
        </div>
      </Content>
      <ContactMeBlobsvg fill='#e1893d' />
      {
        (spinnerActive)
          ? <Spinner />
          : null
      }
    </section>
  )
}

export default ContactMe
