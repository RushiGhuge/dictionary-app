import React from 'react';
import DisplayItem from './DisplayItem';
import "../Css/DisplayItems.css"

const DisplayResult = ({ result }) => {

    return (
        <div className='display-container'>

            {result.length > 0 &&
                result.map((ele, idx) => {
                    return <DisplayItem key={idx}  ele={ele} />
                })
            }

        </div>
    );
}

export default DisplayResult;
