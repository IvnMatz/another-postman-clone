'use client'

// JSON.stringify( diccionario )  <---- RECUERDA ESTO 

import { useState } from "react"

export default function BodyWriter(){
    const [bodyType, cBodyType] = useState("none");

    let content;
    if(bodyType == "none"){
        content = "this request has no body"
    }

    return(
        <div className="bodyWriter">
            <div className="SelectBodyTabs">  
                <form>
                    <input type="radio" id="none" name="selTabs" onClick={() => {cBodyType("none")}} />
                    <label htmlFor="none" onClick={() => {cBodyType("none")} }>None</label>
                    <input type="radio"  id="raw" name="selTabs" onClick={() => {cBodyType("raw")} }/>
                    <label htmlFor="raw" onClick={() => {cBodyType("raw")} }>Raw</label>
                    <input type="radio" id="x-www-form-urlencoded" name="selTabs" onClick={() => {cBodyType("urlencoded")} }/>
                    <label htmlFor="x-www-form-urlencoded" onClick={() => {cBodyType("urlencoded")} }>x-www-form-urlencoded</label>
                    <input type="radio"  id="form-data" name="selTabs" onClick={() => {cBodyType("formdata")} }/>
                    <label htmlFor="form-data" onClick={() => {cBodyType("formdata")} }>Form-data</label>
                </form>
            </div>

            {content}

        </div>
    )
}