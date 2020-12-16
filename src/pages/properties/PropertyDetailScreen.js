import React from 'react'

export const PropertyDetailScreen = () => {
    return (
        <div className="content-area single-property" /* style="background-color: #FCFCFC;" */>
            <div className="container">

                <div className="clearfix padding-top-40">
                    <div className="col-md-8 single-property-content ">
                        <div className="row">
                            <div className="light-slide-item">            
                                <div className="clearfix">
                                    <div className="favorite-and-print">
                                        <a className="add-to-fav" href="#login-modal" data-toggle="modal">
                                            <i className="fa fa-star-o"></i>
                                        </a>
                                        <a className="printer-icon " href="https://google.com">
                                            <i className="fa fa-print"></i> 
                                        </a>
                                    </div> 

                                    <ul id="image-gallery" className="gallery list-unstyled cS-hidden">
                                        <li data-thumb="assets/img/property-1/property1.jpg"> 
                                            <img src="assets/img/property-1/property1.jpg" alt="" />
                                        </li>
                                        <li data-thumb="img/property-1/property2.jpg"> 
                                            <img src="assets/img/property-1/property3.jpg" alt="" />
                                        </li>
                                        <li data-thumb="assets/img/property-1/property3.jpg"> 
                                            <img src="assets/img/property-1/property3.jpg" alt="" />
                                        </li>
                                        <li data-thumb="assets/img/property-1/property4.jpg"> 
                                            <img src="assets/img/property-1/property4.jpg" alt="" />
                                        </li>                                         
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="single-property-wrapper">
                            <div className="single-property-header">                                          
                                <h1 className="property-title pull-left">Villa in Coral Gables</h1>
                                <span className="property-price pull-right">$825,000</span>
                            </div>

                            <div className="property-meta entry-meta clearfix ">   

                                <div className="col-xs-3 col-sm-3 col-md-3 p-b-15">
                                    <span className="property-info-icon icon-tag">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
                                        <path className="meta-icon" fill-rule="evenodd" clip-rule="evenodd" fill="#FFA500" d="M47.199 24.176l-23.552-23.392c-.504-.502-1.174-.778-1.897-.778l-19.087.09c-.236.003-.469.038-.696.1l-.251.1-.166.069c-.319.152-.564.321-.766.529-.497.502-.781 1.196-.778 1.907l.092 19.124c.003.711.283 1.385.795 1.901l23.549 23.389c.221.218.482.393.779.523l.224.092c.26.092.519.145.78.155l.121.009h.012c.239-.003.476-.037.693-.098l.195-.076.2-.084c.315-.145.573-.319.791-.539l18.976-19.214c.507-.511.785-1.188.781-1.908-.003-.72-.287-1.394-.795-1.899zm-35.198-9.17c-1.657 0-3-1.345-3-3 0-1.657 1.343-3 3-3 1.656 0 2.999 1.343 2.999 3 0 1.656-1.343 3-2.999 3z"></path>
                                        </svg>
                                    </span>
                                    <span className="property-info-entry">
                                        <span className="property-info-label">Status</span>
                                        <span className="property-info-value">For Sale</span>
                                    </span>
                                </div>

                                <div className="col-xs-3 col-sm-3 col-md-3 p-b-15">
                                    <span className="property-info icon-area">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
                                        <path className="meta-icon" fill="#FFA500" d="M46 16v-12c0-1.104-.896-2.001-2-2.001h-12c0-1.103-.896-1.999-2.002-1.999h-11.997c-1.105 0-2.001.896-2.001 1.999h-12c-1.104 0-2 .897-2 2.001v12c-1.104 0-2 .896-2 2v11.999c0 1.104.896 2 2 2v12.001c0 1.104.896 2 2 2h12c0 1.104.896 2 2.001 2h11.997c1.106 0 2.002-.896 2.002-2h12c1.104 0 2-.896 2-2v-12.001c1.104 0 2-.896 2-2v-11.999c0-1.104-.896-2-2-2zm-4.002 23.998c0 1.105-.895 2.002-2 2.002h-31.998c-1.105 0-2-.896-2-2.002v-31.999c0-1.104.895-1.999 2-1.999h31.998c1.105 0 2 .895 2 1.999v31.999zm-5.623-28.908c-.123-.051-.256-.078-.387-.078h-11.39c-.563 0-1.019.453-1.019 1.016 0 .562.456 1.017 1.019 1.017h8.935l-20.5 20.473v-8.926c0-.562-.455-1.017-1.018-1.017-.564 0-1.02.455-1.02 1.017v11.381c0 .562.455 1.016 1.02 1.016h11.39c.562 0 1.017-.454 1.017-1.016 0-.563-.455-1.019-1.017-1.019h-8.933l20.499-20.471v8.924c0 .563.452 1.018 1.018 1.018.561 0 1.016-.455 1.016-1.018v-11.379c0-.132-.025-.264-.076-.387-.107-.249-.304-.448-.554-.551z"></path>
                                        </svg>
                                    </span>
                                    <span className="property-info-entry">
                                        <span className="property-info-label">Area</span>
                                        <span className="property-info-value">3500<b className="property-info-unit">Sq Ft</b></span>
                                    </span>
                                </div>

                                <div className="col-xs-3 col-sm-3 col-md-3 p-b-15">
                                    <span className="property-info-icon icon-bed">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
                                        <path className="meta-icon" fill="#FFA500" d="M21 48.001h-19c-1.104 0-2-.896-2-2v-31c0-1.104.896-2 2-2h19c1.106 0 2 .896 2 2v31c0 1.104-.895 2-2 2zm0-37.001h-19c-1.104 0-2-.895-2-1.999v-7.001c0-1.104.896-2 2-2h19c1.106 0 2 .896 2 2v7.001c0 1.104-.895 1.999-2 1.999zm25 37.001h-19c-1.104 0-2-.896-2-2v-31c0-1.104.896-2 2-2h19c1.104 0 2 .896 2 2v31c0 1.104-.896 2-2 2zm0-37.001h-19c-1.104 0-2-.895-2-1.999v-7.001c0-1.104.896-2 2-2h19c1.104 0 2 .896 2 2v7.001c0 1.104-.896 1.999-2 1.999z"></path>
                                        </svg>
                                    </span>
                                    <span className="property-info-entry">
                                        <span className="property-info-label">Bedrooms</span>
                                        <span className="property-info-value">3</span>
                                    </span>
                                </div>

                                <div className="col-xs-3 col-sm-3 col-md-3 p-b-15">
                                    <span className="property-info-icon icon-bath">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
                                        <path className="meta-icon" fill="#FFA500" d="M37.003 48.016h-4v-3.002h-18v3.002h-4.001v-3.699c-4.66-1.65-8.002-6.083-8.002-11.305v-4.003h-3v-3h48.006v3h-3.001v4.003c0 5.223-3.343 9.655-8.002 11.305v3.699zm-30.002-24.008h-4.001v-17.005s0-7.003 8.001-7.003h1.004c.236 0 7.995.061 7.995 8.003l5.001 4h-14l5-4-.001.01.001-.009s.938-4.001-3.999-4.001h-1s-4 0-4 3v17.005000000000003h-.001z"></path>
                                        </svg>
                                    </span>
                                    <span className="property-info-entry">
                                        <span className="property-info-label">Bathrooms</span>
                                        <span className="property-info-value">3.5</span>
                                    </span>
                                </div>

                                <div className="col-xs-3 col-sm-3 col-md-3 p-b-15">
                                    <span className="property-info-icon icon-garage">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
                                        <path className="meta-icon" fill="#FFA500" d="M44 0h-40c-2.21 0-4 1.791-4 4v44h6v-40c0-1.106.895-2 2-2h31.999c1.106 0 2.001.895 2.001 2v40h6v-44c0-2.209-1.792-4-4-4zm-36 8.001h31.999v2.999h-31.999zm0 18h6v5.999h-2c-1.104 0-2 .896-2 2.001v6.001c0 1.103.896 1.998 2 1.998h2v2.001c0 1.104.896 2 2 2s2-.896 2-2v-2.001h11.999v2.001c0 1.104.896 2 2.001 2 1.104 0 2-.896 2-2v-2.001h2c1.104 0 2-.895 2-1.998v-6.001c0-1.105-.896-2.001-2-2.001h-2v-5.999h5.999v-3h-31.999v3zm8 12.999c-1.104 0-2-.895-2-1.999s.896-2 2-2 2 .896 2 2-.896 1.999-2 1.999zm10.5 2h-5c-.276 0-.5-.225-.5-.5 0-.273.224-.498.5-.498h5c.275 0 .5.225.5.498 0 .275-.225.5-.5.5zm1-2h-7c-.275 0-.5-.225-.5-.5s.226-.499.5-.499h7c.275 0 .5.224.5.499s-.225.5-.5.5zm-6.5-2.499c0-.276.224-.5.5-.5h5c.275 0 .5.224.5.5s-.225.5-.5.5h-5c-.277 0-.5-.224-.5-.5zm11 2.499c-1.104 0-2.001-.895-2.001-1.999s.896-2 2.001-2c1.104 0 2 .896 2 2s-.896 1.999-2 1.999zm0-12.999v5.999h-16v-5.999h16zm-24-13.001h31.999v3h-31.999zm0 5h31.999v3h-31.999z"></path>
                                        </svg>
                                    </span>
                                    <span className="property-info-entry">
                                        <span className="property-info-label">Garages</span>
                                        <span className="property-info-value">2</span>
                                    </span>
                                </div>


                            </div>

                            <div className="section">
                                <h4 className="s-property-title">Description</h4>
                                <div className="s-property-content">
                                    <p>Nulla quis dapibus nisl. Suspendisse ultricies Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium. Nullam sed arcu ultricies commodo arcu nec pretium. Nullam sed arcu ultricies Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium. Nullam sed arcu ultricies Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium. Nullam sed arcu ultricies                                </p>
                                </div>
                            </div>

                            <div className="section additional-details">

                                <h4 className="s-property-title">Additional Details</h4>

                                <ul className="additional-details-list clearfix">
                                    <li>
                                        <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">Waterfront</span>
                                        <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">Yes</span>
                                    </li>

                                    <li>
                                        <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">Built In</span>
                                        <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">2003</span>
                                    </li>
                                    <li>
                                        <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">Parking</span>
                                        <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">2 Or More Spaces,Covered Parking,Valet Parking</span>
                                    </li>

                                    <li>
                                        <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">Waterfront</span>
                                        <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">Yes</span>
                                    </li>

                                    <li>
                                        <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">View</span>
                                        <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">Intracoastal View,Direct ew</span>
                                    </li>

                                    <li>
                                        <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">Waterfront Description:</span>
                                        <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">Intracoastal Front,Ocean Access</span>
                                    </li> 

                                </ul>
                            </div>  

                            <div className="section property-features">      

                                <h4 className="s-property-title">Features</h4>                            
                                <ul>
                                    <li><a href="properties.html">Swimming Pool</a></li>   
                                    <li><a href="properties.html">3 Stories</a></li>
                                    <li><a href="properties.html">Central Cooling</a></li>
                                    <li><a href="properties.html">Jog Path 2</a></li>
                                    <li><a href="properties.html">2 Lawn</a></li>
                                    <li><a href="properties.html">Bike Path</a></li>
                                </ul>

                            </div>

                            <div className="section property-video"> 
                                <h4 className="s-property-title">Property Video</h4> 
                                <div className="video-thumb">
                                    <a className="video-popup" href="yout" title="Virtual Tour">
                                        <img src="assets/img/property-video.jpg" className="img-responsive wp-post-image" alt="Exterior" />            
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 p0">
                        <aside className="sidebar sidebar-property blog-asside-right">
                            <div className="dealer-widget">
                                <div className="dealer-content">
                                    <div className="inner-wrapper">

                                        <div className="clear">
                                            <div className="col-xs-4 col-sm-4 dealer-face">
                                                <a href="https://google.com">
                                                    <img src="assets/img/client-face1.png" className="img-circle" alt="" />
                                                </a>
                                            </div>
                                            <div className="col-xs-8 col-sm-8 ">
                                                <h3 className="dealer-name">
                                                    <a href="https://google.com">Nathan James</a>
                                                    <span>Real Estate Agent</span>        
                                                </h3>
                                                <div className="dealer-social-media">
                                                    <a className="twitter" target="_blank" rel="noopener noreferrer" href="https://google.com">
                                                        <i className="fa fa-twitter"></i>
                                                    </a>
                                                    <a className="facebook" target="_blank" rel="noopener noreferrer" href="https://google.com">
                                                        <i className="fa fa-facebook"></i>
                                                    </a>
                                                    <a className="gplus" target="_blank" rel="noopener noreferrer" href="https://google.com">
                                                        <i className="fa fa-google-plus"></i>
                                                    </a>
                                                    <a className="linkedin" target="_blank" rel="noopener noreferrer" href="https://google.com">
                                                        <i className="fa fa-linkedin"></i>
                                                    </a> 
                                                    <a className="instagram" target="_blank" rel="noopener noreferrer" href="https://google.com">
                                                        <i className="fa fa-instagram"></i>
                                                    </a>       
                                                </div>

                                            </div>
                                        </div>

                                        <div className="clear">
                                            <ul className="dealer-contacts">                                       
                                                <li><i className="pe-7s-map-marker strong"> </i> 9089 your adress her</li>
                                                <li><i className="pe-7s-mail strong"> </i> email@yourcompany.com</li>
                                                <li><i className="pe-7s-call strong"> </i> +1 908 967 5906</li>
                                            </ul>
                                            <p>Duis mollis  blandit tempus porttitor curabiturDuis mollis  blandit tempus porttitor curabitur , est non…</p>
                                        </div>

                                    </div>
                                </div>
                            </div>


                            <div className="panel panel-default sidebar-menu similar-property-wdg wow fadeInRight animated">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Similar Properties</h3>
                                </div>
                                <div className="panel-body recent-property-widget">
                                    <ul>
                                        <li>
                                            <div className="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
                                                <a href="single.html"><img src="assets/img/demo/small-property-2.jpg" alt="" /></a>
                                                <span className="property-seeker">
                                                    <b className="b-1">A</b>
                                                    <b className="b-2">S</b>
                                                </span>
                                            </div>
                                            <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
                                                <h6> <a href="single.html">Super nice villa </a></h6>
                                                <span className="property-price">3000000$</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-md-3 col-sm-3  col-xs-3 blg-thumb p0">
                                                <a href="single.html"><img src="assets/img/demo/small-property-1.jpg" alt="" /></a>
                                                <span className="property-seeker">
                                                    <b className="b-1">A</b>
                                                    <b className="b-2">S</b>
                                                </span>
                                            </div>
                                            <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
                                                <h6> <a href="single.html">Super nice villa </a></h6>
                                                <span className="property-price">3000000$</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
                                                <a href="single.html"><img src="assets/img/demo/small-property-3.jpg" alt="" /></a>
                                                <span className="property-seeker">
                                                    <b className="b-1">A</b>
                                                    <b className="b-2">S</b>
                                                </span>
                                            </div>
                                            <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
                                                <h6> <a href="single.html">Super nice villa </a></h6>
                                                <span className="property-price">3000000$</span>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
                                                <a href="single.html"><img src="assets/img/demo/small-property-2.jpg" alt="" /></a>
                                                <span className="property-seeker">
                                                    <b className="b-1">A</b>
                                                    <b className="b-2">S</b>
                                                </span>
                                            </div>
                                            <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
                                                <h6> <a href="single.html">Super nice villa </a></h6>
                                                <span className="property-price">3000000$</span>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>



                            <div className="panel panel-default sidebar-menu wow fadeInRight animated">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Ads her  </h3>
                                </div>
                                <div className="panel-body recent-property-widget">
                                    <img src="assets/img/ads.jpg" alt="" />
                                </div>
                            </div>

                            <div className="panel panel-default sidebar-menu wow fadeInRight animated" >
                                <div className="panel-heading">
                                    <h3 className="panel-title">Smart search</h3>
                                </div>
                                <div className="panel-body search-widget">
                                    <form action="" className=" form-inline"> 
                                        <fieldset>
                                            <div className="row">
                                                <div className="col-xs-12">
                                                    <input type="text" className="form-control" placeholder="Key word" />
                                                </div>
                                            </div>
                                        </fieldset>

                                        <fieldset>
                                            <div className="row">
                                                <div className="col-xs-6">

                                                    <select id="lunchBegins" className="selectpicker" data-live-search="true" data-live-search-style="begins" title="Select Your City">

                                                        <option>New york, CA</option>
                                                        <option>Paris</option>
                                                        <option>Casablanca</option>
                                                        <option>Tokyo</option>
                                                        <option>Marraekch</option>
                                                        <option>kyoto , shibua</option>
                                                    </select>
                                                </div>
                                                <div className="col-xs-6">

                                                    <select id="basic" className="selectpicker show-tick form-control">
                                                        <option> -Status- </option>
                                                        <option>Rent </option>
                                                        <option>Boy</option>
                                                        <option>used</option>  

                                                    </select>
                                                </div>
                                            </div>
                                        </fieldset>

                                        <fieldset className="padding-5">
                                            <div className="row">
                                                <div className="col-xs-6">
                                                    <label htmlFor="price-range">Price range ($):</label>
                                                    <input type="text" className="span2" value="" data-slider-min="0" 
                                                           data-slider-max="600" data-slider-step="5" 
                                                           data-slider-value="[0,450]" id="price-range" /><br />
                                                    <b className="pull-left color">2000$</b> 
                                                    <b className="pull-right color">100000$</b>                                                
                                                </div>
                                                <div className="col-xs-6">
                                                    <label htmlFor="property-geo">Property geo (m2) :</label>
                                                    <input type="text" className="span2" value="" data-slider-min="0" 
                                                           data-slider-max="600" data-slider-step="5" 
                                                           data-slider-value="[50,450]" id="property-geo" /><br />
                                                    <b className="pull-left color">40m</b> 
                                                    <b className="pull-right color">12000m</b>                                                
                                                </div>                                            
                                            </div>
                                        </fieldset>                                

                                        <fieldset className="padding-5">
                                            <div className="row">
                                                <div className="col-xs-6">
                                                    <label htmlFor="price-range">Min baths :</label>
                                                    <input type="text" className="span2" value="" data-slider-min="0" 
                                                           data-slider-max="600" data-slider-step="5" 
                                                           data-slider-value="[250,450]" id="min-baths" /><br />
                                                    <b className="pull-left color">1</b> 
                                                    <b className="pull-right color">120</b>                                                
                                                </div>

                                                <div className="col-xs-6">
                                                    <label htmlFor="property-geo">Min bed :</label>
                                                    <input type="text" className="span2" value="" data-slider-min="0" 
                                                           data-slider-max="600" data-slider-step="5" 
                                                           data-slider-value="[250,450]" id="min-bed" /><br />
                                                    <b className="pull-left color">1</b> 
                                                    <b className="pull-right color">120</b>

                                                </div>
                                            </div>
                                        </fieldset>

                                        <fieldset className="padding-5">
                                            <div className="row">
                                                <div className="col-xs-6">
                                                    <div className="checkbox">
                                                        <label> <input type="checkbox" checked /> Fire Place</label>
                                                    </div> 
                                                </div>

                                                <div className="col-xs-6">
                                                    <div className="checkbox">
                                                        <label> <input type="checkbox" /> Dual Sinks</label>
                                                    </div>
                                                </div>                                            
                                            </div>
                                        </fieldset>

                                        <fieldset className="padding-5">
                                            <div className="row">
                                                <div className="col-xs-6"> 
                                                    <div className="checkbox">
                                                        <label> <input type="checkbox" checked /> Swimming Pool</label>
                                                    </div>
                                                </div>  
                                                <div className="col-xs-6"> 
                                                    <div className="checkbox">
                                                        <label> <input type="checkbox" checked /> 2 Stories </label>
                                                    </div>
                                                </div>  
                                            </div>
                                        </fieldset>

                                        <fieldset className="padding-5">
                                            <div className="row">
                                                <div className="col-xs-6"> 
                                                    <div className="checkbox">
                                                        <label><input type="checkbox" /> Laundry Room </label>
                                                    </div>
                                                </div>  
                                                <div className="col-xs-6"> 
                                                    <div className="checkbox">
                                                        <label> <input type="checkbox" /> Emergency Exit</label>
                                                    </div>
                                                </div>  
                                            </div>
                                        </fieldset>

                                        <fieldset className="padding-5">
                                            <div className="row">
                                                <div className="col-xs-6"> 
                                                    <div className="checkbox">
                                                        <label>  <input type="checkbox" checked /> Jog Path </label>
                                                    </div>
                                                </div>  
                                                <div className="col-xs-6"> 
                                                    <div className="checkbox">
                                                        <label>  <input type="checkbox" /> 26' Ceilings </label>
                                                    </div>
                                                </div>  
                                            </div>
                                        </fieldset>

                                        <fieldset className="padding-5">
                                            <div className="row">
                                                <div className="col-xs-12"> 
                                                    <div className="checkbox">
                                                        <label>  <input type="checkbox" /> Hurricane Shutters </label>
                                                    </div>
                                                </div>  
                                            </div>
                                        </fieldset>

                                        <fieldset >
                                            <div className="row">
                                                <div className="col-xs-12">  
                                                    <input className="button btn largesearch-btn" value="Search" type="submit" />
                                                </div>  
                                            </div>
                                        </fieldset>                                     
                                    </form>
                                </div>
                            </div>


                        </aside>
                    </div>
                </div>

            </div>
        </div>
    )
}
