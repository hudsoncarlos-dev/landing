import Styles from "./welcome.module.scss";
import Button from "../Button/index";

const Welcome = () =>{
    return <div className={Styles.container}>
        <div className={Styles.text}><h1>
        Bem-vindo à Funerária Paz Eterna
            </h1>
            <p>Na Funerária Paz Eterna, oferecemos serviços completos e personalizados para apoiar famílias em momentos delicados. Com compaixão e respeito, estamos comprometidos em garantir um atendimento digno e atencioso, sempre cuidando de cada detalhe para proporcionar tranquilidade e conforto. Nossa equipe está à disposição 24 horas para auxiliá-lo com toda a atenção que você e sua família merecem.</p>
            <Button title="Aumentar Vendas" kind={"secondary"}/>
        </div>
        <div className={Styles.image}></div>
    </div>
}

export default Welcome;