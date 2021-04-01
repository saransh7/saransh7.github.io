import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div className='container'>
                <h1 className='name' aria-label='My name is Saransh Bhatnagar'>Saransh Bhatnagar</h1>
                <h2 className='title' aria-label='I am a Data Scientist'>Data Scientist</h2>
            </div>
        )
    }
}

export default Content;
