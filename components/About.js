import styles from "../styles/about.module.css";
import Image from "next/image";
import img from '../public/img.jpg'
function About() {

  return (
    <section className={`${styles.about} container`} id='about'>
        <div className={`${styles.ball} ${styles.right}`}></div>
        <div className={`${styles.ball} ${styles.left}`}></div>
        <h1> 
          <span>Ab</span>out Me<span className={styles.underline}></span>
        </h1>
        <div className={styles.about_content}>
          <div className={styles.text}>
              <p>   Hi,</p>
              <p> before digging deep into my website I would like to introduce My self. </p>
              <p>
                I am Bakraoui Ayoub, I am a software engineer from Fkih ben Salah, Morocco, I am 22 years old,
                currently, I am a student in the Natioanl School of Applied Sciences Agadir (ENSAA) 
                where I am studying about software engineering.
              </p>
              <p> the day of 27-06-2022, PFA is done with success. </p>
              <p>I start creating my portfolio at 16-07-2022</p>
          </div>

          <div className={styles.image_container}>
              <Image src={img} className={styles.image} />
          </div>
        </div>
        
        
    </section>
  )
}

export default About