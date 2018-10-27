import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
        }
    }
    toggle =() => {
        this.setState({
            visible : !this.state.visible
        })
    }

    render(){
        return (
            <section className="container-fluid">
                <div className="main-content">
                    <div className="row">
                        <div className="col-sm-10 mx-auto">
                            <div>
                                {!this.props.auth.isAuthenticated() ? <button className="loginButton bg-teal" onClick={this.props.auth.login}>Login / Signup</button> : <button className="loginButton bg-teal" ><a href="/main">Enter</a></button>}
                            </div>
                        </div>
                        </div>
                    <div className="row d-flex justify-content-space-between m-0">
                        <div className="main-nav bg-eggplant">
                            <div className="col-sm-6 mx-auto">
                                <nav>
                                    <ul>
                                        <li onClick={this.props.auth.logout}>Log out</li>
                                    </ul>
                                </nav>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            )
    }
}

export default Login;
