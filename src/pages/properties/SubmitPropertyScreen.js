import React from 'react'

// searchVisible = 0;
// transparent = true;

// $(document).ready(function () {
//     /*  Activate the tooltips      */
//     $('[rel="tooltip"]').tooltip();

//     $('.wizard-card').bootstrapWizard({
//         'tabClass': 'nav nav-pills',
//         'nextSelector': '.btn-next',
//         'previousSelector': '.btn-previous',
//         onInit: function (tab, navigation, index) {

//             //check number of tabs and fill the entire row
//             var $total = navigation.find('li').length;
//             $width = 100 / $total;

//             $display_width = $(document).width();

//             if ($display_width < 600 && $total > 3) {
//                 $width = 50;
//             }

//             navigation.find('li').css('width', $width + '%');

//         },
//         onNext: function (tab, navigation, index) {
//             if (index == 1) {
//                 return validateFirstStep();
//             } else if (index == 2) {
//                 return validateSecondStep();
//             } else if (index == 3) {
//                 return validateThirdStep();
//             } //etc. 

//         },
//         onTabClick: function (tab, navigation, index) {
//             // Disable the posibility to click on tabs
//             return false;
//         },
//         onTabShow: function (tab, navigation, index) {
//             var $total = navigation.find('li').length;
//             var $current = index + 1;

//             var wizard = navigation.closest('.wizard-card');

//             // If it's the last tab then hide the last button and show the finish instead
//             if ($current >= $total) {
//                 $(wizard).find('.btn-next').hide();
//                 $(wizard).find('.btn-finish').show();
//             } else {
//                 $(wizard).find('.btn-next').show();
//                 $(wizard).find('.btn-finish').hide();
//             }
//         }
//     });

//     // Prepare the preview for profile picture
//     $("#wizard-picture").change(function () {
//         readURL(this);
//     });

//     $('[data-toggle="wizard-radio"]').click(function () {
//         wizard = $(this).closest('.wizard-card');
//         wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
//         $(this).addClass('active');
//         $(wizard).find('[type="radio"]').removeAttr('checked');
//         $(this).find('[type="radio"]').attr('checked', 'true');
//     });

//     $('[data-toggle="wizard-checkbox"]').click(function () {
//         if ($(this).hasClass('active')) {
//             $(this).removeClass('active');
//             $(this).find('[type="checkbox"]').removeAttr('checked');
//         } else {
//             $(this).addClass('active');
//             $(this).find('[type="checkbox"]').attr('checked', 'true');
//         }
//     });

//     $height = $(document).height();
//     $('.set-full-height').css('height', $height);


// });

// function validateFirstStep() {

//     $(".wizard-card form").validate({
//         rules: {
//             firstname: "required",
//             lastname: "required",
//             email: {
//                 required: true,
//                 email: true
//             }

//             /*  other possible input validations
//              ,username: {
//              required: true,
//              minlength: 2
//              },
//              password: {
//              required: true,
//              minlength: 5
//              },
//              confirm_password: {
//              required: true,
//              minlength: 5,
//              equalTo: "#password"
//              },
             
//              topic: {
//              required: "#newsletter:checked",
//              minlength: 2
//              },
//              agree: "required"
//              */

//         },
//         messages: {
//             firstname: "Please enter your First Name",
//             lastname: "Please enter your Last Name",
//             email: "Please enter a valid email address",
//             /*   other posible validation messages
//              username: {
//              required: "Please enter a username",
//              minlength: "Your username must consist of at least 2 characters"
//              },
//              password: {
//              required: "Please provide a password",
//              minlength: "Your password must be at least 5 characters long"
//              },
//              confirm_password: {
//              required: "Please provide a password",
//              minlength: "Your password must be at least 5 characters long",
//              equalTo: "Please enter the same password as above"
//              },
//              email: "Please enter a valid email address",
//              agree: "Please accept our policy",
//              topic: "Please select at least 2 topics"
//              */

//         }
//     });

//     if (!$(".wizard-card form").valid()) {
//         //form is invalid
//         return false;
//     }

//     return true;
// }

// function validateSecondStep() {

//     //code here for second step
//     $(".wizard-card form").validate({
//         rules: {
//         },
//         messages: {
//         }
//     });

//     if (!$(".wizard-card form").valid()) {
//         console.log('invalid');
//         return false;
//     }
//     return true;

// }

// function validateThirdStep() {
//     //code here for third step


// }

// //Function to show image before upload

// function readURL(input) {
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();

//         reader.onload = function (e) {
//             $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
//         }
//         reader.readAsDataURL(input.files[0]);
//     }
// }


export const SubmitPropertyScreen = () => {
    return (
        <div className="content-area submit-property" /* style="background-color: #FCFCFC;" */>
            <div className="container">
                <div className="clearfix"> 
                    <div className="wizard-container"> 

                        <div className="wizard-card ct-wizard-orange" id="wizardProperty">
                            <form>                        
                                <div className="wizard-header">
                                    <h3>
                                        <b>Submit</b> YOUR PROPERTY <br />
                                        <small>Lorem ipsum dolor sit amet, consectetur adipisicing.</small>
                                    </h3>
                                </div>

                                <ul>
                                    <li><a href="#step1" data-toggle="tab">Step 1 </a></li>
                                    <li><a href="#step2" data-toggle="tab">Step 2 </a></li>
                                    <li><a href="#step3" data-toggle="tab">Step 3 </a></li>
                                    <li><a href="#step4" data-toggle="tab">Finished </a></li>
                                </ul>

                                <div className="tab-content">

                                    <div className="tab-pane" id="step1">
                                        <div className="row p-b-15  ">
                                            <h4 className="info-text"> Let's start with the basic information (with validation)</h4>
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
                                                        <label for="property-geo">Min bed :</label>
                                                        <input type="text" className="span2" value="" data-slider-min="0" 
                                                               data-slider-max="600" data-slider-step="5" 
                                                               data-slider-value="[250,450]" id="min-bed" /><br />
                                                        <b className="pull-left color">1</b> 
                                                        <b className="pull-right color">120</b>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">

                                                    <div className="form-group">
                                                        <label for="price-range">Min baths :</label>
                                                        <input type="text" className="span2" value="" data-slider-min="0" 
                                                               data-slider-max="600" data-slider-step="5" 
                                                               data-slider-value="[250,450]" id="min-baths" /><br />
                                                        <b className="pull-left color">1</b> 
                                                        <b className="pull-right color">120</b>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">

                                                    <div className="form-group">
                                                        <label for="property-geo">Property geo (m2) :</label>
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
                                                    <label for="property-images">Chose Images :</label>
                                                    <input className="form-control" type="file" id="property-images" />
                                                    <p className="help-block">Select multipel images for your property .</p>
                                                </div>
                                            </div>
                                            <div className="col-sm-6"> 
                                                <div className="form-group">
                                                    <label for="property-video">Property video :</label>
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
                                        <input type='button' className='btn btn-next btn-primary' name='next' value='Next' />
                                        <input type='button' className='btn btn-finish btn-primary ' name='finish' value='Finish' />
                                    </div>

                                    <div className="pull-left">
                                        <input type='button' className='btn btn-previous btn-default' name='previous' value='Previous' />
                                    </div>
                                    <div className="clearfix"></div>                                            
                                </div>	
                            </form>
                        </div>
                    </div> 
                </div>
            </div>
        </div>

    )
}
