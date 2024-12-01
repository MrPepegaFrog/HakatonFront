import style from './prompInput.module.scss'
import ChatSVG from '../../assets/logo/chat.svg'
import Arrow from '../../assets/logo/arrow.svg'
import FileSend from '../../assets/logo/file.svg'
import Button from '../button/Button'
import { useState } from 'react'
import { Base64 } from 'js-base64'
interface PrompInputProps {
    addToHistory: (content: string) => void;
}

const PrompInput = ({addToHistory}: PrompInputProps) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [fileName, setFileName] = useState<string | null>(null);
    
    console.log(fileName); 

       

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFileName(file.name);
            setInputValue(`Прикрепленный файл: ${file.name}`); 
        }
    };

    const handleFileClick = () => {
        const fileInput = document.getElementById('fileInput') as HTMLInputElement;
        if (fileInput) {
            fileInput.click(); 
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(event.target.value);
        setFileName(null); 
    };
    const handleSend  = async () => {
        if (inputValue) {
            
            const requestData = {
                 command: "text-review",
                data: Base64.encode(inputValue)
            };
           
            try {
                const response = await fetch('http://localhost:8000/request', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestData),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                // Обработка ответа, если необходимо
                const result = await response.json();
                console.log('Success:', result);
                
                // Добавляем введенное значение в историю
                addToHistory(inputValue);
                addToHistory(result.answer)
                setInputValue('');
                setFileName(null);
            } catch (error) {
                console.error('Error:', error);
            }
            
        }
    };
    return (
        <div className={style.container}>
            <ChatSVG />
            <textarea 
                className={style.input}
                placeholder='Введите код или приложите его файлом...' 
                value={inputValue} 
                onChange={handleInputChange}
                
            />
            <input 
                type="file" 
                id="fileInput"
                style={{ display: 'none' }} 
                onChange={handleFileChange} 
            />
            <Button onClick={handleFileClick}>
                <FileSend />
            </Button>
            <Button onClick={handleSend}>
                <Arrow />
            </Button>
        </div>
    );
}

export default PrompInput



