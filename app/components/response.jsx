import { useEffect, useRef, useState } from "react";


export default function Response({ responseData }){
    const textRef = useRef(null);
    const [aTab, cTab] = useState("body");
    const [status, setStatus] = useState("");
    const [id, setID] = useState("");
    let content = "";

    if(aTab == "body"){
        content = <textarea ref={textRef} disabled={true}></textarea>
    }else if(aTab == "headers"){
        content = "headers"
    }

    let dynamicId = "";
    const statusCode = parseInt(responseData?.status);
    if (statusCode >= 200 && statusCode < 300) dynamicId = "ok";
    else if (statusCode >= 300 && statusCode < 400) dynamicId = "red";
    else if (statusCode >= 400 && statusCode < 500) dynamicId = "clientError";
    else if (statusCode >= 500) dynamicId = "serverError";

    useEffect( () => {
        if(Object.keys(responseData).length > 0 && aTab=="body"){
            textRef.current.value = responseData.body;
            let statusText = responseData.status.toString();
            setStatus(statusText);
        }
    } )

    return(
        <div className="ResponseDiv">
            <div className="ResponseTabs">
                <button onClick={() => cTab("body")}> Body </button>
                <button onClick={() => cTab("headers")}> Headers </button>

                <div className="StatusDiv" id={dynamicId} >
                    {status}
                </div>
            </div>
            {content}
        </div>
    );
}