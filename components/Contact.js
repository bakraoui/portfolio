import styles from '../styles/contact.module.css'
import { useRef, useState } from 'react';
import { isValidName,isValidEmail, isValidMessage } from '../function/ContactValidation';
import Link from 'next/link';
// import emailjs from '@emailjs/browser';\
import emailjs from "emailjs-com";

function Contact() {
    const [name, setName] = useState('');
    const [isNameValid, setIsNameValid] = useState(true);

    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);

    const [message, setMessage] = useState('');
    const [isMessageValid, setisMessageValid] = useState(true);

    const [btnSubmited, setBtnSubmited] = useState(false);
    const [isSucceed, setisSucceed] = useState(false);
    const [isFailed, setisFailed] = useState(false);

    const form = useRef()

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

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        if (
            email.length == 0 || name.length === 0 || message.length === 0 || 
            !isEmailValid || !isMessageValid || !isNameValid) {
           
            setisSucceed(false)
            setBtnSubmited(true)

            setisFailed(true) 

        }else{ 

            
            emailjs.sendForm('service_buacz9p', 'portfolio-template', form.current, 'ss5rn_DBGkmEUV0n5')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            setisFailed(false)
            setisSucceed(true)
            setBtnSubmited(true)
        }

        setTimeout(() => {
            setBtnSubmited(false)
        }, 5000);
    }

  return (
    <section className={styles.contact + ' container'} id='contact'>
        <h1> <span>Co</span>ntact Me<span className={styles.underline}></span></h1>
        <div className={styles.row}>
            
            <p className={` ${styles.message} 
                    ${btnSubmited === true ? styles.btn_submit : ''}
                    ${isFailed === true ? styles.failed : ''}
                    ${isSucceed === true ? styles.succeed : ''}
                    
                    `}>
                { isSucceed===true ? ' The email was sent with success' : ''}
                { isFailed===true ? 'The email not sent, try again.' : ''}
                
            </p>
            <div className={styles.col}>
                <form ref={form} method="post" onSubmit={handleSubmit}>
                    <div className={styles.form_group}>
                        <label htmlFor="name" >Name</label>
                        <input  type="text" 
                                name='name'
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
                                name='email'
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
                        { !isMessageValid ? <span style={{color : 'red'}}>the character &apos;\&apos; not allowed</span> : ''}

                    </div>

                    <button type="submit" className={styles.submit_button}>Send</button>
                </form>
            </div>

            <div className={styles.col + ' ' + styles.media_contacts}>
               

                <Link href='tel:0651584863' target='_blank'>
                    <a className={styles.card + ' ' + styles.tele}>
                        <span><i className="fas fa-phone"></i></span>
                        <span>+212 651 58 48 63</span>
                    </a>
                </Link>
                <Link href='mailto:ayyoub.bakraoui@gmail.com' target='_blank' rel="noreferrer">
                    <a className={styles.card}>
                        <span><i className="fab fa-google"></i></span>
                    </a>
                </Link>
                <Link href='to:0651584863'  target='_blank' rel="noreferrer">
                    <a className={styles.card }>
                        <span><i className="fab fa-facebook-f"></i></span>
                    </a>
                </Link>

                <a href='https://linkedin.com/in/ayoub-bakraoui'  rel="noreferrer" target='_blank' className={styles.card}>
                    <span><i className="fab fa-linkedin-in"></i></span>
                </a>

                <a href='https://github.com/bakraoui' target='_blank' rel="noreferrer" className={styles.card}>
                    <span><i className="fab fa-github"></i></span>
                </a>

                <a href='https://www.hackerrank.com/ayoubbakraoui' target='_blank' rel="noreferrer" className={styles.card}>
                    <span><i className="fab fa-hackerrank"></i></span>
                </a>

                <a href='https://web.facebook.com/Bakraoui.ayyoub' target='_blank' rel="noreferrer" className={styles.card}>
                    <span><i className="fab fa-facebook-f"></i></span>
                </a>

                <a href='https://twitter.com/bakraoui_ayoub' target='_blank' rel="noreferrer" className={styles.card}>
                    <span><i className="fab fa-twitter"></i></span>
                </a>
                
                <a href='https://www.instagram.com/ayoub_bakraoui/' target='_blank' rel="noreferrer" className={styles.card}>
                    <span><i className="fab fa-instagram"></i></span>
                </a>

            </div>
            
        </div>
    </section>
  )
}

export default Contact