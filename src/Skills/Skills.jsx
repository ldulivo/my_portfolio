import styles from './Skills.module.css'
import Content from '../Content'
import { Bootstrap, CloudSVG, CssSVG, GitGitHubSVG, HtmlSVG, JavascriptSVG, LinuxSVG, MongoDBSVG, MySQLSVG, NextSVG, NodeSVG, NpmSVG, ReactSVG, SassSVG } from '../Svg'


const Skills = () => {
  return (
    <section className={styles.Skills} id='Skills'>
      <Content>
        <h2>Skills</h2>
      </Content>
      <Content>
        <div className={styles.box}>
          <div className={styles.card}>
            <h3>Frontend</h3>
            <ul>
              <li>
                <p>HTML</p>
                <HtmlSVG styleSVG='E34F26' />
              </li>
              <li>
                <p>CSS</p>
                <CssSVG styleSVG='1572B6' />
              </li>
              <li>
                <p>Javascript</p>
                <JavascriptSVG styleSVG='F7DF1E' />
              </li>
              <li>
                <p>React.Js</p>
                <ReactSVG styleSVG='61DAFB' />
              </li>
              <li>
                <p>Next.Js</p>
                <NextSVG styleSVG='ffffff' />
              </li>
              <li>
                <p>Sass</p>
                <SassSVG styleSVG='CC6699' />
              </li>
              <li>
                <p>Bootstrap</p>
                <Bootstrap styleSVG='7952B3' />
              </li>
            </ul>
          </div>
          <div className={styles.card}>
            <h3>Backend & Sistemas</h3>
            <ul>
              <li>
                <p>Node.Js</p>
                <NodeSVG styleSVG='339933' />
              </li>
              <li>
                <p>NPM</p>
                <NpmSVG styleSVG='CB3837' />
              </li>
              <li>
                <p>Git & GitHub</p>
                <GitGitHubSVG styleSVG='ffffff' />
              </li>
              <li>
                <p>MySQL</p>
                <MySQLSVG styleSVG='4479A1' />
              </li>
              <li>
                <p>MongoDB</p>
                <MongoDBSVG styleSVG='47A248' />
              </li>
              <li>
                <p>Linux</p>
                <LinuxSVG styleSVG='FCC624' />
              </li>
              <li>
                <p>Cloud computing</p>
                <CloudSVG styleSVG='4285F4' />
              </li>
            </ul>
          </div>
        </div>
      </Content>
    </section>
  )
}

export default Skills