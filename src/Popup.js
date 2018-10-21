import React, { Component } from 'react';
import Person from "./Person";
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
const request = require('request');

const Handle = Slider.Handle;

const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
        <Tooltip
            prefixCls="rc-slider-tooltip"
            overlay={value}
            visible={dragging}
            placement="top"
            key={index}
        >
            <Handle value={value} {...restProps} />
        </Tooltip>
    );
};

class Popup extends Component {

    static Users = [
        {
            name: "Naomi Sorrell",
            amountRaised: 300,
            amountRequired: 400,
            tags: ["Health", "Emergency"],
            image: require("./person1.png")
        },
        {
            name: "Naomi Sorrell",
            amountRaised: 5,
            amountRequired: 100,
            tags: ["Health", "Emergency"],
            image: require("./person2.jpg")
        },
        {
            name: "Naomi Sorrell",
            amountRaised: 30,
            amountRequired: 600,
            tags: ["Health", "Emergency"],
            image: require("./person3.jpg")
        },
        {
            name: "Naomi Sorrell",
            amountRaised: 900,
            amountRequired: 1000,
            tags: ["Health", "Emergency"],
            image: require("./person4.jpg")
        },
        {
            name: "Naomi Sorrell",
            amountRaised: 0,
            amountRequired: 100,
            tags: ["Health", "Emergency"],
            image: require("./person5.jpg")
        },
        {
            name: "Naomi Sorrell",
            amountRaised: 25,
            amountRequired: 100,
            tags: ["Health", "Emergency"],
            image: require("./person6.jpg")
        }
    ]

    constructor(props) {
        super(props);
        this.state = {
            step: this.props.step,
            stepHeader: this.props.stepHeader,
            searchName: "",
            paymentTime: false,
            user: null,
            completed: false,
            paymentAmount: 0,
            multiplier: 1
        }
    }

    updateStep(number, header) {
        this.setState({
            step: number,
            stepHeader: header
        })
    }

    updateAmount(value){
        this.setState({
            paymentAmount: value
        });
    }

    async paymentTime(user) {
        await this.setState({
            user,
            paymentTime: true,
        })
    }

    payPalPayment() {
        const name = this.state.user ? this.state.user.name : "Mutual Fund";
        const postData = {
            "amount": {
                "value": this.state.paymentAmount.toString(),
                "currency": "USD"
            },
            "payee": {
                "id": "payee@example.com",
                "name": name,
                "type": "EMAIL"
            },
            "payment_type": "PERSONAL"
        };

        const options = {
            method: 'post',
            body: postData,
            json: true,
            url: 'https://api.sandbox.paypal.com/v1/payments/personal-payment-tokens',
            headers: {
                Authorization: ' Bearer A21AAGmpjhFmwr06yeIKKilCBfpCPwimvrLxvtS0NwLb4hnnhHA8C32ID7Edv7iwuFt0cQvprLsLPWTj8CUkrXxrGuYOtpMbA'
            }
        }



        request(options, function (err, res, body) {
            if (err) {
                console.error('error posting json: ', err)
                throw err
            }
            var headers = res.headers
            var statusCode = res.statusCode
            console.log('headers: ', headers)
            console.log('statusCode: ', statusCode)
            console.log('body: ', body)
            window.location.href = body.links[0].href;
        })
    }

    async paymentCompleted() {
        await this.setState({
            paymentTime: false,
            completed: true,
            stepHeader: "Redirecting....."
        })

        this.payPalPayment();
    }

    calculateReturn() {
        if (this.state.paymentAmount <= 0 || isNaN(this.state.multiplier) || isNaN(this.state.paymentAmount)) {
            return 0;
        }
        const amount = this.state.paymentAmount * (1 / this.state.multiplier);
        const final = parseInt(this.state.paymentAmount) + amount;
        return parseInt(final.toFixed(2));
    }

    setMultiplier(props) {
        this.setState({
            multiplier: props
        })
    }


