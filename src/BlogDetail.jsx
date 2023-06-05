import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getIdByBlog, updateBlog } from './store/slices/BlogSlices'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
export default function BlogDetail({ id, handler }) {
    const dispatch = useDispatch()
    const selectedItem = useSelector((state) => state.items.selectedItem);

    console.log('checkIDddd', id, selectedItem)

    React.useEffect(() => {
        if (id) {
            dispatch(getIdByBlog(id));
        }
    }, [])

    if (!selectedItem) {
        return null
    }

    const handleUpdate = (id) => {
        console.log('id', id)
        const data = {
            imageUrl: "https://picsum.photos/200/300",
            title: "Title 2 Update",
            post: "Update",
            category: "Update",
            product: "Update"
        };
        dispatch(updateBlog({ id, data }));
        handler()
    }
    return (
        <Container>
            <Row className='mt-5' style={{ justifyContent: 'center' }}>
                <Col md={6} sm={6} xs={12} className="mb-4">
                    <Card className="custom-card">
                        <Card.Img src={selectedItem.imageUrl} alt={selectedItem.title} style={{ objectFit: 'contain', height: '200px' }} className="custom-card"
                        />
                        <Card.Body>
                            <Card.Title>{selectedItem.title}</Card.Title>
                            <Card.Text> <strong>Post:</strong> {selectedItem.post}</Card.Text>
                            <Card.Text><strong>Category: </strong>{selectedItem.category}</Card.Text>
                            <Card.Text><strong>Product:</strong> {selectedItem.product}</Card.Text>
                            <Button onClick={() => handleUpdate(selectedItem.id)}>Update Blog</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
