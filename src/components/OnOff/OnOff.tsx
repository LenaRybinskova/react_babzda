import s from "./OnOff.module.css"
import {useState} from "react";

type OnOffType = {
    onChange: (on:boolean) =>void
}

// НЕКОНТРОЛИРУЕМАЯ КОМПОНЕНТА ПЛОХА ТЕМ, ЧТО ОНА НЕ ПЕРЕДАЕТ РОДИТЕЛЮ ОБР СВЯЗЬ ( ВЕДЬ У НЕЕ И ТАК ЕСТЬ СВОЙ СТЕЙТ)
export const OnOff = (props: OnOffType) => {

    const [on, setOn] = useState(false)

    // используем инлайн стили
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display:"inline-block",
        padding:"2px",
        backgroundColor: on ? "green": "white"
    }

    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display:"inline-block",
        marginLeft:"2px",
        padding:"2px",
        backgroundColor: on ? "white": "red"
    }

    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display:"inline-block",
        marginLeft:"5px",
        backgroundColor:on ? "green": "red"
    }

const onClicked = ()=>{
    setOn(true);
    props.onChange(true)}


const offClicked = ()=>{
    setOn(false);
    props.onChange(false)
}

    return (
        // писала для стилизации модулями
        // <div className={s.container}>
        //     <span className={`${s.standart} ${s.on} ${!props.on && s.off}`}>ON</span>
        //     <span className={s.standart}>OFF</span>
        //     <span className={`${s.standart} ${s.circle} ${s.on} ${!props.on && s.off}`}></span>
        // </div>

        // делаем стиль инлайн
        <div>
            <div style={onStyle} onClick={onClicked}>ON</div>
            <div style={offStyle} onClick={offClicked}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}