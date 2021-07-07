import React, { Component } from 'react'
import "./Footer.css"

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <hr className="hr"/>
                <p>By clicking Join Now you agree to our <span className="terms">Terms of Use</span> and <span className="terms">Privacy Policy</span><span>
                <button className="btn"> Join Now </button></span></p>
            </div>
        )
    }
}

export default Footer
