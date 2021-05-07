import React from 'react';
import '../App.css'
import { Button } from './Buttons';
import './Introduction.css';

function Introduction() {
    return (
        <div className = 'introduction-container'>
           
            <h1>Duplicator Finder</h1>
            <p>Tired of duplicated images?</p>
            <div className = "intro-btns">
                <Button className='btns' buttonStyle='btns--outline' buttonSize='btn--large'>GET STARTED</Button></div>    
        </div>
    )
}

export default Introduction
