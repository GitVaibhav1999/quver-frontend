import React, { Component } from 'react'
import { Navbar, Container, Row, Col, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


import './Body.css'
import MainGrid from '../components/MainGrid'


const Body = () => {
    return (
        <div>
            <div className='background' >
            </div>
            <Card className='body' >
            
            </Card>
            <MainGrid />
            
        </div>
    );
}

export default Body;