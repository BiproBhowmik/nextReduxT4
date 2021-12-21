import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { reduxData } from '../Services/Actions';
import { useSelector, useDispatch } from "react-redux";

const CardSection = () => {

    const dispatch = useDispatch();

    const myState = useSelector((state: any) => {
        return state.GlobalData
    });

    //   console.log(myState);


    const [getPeople, setPeople] = useState({
        data: [],
    })

    const [edit, setInput] = useState({
        isEdit: false,
        id: -1,
        name: "",
        email: "",
        title: "",
        image: "",
        index: -1
    })





    const deleteItem = async (item: any) => {

        if (item.id) {
            const res = await axios.post("http://localhost:3333/deletePeople", { id: item.id })
            // console.log(res.status);

            if (res.status == 200) {
                getPeopleData();
            }
        }
    }
    const editItem = async (item: any, index: any) => {

        if (item.id) {
            setInput({
                ...edit,
                id: item.id,
                isEdit: true,
                name: item.name,
                title: item.title,
                image: item.image,
                email: item.email,
                index: index
            })
            // const res = await axios.post("http://localhost:3333/deletePeople", {id: item.id}) 
        }
    }

    const handleClickUpdate = async () => {
        if (edit.name && edit.email && edit.title && edit.image) {

            const res = await axios.post("http://localhost:3333/editPeople", { ...edit })
            if (res.status == 200) {
                getPeopleData();

                // updatePeopleData( res.data )
                setInput({
                    ...edit,
                    id: -1,
                    isEdit: false,
                })
            }

        }
    }

    const handleChange = (event: { target: { name: string; value: string } }) => {
        setInput({
            ...edit,
            [event.target.name]: event.target.value
        })
    }

    const getPeopleData = async () => {
        // console.log("Hello");
        const res = await axios.get("http://localhost:3333/getPeoples")

        dispatch(reduxData(res.data))

        // console.log(res.data);


    }

    const handleImageChange = async (event: { target: { name: string; files: any } }) => {
        // console.log(event.target.files[0]);

        const formData = new FormData();

        formData.append(
            "file",
            event.target.files[0]
        );

        const res = await axios.post("http://localhost:3333/uploadFile", formData)

        // console.log(res.data.response);

        if (res) {
            setInput({
                ...edit,
                image: res.data.response
            })
        }


    }

    const showPeople = myState.map((item: any, index: React.Key | null | undefined) => {

        return (

            <div key={index} className="col-xl col-md col-sm col-12">


                <div className="_react_card_content">

                    <div className="_react_card_content_inner">

                        <p>
                            <span className="cross_icon" onClick={(() => deleteItem(item))}   >X &nbsp; </span>
                            <span onClick={((e) => editItem(item, index))}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M41.4853 13.4853L34.4142 6.41421C33.6332 5.63317 32.3668 5.63316 31.5858 6.41421L14.6153 23.3848L24.5147 33.2842L41.4853 16.3137C42.2663 15.5327 42.2663 14.2663 41.4853 13.4853ZM21.7995 34.8116L13.0879 26.1L9.66548 38.234L21.7995 34.8116Z" fill="black" />
                                </svg>
                            </span>
                        </p>


                        <div className="_react_card_img_wrap">
                            <img src={item.image} alt="Image" className="_react_card_img" />
                        </div>

                        {edit.isEdit && edit.index == index ?
                            <div>
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" value={edit.name} onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="inputEmail4">Email</label>
                                    <input type="email" name="email" value={edit.email} onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="title">Title</label>
                                    <input type="text" name="title" value={edit.title} onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="image">Image URL</label>
                                    <input type="file" onChange={handleImageChange} />
                                </div>
                                <div className="col-3 mx-auto">
                                    <button type="submit" className="btn btn-primary d-block w-100 py-2" onClick={handleClickUpdate}>Update</button>
                                </div>
                            </div>

                            :

                            <div className="_react_card_txt">
                                <h3 className="_react_card_name">{item.name}</h3>
                                <p className="_react_card_email">{item.email}</p>
                                <h4 className="_react_card_title">{item.title}</h4>
                            </div>

                        }
                    </div>

                </div>
            </div>
        )
    })


    return (
        <>
            <div className="_react_card_wrapper">
                <div className="_react_card_wrap">
                    <div className="container">
                        <div className="_react_card_content_wrap">
                            <div className="row">

                                {showPeople}

                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}



export default CardSection

