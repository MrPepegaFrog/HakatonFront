import style from "./message.module.scss"
interface IMessageProps {
    content: string;
    date: string; 
    isSent: boolean; 
}

const Message = ({ content, date, isSent }: IMessageProps) => {
    return (
       
        <div className={`${style.messageContainer} ${isSent ? style.sent : style.received}`}>
            <div className={style.messageHeader}>
                <span className={style.time}>{date}</span>
            </div>
            <div className={style.messageText}>
                <pre>{content}</pre>
            </div>
        </div>
    );
}

export default Message;