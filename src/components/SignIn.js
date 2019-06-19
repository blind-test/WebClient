import React, {Component, Fragment} from 'react'
import {Topbar} from "./Topbar";
import {connect} from "react-redux";
import {sign_in} from "../actions/userActions";

class SignIn extends Component{
    constructor(props){
        super(props)
        this.logIn = this.logIn.bind(this)
    }

    componentDidMount(){
        console.log("SignIn mounted");
    }

    logIn(event){
        event.preventDefault()
        console.log(event.target)
        const form = event.target
        const username = form.querySelector('[name="username"]').value
        const password = form.querySelector('[name="password"]').value
        console.table(username,password)
        const payload = {email:username, password:password}
        this.props.dispatch(sign_in(JSON.stringify(payload)))
    }

    render(){
        return (
            <Fragment>

                <form method={"post"} onSubmit={this.logIn} >
                        <div className={"grid-x grid-padding-x"}>
                            <div className={"medium-6 small-12 cell"}>
                                <label>Username
                                    <input type={"text"} name={"username"} />
                                </label>
                            </div>
                            <div className={"medium-6 small-12 cell"}>
                                <label>Password
                                    <input type="password" name={"password"}/>
                                </label>
                            </div>
                            <div className={"medium-6 small-12 cell"}>
                                <button className={"button"} type={"submit"} >Sign In</button>
                            </div>
                        </div>
                </form>
            </Fragment>
        )
    }
}

function mapStateToProps(state, ownProps){
    console.log("mapStateToProps: SignIn");
     return {}
}

export default connect(mapStateToProps)(SignIn)