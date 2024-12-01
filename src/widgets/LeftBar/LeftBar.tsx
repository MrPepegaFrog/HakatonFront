import style from "./leftBar.module.scss"
import Logo from '../../shared/assets/logo/logo.svg'
import Title from "../../shared/ui/title/Title"
import Temp from "../../shared/ui/modelBlock/ModelTemp"
const LeftBar = () => {
    return (
        <section>
            <div className={style.container}>
                <div className={style.logoContainer}><Logo/></div>
                <Title title="Список моделей"/>
                <Temp/> 
                {/* заглушка */}
            </div>
        </section>
    )
}

export default LeftBar
