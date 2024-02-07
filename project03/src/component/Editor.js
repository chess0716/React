import { useEffect, useState , useCallback} from "react";
import "./Editor.css"
import { emotionList, getFormattedDate } from "../util";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import EmotionItem from "./EmotionItem";

const Ediotr = ({initData,onSubmit}) => {
    const [state, setState] = useState({
        date:getFormattedDate(new Date()),
        emotionID: 3,
        content:"",
    });
    const handleChangeDate = (e) => {
        setState({
            ...state,
            date: e.target.value,
        });
    };
    const handleChangeContent = (e) => {
        setState({
            ...state,
            content: e.target.value,
        });
    };
    const hanldeSubmit = () => {
        onSubmit(state);
    };
    const navigate = useNavigate();
    
    const handleOnGoBack = () => {
        navigate (-1);
    };
    
    const handleChangeEmotion = useCallback((emotionId) => {
        setState((state) => ({
            ...state,
            emotionId: emotionId,
        }));
    }, []);
    
    useEffect(() => {
        if (initData) {
            setState({
                ...initData,
                date: getFormattedDate(new Date(parseInt(initData.date))),
            });
        }
    },[initData]);
    return (
        <div className="Editor">
            <div className="editor_section">
                <h4>오늘의 날짜</h4>
                <div className="input_wrapper">
                    <input type="date" value={state.date}
                    onChange={handleChangeDate}></input>

                </div>
            </div>
            <div className="editor_section">
            <h4>오늘의 감정</h4>
            <div className="input_wrapper emotion_list_wrapper">
            {emotionList.map((it) => (
                <EmotionItem
                key={it.id}
                {...it}
                onClick={handleChangeEmotion}
                isSelected={state.emotionId === it.id}
                >

                </EmotionItem>
            ))}
            </div>
        </div>
        <div className="editor_section">
            
            <h4>오늘의 일기</h4>
            <div className="input_wrapper">
                <textarea placeholder="오늘은 어땠나요?"
                value={state.content} onChange={handleChangeContent}>

                </textarea>
            </div>
        </div>
        <div className="editor_section">
            {/* 작성완료 , 취소 */}
           
        </div>
        <div className="editor_section bottom_section">
            <Button text={"취소하기"} onClick={handleOnGoBack}></Button>
            <Button text={"작성 완료"} type={"positive"} onClick={hanldeSubmit}></Button>

        </div>
        </div>
    );
};
export default Ediotr;