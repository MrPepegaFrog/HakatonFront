import style from './temp.module.scss';
import Evraz from '../../assets/logo/evraz.svg'
import Text from '../typography';
const Temp = () => {
    return (
        <div className={style.container}>
            <Evraz/>
            <Text className={style.title}>Евраз</Text>
        </div>
    )
}


export default Temp;


/**
 * Этот блок не завершен он должен предоставить пользователю выбор разных моделей 
 * для проверки кода 
 */