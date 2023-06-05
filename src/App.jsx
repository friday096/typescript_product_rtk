import { useState, useEffect } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { getAllBlog, addNewBlog, deleteBlog } from './store/slices/BlogSlices'
import BlogDetail from './BlogDetail'

function App() {
  const dispatch = useDispatch()
  const [data, setData] = useState([])
  const blog = useSelector((state) => state.items.blog);
  console.log('blog++++', blog)
  const [blogid, setBlogId] = useState('')


  // useEffect(()=>{

  //   const fetchLatestBlogs = async () => {
  //     const payload = await dispatch(getAllBlog());
  //     console.log('payload', payload)
  //     setData(payload)
  // }
  // fetchLatestBlogs();

  // //   dispatch(getAllBlog())
  // },[])
  // console.log('Blog++++', data)

  const addBlog = () => {
    const newItem = {
      id: blog.length + 2,
      imageUrl: "https://picsum.photos/200/300",
      title: "Title 2",
      post: "yes",
      category: "Dog",
      product: "padegary"
    };
    dispatch(addNewBlog(newItem))
  }

  // const handleEdit = () =>{

  // }

  return (
    <>
      <Container>
        {!blogid && <Button className='mb-5' onClick={addBlog}> Add Blog</Button>}
        <Row xs={1} sm={2} md={3} lg={4} xl={4} xxl={4} className="g-4">
          {blog && !blogid && blog.map((item, index) => (
            <Col key={index} className="mb-4">
              <Card data-testid={`card-${index}`} className="custom-card">
                <Card.Img
                  src={item.imageUrl}
                  alt={item.title}
                  className="card-img-top img-fluid"
                  style={{ objectFit: 'contain', height: '200px' }}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Button className='me-2' onClick={() => setBlogId(item.id)}> Edit</Button>
                  <Button className='bg-danger' onClick={() => { dispatch(deleteBlog(item.id)); }}>Delete</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      {blogid && <BlogDetail id={blogid} handler={() => setBlogId(null)} />}
    </>
  )
}

export default App
