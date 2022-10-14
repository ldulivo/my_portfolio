import styles from './Academic.module.css'
import Content from '../Content'
import { ArrowRight, CalendarSVG, GlobeSVG, MapSVG } from '../Svg'
import { StoreContext } from '../store/StoreProvider'
import { useContext } from 'react'

const Academic = () => {
  const [store, dispatch] = useContext(StoreContext)
  /* console.log('store', store.academic) */
  const {institute = [], online = []} = store.academic

  return (
    <section className={styles.Academic} id='Academic'>
      <Content>
        <h2>Formación</h2>
      </Content>
      <Content>
        <div className={`${styles.card} ${styles.uncuyo}`}>
          <header>
            <CalendarSVG styleSVG='ffffff' />
            <p>2012 - 2015</p>
          </header>
          <main>
            <h3>Tecnicatura Universitaria en Redes de Datos y Telecomunicaciones</h3>
            <h4>Universidad Nacional de Cuyo - Argentina.</h4>
          </main>
          <footer>
            <p>Instalar, administrar y reparar servidores. Conocer los protocolos de red tales como TCP/IP, HTML, SSH, FTP, entre otros.</p>
            <p>Mantenimiento y administración de Redes de computadoras LAN y WAN.</p>
            <p>Seleccionar, instalar y especificar cableado e instalaciones para redes.</p>
            <a
              href='https://www.uncuyo.edu.ar/estudios/carrera/tecnicatura-universitaria-en-redes-de-datos-y-telecomunicaciones'
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>sitio web</p>
              <ArrowRight styleSVG='e1893d' />
            </a>
          </footer>
        </div>
      </Content>
      <Content>
        <div className={styles.box}>
          <section>
            <h2>Cursos de Instituto</h2>
            {institute.map((academic, index) =>
              <div key={index} className={`${styles.card} ${academic.important ? styles.cardImportant : ''}`}>
                <span className={styles.dot}></span>
                <header>
                  <CalendarSVG styleSVG='ffffff' />
                  <p>{academic.header}</p>
                </header>
                <main>
                  <h3>{academic.h3}</h3>
                  <h4><MapSVG styleSVG='ffffff' />{academic.h4}</h4>
                </main>
                <footer>
                  {academic.footer.map((fo, i) =>
                    <p key={i}>{fo}</p>
                  )}
                  <a
                    href={academic.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>sitio web</p>
                    <ArrowRight styleSVG='e1893d' />
                  </a>
                </footer>
              </div>
            )}
          </section>

          <section>
            <h2>Otros Cursos Online</h2>
            {online.map((academic, index) =>
              <div key={index} className={`${styles.card} ${academic.important ? styles.cardImportant : ''}`}>
                <span className={styles.dot}></span>
                <header>
                  <CalendarSVG styleSVG='ffffff' />
                  <p>{academic.header}</p>
                </header>
                <main>
                  <h3>{academic.h3}</h3>
                  <h4><GlobeSVG styleSVG='ffffff' />{academic.h4}</h4>
                </main>
                <footer>
                  {academic.footer.map((fo, i) =>
                    <p key={i}>{fo}</p>
                  )}
                  <a
                    href={academic.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>ver certificado</p>
                    <ArrowRight styleSVG='e1893d' />
                  </a>
                </footer>
              </div>
            )}
          </section>
        </div>
      </Content>
    </section>
  )
}

export default Academic