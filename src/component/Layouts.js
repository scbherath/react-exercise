import React from 'react'

const Layouts = ({size, children}) => {
    return (        
        <div className='container'>               
            <div className='row'>
                <div className={`col-md-${size} offset-md-2`}>                
                    {children}
                </div>
            </div>
        </div>        
    )
}

export default Layouts;

