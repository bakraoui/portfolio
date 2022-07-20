import React, { useState, useEffect } from 'react'
import styles from '../styles/footer.module.css'

function Footer() {
    const [currentYear, setcurrentYear] = useState(null);

    useEffect(() => {
        const date = Date();

        setcurrentYear(date.split(' ')[3])
        
    }, []);
    
  return (
    <footer className={styles.footer}>
        <p>@copyright {currentYear!== null ? currentYear : ''} </p>
    </footer>    
  )
}

export default Footer