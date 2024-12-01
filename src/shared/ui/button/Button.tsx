import { ReactNode } from 'react'
import style from './button.module.scss'

interface IButtonProps{
    children?: ReactNode;
    onClick?: ()=> void;
    
}

const Button = ({children, onClick}: IButtonProps) => {
    return (<button className={style.button} onClick={onClick}>{children}</button>)
}

export default Button