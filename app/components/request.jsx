'use client'

import { useRef } from "react"

export default function Searcher(){
    const methodRef = useRef(null);
    const urlRef = useRef(null);
    
    async function sendReq(){
        const response = await fetch(urlRef.current.value, {
            method : methodRef.current.value,
            headers : {
                "Content-Type": "application/json"
            }
        })
        if(response.ok){
            alert('EEEE')
        }
    }

    return(
        <div>
            <select name="methodSel" id="methods" ref={methodRef}>
                <option value="GET"> GET </option>
                <option value="POST"> POST </option>
                <option value="PUT"> PUT </option>
                <option value="DELETE"> DELETE </option>
            </select>
            <input type="text" name="url" id="urlinput" autoComplete="off" ref={urlRef} />

            <button id="request" onClick={sendReq}> SEND REQUEST </button>
        </div>
    )
}