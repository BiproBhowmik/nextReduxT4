import axios from 'axios';
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { reduxData, reduxDatahange } from '../../Services/Actions';

export default function main() {
    const dispatch = useDispatch();
    // useEffect(() => {
    //     // console.log(props);
        
    //     // getPeopleData()
    //     // setTest()
    // }, []);
    
    // const getPeopleData = async () => {
    //     // console.log("Hello");
    //     const res = await axios.get("http://localhost:3333/getPeoples")

    //     // dispatch(reduxData(res.data))

    //     dispatch(reduxDatahange(res.data))

    //     // console.log(res.data);
        
    // }
    // const setTest = async () => {

    //     dispatch(reduxDatahange([100]))
    // }
    return (
        <div>
            <Link href={'/'}>Home</Link>
            <Link href={'/test'}>Test</Link>
            <Link href={'/antDPicture'}>Picture Upload</Link>
        </div>
    )
}