    content() {
        if (this.state.paymentTime) {
            return (
                <div>
                    <form className="previewPage pageWrapper_1epv95t">
                        <div className="headerBox_dpbx39">
                            <div className="css-oaim43">
                                <div className="css-12m5src recipientHeader">
                                    <div style={{"position":"relative","display":"inline-block"}}>
                                        <div
                                            style={{"position":"relative","overflow":"hidden","textAlign":"center","backgroundSize":"cover","width":"79px","height":"79px"}}>
                                                <img style={{"marginTop": "15px", "borderRadius": "50%"}}width={60} height={60} src={this.state.user.image}></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="css-13yfks8"><span className="css-1qajeno">{this.state.user.name}</span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div dir="ltr" className="inputWrapper_2gx8tz">
                                        <div className="currencySymbol_9kpplj">$</div>
                                        <input  className="input_1ug0axw vx_text-2"
                                                onChange={e => this.updateAmount(e.target.value)}
                                               dir="ltr" name="amount"
                                               autoComplete="off" placeholder="0.00"
                                               style={{"width":"200px","fontSize":"60px"}} type="text"></input></div>
                                    <div className="selectWrapper_160dgv9" style={{"width": "37px"}}><label
                                        aria-label="select currency"><select name="currencies"
                                                                                                  className="select_miqu48">
                                        <option value="USD">USD</option>
                                        <option value="AUD">AUD</option>
                                        <option value="BRL">BRL</option>
                                        <option value="CAD">CAD</option>
                                        <option value="CHF">CHF</option>
                                        <option value="CZK">CZK</option>
                                        <option value="DKK">DKK</option>
                                        <option value="EUR">EUR</option>
                                        <option value="GBP">GBP</option>
                                        <option value="HKD">HKD</option>
                                        <option value="HUF">HUF</option>
                                        <option value="ILS">ILS</option>
                                        <option value="JPY">JPY</option>
                                        <option value="MXN">MXN</option>
                                        <option value="MYR">MYR</option>
                                        <option value="NOK">NOK</option>
                                        <option value="NZD">NZD</option>
                                        <option value="PHP">PHP</option>
                                        <option value="PLN">PLN</option>
                                        <option value="RUB">RUB</option>
                                        <option value="SEK">SEK</option>
                                        <option value="SGD">SGD</option>
                                        <option value="THB">THB</option>
                                        <option value="TRY">TRY</option>
                                        <option value="TWD">TWD</option>
                                    </select></label><span
                                        className="icon icon-arrow-down-small selectArrow_t2q6jk-o_O-arrowPosition_9l58a4"></span>
                                    </div>
                                </div>
                                <div className="firstTimeUserHelpInfo_1l3aoin">
                                    <div className="vx_alert vx_alert-help"><p className="vx_alert-text"><span>Enter how much you'd like to send.<br></br><br></br>You can select from up to 25 different currencies.</span>
                                    </p></div>
                                </div>
                            </div>
                           </div>
                        <p className="policy_181aq96 vx_text-legal"><span>View <a
                            href="https://www.paypal.com/webapps/mpp/popup/about-payment-methods" target="_blank">PayPal policies</a> and your payment method rights.</span>
                        </p>
                        <div className="submitButtonWrapper_1ntyrs8">
                            <button onClick={() => this.paymentCompleted()}
                                    className="vx_btn submitButton_1sxl9gz preview-getFundingOptions preview-sendMoney">Continue
                            </button>
                        </div>
                        <a href="#" data-pagename="main:p2p:buy::review" className="cancelLink_1x7kdxt">Cancel</a>
                    </form>
                </div>
            );
        }
        if (this.state.completed){
            return (
                null
            );
        }
        if (this.state.step == 1) {
            return (
                <div className="vx_modal-body vx_blocks-for-mobile">
                <div className="table-container interstitial-container nemo_newAccountContainer">
                <div onClick={() => this.updateStep(2, "Invest in a Specific Person")} ><h5
            className="vx_text-body-md_medium balance-transfer-header test_balance-transfer-header">Specific Person / Project</h5>
            <ul className="transfer-list-container test_transfer-list-container">
                <li className="transfer-listItem"><a data-name="withdrawBalance"
                    className=" test_move-money-out" target="" pa-marked="1"><span
                    className="col-xs-2"><svg className="withdraw-money-icon"
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 44 32" width="50px"
                                              height="88px" fill="#2C2E2F"><g><path
                    className="withdraw-money-icon-stroke"
                    d="M32.25,24.07a.5.5,0,1,0-1,.12c0,.12,0,.38,0,.71-4.71-.44-9.35.21-13.84.85S8.36,27,3.72,26.57l-.5-12.26.36-.06a.5.5,0,1,0-.16-1l-.81.15a.5.5,0,0,0-.39.51L2.74,27a.48.48,0,0,0,0,.08.5.5,0,0,0,.43.4,33.6,33.6,0,0,0,3.8.21,75.81,75.81,0,0,0,10.62-1c4.59-.65,9.33-1.32,14.08-.79l.16,0a.5.5,0,0,0,.48-.5s0,0,0,0C32.3,24.82,32.28,24.26,32.25,24.07Z"></path><path
                    className="withdraw-money-icon-stroke"
                    d="M32.19,16.75a.5.5,0,0,0-.5.5v4.33c-.46-.09-1.12-.19-2.07-.32a59.87,59.87,0,0,0-14.06.31,34.33,34.33,0,0,1-8.86.26V9.73a24.74,24.74,0,0,0,6.77.13L15,9.76c.08,0,6.82-.62,9.21-.79a.49.49,0,0,0,.23,0,14.92,14.92,0,0,1,7.27.82V12a.5.5,0,0,0,1,0V9.5a.5.5,0,0,0-.28-.45A15,15,0,0,0,25,7.94l-.1,0c-.94,0-9.67.81-10,.85l-1.51.1A22.27,22.27,0,0,1,6.3,8.63a.5.5,0,0,0-.61.49V22.24a.5.5,0,0,0,.41.49A18,18,0,0,0,9.48,23a58.59,58.59,0,0,0,6.18-.46,59.15,59.15,0,0,1,13.84-.31c1.77.25,3.15.84,3.21-.09l0-4.91A.5.5,0,0,0,32.19,16.75Z"></path><path
                    className="withdraw-money-icon-stroke"
                    d="M15.9,15.52A3.11,3.11,0,1,0,19,12.41,3.11,3.11,0,0,0,15.9,15.52Zm5.22,0A2.11,2.11,0,1,1,19,13.42,2.11,2.11,0,0,1,21.11,15.52Z"></path><path
                    className="withdraw-money-icon-stroke"
                    d="M41.73,14.33,38,10a.5.5,0,1,0-.76.65l3.06,3.56H26.69a.5.5,0,0,0,0,1H40.26l-3,3.56a.5.5,0,0,0,.76.65L41.74,15A.5.5,0,0,0,41.73,14.33Z"></path></g></svg></span><span
                    className="col-xs-9 transfer-list"><p
                    className="transfer-list-primaryText">Help a specific person out</p><p
                    className="vx_text-legal transfer-list-text">If you have a specific cause or person you want to help out</p></span><span
                    className="col-xs-1"><svg xmlns="http://www.w3.org/2000/svg"
                                              width="24px" height="88px" fill="#20BFD6"
                                              viewBox="-10 0 24 10"><g fill="none"
                                                                       fill-rule="evenodd"><path
                    fill="none" d="M-9-7h24v24H-9z"></path><path fill="#2C2E2F"
                                                                 d="M.15.15c-.2.2-.2.5 0 .7L4.775 5.5l-4.6 4.65c-.2.174-.2.5 0 .7.2.2.5.2.7 0L5.85 5.874c.1-.1.15-.226.15-.35a.553.553 0 0 0-.15-.376l-5-5C.65-.05.325-.05.15.15"></path></g></svg></span></a>
                </li>
            </ul>
            </div>
            <div onClick={() => this.updateStep(3, "Amount to put into Mutual Fund")}><h5
                className="vx_text-body-md_medium balance-transfer-header test_balance-transfer-header">Mutual Fund</h5>
                <ul className="transfer-list-container test_transfer-list-container">
                    <li className="transfer-listItem"><a
                                                         data-name="addBalanceOnline"
                                                         className=" test_add-money-online"
                                                         target="" pa-marked="1"><span
                        className="col-xs-2"><svg className="add-money-icon"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 42 32" width="50px"
                                                  height="88px" fill="#2C2E2F"><g><path
                        className="add-money-icon-stroke"
                        d="M34.41,2.57a6.1,6.1,0,0,0-6.13,6.06,6.14,6.14,0,0,0,12.27,0A6.1,6.1,0,0,0,34.41,2.57Zm0,11.11a5.1,5.1,0,0,1-5.13-5.06,5.14,5.14,0,0,1,10.27,0A5.1,5.1,0,0,1,34.41,13.68Z"></path><path
                        className="cls-1"
                        d="M36.85,8.12H34.91V6.18a.5.5,0,0,0-1,0V8.12H32a.5.5,0,0,0,0,1h1.94v1.94a.5.5,0,0,0,1,0V9.12h1.94a.5.5,0,0,0,0-1Z"></path><path
                        className="add-money-icon-stroke"
                        d="M33.25,23.82a.5.5,0,0,0-1,.12c0,.12,0,.38,0,.71-4.71-.44-9.35.21-13.84.85s-9.1,1.29-13.75.83l-.5-12.26L4.58,14a.5.5,0,1,0-.16-1l-.81.15a.5.5,0,0,0-.39.51l.53,13.11a.48.48,0,0,0,0,.08.5.5,0,0,0,.43.4,33.6,33.6,0,0,0,3.8.21,75.81,75.81,0,0,0,10.62-1c4.59-.65,9.33-1.32,14.08-.79l.16,0a.5.5,0,0,0,.48-.5s0,0,0,0C33.3,24.57,33.28,24,33.25,23.82Z"></path><path
                        className="add-money-icon-stroke"
                        d="M33.19,16.5a.5.5,0,0,0-.5.5v4.33c-.46-.09-1.12-.19-2.07-.32a59.87,59.87,0,0,0-14.06.31,34.33,34.33,0,0,1-8.86.26V9.48a24.74,24.74,0,0,0,6.77.13L16,9.51c.09,0,9.06-.82,10-.84a.5.5,0,1,0,0-1c-.94,0-9.67.81-10,.85l-1.51.1A22.27,22.27,0,0,1,7.3,8.38a.5.5,0,0,0-.61.49V22a.5.5,0,0,0,.41.49,18,18,0,0,0,3.38.29,58.59,58.59,0,0,0,6.18-.46A59.15,59.15,0,0,1,30.5,22c1.77.25,3.15.84,3.21-.09l0-4.91A.5.5,0,0,0,33.19,16.5Z"></path><path
                        className="add-money-icon-stroke"
                        d="M16.9,15.27A3.11,3.11,0,1,0,20,12.16,3.11,3.11,0,0,0,16.9,15.27Zm5.22,0A2.11,2.11,0,1,1,20,13.17,2.11,2.11,0,0,1,22.11,15.27Z"></path></g></svg></span><span
                        className="col-xs-9 transfer-list"><p
                        className="transfer-list-primaryText">Fund a mutual fund</p><p
                        className="vx_text-legal transfer-list-text">You can pick a fund depending on risks and/or topics</p></span><span
                        className="col-xs-1"><svg xmlns="http://www.w3.org/2000/svg"
                                                  width="24px" height="88px" fill="#20BFD6"
                                                  viewBox="-10 0 24 10"><g fill="none"
                                                                           fill-rule="evenodd"><path
                        fill="none" d="M-9-7h24v24H-9z"></path><path fill="#2C2E2F"
                                                                     d="M.15.15c-.2.2-.2.5 0 .7L4.775 5.5l-4.6 4.65c-.2.174-.2.5 0 .7.2.2.5.2.7 0L5.85 5.874c.1-.1.15-.226.15-.35a.553.553 0 0 0-.15-.376l-5-5C.65-.05.325-.05.15.15"></path></g></svg></span></a>
                    </li>
                </ul>
            </div>
            </div>
        </div>
            )
        } else if (this.state.step == 2) {
            return (
                <div className="vx_modal-body vx_blocks-for-mobile" style={{overflow: "scroll"}}>
                    <div className="table-container interstitial-container nemo_newAccountContainer">
                        <div>
                            <div style={{width: "25%"}}>
                            <form>
                                <span className="dx-input-combo-group">
                                    <input value={this.state.searchName} placeholder="Search" onChange={e => this.updateName(e.target.value)}></input></span>
                            </form>
                            </div>
                            <ul className="transfer-list-container test_transfer-list-container">
                                {Popup.Users.map(User => {
                                    return <Person key={User.name} user={User} paymentTime={this.paymentTime.bind(this)}/>;
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            );
        } else if (this.state.step == 3) {
            return (
                <div className="vx_modal-body vx_blocks-for-mobile" style={{overflow: "scroll"}}>
                    <form className="previewPage pageWrapper_1epv95t">
                        <div className="headerBox_dpbx39">
                            <div>
                                <div>
                                    <div dir="ltr" className="inputWrapper_2gx8tz">
                                        <div className="currencySymbol_9kpplj">$</div>
                                        <input  className="input_1ug0axw vx_text-2"
                                                onChange={e => this.updateAmount(e.target.value)}
                                                dir="ltr" name="amount"
                                                autoComplete="off" placeholder="0.00"
                                                style={{"width":"200px","fontSize":"60px"}} type="text"></input></div>
                                    <div className="selectWrapper_160dgv9" style={{"width": "37px"}}><label
                                        aria-label="select currency"><select name="currencies"
                                                                             className="select_miqu48">
                                        <option value="USD">USD</option>
                                        <option value="AUD">AUD</option>
                                        <option value="BRL">BRL</option>
                                        <option value="CAD">CAD</option>
                                        <option value="CHF">CHF</option>
                                        <option value="CZK">CZK</option>
                                        <option value="DKK">DKK</option>
                                        <option value="EUR">EUR</option>
                                        <option value="GBP">GBP</option>
                                        <option value="HKD">HKD</option>
                                        <option value="HUF">HUF</option>
                                        <option value="ILS">ILS</option>
                                        <option value="JPY">JPY</option>
                                        <option value="MXN">MXN</option>
                                        <option value="MYR">MYR</option>
                                        <option value="NOK">NOK</option>
                                        <option value="NZD">NZD</option>
                                        <option value="PHP">PHP</option>
                                        <option value="PLN">PLN</option>
                                        <option value="RUB">RUB</option>
                                        <option value="SEK">SEK</option>
                                        <option value="SGD">SGD</option>
                                        <option value="THB">THB</option>
                                        <option value="TRY">TRY</option>
                                        <option value="TWD">TWD</option>
                                    </select></label><span
                                        className="icon icon-arrow-down-small selectArrow_t2q6jk-o_O-arrowPosition_9l58a4"></span>
                                    </div>
                                    <div className="table-container interstitial-container nemo_newAccountContainer">
                                        <div style={{"height": "30px"}}>
                                            <div style={{"position": "relative", "float": "left"}}>Risky</div>
                                            <div style={{"position": "relative", "float": "right"}}>Safe</div>
                                        </div>
                                        <Slider min={1} max={20} defaultValue={3} handle={handle} onChange={this.setMultiplier.bind(this)} />
                                    </div>
                                    <div>
                                        <h3>Estimated Return: ${ this.calculateReturn() }</h3>
                                    </div>
                                </div>
                                <div className="firstTimeUserHelpInfo_1l3aoin">
                                    <div className="vx_alert vx_alert-help"><p className="vx_alert-text"><span>Enter how much you'd like to send.<br></br><br></br>You can select from up to 25 different currencies.</span>
                                    </p></div>
                                </div>
                            </div>
                        </div>
                        <p className="policy_181aq96 vx_text-legal"><span>View <a
                            href="https://www.paypal.com/webapps/mpp/popup/about-payment-methods" target="_blank">PayPal policies</a> and your payment method rights.</span>
                        </p>
                        <div className="submitButtonWrapper_1ntyrs8">
                            <button onClick={() => this.paymentCompleted()}
                                    className="vx_btn submitButton_1sxl9gz preview-getFundingOptions preview-sendMoney">Continue
                            </button>
                        </div>
                        <a href="#" data-pagename="main:p2p:buy::review" className="cancelLink_1x7kdxt">Cancel</a>
                    </form>
                </div>
            );
        }
    }


    render() {
        return (
            <div>
                <div className="vx_modal-flow vx_modalPrepToOpen vx_modalIsOpen __web-inspector-hide-shortcut__"
                     id="mainModal" tabIndex="-1" aria-labelledby="js_modalHeader">
                    <div className="vx_modal-wrapper elementDirection" tabIndex="-1">
                        <div>
                            <div onClick={() => this.props.close(this.state.paymentAmount)}>
                                <a data-name="modalClose"
                                   className="vx_modal-dismiss_x test_dismissFlow" pa-marked="1"><span
                                    className="vx_a11yText">close</span></a>
                            </div>
                            <div className="vx_modal-content">
                                <header className="vx_modal-header"><h2 id="js_modalHeader"
                                                                        className="vx_h2 header-centered">{this.state.stepHeader}</h2><p className="vx_text-body"></p></header>
                                {this.content()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup;