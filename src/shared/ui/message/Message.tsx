import style from "./message.module.scss";
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedDarkAtom } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
                {content ? ( // Проверяем, есть ли контент
                    isSent ? (
                        <pre className={style.codeBlock}>{content}</pre>
                    ) : (
                        <ReactMarkdown 
                            components={{
                                code({  className, children, ...props }) {
                                    const match = /language-(\w+)/.exec(className || '');
                                    return   match ? (
                                        <SyntaxHighlighter
                                            style={solarizedDarkAtom as any}
                                            language={match[1]}
                                            PreTag="pre"
                                            {...props}
                                        >
                                            {String(children).replace(/\n$/, '')}
                                        </SyntaxHighlighter>
                                    ) : (
                                        <code className={className} {...props}>
                                            {children}
                                        </code>
                                    );
                                }
                            }}
                        >
                            {content}
                        </ReactMarkdown>
                    )
                ) : (
                    <span className={style.noContent}>Сообщение пустое</span>
                )}
            </div>
        </div>
    );
}

export default Message;



/**
 * import style from "./message.module.scss"
import ReactMarkdown from 'react-markdown';
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
                {isSent ? (<pre>{content}</pre>):(<ReactMarkdown>{content}</ReactMarkdown>)}
                
            </div>
        </div>
    );
}

export default Message;
 */