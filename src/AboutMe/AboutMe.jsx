import Content from '../Content'
import styles from './AboutMe.module.css'

const LeoBox = `${process.env.PUBLIC_URL}/static/LeoBox.png`
const AboutMe = () => {
  return (
    <section className={styles.AboutMe} id='AboutMe'>
      <Content>
        <h2 className='mb20'>Sobre mi</h2>
      </Content>
      <Content>
        <div className={styles.box}>
          <div className={styles.boxImg}>
            <div className={styles.insideBox}>
              <img src={LeoBox} alt="Leonardo" />
            </div>
          </div>
          <div className={styles.boxText}>
            <div className={styles.insideBoxText}>
              <header>
                <h3>Leonardo D'Ulivo</h3>
                <h4>Desarrollador WEB <span>React.js</span> Junior.</h4>
              </header>
              <main>
                <p>Soy desarrollador web Junior, busco oportunidad para poner en práctica mis conocimientos en React JS, HTML, CSS y Javascript, entre otras tecnologías.</p>
                <p>Cuento con título de estudios terciarios en redes y telecomunicaciones de una Universidad Argentina. Me gusta el trabajo en equipo y tengo experiencia en mantenimiento de ordenadores y servidores linux.</p>
                <p>Mi objetivo es poder trabajar en desarrollo web.</p>
              </main>
              <footer>
                <a
                  href={`${process.env.PUBLIC_URL}/static/CV_DUlivo_Leonardo_Ariel.pdf`}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >Mi CV</a>
              </footer>
            </div>
          </div>
          <div className={styles.boxFooter}>
                <a
                  href={`${process.env.PUBLIC_URL}/static/CV_DUlivo_Leonardo_Ariel.pdf`}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >Mi CV</a>
          </div>
        </div>
      </Content>
    </section>
  )
}

export default AboutMe