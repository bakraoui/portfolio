import Link from "next/link";
import { useState } from "react";
import styles from "../styles/navbar.module.css";

function Navbar() {

    const [isNavToggled, setisNavToggled] = useState(false);
    
    return ( 
        <nav className={styles.nav} id='navbar'>
            <div 
                className={styles.navbar_toggler} 
                onClick={()=>setisNavToggled(!isNavToggled)}
              >
               <span><i className="fas fa-bars"></i></span>
            </div>
            <ul className={isNavToggled ? styles.toggle : ''}>
                <li>
                    <Link href="#about">
                        <a>
                            <span><i className="fa-solid fa-user"></i> </span>
                            <span>About</span> 
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="#study-experiences">
                        <a>
                            <span><i className="fa-solid fa-graduation-cap"></i></span>
                            <span>Std & Ex</span> 
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="#skills">
                        <a>
                            <span><i className="fa-solid fa-briefcase"></i></span>
                            <span>Skills</span> 
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="#projects">
                        <a>
                            <span><i className="fa-regular fa-rectangle-list"></i></span>
                            <span>Projects</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="#contact">
                        <a>
                            <span><i className="fa-solid fa-envelope"></i></span>
                            <span>Contact</span>
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>

     );
}


export default Navbar;