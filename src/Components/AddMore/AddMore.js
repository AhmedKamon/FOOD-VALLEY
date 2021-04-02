import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import './AddMore.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';

const AddMore = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null)
    const [newData, setNewData] = useState([])



    const [items, setItems] = useState([])


    useEffect(() => {
        fetch('https://apple-cobbler-55673.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])




    useEffect(() => {
        fetch('https://apple-cobbler-55673.herokuapp.com/moreData')
            .then(res => res.json())
            .then(data => setNewData(data));
    }, [])

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            wight: data.wight,
            price: data.price,
            imageURL: imageURL
        }

        const url = `https://apple-cobbler-55673.herokuapp.com/addItem`
        console.log(eventData)
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side res', res))


    };
    const handleDelateBtn = item => {
        console.log('click click',item  )
        
        

        // {
        //     id == item._id && <li>removed</li>
        // }
        

    }

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'b6ee316af945dbda5d89d617c2ac6a29')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div className='mainBody'>
            <form style={{ border: '1px solid gray', marginTop: '20%', padding: '10%', margin: '20px', backgroundColor: '#343a40' }} className='formBody' onSubmit={handleSubmit(onSubmit)}>
                <label style={{ fontWeight: '400', color: 'white' }} htmlFor=""> Name :</label>
                <input name="name" placeholder='name here' ref={register} />
                {errors.name && <span>This field is required</span>}
                <br />
                <br />
                <label style={{ fontWeight: '400', color: 'white' }} htmlFor=""> Price :</label>
                <input name='price' placeholder='price here' ref={register({ required: true })} />
                <br />
                <br />
                <label style={{ fontWeight: '400', color: 'white' }} htmlFor=""> Wight :</label>
                <input name='wight' placeholder='wight here' ref={register({ required: true })} />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <label style={{ fontWeight: '400', color: 'white' }} htmlFor=""> Upload image :</label>
                <input name="exampleRequired" type='file' onChange={handleImageUpload} />
                <br />
                <br />
                <input style={{ borderRadius: '50px' }} type="submit" value='Add More' />
                <div>
                    <h1>Total Orders : {newData.length}</h1>
                    {
                        items.map(item => <li style={{ color: 'white' }} >{item.name} 
                            < FontAwesomeIcon onClick={() => handleDelateBtn(item)} style={{ cursor: 'pointer', color: 'red' }} icon={faTrash} /> 
                        </li>)

                    }
                </div>
            </form>

        </div>
    );
};

export default AddMore;