import { useEffect, useRef, useState } from 'react'
import { returnURL, scrollOff } from '.'
import styles from './Dialog.module.css'

const Dialog = () => {
  const dialogId = useRef()
  const loading = useRef(0)
  const [dialogModal, setDialogModal] = useState(false)

  useEffect(() => {
    if(loading.current === 0) {
      loading.current = 1
      return
    }

    (dialogModal)
      ? scrollOff(dialogId.current.id)
      : returnURL(dialogId.current.id)
  }, [dialogModal])

  useEffect(() => {
    if(window.location?.hash === '#ContactFormContent') setDialogModal(!dialogModal)
  }, [])


  return (
    <dialog
      onClick={() => setDialogModal(!dialogModal)}
      className={styles.Dialog}
      ref={dialogId}
      id='dialogIdModal'
    >
      <h3>Mensaje enviado!</h3>
      <p>A la brevedad estaré en contacto contigo.</p>
    </dialog>
  )
}

export default Dialog