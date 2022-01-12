import React from 'react'

import {useLocation} from 'react-router-dom'
import { useRouter } from 'next/router'

const Joy = () => {
    // const {search} = useLocation()
    const router = useRouter()
    console.log(router.query);
    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default Joy
