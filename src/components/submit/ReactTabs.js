import React from 'react';

let activeTab = 1;

const tabs = {
    tab1: 'Proprietário',
    tab2: 'Dados básicos',
    tab3: 'Detalhes do Imóvel',
    tab4: 'Envio de imágens',
    tab5: 'Finalizar',
}

const elWidth = {
    width: 100/Object.keys(tabs).length + '%'
};

// const listItems = Object.keys(tabs).map((key, index) => {
//     return <li className="active" style={ elWidth }><a href="#step2" data-index={ index } data-toggle="tab">{ key[index] } </a></li>
// });

function nextForm() {
    if (activeTab === 1) {
        activeTab = activeTab + 1;
        return validateFirstStep();
    } else if (activeTab === 2) {
        activeTab = activeTab + 1;
        return validateFirstStep();
    } else if (activeTab === 3) {
        activeTab = activeTab + 1;
        return validateFirstStep();
    } else if (activeTab === 4) {
        activeTab = activeTab + 1;
        return validateFirstStep();
    } else if (activeTab === 5) {
        return validateFirstStep();
    } 
}

function previousForm() {
    if (activeTab === 1) {
        return validateFirstStep();
    } else if (activeTab === 2) {
        activeTab = activeTab - 1;
        return validateFirstStep();
    } else if (activeTab === 3) {
        activeTab = activeTab - 1;
        return validateFirstStep();
    } else if (activeTab === 4) {
        activeTab = activeTab - 1;
        return validateFirstStep();
    } else if (activeTab === 5) {
        activeTab = activeTab - 1;
        return validateFirstStep();
    } 
}

function validateFirstStep() {
    console.log(activeTab);
}


