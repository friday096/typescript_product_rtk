import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getItemById } from './store/slices/ProductSlices';
import {Container, Row, Col, Card } from 'react-bootstrap';

export default function ItemDetails() {
    const selectedItem = useSelector((state: any) => state.items.selectedItem);
    const dispatch = useDispatch();
    const { id } = useParams(); 

    React.useEffect(() => {
        dispatch(getItemById(Number(id)));
      }, [dispatch, id]);

      if (!selectedItem) {
        return null
      }

  return (
    <Container>
        <Row style={{justifyContent:'center'}}>
        <Col md={6} sm={6} xs={12}>
          <Card className="custom-card">
            <Card.Img src={selectedItem.image} alt={selectedItem.title} className="card-img-top" />
            <Card.Body>
              <Card.Title>{selectedItem.title}</Card.Title>
              <Card.Text> <strong>Price:</strong> {selectedItem.price}</Card.Text>
              <Card.Text><strong>Brand: </strong>{selectedItem.brand}</Card.Text>
              <Card.Text><strong>Discount:</strong> {selectedItem.discountPrice}</Card.Text>
              <Card.Text><strong>Currency:</strong> {selectedItem.currency}</Card.Text>
              <a href={selectedItem.url} className="btn btn-primary">
                Buy Now
              </a>
            </Card.Body>
          </Card>
        </Col>
    </Row>
  </Container>
  )
}
