import Styles from "./button.module.scss";


const Button =({title,kind}) => {
    const generationClassByKind =() =>{
        if (kind ==="secondary") return Styles.secondary;
        return Styles.primary
    }
 return <button className={`${Styles.button} ${generationClassByKind  ()}`}  >{title}</button>
}

export default Button;