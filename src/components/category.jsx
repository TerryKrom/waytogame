import React, { useState, useEffect } from 'react';

const Category = (props) => {

    return (
        <div className="category">
            <button>
                {props.name}
            </button>
        </div>
    );
}

export default Category;
