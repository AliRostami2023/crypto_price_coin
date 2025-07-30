import React from 'react';

import spinner from '../gif/spinner.gif'

const Loding = () => {
    return (
        <div>
            <img src={spinner} alt="Loading" />
            <h1>Loading ...</h1>
        </div>
    );
};

export default Loding;