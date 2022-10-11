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
        <div className={styles.box}>
          <section>
            <h2>Instituto</h2>
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
            <h2>Online</h2>
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