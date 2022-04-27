import React from 'react';

export default function Cards(props) {
    const { image } = props;
    return (
        <div className="card">
            {image}
            <div className="card-body">{props.children}</div>
        </div>
    );
}