'use client'

// JSON.stringify( diccionario )  <---- RECUERDA ESTO 

import { useRef, useState, useEffect } from "react"

function RawWriter( setBody, body ){
    const textRef = useRef(null);

    return(
        <div className="RawWriter">
            <textarea ref={textRef} onChange={() => {setBody(textRef.current.value)}} ></textarea>
        </div>
    )
}

// X-WWW-FORM-URLENCODED -----------------------------------------------------------

function BodyRow( {data, onToggle} ){

    return(
        <tr>
            <td> <input type="checkbox" name="" id="" checked={data.is_used} onChange={onToggle}/> </td>
            <td> {data.key} </td>
            <td> {data.value} </td>
            <td> {data.description} </td>

        </tr>
    );
}


function BodyTab( {setBody, body } ){
    const [datad, cData] = useState([]);
    const keyRef = useRef(null);
    const ValueRef = useRef(null);
    const decRef = useRef(null);
    const activeRef = useRef(null);

    useEffect( () => {
        cData(body);
    }, [] );

    function handleClick(){
        let obj = {
            'key' : keyRef.current.value,
            'value' : ValueRef.current.value,
            'description' : decRef.current.value,
            'is_used' : activeRef.current.checked
        }

        setBody([...datad, obj]);
        cData([...datad, obj]);
        
    }

    function handleToggleIsUsed(index){
        const newData = [...datad];
        newData[index].is_used = !newData[index].is_used;
        cData(newData);
        setBody(newData);
    }

    return(
        <div className="ParamsTab">
            Body
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th> Key </th>
                        <th> Value </th>
                        <th> Description </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> <input type="checkbox" name="" id="" defaultChecked="true" ref={activeRef} /> </td>
                        <td> <input type="text" name="" id="" ref={keyRef} /> </td>
                        <td> <input type="text" name="" id="" ref={ValueRef} /> </td>
                        <td> <input type="text" name="" id="" ref={decRef} /> </td>
                        <td onClick={handleClick}> <button> Add </button> </td>
                    </tr>
                    {datad.map( (d, index) => (
                        <BodyRow key={index} data={d} onToggle={() => handleToggleIsUsed(index)} />
                    ) )}
                </tbody>
            </table>
        </div>
    );
}

// EXPORT DEFAULT FUNCTION ----------------------------------------------------------

export default function BodyWriter( {setBody, body} ){
    const [bodyType, cBodyType] = useState("none");

    let content;
    if(bodyType == "none"){
        content = "this request has no body"
    }else if(bodyType == "raw"){
        //content = <RawWriter setBody={setBody} body={body} />
    }else if(bodyType=="urlencoded"){
        content = <BodyTab setBody={setBody} body={body} />
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