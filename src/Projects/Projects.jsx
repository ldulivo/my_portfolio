import { useContext } from 'react'
import { StoreContext } from '../store/StoreProvider'

import Content from '../Content'

import styles from './Projects.module.css'
import { ProjectsFooter } from './ProjectsFooter'
import { LinkSVG } from '../Svg'

const Projects = () => {
  const [store, dispatch] = useContext(StoreContext)
  const { projects } = store

  return (
    <section className={styles.Projects} id='Projects'>
      <Content>
        <h2 className='mb20'>Proyectos</h2>
      </Content>
      <Content>
        <div className={styles.ProjectsContent}>
          <div className={styles.box} style={{width: `${projects.length * 300}px`}} >
            {projects.map((card, index) =>
              <a key={index} className={styles.card}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.cardContent}>
                  <header>
                    <h3>{card.h3}</h3>
                    <h4>{card.h4}</h4>
                  </header>
                  <div className={styles.cardImg}>
                    <img src={card.img} alt="imagen" />
                  </div>
                  <ProjectsFooter tech={card.tech} />
                </div>
              </a>
            )}
          </div>
        </div>
      </Content>
    </section>
  )
}

export default Projects