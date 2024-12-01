import HistoryItem from "../../shared/ui/historyItem/HistoryItem";
import Title from "../../shared/ui/title/Title"
import Text, { FontsEnum } from "../../shared/ui/typography"
import style from "./rightBar.module.scss"


interface IChatEntry {
    date: string;
    content: string;
}

interface IRightBarProps {
    history: IChatEntry[];
}

const RightBar = ({history}:IRightBarProps) => {
    return (
        <section>
            <div className={style.container}>
                <div className={style.userContainer}>
                    <div className={style.version}><Text  variant={FontsEnum.LIGHT}>Версия: 1.0.0</Text></div>
                </div>
                <Title title="История чатов"/>
                <div className={style.historyContainer}>
                    {history.map((entry, index) => (
                        <HistoryItem key={index}  content={entry.content} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RightBar
