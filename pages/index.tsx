import type { NextPage } from 'next'

import FormSection from '../components/design/formSection'
import CardSection from '../components/design/cardSection'
import axios from 'axios';

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { reduxData, reduxDatahange } from '../Services/Actions';

const Home: NextPage = (props:any) => {
  
  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(reduxDatahange(props.data))
        // console.log(props);
        
        // getPeopleData()
        // setTest()
    }, []);

    const getPeopleData = async () => {
      // console.log("Hello");
      // const res = await axios.get("http://localhost:3333/getPeoples")

      // dispatch(reduxData(props.data))

      dispatch(reduxDatahange(props.data))

      // console.log(res.data);
      

  }
  const setTest = async () => {

      dispatch(reduxDatahange([100]))
  }
  
  return (
    <div>
      <FormSection />
      <CardSection />
    </div>
  )
}

export async function getServerSideProps(context: any) {

  const res = await axios.get("http://localhost:3333/getPeoples")
  // const res = await fetch(`http://localhost:3333/getPeoples`)
  // const data = await res.json()
  
  return {
    props: {
      data: res.data
    }, // will be passed to the page component as props
  }
}

export default Home
