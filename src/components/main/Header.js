import React from 'react'

export const Header = () => {
    return (
        <div className="header-connect">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-sm-8  col-xs-12">
                        <div className="header-half header-call">
                            <p>
                                <span><i className="pe-7s-call"></i> +1 234 567 7890</span>
                                <span><i className="pe-7s-mail"></i> your@company.com</span>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-2 col-md-offset-5  col-sm-3 col-sm-offset-1  col-xs-12">
                        <div className="header-half header-social">
                            <ul className="list-inline">
                                <li><a href="http://www/google.com"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="http://www/google.com"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="http://www/google.com"><i className="fa fa-vine"></i></a></li>
                                <li><a href="http://www/google.com"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="http://www/google.com"><i className="fa fa-dribbble"></i></a></li>
                                <li><a href="http://www/google.com"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
