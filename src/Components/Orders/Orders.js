import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';


const Orders = () => {
    const [userId,setUserId] = useContext(UserContext);
    const [newData, setNewData] = useState([])
    useEffect(() => {
        fetch('https://apple-cobbler-55673.herokuapp.com/moreData?email=' + userId.email)
        .then(res => res.json())
        .then(data => setNewData(data));
    }, [])
    return (
        <div style={{backgroundColor:'#343a40', textAlign:'center', padding:'8%'}}>
            <h1>orders</h1>
            <h1>Total Orders : {newData.length}</h1>
                    {
                        newData.map(data => <li style={{color:'white'}}>{data.name} <br/> User Email: {data.email} <br/>
                        Order Date : {data.date}
                        </li>)
                    }
        </div>
    );
};

export default Orders;