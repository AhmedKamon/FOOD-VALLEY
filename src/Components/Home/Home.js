import React, { useEffect, useState } from 'react';
import { Spinner, Button } from 'react-bootstrap';
import SingleItem from '../../SingleItem/SingleItem';
import './Home.css'

const Home = () => {
    const [items, setItems] = useState([])


    useEffect(() => {
        fetch('https://apple-cobbler-55673.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (


        <div className='row body'>
            {
                items.length === 0 &&
                <div className="justify-content-md-center" style={{marginLeft:'25%', marginTop:'', padding:'20%'}}>
                    <Button className="justify-content-md-center" variant="primary" disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </Button>
                </div>
            }
            {
                items.map(item => <SingleItem item={item}></SingleItem>)
            }
        </div>
    );
};

export default Home;