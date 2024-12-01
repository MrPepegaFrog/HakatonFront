import Text, { FontsEnum } from '../typography';
import style from './title.module.scss'

interface ITitleProps {
    title: string;
}


const Title = ({title} : ITitleProps) => {
    return(
        <div className={style.container}>
            <div className={style.borderSmall}></div>
            <Text variant={FontsEnum.BOLD} className={style.text}>{title}</Text>
            <div className={style.borderBig}></div>
        </div>
    )
}

export default Title