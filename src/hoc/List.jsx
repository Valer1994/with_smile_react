import React from 'react'

const list = (props) => {
    return <div className={props.classes}>
        {props.children}
    </div>;
};

export default list