import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemList: React.FC = () => {
  const products = useSelector((state: any) => state.items.items);
  const [displayedItems, setDisplayedItems] = useState<any[]>([]);

  useEffect(() => {
    const initialIndex = 0;
    const initialDisplayedItems = products.slice(initialIndex, initialIndex + 8);
  
    setDisplayedItems(initialDisplayedItems);
  
    let currentIndex = initialIndex;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 8) % products.length;
      const nextDisplayedItems = products.slice(currentIndex, currentIndex + 8);
  
      setDisplayedItems(nextDisplayedItems);
    }, 3000);
  
    return () => clearInterval(interval);
  }, [products]);

  return (
    <Container>
        <Row xs={1} sm={2} md={3} lg={4} xl={4} xxl={4} className="g-4">
            {displayedItems.map((product: any, index: number) => (
            <Col key={index} className="mb-4">
                <Card data-testid={`card-${index}`} className="custom-card">
                <Link to={`/products/${product.id}`}>
                    <Card.Img 
                        src={product.image}
                        alt={product.title}
                        className="card-img-top img-fluid"
                        style={{ objectFit: 'contain', height: '200px' }}
                    />
                </Link>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
  </Container>
  );
};

export default ItemList;