export const ReactTabs = () => {
    return (
        <form>                        
            <div className="wizard-header">
                <h3>
                    <b>Submit</b> YOUR PROPERTY <br />
                    <small>Lorem ipsum dolor sit amet, consectetur adipisicing.</small>
                </h3>
            </div>

            <ul className="nav nav-pills">
                {/* {listItems} */}
                <li className={(activeTab === 1) ? "active" : ""} style={ elWidth }><a href="#step1" data-toggle="tab">{ tabs.tab1 } </a></li>
                <li className={(activeTab === 2) ? "active" : ""} style={ elWidth }><a href="#step2" data-toggle="tab">{ tabs.tab2 } </a></li>
                <li className={(activeTab === 3) ? "active" : ""} style={ elWidth }><a href="#step3" data-toggle="tab">{ tabs.tab3 } </a></li>
                <li className={(activeTab === 4) ? "active" : ""} style={ elWidth }><a href="#step4" data-toggle="tab">{ tabs.tab4 } </a></li>
                <li className={(activeTab === 5) ? "active" : ""} style={ elWidth }><a href="#step4" data-toggle="tab">{ tabs.tab5 } </a></li>
            </ul>

            <div className="tab-content">

                <div className="tab-pane active" id="step1">
                    <div className="row p-b-15  ">
                        <h4 className="info-text"> Começemos comos Dados do Proprietário</h4>
                        <div className="col-sm-4 col-sm-offset-1">
                            <div className="picture-container">
                                <div className="picture">
                                    <img src="assets/img/default-property.jpg" className="picture-src" id="wizardPicturePreview" title="" alt="" />
                                    <input type="file" id="wizard-picture" />
                                </div> 
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Property name <small>(required)</small></label>
                                <input name="propertyname" type="text" className="form-control" placeholder="Super villa ..." />
                            </div>

                            <div className="form-group">
                                <label>Property price <small>(required)</small></label>
                                <input name="propertyprice" type="text" className="form-control" placeholder="3330000" />
                            </div> 
                            <div className="form-group">
                                <label>Telephone <small>(empty if you wanna use default phone number)</small></label>
                                <input name="phone" type="text" className="form-control" placeholder="+1 473 843 7436" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tab-pane" id="step2">
                    <h4 className="info-text"> How much your Property is Beautiful ? </h4>
                    <div className="row">
                        <div className="col-sm-12"> 
                            <div className="col-sm-12"> 
                                <div className="form-group">
                                    <label>Property Description :</label>
                                    <textarea name="discrition" className="form-control" ></textarea>
                                </div> 
                            </div> 
                        </div>

                        <div className="col-sm-12">
                            <div className="col-sm-3">
                                <div className="form-group">
                                    <label>Property State :</label>
                                    <select id="lunchBegins" className="selectpicker" data-live-search="true" data-live-search-style="begins" title="Select your city">
                                        <option>Seoul</option>
                                        <option>Paris</option>
                                        <option>Casablanca</option>
                                        <option>Tokyo</option>
                                        <option>Marraekch</option>
                                        <option>kyoto , shibua</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="form-group">
                                    <label>Property City :</label>
                                    <select id="lunchBegins" className="selectpicker" data-live-search="true" data-live-search-style="begins" title="Select your city">
                                        <option>New york, CA</option>
                                        <option>Paris</option>
                                        <option>Casablanca</option>
                                        <option>Tokyo</option>
                                        <option>Marraekch</option>
                                        <option>kyoto , shibua</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="form-group">
                                    <label>Property Statue  :</label>
                                    <select id="basic" className="selectpicker show-tick form-control">
                                        <option> -Status- </option>
                                        <option>Rent </option>
                                        <option>Boy</option>
                                        <option>used</option>  

                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="form-group">
                                    <label>Property Statue  :</label>
                                    <select id="basic" className="selectpicker show-tick form-control">
                                        <option> -Status- </option>
                                        <option>Rent </option>
                                        <option>Boy</option>
                                        <option>used</option>  

                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 padding-top-15">                                                   
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label htmlFor="property-geo">Min bed :</label>
                                    <input type="text" className="span2" value="" data-slider-min="0" 
                                            data-slider-max="600" data-slider-step="5" 
                                            data-slider-value="[250,450]" id="min-bed" /><br />
                                    <b className="pull-left color">1</b> 
                                    <b className="pull-right color">120</b>
                                </div>
                            </div>
                            <div className="col-sm-4">

                                <div className="form-group">
                                    <label htmlFor="price-range">Min baths :</label>
                                    <input type="text" className="span2" value="" data-slider-min="0" 
                                            data-slider-max="600" data-slider-step="5" 
                                            data-slider-value="[250,450]" id="min-baths" /><br />
                                    <b className="pull-left color">1</b> 
                                    <b className="pull-right color">120</b>
                                </div>
                            </div>
                            <div className="col-sm-4">

                                <div className="form-group">
                                    <label htmlFor="property-geo">Property geo (m2) :</label>
                                    <input type="text" className="span2" value="" data-slider-min="0" 
                                            data-slider-max="600" data-slider-step="5" 
                                            data-slider-value="[50,450]" id="property-geo" /><br />
                                    <b className="pull-left color">40m</b> 
                                    <b className="pull-right color">12000m</b>
                                </div>
                            </div>   
                        </div>
                        <div className="col-sm-12 padding-top-15">
                            <div className="col-sm-3">
                                <div className="form-group">
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" /> Swimming Pool
                                        </label>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-sm-3">
                                <div className="form-group">
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" /> 2 Stories
                                        </label>
                                    </div>
                                </div>
                            </div>                                                 
                            <div className="col-sm-3">
                                <div className="form-group">
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" /> Emergency Exit
                                        </label>
                                    </div>
                                </div>
                            </div>                                                 
                            <div className="col-sm-3">
                                <div className="form-group">
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" /> Fire Place 
                                        </label>
                                    </div>
                                </div>
                            </div> 
                        </div> 
                        <div className="col-sm-12 padding-bottom-15">
                            <div className="col-sm-3">
                                <div className="form-group">
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" /> Laundry Room
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="form-group">
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" /> Jog Path
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="form-group">
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" /> Ceilings
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="form-group">
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" /> Dual Sinks
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>

                <div className="tab-pane" id="step3">                                        
                    <h4 className="info-text">Give us somme images and videos ? </h4>
                    <div className="row">  
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="property-images">Chose Images :</label>
                                <input className="form-control" type="file" id="property-images" />
                                <p className="help-block">Select multipel images for your property .</p>
                            </div>
                        </div>
                        <div className="col-sm-6"> 
                            <div className="form-group">
                                <label htmlFor="property-video">Property video :</label>
                                <input className="form-control" value="" placeholder="http://www.youtube.com, http://vimeo.com" name="property_video" type="text" />
                            </div> 

                            <div className="form-group">
                                <input className="form-control" value="" placeholder="http://www.youtube.com, http://vimeo.com" name="property_video" type="text" />
                            </div>

                            <div className="form-group">
                                <input className="form-control" value="" placeholder="http://www.youtube.com, http://vimeo.com" name="property_video" type="text" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="tab-pane" id="step4">                                        
                    <h4 className="info-text"> Finished and submit </h4>
                    <div className="row">  
                        <div className="col-sm-12">
                            <div className="">
                                <p>
                                    <label><strong>Terms and Conditions</strong></label>
                                    By accessing or using  GARO ESTATE services, such as 
                                    posting your property advertisement with your personal 
                                    information on our website you agree to the
                                    collection, use and disclosure of your personal information 
                                    in the legal proper manner
                                </p>

                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" /> <strong>Accept termes and conditions.</strong>
                                    </label>
                                </div> 

                            </div> 
                        </div>
                    </div>
                </div>

            </div>

            <div className="wizard-footer">
                <div className="pull-right">
                <input 
                        type='button' 
                        className='btn btn-previous btn-default' 
                        name='next' 
                        value='Next' 
                        onClick={nextForm}
                    />
                    <input type='button' className='btn btn-finish btn-primary ' name='finish' value='Finish' />
                </div>

                <div className="pull-left">
                    <input 
                        type='button' 
                        className='btn btn-previous btn-default' 
                        name='previous' 
                        value='Previous' 
                        onClick={previousForm}
                    />
                </div>
                <div className="clearfix"></div>                                            
            </div>	
        </form>
    )
}
