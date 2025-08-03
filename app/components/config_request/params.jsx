'use client'

import { useEffect, useRef, useState } from "react";

function ParamRow( {data, onToggle} ){

    return(
        <tr>
            <td> <input type="checkbox" name="" id="" checked={data.is_used} onChange={onToggle}/> </td>
            <td> {data.key} </td>
            <td> {data.value} </td>
            <td> {data.description} </td>

        </tr>
    );
}

export default function ParamsTab( {setParams, params} ){
    const [data, cData] = useState([]);
    const keyRef = useRef(null);
    const ValueRef = useRef(null);
    const decRef = useRef(null);
    const activeRef = useRef(null);

    useEffect( () => {
        cData(params);
    }, [] );

    function handleClick(){
        let obj = {
            'key' : keyRef.current.value,
            'value' : ValueRef.current.value,
            'description' : decRef.current.value,
            'is_used' : activeRef.current.checked
        }

        setParams([...data, obj]);
        cData([...data, obj]);
        
    }

    function handleToggleIsUsed(index){
        const newData = [...data];
        newData[index].is_used = !newData[index].is_used;
        cData(newData);
        setParams(newData);
    }

    return(
        <div className="ParamsTab">
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
                    {data.map( (d, index) => (
                        <ParamRow key={index} data={d} onToggle={() => handleToggleIsUsed(index)} />
                    ) )}
                </tbody>
            </table>
        </div>
    );
}