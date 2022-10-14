import { useContext, useRef } from 'react'
import { StoreContext } from '../store/StoreProvider'

import Content from '../Content'

import styles from './Projects.module.css'
import { ProjectsFooter } from './ProjectsFooter'
import { ArrowLeftProject, ArrowRightProject, LinkSVG } from '../Svg'
import { moveToCardProject } from '../utils/utils'

const Projects = () => {
  const [store, dispatch] = useContext(StoreContext)
  const { projects } = store
  const contentProjects = useRef()
  let scrollContent = 0

  /* 
  a.parentNode.parentNode.childNodes[0].clientWidth
  a.parentNode.clientWidth
   */
  const nextCard = () => {
    scrollContent = moveToCardProject(
      contentProjects.current.id,
      projects.length,
      'right'
    )
    console.log('scrollContent', scrollContent)
    document.getElementById(contentProjects.current.id).scrollLeft = scrollContent
  }

  const previousCard = () => {
    scrollContent = moveToCardProject(
      contentProjects.current.id,
      projects.length,
      'left'
    )
    console.log('scrollContent', scrollContent)
    document.getElementById(contentProjects.current.id).scrollLeft = scrollContent
  }

  return (
    <section className={styles.Projects} id='Projects'>
      <Content>
        <h2 className='mb20'>Proyectos</h2>
      </Content>
      <Content>
        <div 
        ref={contentProjects}
        id='contentProjectsId'
        className={styles.ProjectsContent}>
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
        <div className={styles.ProjectsContentLeft} onClick={() => previousCard()}>
          <ArrowLeftProject styleSVG='ffffffc4'/>
        </div>
        <div className={styles.ProjectsContentRight} onClick={() => nextCard()}>
          <ArrowRightProject styleSVG='ffffffc4'/>
        </div>
      </Content>
    </section>
  )
}

export default Projects