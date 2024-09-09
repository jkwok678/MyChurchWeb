import { useState } from "react";
import Markdown from 'react-markdown'

export interface DevotionProps {
    title: string;
    intro: string;
    devo: string;

}
export function Devotion({
    title,
    intro,
    devo
}: DevotionProps) {
    const [showDevo, toggleShowDevo] = useState(false);
    return (

        <>
            <h2 >{title}</h2>
            <h3>{intro}</h3>
            <button onClick={() => toggleShowDevo(!showDevo)}><span>{!showDevo ? "Show Devo" : "Hide Devo"}</span></button>
            {showDevo && <Markdown>{devo}</Markdown>}
        </>
    );
}

