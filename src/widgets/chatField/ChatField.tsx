import Message from '../../shared/ui/message/Message';
import style from './chatField.module.scss'
interface IChatFieldProps {
    messages: { date: string; content: string; isSent: boolean }[];
}
const ChatField = ({messages}:IChatFieldProps) => {
    return (
        <div className={style.container}>
       
            {messages.map((message, index) => (
                <Message 
                    key={index} 
                    date={message.date} 
                    content={message.content} 
                    isSent={message.isSent} 
                />
            ))}
        
    </div>
    )
}

export default ChatField