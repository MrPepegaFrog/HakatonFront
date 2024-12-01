import { useState } from "react"
import ChatField from "../../widgets/chatField/ChatField"
import ControllBlock from "../../widgets/controllBlock/ControllBlock"
import LeftBar from "../../widgets/LeftBar/LeftBar"
import RightBar from "../../widgets/rightBar/RightBar"
import style from './mainPage.module.scss'
import WelcomeBlock from "../../shared/ui/WelcomeBlock/WelcomeBlock"

const MainPage = () => {
    const [history, setHistory] = useState<{ date: string; content: string }[]>([]);
    const [messages, setMessages] = useState<{ date: string; content: string, isSent: boolean }[]>([]);
    const addToHistory = (content: string) => {
        const newEntry = { date: new Date().toLocaleString(), content };
        setHistory(prevHistory => [...prevHistory, newEntry]);
    };
    const addMessage = (content: string,  isSent: boolean = true) => {
        const newMessage = { date: new Date().toLocaleString(), content, isSent };
        setMessages(prevMessages => [...prevMessages, newMessage]);
        addToHistory(content);
    };

   

    return (
    <div className={style.container}>
        <LeftBar/>
        <div className={style.chatContainer}>
            {messages.length === 0 ? (
                <WelcomeBlock/>
            ):
            (
                <ChatField messages={messages}/>
            )}
            
            <ControllBlock addToHistory={addMessage}/>
        </div>
        <RightBar history={history}/>
    </div>
    )
}

export default MainPage