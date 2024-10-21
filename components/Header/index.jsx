import Image from "next/image";
import Link from "next/link";
import Logo from "/public/images/logo.jpg";
import Styles from "./header.module.scss";


const Header= () =>{    
    return <div className={Styles.container}>
            <div className={Styles.logo}>
            <Image src={Logo} alt="Logo"/> 
            </div>
        <div className={Styles.menu}>
                
                <Link href="">Inicio</Link>
                <Link href="">Quem Somos</Link>
                <Link href="">Planos</Link>
                
            
        </div>
        <div className={Styles.action}>
            <button className={Styles.button} >Fale Conosco</button>
        </div>


    </div>

}

export default Header;