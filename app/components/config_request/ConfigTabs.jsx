'use client'

import { useState } from "react"
import ParamsTab from "./params";

export default function ConfigTabs({ setParams, params }){

    const [aTab, changeTab] = useState("params");
    let content;

    if(aTab == "params"){
        content = <ParamsTab setParams={setParams} params={params} />;
    }else if(aTab == "headers"){
        content = "headers"
    }else if(aTab == "body" ){
        content = "body"
    }

    return(
        <div className="configTabs">
            <div className="TabsOptions">
                <button onClick={() => { changeTab("params") }}> Params </button>
                <button onClick={ () => {changeTab("headers")} }> Headers </button>
                <button onClick={()=>{changeTab("body")}}> Body </button>
                
            </div>
            {content}
        </div>
    )
}