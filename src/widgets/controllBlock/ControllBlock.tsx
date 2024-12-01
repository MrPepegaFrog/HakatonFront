import PrompInput from '../../shared/ui/prompInput/PromptInput';
import style from './controllBlock.module.scss'
interface IControllBlockProps {
    addToHistory: (content: string) => void;
}
const ControllBlock = ({addToHistory}: IControllBlockProps) => {
    return <div className={style.container}>
        <PrompInput addToHistory={addToHistory}/>
    </div>
}

export default ControllBlock;