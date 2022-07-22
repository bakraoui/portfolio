import styles from "../styles/studyExperiences.module.css";


function StudyExperiences() {
  return (
    <section className={styles.study_experiences + ' container'} id='study-experiences'>
        <div className={styles.card_container}>
            <h1><span>St</span>udies<span className={styles.underline}></span></h1>
            <div className={styles.card}>
                <h4>Engineering cycle</h4>
                <p>ENSA AGADIR</p>
                <p>2020 - present </p>
                <p>This period is very important in my career, I continue my studies as software engineer.</p>
                <p>I have learnt web development (frontend - backend), Networking, Operating System (Linux)...and more.</p>
            </div>

            <div className={styles.card}>
                <h4>Preparatory classes</h4>
                <p>ENSA AGADIR</p>
                <p>2018 - 2020</p>
                <p>the first step after getting Baccalaureat graduation.</p>
                <p>this period helpt me discovering programming and algorithms, at 2018 I write my very first programme using algorithms and C language.</p>
            </div>

            <div className={styles.card}>
                <h4>Baccalaureat</h4>
                <p>BIRANZARAN FKIH BEN SALAH</p>
                <p>2017 - 2018 </p>
                <p>I graduated from Biranzaran at 2018, I get my Baccalaureat certificate in physical science branch with a respectful mark.</p>
                <p>it help me to access ENSA AGADIR.</p>
            </div>
        </div>

        <div className={styles.card_container}>
            <h1> <span>Ex</span>periences<span className={styles.underline}></span></h1>

            <div className={styles.card}>
                <h4>Software Developer</h4>
                <p>NAVA BUSINESS</p>
                <p>01 March - 31 Mai 2022</p>
                <p>PFA project, it is about Parking Management</p>
                <div>
                    <p>Modules : the interventions and the legal module</p>
                    

                    <ul>
                        <li>intervrntions : external or internal maintenance</li>
                        <li>legal module : contracts, tax vignette, technical visit and assurance. </li>
                    </ul>
                </div>
                <p> <b>technologies</b>  : Bootstrap, Reactjs, Spring boot, MySQL DB.</p>

            </div>

            <div className={styles.card}>
                <h4>Software Developer</h4>
                <p>SMART SOLUCE</p>
                <p>15 July - 31 August 2021</p>
                <p>I worked on a School Management System project.</p>
                <div>
                    <p>
                        the modules : marks management, absence, payments, courses, accounts management. <br />
                        3 accounts possible :
                    </p>
                    <ul>
                        <li>Student : can access courses and marks.</li>
                        <li>Teacher : can add marks, absences and documents.</li>
                        <li>Manager : can access all application features.</li>
                    </ul>
                </div>
                <p> <b>technologies</b>  : HTML, CSS, Bootstrap, PHP, MySQL and SQL.</p>
            </div>
        </div>
        
    </section>
  )
}

export default StudyExperiences