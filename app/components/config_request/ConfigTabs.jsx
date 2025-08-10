'use client'

import { useState } from "react"
import ParamsTab from "./params";
import BodyWriter from "./body";
import HeadersTab from "./headers";

export default function ConfigTabs({ setParams, params, setHeaders, headers, setBody, body }){

    const [aTab, changeTab] = useState("params");
    let content;

    if(aTab == "params"){
        content = <ParamsTab setParams={setParams} params={params} />;
    }else if(aTab == "headers"){
        content = <HeadersTab headers={headers} setHeaders={setHeaders} />;
    }else if(aTab == "body" ){
        content = <BodyWriter setBody={setBody} body={body} />
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