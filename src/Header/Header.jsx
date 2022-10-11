import { useState, useEffect } from 'react'
import Content from '../Content'
import { ArrowNextDown, Github, Linkedin } from '../Svg'
import { moveToPositionPage } from '../utils/utils'
import { Blobsvg } from './Blobsvg'
import styles from  './Header.module.css'
import { ListOne } from './ListOne'

const Header = () => {
  const imgLeo = `${process.env.PUBLIC_URL}/static/BN_solo_leo.png`
  const list = ['Next.Js', 'Javascript', 'HTML', 'CSS', 'Sass']
  const [current, setCurrent] = useState(0)
  const [currentTime, setcurrentTime] = useState(0)

  const test = 0

  const changeCurrent = () => {
    setCurrent((current >= list.length - 1) ? 0 : current + 1)
    return 0
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentTime((currentTime >= 18) ? changeCurrent : currentTime + 1)
    }, 100);
    return (() => clearInterval(interval))
  }, [currentTime])

  if (0 === test) {
    return (
      <header className={styles.Header}>
        <Content>
          <div className={styles.Top}>
            <a href="https://www.linkedin.com/in/ldulivo/" target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
            <a href="https://github.com/ldulivo" target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
          <Blobsvg />
          </div>
        </Content>

        <Content MaxHeight={true} >
          <div className={styles.text}>
            <h1>Hola, soy Leonardo D'Ulivo Desarrollador WEB <span className={styles.Span}>React.js</span> Junior</h1>
            <div className={styles.box} >
              {list.map((li, index) =>
                <ListOne
                  li={li}
                  key={index}
                  index={index}
                  current={current}
                  currentTime={currentTime}
                />
              )}
            </div>
          </div>
          <div className={styles.arrowNext} onClick={() => moveToPositionPage('Projects')}>
            <ArrowNextDown styleSVG='e1893d'/>
          </div>
        </Content>

        <img src={imgLeo} alt="Leonardo" className={styles.imgLeo} />

      </header>
    )
  }

  return (
    <section className={styles.Header}>





      <div className='content'>
        <div className={styles.text}>
          <h1>Hola, soy Leonardo D'Ulivo Desarrollador WEB Junior <span className={styles.Span}>React.js</span></h1>
          <div className={styles.box} >
            {list.map((li, index) =>
              <ListOne
                li={li}
                key={index}
                index={index}
                current={current}
                currentTime={currentTime}
              />
            )}            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header