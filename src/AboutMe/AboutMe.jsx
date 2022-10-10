import Content from '../Content'
import styles from './AboutMe.module.css'

const LeoBox = `${process.env.PUBLIC_URL}/static/LeoBox.png`
const AboutMe = () => {
  return (
    <section className={styles.AboutMe}>
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
                <p>Soy informático con experiencia en redes y sistemas.</p>
                <p>En 2015 terminé mi formación Universitaria y recientemente completé un curso de DESARROLLO WEB-Js/NODE Js FULL STACK del Ministerio de Educación del Gobierno de la Ciudad de Buenos Aires (Argentina).</p>
                <p>Gracias a mi trayectoria laboral he adquirido buena capacidad para analizar y resolver problemas. Me gusta el trabajo en equipo, ya que puedo aprender y enseñar.</p>
              </main>
              <footer>
                <a href="#" className="btn">Mi CV</a>
              </footer>
            </div>
          </div>
          <div className={styles.boxFooter}>
                <a href="#" className="btn">Mi CV</a>
          </div>
        </div>
      </Content>
    </section>
  )
}

export default AboutMe