import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h2>info@photoshowcase.com</h2>
                            <h3>+8801854954709</h3>
                            <div className="footer-manu">
                                <ul>
                                    <li><a href="/">Facebook</a></li>
                                    <li><a href="/">Twitter</a></li>
                                    <li><a href="/">Youtube</a></li>
                                    <li><a href="/">Linkedin</a></li>
                                </ul>
                            </div>
                            <div className="copyright-text">
                               &copy; PhotoShowcase.org All Rights Reserved
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
