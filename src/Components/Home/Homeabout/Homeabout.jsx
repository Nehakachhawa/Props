import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Homeabout.css';

function Homeabout() {
  const data = [
    {
      icon: "fa-solid fa-video fs-2",
      title: "BUSINESS MODEL",
      subtitle: "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled "
    },
    {
      icon: "fa-solid fa-video fs-2",
      title: "BUSINESS EXECUTION",
      subtitle: "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled "
    },
    {
      icon: "fa-solid fa-video fs-2",
      title: "BUSINESS MONITORING",
      subtitle: "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled "
    }
  ]
  const Box = ({data}) => {
    return (
      <Col className='d-flex'>
            <div className='box'>
            <i class={data.icon}></i>
            <h3>{data.title}</h3>
            <p>{data.subtitle} </p>
            </div>
            </Col>
    )
  }
  return (
    <section id="Homeabout">
      <Container fluid className='py-5 px-lg-5'>
        <Row>
          <Col className='col-lg-8'>
            <h1>Our About Us</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </Col>
        </Row>
        <Row>
          {
            data.map((item, index) => {
              return <Box data={item} key={index}/>
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default Homeabout