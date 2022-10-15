import React from 'react'

const Loading = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-90">
            <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div> 
    )
}

export default Loading;