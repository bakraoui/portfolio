import styles from "../styles/skills.module.css";
import Image from "next/image";

function Skills() {
  return (
    <section className={styles.skills + ' container'} id='skills'>
        <h1> <span>My</span> Skills<span className={styles.underline}></span></h1>
        
        <div className={styles.skills_container} >
            <div className={styles.card}>
                <h4>Front-End</h4>
                <p>
                    HTML, CSS, Bootstrap,<br />
                    JS, Reactjs, Nextjs, Angular
                </p>
            </div>

            <div className={styles.card}>
                <h4>Back-End</h4>
                <p>
                    PHP, Nodejs, Express,<br />
                    JEE, Hibernate, Spring boot
                </p>
            </div>

            <div className={styles.card}>
                <h4>Programming</h4>
                <p>
                    C, CPP,C#,<br />
                    Java, Python, Javascript.
                </p>
            </div>

            <div className={styles.card}>
                <h4>Modeling</h4>
                <p>
                    Merise, UML<br />
                </p>
            </div>
            
            <div className={styles.card}>
                <h4>Databases</h4>
                <p>
                    SQL, MySQL, Oracle<br />
                    MongoDB
                </p>
            </div>


            <div className={styles.card}>
                <h4>Tools</h4>
                <p>
                    NPM, Git, Github<br />
                </p>
            </div>
        </div>

    </section>
  )
}

export default Skills
