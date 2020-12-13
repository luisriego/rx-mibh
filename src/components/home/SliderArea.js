import React from 'react'

export const SliderArea = () => {
    return (
        <div className="slider-area">
            <div className="slider">
                <div id="bg-slider" className="owl-carousel owl-theme">

                    <div className="item"><img src="assets/img/slide1/slider-image-1.jpg" alt="GTA V" /></div>
                    <div className="item"><img src="assets/img/slide1/slider-image-2.jpg" alt="The Last of us" /></div>
                    <div className="item"><img src="assets/img/slide1/slider-image-1.jpg" alt="GTA V" /></div>

                </div>
            </div>
            <div className="slider-content">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12">
                        <h2>property Searching Just Got So Easy</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi deserunt deleniti, ullam commodi sit ipsam laboriosam velit adipisci quibusdam aliquam teneturo!</p>
                        <div className="search-form wow pulse" data-wow-delay="0.8s">

                            <form action="" className=" form-inline">
                                <button className="btn  toggle-btn" type="button"><i className="fa fa-bars"></i></button>

                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Key word" />
                                </div>
                                <div className="form-group">                                   
                                    <select id="lunchBegins" className="selectpicker" data-live-search="true" data-live-search-style="begins" title="Select your city">

                                        <option>New york, CA</option>
                                        <option>Paris</option>
                                        <option>Casablanca</option>
                                        <option>Tokyo</option>
                                        <option>Marraekch</option>
                                        <option>kyoto , shibua</option>
                                    </select>
                                </div>
                                <div className="form-group">                                     
                                    <select id="basic" className="selectpicker show-tick form-control">
                                        <option> -Status- </option>
                                        <option>Rent </option>
                                        <option>Boy</option>
                                        <option>used</option>  

                                    </select>
                                </div>
                                <button className="btn search-btn" type="submit"><i className="fa fa-search"></i></button>

                                <div /* style="display: none;" */ className="search-toggle">

                                    <div className="search-row">   

                                        <div className="form-group mar-r-20">
                                            <label for="price-range">Price range ($):</label>
                                            <input type="text" className="span2" value="" data-slider-min="0" 
                                                   data-slider-max="600" data-slider-step="5" 
                                                   data-slider-value="[0,450]" id="price-range" /><br />
                                            <b className="pull-left color">2000$</b> 
                                            <b className="pull-right color">100000$</b>
                                        </div>

                                        <div className="form-group mar-l-20">
                                            <label for="property-geo">Property geo (m2) :</label>
                                            <input type="text" className="span2" value="" data-slider-min="0" 
                                                   data-slider-max="600" data-slider-step="5" 
                                                   data-slider-value="[50,450]" id="property-geo" /><br />
                                            <b className="pull-left color">40m</b> 
                                            <b className="pull-right color">12000m</b>
                                        </div>
                                    </div>

                                    <div className="search-row">

                                        <div className="form-group mar-r-20">
                                            <label for="price-range">Min baths :</label>
                                            <input type="text" className="span2" value="" data-slider-min="0" 
                                                   data-slider-max="600" data-slider-step="5" 
                                                   data-slider-value="[250,450]" id="min-baths" /><br />
                                            <b className="pull-left color">1</b> 
                                            <b className="pull-right color">120</b>
                                        </div>

                                        <div className="form-group mar-l-20">
                                            <label for="property-geo">Min bed :</label>
                                            <input type="text" className="span2" value="" data-slider-min="0" 
                                                   data-slider-max="600" data-slider-step="5" 
                                                   data-slider-value="[250,450]" id="min-bed" /><br />
                                            <b className="pull-left color">1</b> 
                                            <b className="pull-right color">120</b>
                                        </div>

                                    </div>
                                    <br />
                                    <div className="search-row">  

                                        <div className="form-group">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" /> Fire Place(3100)
                                                </label>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" /> Dual Sinks(500)
                                                </label>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" /> Hurricane Shutters(99)
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="search-row">  

                                        <div className="form-group">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" /> Swimming Pool(1190)
                                                </label>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" /> 2 Stories(4600)
                                                </label>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" /> Emergency Exit(200)
                                                </label>
                                            </div>
                                        </div>
                                    </div>                                    

                                    <div className="search-row">  

                                        <div className="form-group">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" /> Laundry Room(10073)
                                                </label>
                                            </div>
                                        </div> 

                                        <div className="form-group">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" /> Jog Path(1503)
                                                </label>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" /> 26' Ceilings(1200)
                                                </label>
                                            </div>
                                        </div>
                                        <br />
                                        <hr />
                                    </div>                             
                                    <button className="btn search-btn prop-btm-sheaerch" type="submit"><i className="fa fa-search"></i></button>  
                                </div>                    

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
