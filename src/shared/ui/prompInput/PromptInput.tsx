import style from './prompInput.module.scss'
import ChatSVG from '../../assets/logo/chat.svg'
import Arrow from '../../assets/logo/arrow.svg'
import FileSend from '../../assets/logo/file.svg'
import Button from '../button/Button'
import { useState } from 'react'
import { Base64 } from 'js-base64'
interface PrompInputProps {
    addMessage: (content: string, isSent?: boolean) => void;
}

const PrompInput = ({addMessage}: PrompInputProps) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [fileName, setFileName] = useState<string | null>(null);
    const [fileContent, setFileContent] = useState<string | null>(null);
    console.log(fileName); 

       

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFileName(file.name);
            setInputValue(`Прикрепленный файл: ${file.name}`); 
            const reader = new FileReader();
            reader.onload = (e) => {
                setFileContent(e.target?.result as string); 
                setInputValue(`Прикрепленный файл: ${file.name}`);
            };
            reader.readAsText(file);
        }
        event.target.value = '';
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
        setFileContent(null);
    };
    const handleSend = async () => {
        let contentToSend = inputValue;

        
        if (fileContent) {
             contentToSend = fileContent; 
        }
        console.log(inputValue)
        console.log(fileContent)
        console.log("================")
        console.log(contentToSend)
        if (contentToSend) {
            const requestData = {
                command: "text-review",
                data: Base64.encode(contentToSend)
                
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

                
                const result = await response.json();

                
                addMessage(contentToSend, true);
                if (result == null){
                    addMessage("Нейросеть недоступна", false);
                }else{
                    addMessage(result.answer, false);
                }
               
                setInputValue('');
                setFileName(null);
                setFileContent(null); 
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








/*

import style from './prompInput.module.scss'
import ChatSVG from '../../assets/logo/chat.svg'
import Arrow from '../../assets/logo/arrow.svg'
import FileSend from '../../assets/logo/file.svg'
import Button from '../button/Button'
import { useState } from 'react'
import { Base64 } from 'js-base64'
interface PrompInputProps {
    addMessage: (content: string, isSent?: boolean) => void;
}

const PrompInput = ({addMessage}: PrompInputProps) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [fileName, setFileName] = useState<string | null>(null);
    const [fileContent, setFileContent] = useState<string | null>(null);
    console.log(fileName); 

       

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFileName(file.name);
            setInputValue(`Прикрепленный файл: ${file.name}`); 
            const reader = new FileReader();
            reader.onload = (e) => {
                setFileContent(e.target?.result as string); 
                setInputValue(`Прикрепленный файл: ${file.name}`);
            };
            reader.readAsText(file);
        }
        event.target.value = '';
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
        setFileContent(null);
    };
    const handleSend = async () => {
        let contentToSend = inputValue;

        
        if (fileContent) {
            contentToSend = inputValue; 
        }
        console.log(inputValue)
        console.log(fileContent)
        if (contentToSend) {
            const requestData = {
                command: "text-review",
                data: Base64.encode(contentToSend)
                
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

                
                const result = await response.json();

                
                addMessage(contentToSend, true);
                if (result == null){
                    addMessage("Нейросеть недоступна", false);
                }else{
                    addMessage(result.answer, false);
                }
               
                setInputValue('');
                setFileName(null);
                setFileContent(null); 
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


*/


