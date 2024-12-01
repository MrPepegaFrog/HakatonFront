import PrompInput from '../../shared/ui/prompInput/PromptInput';
import style from './controllBlock.module.scss'
interface IControllBlockProps {
    addMessage: (content: string) => void;
}
const ControllBlock = ({addMessage}: IControllBlockProps) => {
    return <div className={style.container}>
        <PrompInput addMessage={addMessage}/>
    </div>
}

export default ControllBlock;