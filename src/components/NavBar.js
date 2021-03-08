import React, { Component } from 'react'
import {Navbar,Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-button-slider';
import ReactSwipeButton from 'react-swipe-button'

import './NavBar.css'

const NavBar = () => {
  var rightA = '../assets/right-arrow.png'
return(


<Navbar className='navbar_container'>
  <h2>Quver </h2>
  <Container className='steps_container'>
  <Row>
  <Container className='each_step_selected'> Step1 </Container>
  </Row>

  <Row>
  <Container className='each_step'> Step2 </Container>
</Row>
  <Row>
  <Container className='each_step'> Step3 </Container>
  </Row>
  </Container>
  <Container className='user_slider' >

  <ReactSwipeButton
      text='USER'

      color='white'
      onSuccess = {console.log('swipped')}
    />


    </Container>
</Navbar>


);
}

export default NavBar;
