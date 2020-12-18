import React, { useState } from 'react';
import {Checkbox} from 'react-ui-icheck';
import validator from 'validator';
import { cpf, cnpj } from 'cpf-cnpj-validator'; 

import { useForm } from '../../hooks/useForm';
// import { cpfCnpjCnpjValidator } from "../../helpers/cpfCnpjCnpjValidator";

    
        
export const SubmitPropertyScreen = () => {

    const [alertMessage, setAlertMessage] = useState(null);
    const [activeTab, setActiveTab] = useState(1);

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

    const ProcessOwner = (e) => {
        e.preventDefault();

        console.log('formulário enviado!');
    }

    const [ formOwnerValues, handleOwnerChange ] = useForm({
        ownerName: '', 
        ownerEmail: '', 
        cpfCnpj: '',
        celular: '',
        phone: '',
        comercialPhone: '',
    });

    const [ formBasicsValues, handleBasicsChange ] = useForm({
        description: '', 
    });

    const [ formDetailsValues, handleDetailsChange ] = useForm({
        propertyimages: '',
        propertyvideo: '',
    });

    const { ownerName, ownerEmail, cpfCnpj, celular, phone, comercialPhone } = formOwnerValues;
    const { description } = formBasicsValues;
    const { propertyimages, propertyvideo } = formDetailsValues;

    const next = (e) => {
        e.preventDefault();
        
        if (activeTab < Object.keys(tabs).length) {
            switch (activeTab) {
                case 1:
                    if ( validateOwnerForm() ) {
                        nextTab();
                    }
                    break;
            
                case 2:
                    validateBasicsForm();
                    nextTab();
                    break;

                case 3:
                    validateDetailsForm();
                    nextTab();
                    break;

                case 4:
                    validateImagesForm();
                    nextTab();
                    break;

                default:
                    validateAcceptForm();
                    break;
            }

            
        }
    }

    const previous = () => {
        if (activeTab > 1) {
            previousTab();
        }
    }

    const nextTab = () => {
        setActiveTab(activeTab + 1);
    }

    const previousTab = () => {
        setActiveTab(activeTab - 1);
    }

    const validateOwnerForm = () => {
        if ( !validator.isEmail(ownerEmail) ) {
            setAlertMessage('Por favor intruduza um email válido!');
            return false;
        } else if (ownerName.trim().length < 5 ) {
            setAlertMessage('Por favor intruduza seu nome completo!');
            return false
        } else if (!cpf.isValid(cpfCnpj) || cnpj.isValid(cpfCnpj)) {
            setAlertMessage('Por favor intruduza um CPF/CNPJ válido!');
            return false
        } else if (ownerName.length < 5 ) {
            setAlertMessage('Por favor intruduza seu nome completo!');
            return false
        } else if (celular.length < 9 ) {
            setAlertMessage('Por favor intruduza seu nº de celular!');
            return false
        } 

        console.log(ownerName, ownerEmail, cpfCnpj, celular, phone, comercialPhone);
        console.log('Owner validated')

        setAlertMessage(null);
        return true;
    }

    const validateBasicsForm = () => {
        console.log(description)
        console.log('Basic form validated')

    }

    const validateDetailsForm = () => {
        console.log(propertyimages, propertyvideo)
        console.log('Details form validated')

    }

    const validateImagesForm = () => {
        console.log('Images form validated')

    }

    const validateAcceptForm = () => {
        console.log('Accept form validated')

    }

    return (
        <div className="content-area submit-property" /* style="background-color: #FCFCFC;" */>
            <div className="container">
                <div className="clearfix"> 
                    <div className="wizard-container"> 

                        <div className="wizard-card ct-wizard-orange" id="wizardProperty">
                            {/* <form onSubmit={ ProcessProperty }>                         */}
                                <div className="wizard-header">
                                    <h3>
                                        <b>Submit</b> YOUR PROPERTY <br />
                                        <small>Lorem ipsum dolor sit amet, consectetur adipisicing.</small>
                                    </h3>
                                </div>


                                <ul className="nav nav-pills">
                                    <li className={(activeTab === 1) ? "active" : ""} style={ elWidth }><a href="#step1" data-toggle="tab">{ tabs.tab1 } </a></li>
                                    <li className={(activeTab === 2) ? "active" : ""} style={ elWidth }><a href="#step2" data-toggle="tab">{ tabs.tab2 } </a></li>
                                    <li className={(activeTab === 3) ? "active" : ""} style={ elWidth }><a href="#step3" data-toggle="tab">{ tabs.tab3 } </a></li>
                                    <li className={(activeTab === 4) ? "active" : ""} style={ elWidth }><a href="#step4" data-toggle="tab">{ tabs.tab4 } </a></li>
                                    <li className={(activeTab === 5) ? "active" : ""} style={ elWidth }><a href="#step4" data-toggle="tab">{ tabs.tab5 } </a></li>
                                </ul>

                                <div className="tab-content">
                                    {
                                    activeTab === 1 &&
                                    <form onSubmit={ProcessOwner} className="tab-pane active" id="step1">
                                        <div className="row p-b-15  ">
                                            <h4 className="info-text"> 
                                                Começemos com os seus dados.
                                            </h4>
                                            { alertMessage &&
                                                <div className="alert alert-sm alert-danger mt-1" role="alert">
                                                    { alertMessage }
                                                </div>
                                            }
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Nome do Proprietário <small>(Requerido)</small></label>
                                                    <input onChange={handleOwnerChange} value={ownerName} name="ownerName" type="text" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Email do Proprietário <small>(Requerido)</small></label>
                                                    <input onChange={handleOwnerChange} value={ownerEmail} name="ownerEmail" type="text" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label>CPF ou CMPJ <small>(Requerido)</small></label>
                                                    <input 
                                                        onChange={handleOwnerChange} 
                                                        value={ (cpf.isValid(cpfCnpj)) ? cpf.format(cpfCnpj) : cnpj.format(cpfCnpj) } 
                                                        name="cpfCnpj" 
                                                        type="text" 
                                                        className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Celular <small>(Requerido e fundamental para mantermos contato!)</small></label>
                                                    <input onChange={handleOwnerChange} value={celular} name="celular" type="text" className="form-control" placeholder="(31) 99999 9999" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Telefone <small>(Opcional)</small></label>
                                                    <input onChange={handleOwnerChange} value={phone} name="phone" type="text" className="form-control" placeholder="(31) 99999 9999" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Telefone <small>(Opcional)</small></label>
                                                    <input onChange={handleOwnerChange} value={comercialPhone} name="comercialPhone" type="text" className="form-control" placeholder="(31) 99999 9999" />
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </form>
                                    }

                                    {
                                    activeTab === 2 &&
                                    <form onSubmit={ProcessOwner}  className="tab-pane active" id="step2">
                                        <h4 className="info-text"> Conte para a gente como é o seu imóvel! </h4>
                                        <div className="row">
                                            <div className="col-sm-12"> 
                                                <div className="col-sm-12"> 
                                                    <div className="form-group">
                                                        <label>Property Description :</label>
                                                        <textarea onChange={handleBasicsChange} name="description" className="form-control" ></textarea>
                                                    </div> 
                                                </div> 
                                            </div>

                                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            <div className="col-sm-12">
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <label>Property State :</label>
                                                        <select name="lunchBegins" id="lunchBegins" className="selectpicker" data-live-search="true" data-live-search-style="begins" title="Select your city">
                                                            <option>Seoul</option>
                                                            <option>Paris</option>
                                                            <option>Casablanca</option>
                                                            <option>Tokyo</option>
                                                            <option>Marraekch</option>
                                                            <option>kyoto , shibua</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                {/* <div className="col-sm-3">
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
                                                </div> */}
                                                {/* <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <label>Property Statue  :</label>
                                                        <select id="basic" className="selectpicker show-tick form-control">
                                                            <option> -Status- </option>
                                                            <option>Rent </option>
                                                            <option>Boy</option>
                                                            <option>used</option>  

                                                        </select>
                                                    </div>
                                                </div> */}
                                                {/* <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <label>Property Statue  :</label>
                                                        <select id="basic" className="selectpicker show-tick form-control">
                                                            <option> -Status- </option>
                                                            <option>Rent </option>
                                                            <option>Boy</option>
                                                            <option>used</option>  

                                                        </select>
                                                    </div>
                                                </div> */}
                                            </div>
                                            {/* <div className="col-sm-12 padding-top-15">                                                   
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
                                            </div> */}
                                            {/* <div className="col-sm-12 padding-top-15">
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
                                            </div> */}
                                            <br />
                                        </div>
                                    </form>
                                    }

                                    {
                                    activeTab === 3 &&
                                    <form className="tab-pane active" id="step3">                                        
                                        <h4 className="info-text">Give us somme images and videos ? </h4>
                                        <div className="row">  
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="property-images">Chose Images :</label>
                                                    <input onChange={handleDetailsChange} className="form-control" type="file" name="propertyimages" id="property-images" />
                                                    <p className="help-block">Select multipel images for your property .</p>
                                                </div>
                                            </div>
                                            <div className="col-sm-6"> 
                                                <div className="form-group">
                                                    <label htmlFor="property-video">Property video :</label>
                                                    <input onChange={handleDetailsChange} className="form-control" value="" placeholder="http://www.youtube.com, http://vimeo.com" name="propertyvideo" type="text" />
                                                </div> 

                                                <div className="form-group">
                                                    <input onChange={handleDetailsChange} className="form-control" value="" placeholder="http://www.youtube.com, http://vimeo.com" name="propertyvideo" type="text" />
                                                </div>

                                                <div className="form-group">
                                                    <input onChange={handleDetailsChange} className="form-control" value="" placeholder="http://www.youtube.com, http://vimeo.com" name="propertyvideo" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    }

                                    {
                                        activeTab === 4 &&
                                        <div className="tab-pane active" id="step4">                                        
                                            <h4 className="info-text">Give us somme images and videos ? </h4>
                                            <div className="row">  
                                                {/* <div className="col-sm-6">
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
                                                </div> */}
                                            </div>
                                        </div>
                                    }

                                    {
                                    activeTab === 5 &&
                                    <div className="tab-pane active" id="step5">                                        
                                        <h4 className="info-text"> Finished and submit </h4>
                                        <div className="row">  
                                            <div className="col-sm-12">
                                                <div>
                                                    <p>
                                                        <label><strong>Terms and Conditions</strong></label>
                                                        By accessing or using  GARO ESTATE services, such as 
                                                        posting your property advertisement with your personal 
                                                        information on our website you agree to the
                                                        collection, use and disclosure of your personal information 
                                                        in the legal proper manner
                                                    </p>

                                                    <Checkbox
                                                    checkboxClass="icheckbox_square-yellow submit__m-1"
                                                    increaseArea="20%"
                                                    label="<strong>Aceitar <a href='/tems'>termos e condições</a>    .</strong>"
                                                    name="acceptconditions"
                                                    />

                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                    }

                                </div>

                                <div className="wizard-footer">
                                    <div className="pull-right">
                                        
                                        {
                                            activeTab < 5 &&
                                            <input 
                                            onClick={next} 
                                            type='submit' 
                                            form="step1"
                                            className="btn btn-primary"
                                            name='next' 
                                            value='Next' />
                                        }
                                        {
                                            activeTab >4 &&
                                            <input 
                                                onClick={ProcessOwner}
                                                type='button' 
                                                className="btn btn-primary"
                                                name='finish' 
                                                value='Finish' />
                                        }
                                    </div>

                                    <div className="pull-left">
                                        {
                                            activeTab > 1 &&
                                            <input 
                                            onClick={previous} 
                                            type='button' 
                                            className="btn btn-primary"
                                            name='previous' 
                                            value='Previous' />
                                        }
                                    </div>
                                    <div className="clearfix"></div>                                            
                                </div>	
                            {/* </form> */}
                        </div> 
                    </div> 
                </div>
            </div>
        </div>

    )
}
