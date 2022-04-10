import React from 'react';

type PageSignInProps = {
    
}

const PageSignIn = ({ } : PageSignInProps) => {
    return (
        <div className="page-login container">
            <div className="row justify-content-center">
                <div className="col-md-7 col-lg-5">
                    <div className="wrap">
                        <div className="img">

                        </div>
                        <div className="login-wrap p-4 p-md-5">
                            <div className="d-flex">
                                <div className="w-100">
                                    <h3 className="mb-4">Sign In</h3>
                                </div>
                                <div className="w-100">

                                </div>
                            </div>
                            <form action="#" className="signin-form">
                                <div className="form-group mt-md-3">
                                    <input type="text" className="form-control" required/>
                                    <label className="form-control-placeholder" htmlFor="username">Username</label>
                                </div>
                                <div className="form-group mt-md-3">
                                    <input id="password-field" type="password" className="form-control" required />
                                    <label className="form-control-placeholder" htmlFor="username">Password</label>
                                    <i className="bi bi-eye-slash" id="togglePassword"></i>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="form-control btn btn-primary rounded submit px-3">Submit</button>
                                </div>
                                <div className="form-group d-md-flex">
                                    <div className="w-50 text-left">
                                        <label className="checkbox-wrap checkbox-primary mb-0">Remember me <input type="checkbox"/></label>
                                    </div>
                                </div>
                                <div className="w-50 text-left">
                                    <a href="#">Forgot password</a>
                                </div>
                            </form>
                            <p className="text-center">
                                Not a memeber? <a data-toggle="tab" href="#">Sign Up</a>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        <div/>
        </div>
    )
}

export default PageSignIn;