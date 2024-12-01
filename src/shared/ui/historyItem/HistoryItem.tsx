import style from './historyItem.module.scss'
import ChatSVG from '../../assets/logo/chat.svg'

interface IHistoryItemProps {
   
    content: string;
}

const HistoryItem = ({ content}: IHistoryItemProps) => {
    return (
      
      <div className={style.container}>
      <ChatSVG/>
      <div className={style.historyItem}>
        <span className={style.content}>{content}</span>
      </div>
      </div>
    )
}

export default HistoryItem; 