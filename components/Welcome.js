import styles from '../styles/welcome.module.css'
import Link from 'next/link'
// import cv from '../public/CV.pdf'
function Welcome() {
  return (
    <header className={styles.header + ' container'}>
        <div className={styles.intro}>
            <p>Welcome to my Portfolio</p>
            <p>I am <span><span>B</span>akraoui Ayoub</span></p>
            <div className={styles.animation_text}>
              <p className={styles.static_text}>I am </p> 
              <ul>
                <li><span>Software Engineer</span></li>
                <li><span>Developer</span></li>
              </ul>
            </div>
            
            <div className={styles.btn + ' ' }>
                <Link  href='/'>
                  <a>Download CV</a>
                </Link>
            </div>

           
        </div>

        <div className={styles.image}>
            
        </div>
    </header>
  )
}

export default Welcome