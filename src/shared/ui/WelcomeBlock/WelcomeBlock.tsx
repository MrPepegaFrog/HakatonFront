import Text from '../typography';
import style from './welcomeBlock.module.scss'
import LogoWithoutHat from '../../assets/logo/logoWithouthat.svg'
const WelcomeBlock = () => {
    return (
        <div className={style.container}>
            <div className={style.title}><Text>Добро пожаловать в</Text></div>
            <div className={style.logoContainer}><LogoWithoutHat/></div>
            <div className={style.subTitle}><Text>Ваш помощник в мире программирования </Text></div>
        </div>
    )
}

export default WelcomeBlock;