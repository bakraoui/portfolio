import styles from '../styles/contact.module.css'
import { useState } from 'react';
import { isValidName,isValidEmail, isValidMessage } from '../function/ContactValidation';
import Link from 'next/link';
function Contact() {
    const [name, setName] = useState(null);
    const [isNameValid, setIsNameValid] = useState(true);

    const [email, setEmail] = useState(null);
    const [isEmailValid, setIsEmailValid] = useState(true);

    const [message, setMessage] = useState(null);
    const [isMessageValid, setisMessageValid] = useState(true);

    const handleName = (e) => {
        const name = e.target.value;
        if (isValidName(name) === false) {
            setIsNameValid(false)
        }else {
            setIsNameValid(true)
            setName(name)
        }
    }

    const handleEmail = (e) => {
        const email = e.target.value;
        if (!isValidEmail(email)) {
            setIsEmailValid(false)
        }else {
            setIsEmailValid(true)
            setEmail(email)
        }
    }

    const handleMessage = (e) => {
        const message = e.target.value;
        if (!isValidMessage(message)) {
            setisMessageValid(false)
        }else {
            setisMessageValid(true)
            setMessage(message)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (isEmailValid && isMessageValid && isNameValid) {
            // code to send request to server
        }else{ 
            // code for error
        }
    }

  return (
    <section className={styles.contact + ' container'} id='contact'>
        <h1> <span>Co</span>ntact Me<span className={styles.underline}></span></h1>
        <div className={styles.row}>

            <div className={styles.col}>
                <form method="post" onSubmit={handleSubmit}>
                    <div className={styles.form_group}>
                        <label htmlFor="name" >Name</label>
                        <input  type="text" 
                                className={
                                    `${styles.form_control} 

                                     ${ isNameValid===true ? '' : styles.not_valid}
                                    `
                                } 
                                id='name'
                                onChange={handleName}
                               />
                        { !isNameValid ? <span style={{color : 'red'}}>special characters not allowed</span> : ''}
                    </div>

                    <div className={styles.form_group} >
                        <label htmlFor="email" >Email</label>
                        <input type="email" 
                               className={
                                `${styles.form_control} 

                                 ${ isEmailValid===true ? '' : styles.not_valid}
                                `
                            } id='email'
                               onChange={handleEmail} />
                    { !isEmailValid ? <span style={{color : 'red'}}>invalid email format</span> : ''}

                    </div>

                    <div  className={styles.form_group} >
                        <label htmlFor="message" >Message</label>
                        <textarea 
                            name="message" 
                            className={
                                `${styles.form_control} 

                                 ${ isMessageValid===true ? '' : styles.not_valid}
                                `
                            } 
                            id="message" maxLength='200' rows='5' 
                            onChange={handleMessage}
                            />
                        { !isMessageValid ? <span style={{color : 'red'}}>the character '\' not allowed</span> : ''}

                    </div>

                    <button type="submit" className={styles.submit_button}>Send</button>
                </form>
            </div>

            <div className={styles.col + ' ' + styles.media_contacts}>
               

                <Link href='tel:0651584863' target='_blank'>
                    <a className={styles.card}>
                    <span><i className="fas fa-phone"></i></span>
                    </a>
                </Link>
                <Link href='mailto:ayyoub.bakraoui@gmail.com' target='_blank'>
                    <a className={styles.card}>
                        <span><i className="fab fa-google"></i></span>
                    </a>
                </Link>
                <Link href='to:0651584863' target='_blank'>
                    <a className={styles.card}>
                        <span><i className="fab fa-facebook-f"></i></span>
                    </a>
                </Link>
                <Link href='https://linkedin.com/in/ayoub-bakraoui' target='_blank'>
                    <a className={styles.card}><i className="fab fa-linkedin-in"></i></a>
                </Link>

                <Link href='https://github.com/bakraoui' target='_blank'>
                    <a className={styles.card}>
                        <span><i className="fab fa-github"></i></span>
                    </a>
                </Link>

                <Link href='https://www.hackerrank.com/ayoubbakraoui' target='_blank'>
                    <a className={styles.card}>
                        <span><i className="fab fa-hackerrank"></i></span>
                    </a>
                </Link>
                <Link href='https://web.facebook.com/Bakraoui.ayyoub' target='_blank'>
                    <a className={styles.card}>
                        <span><i className="fab fa-facebook-f"></i></span>
                    </a>
                </Link>
                <Link href='https://twitter.com/bakraoui_ayoub' target='_blank'>
                    <a className={styles.card}>
                        <span><i className="fab fa-twitter"></i></span>
                    </a>
                </Link>
                <Link href='https://www.instagram.com/ayoub_bakraoui/' target='_blank'>
                    <a className={styles.card}>
                        <span><i className="fab fa-instagram"></i></span>
                    </a>
                </Link>

            </div>
            
        </div>
    </section>
  )
}

export default Contact