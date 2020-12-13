import React from 'react'

export const NotFoundScreen = () => {
    return (
        <div className="content-area error-page auth__main">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
                        <h2 className="error-title">404</h2>
                        <p>Sorry, the page you requested may have been moved or deleted</p>
                        <a href="index.html" className="btn btn-default">Home</a>
                    </div>
                </div> 
            </div>
        </div>
    )
}
