import React from 'react';

const Experience = (props) => {
   return (
       <div>
            <section id="contact_sec" className="col-lg-10 col-md-11 col-sm-11 center-div contact-wrap sec-pad">
            <h6>contact</h6>
            <div className="align-center wow fadeInUp ng-scope">
                <h3>Hello <span className="ng-binding">friend</span>, I'd love to hear from you.</h3>
                <div>
                    <form name="contactform" method="post" className="row form-horizontal" role="form">
                        <div className="form-group input--hoshi col-sm-6">
                            <div className="input-wrap">
                                <input autoComplete="off" data-ng-model="formData.inputName" type="text" className="form-control input" id="inputName" name="inputName" placeholder="Name" required="" />
                                <label className="input__label input__label--hoshi input__label--hoshi-color-1"></label>
                            </div>
                        </div>
                        <div className="form-group  input--hoshi col-sm-6">
                            <div className="input-wrap">
                                <input autoComplete="off" data-ng-model="formData.inputEmail" type="email" className="form-control input" placeholder="Email" id="inputEmail" name="inputEmail" required=""/>
                                <label className="input__label input__label--hoshi input__label--hoshi-color-1"></label>
                            </div>
                        </div>
                        <div className="form-group  input--hoshi col-sm-12">
                            <div className="input-wrap">
                                <textarea data-ng-model="formData.inputMessage" className="form-control" rows="4" id="inputMessage" name="inputMessage" placeholder="message" required=""></textarea>
                                <label className="input__label input__label--hoshi input__label--hoshi-color-1"></label>
                            </div>
                        </div>
                        <div className="form-group col-sm-12">
                            <div className="align-center">
                                <button type="button" className="btn btn-default" data-ng-disabled="submitButtonDisabled">
                                <span className="mask"></span>
                                <span>send message</span>
                                </button>
                            </div>
                        </div>
                    </form>
                  
                </div>
            </div>
            <div className="email-direct">
                <p>Or simply email me @ <a href="mailto:tushar.barate86@gmail.com">tushar.barate86@gmail.com</a></p>
            </div>
        </section>
</div>
   )
}

export default Experience;
