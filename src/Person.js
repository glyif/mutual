import React, { Component } from 'react';

class Person extends Component {
    render() {
        return (
            <li onClick={() => this.props.paymentTime(this.props.user)} className="transfer-listItem"><a data-name="withdrawBalance"
                                                 className=" test_move-money-out" target="" pa-marked="1"><span
                className="col-xs-2"><img style={{"marginTop": "15px", "borderRadius": "50%"}}width={60} height={60} src={this.props.user.image}></img></span><span
                className="col-xs-9 transfer-list"><p
                className="transfer-list-primaryText">${this.props.user.amountRaised} / ${this.props.user.amountRequired}</p>
                {this.props.user.tags.map(tag => {
                    return <p className="vx_text-legal transfer-list-text">{tag}</p>
                })}

                <div>Risk: {this.props.user.risk}</div>

            </span>
                <span
                className="col-xs-1"><svg xmlns="http://www.w3.org/2000/svg"
                                          width="24px" height="88px" fill="#20BFD6"
                                          viewBox="-10 0 24 10"><g fill="none"
                                                                   fill-rule="evenodd"><path
                fill="none" d="M-9-7h24v24H-9z"></path><path fill="#2C2E2F"
                                                             d="M.15.15c-.2.2-.2.5 0 .7L4.775 5.5l-4.6 4.65c-.2.174-.2.5 0 .7.2.2.5.2.7 0L5.85 5.874c.1-.1.15-.226.15-.35a.553.553 0 0 0-.15-.376l-5-5C.65-.05.325-.05.15.15"></path></g></svg></span></a>
            </li>
        )
    }
}

export default Person;