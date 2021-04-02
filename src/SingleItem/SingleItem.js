import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleItem.css'

const SingleItem = ({item}) => {
    console.log(item)
    const {name, _id,price,wight} = item
    console.log(_id)
    
    return (
        <div className='container col-md-4 col-sm-12' style={{marginTop:'2%', placeItems:'center', paddingLeft:'5%'}} >
            <div className='allCards' >
            <Card style={{ width: '18rem' }}>
                <Card.Img style={{height:'250px'}} variant="top" src={item.imageURL} />
                <Card.Body>
                    <Card.Title>{name} { wight}</Card.Title>
                    <Card.Text>
                        Only  fresh item here
                 </Card.Text>
                    <div className='d-flex justify-content-between'>
                    <Button variant="dark">{price} Taka</Button>
                    <Link to={`/checkout/${_id}`} ><Button variant="dark">Buy Now</Button></Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
        </div>
    );
};

export default SingleItem;