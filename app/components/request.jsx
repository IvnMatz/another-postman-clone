'use client'

import { useEffect, useRef, useState } from "react"

export default function Searcher( {params, Setresp, headers, body} ){
    const methodRef = useRef(null);
    const urlRef = useRef(null);

    const [response, setResponse] = useState({});

    useEffect( () => {
        let parameters = "?" ;
        let index = 0;
        for(let element of params){
            if(element.is_used){
                parameters += element.key.toString() + "=" + element.value.toString();
                if(params[index+1] && params[index+1].is_used){
                    parameters += "&";
                }
            }
            index++;
        }
        if(urlRef.current.value.indexOf("?") > 0){
            urlRef.current.value = urlRef.current.value.slice(0, urlRef.current.value.indexOf("?"));
        }
        
        urlRef.current.value += parameters;
    }, [params] )
    
    async function sendReq(){
        // CREACIÓN DE LOS HEADERS
        let hed = {};
        for(let element of headers){
            if(element.is_used){
                hed[element.key.toString()] = element.value.toString()
            }
        }

        // CREACIÓN DEL BODY
        let bod = {};
        for(let element of body){
            if(element.is_used){
                bod[element.key.toString()] = element.value.toString()
            }
        }

        const response = await fetch(urlRef.current.value, {
            method : methodRef.current.value,
            headers : hed,
            body : JSON.stringify(bod)
        })
        const obj = {
            status : response.status,
            status_txt : response.statusText,
            headers : response.headers,
            body : await response.text()

        }
        setResponse(obj);
        Setresp(obj);
    }

    return(
        <div className="requestDiv">
            <select name="methodSel" id="methods" ref={methodRef}>
                <option value="GET"> GET </option>
                <option value="POST"> POST </option>
                <option value="PUT"> PUT </option>
                <option value="DELETE"> DELETE </option>
            </select>
            <input type="text" name="url" id="urlinput" autoComplete="off" ref={urlRef}  />

            <button id="request" onClick={sendReq}> SEND REQUEST </button>
        </div>
    )
}