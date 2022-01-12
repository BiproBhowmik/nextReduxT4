import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function ProductDetails() {
    const router = useRouter()

    var q:any = router.query.id

    const [arrayValue, setarrayValue]:any = useState(
        {
            inputValue: "",
            arr: []
        }
    )

    const listItems = arrayValue.arr.map((item:any)=>
        <li key={item}> {item} </li>
    );

    const pushToarray = (event:any)=>{
        if(event.key === 'Enter' && event.target.value != ""){
            setarrayValue(
                {
                    ...arrayValue,
                    arr: [ event.target.value, ...arrayValue.arr ],
                    inputValue: ""
                }
            )
            // arr.push(value)
            // console.log('enter press here! ', arr)
        }
    }

    const assignValue = (event:any)=>{
        setarrayValue(
            {...arrayValue,
            [event.target.name]: event.target.value}
        )
    }

    return (
        <div>
            <input type="text" name='inputValue' value={arrayValue.inputValue} onKeyPress={pushToarray} onChange={assignValue} />
            {listItems}
        </div>
    )
}
