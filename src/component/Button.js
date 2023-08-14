import React from 'react';

const Button = ({type, children, onClick, styleHeight}) => {
    return (
        <button 
            className={`btn btn-${type} btn-sm` }           
            onClick={onClick}        
            style={{height:`${styleHeight}`+'px'}}
            >
            {children}
        </button>
    );
}

export default Button;