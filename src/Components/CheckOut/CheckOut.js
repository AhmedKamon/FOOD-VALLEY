import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import './CheckOut.css'

const CheckOut = () => {
    const [userId, setUserId] = useContext(UserContext);
    console.log(userId.email)
    const { id } = useParams()
    const [item, setItem] = useState([])
    const items = item.filter(i => i._id == id)
    console.log(items[0])
    
    

    const userData = {
        email : userId.email,
        name : userId.displayName,
        date : new Date()
    }
    // console.log(userData)
    
    const date = new Date()
    // console.log( date)
    // const  [name, _id,price,wight]  = items[0];


    const handlePlaceOrder = () =>{
        const newItem = {...userData, ...items[0]}
        console.log(newItem)
        fetch('https://apple-cobbler-55673.herokuapp.com/moreItem', {
           method:'POST',
           headers: {
               'Content-Type' : 'application/json'
           },
           body: JSON.stringify(newItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
       
    }

    useEffect(() => {
        fetch('https://apple-cobbler-55673.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItem(data))
    }, [item])
    return (

        <div className='row justify-content-between align-items-center' style={{ marginTop:'2%', padding:'2%', color: 'white', backgroundColor: '#343a40', paddingLeft: '5%', paddingRight: '5%', borderBottom: '5px solid #343a40' }}>

            <div className='row align-items-center'>
                <img style={{ width: '20%', borderRight: '1px solid white' }} src={items[0]?.imageURL} alt="" />
                <div style={{ marginLeft: '10px' }}>
                    <h3>Name: {items[0]?.name}</h3>
                    <h3>Price: {items[0]?.price} take</h3>
                    <h3 > Quantity: 1 </h3>
                </div>
            </div>
            <div >
                <button onClick={handlePlaceOrder}  >Place Order</button>
            </div>
            <h1>User email : {userId.email}</h1>
        </div>

    );
};

export default CheckOut;