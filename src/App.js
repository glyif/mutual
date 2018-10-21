import React, { Component } from 'react';
import Header from "./Header";
import logo from './logo.svg';
import './main.css';
import './paypal-sans.css';
import './vx-header-footer.css';
import './transfer.css';
import Popup from "./Popup";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        monies: "340.00",
        isInvesting: false,
        stepHeader: "Start Investing",
        step: 1

    }
  }

  handleInvesting(amount) {
      const money = 340 - parseInt(amount);
        this.setState({
            isInvesting: !this.state.isInvesting,
            monies: money + ".00"
        })
  }

  render() {
    if (this.state.isInvesting) {
      return (
          <Popup stepHeader={this.state.stepHeader} step={this.state.step} close={this.handleInvesting.bind(this)} />
      );
    }
    return (
        <div>
          <Header/>
            <div className="vx_foreground-container foreground-container">
                <div>
                    <div className="vx_globalNav-main_mobile">
                        <div className="vx_globalNav-headerSection_trigger">
                            <div className="vx_globalNav-toggleTrigger-container"><label
                                className="vx_globalNav-toggleTrigger_animated" htmlFor="toggleNavigation"><span></span>
                                <div className="vx_globalNav-toggleTrigger_animated_open">Menu</div>
                                <div className="vx_globalNav-toggleTrigger_animated_close">Close</div>
                            </label></div>
                        </div>
                        <div className="vx_globalNav-headerSection_logo"><a href="https://www.paypal.com/myaccount/home"
                                                                            id="header-ppLogo_mobile"
                                                                            className="vx_globalNav-brand_mobile"
                                                                            pa-marked="1"><span
                            className="vx_a11yText">Summary</span></a></div>
                        <ul className="vx_globalNav-headerSection_actions">
                            <li className="vx_globalNav-actionItem_mobileglobalNav_notificationItem vx_globalNav-notificationItem_mobile">
                                <a className="vx_globalNav-svgIcon vx_globalNav-link_notifications notifications_mobile vx_isCritical js_notificationDesktopBtn cw_notifications-mobile-trigger"
                                   id="header-openNotifications" role="button" title="Notifications"
                                   data-popover-autodisplay="false" data-modal-id="notifications-mobile" pa-marked="1">
                                    <svg className="notifications-icon" width="32px" height="32px" viewBox="-4 2 32 32"
                                         version="1.1" xmlns="http://www.w3.org/2000/svg"
                                         xlink="http://www.w3.org/1999/xlink">
                                        <path fill="none" stroke="#FFFFFF" stroke-linecap="round"
                                              stroke-linejoin="round"
                                              d="M17.4,6.5c2.8,1.2,4.8,4.2,4.8,7.6v3.6c0,1.1,0.7,2.5,1.6,3.2c0,0,0.8,0.3,0.8,1.1c0,0,0,0.9-1,0.9H5.5c-1,0-1-0.9-1-0.9c0-0.8,0.8-1.1,0.8-1.1c0.9-0.6,1.6-2,1.6-3.1v-3.6c0-4.5,3.5-8.2,7.7-8.2V2.6"></path>
                                        <path fill="none" stroke="#FFFFFF" stroke-linecap="round"
                                              stroke-linejoin="round"
                                              d="M11.9,24.7c0.3,0.9,1.4,1.8,2.8,1.9c1.3-0.1,2.4-1,2.8-1.9"></path>
                                    </svg>
                                    <span className="vx_a11yText">Notifications</span></a></li>
                        </ul>
                        <div className="vx_modal-flow" id="notifications-mobile">
                            <div className="vx_modal-wrapper cw_notifications-modal-wrapper">
                                <div className="vx_modal-content cw_notifications-mobile-content">
                                    <div id="notifications-mobile-popover" className="cw_notifications-mobile-container"
                                         tabIndex="0">
                                        <header className="vx_modal-header cw_notifications-mobile-content-header"><span
                                            className="vx_modal-dismiss_trigger" data-modal-id="notifications-mobile"><svg
                                            className="close-icon" width="24" height="24" viewBox="0 0 97.998 120"
                                            version="1.1" xmlns="http://www.w3.org/2000/svg"
                                            xlink="http://www.w3.org/1999/xlink"
                                            data-id="cw_notifications-mobile-dismiss"><path stroke="#2C2E2F"
                                                                                            fill="#2C2E2F"
                                                                                            d="m82.91 99.121q2.8e-14 0.87891-0.53711 1.416-0.53711 0.53711-1.416 0.53711-0.87891 0-1.4648-0.58594l-30.469-30.469c-7.6538 7.6416-22.961 22.925-30.615 30.566q-0.53711 0.58594-1.416 0.58594t-1.416-0.58594q-1.416-1.416 0-2.7832c10.173-10.205 22.888-22.961 30.518-30.615-7.6294-7.6172-22.888-22.852-30.518-30.469q-1.416-1.5137 0-2.8809 1.416-1.3672 2.9297-0.048829c10.173 10.205 22.888 22.961 30.518 30.615 7.6416-7.6538 22.925-22.961 30.566-30.615q0.48828-0.58594 1.3672-0.58594t1.4648 0.58594q1.416 1.416 0 2.832c-10.205 10.189-22.961 22.925-30.615 30.566 7.6294 7.6294 22.888 22.888 30.518 30.518q0.58594 0.53711 0.58594 1.416z"
                                                                                            stroke-width="0px"></path></svg><span
                                            className="vx_a11yText">Close</span></span>
                                            <svg className="notifications-icon" width="32px" height="32px"
                                                 viewBox="-4 2 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                 xlink="http://www.w3.org/1999/xlink">
                                                <path fill="none" stroke="#FFFFFF" stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                      d="M17.4,6.5c2.8,1.2,4.8,4.2,4.8,7.6v3.6c0,1.1,0.7,2.5,1.6,3.2c0,0,0.8,0.3,0.8,1.1c0,0,0,0.9-1,0.9H5.5c-1,0-1-0.9-1-0.9c0-0.8,0.8-1.1,0.8-1.1c0.9-0.6,1.6-2,1.6-3.1v-3.6c0-4.5,3.5-8.2,7.7-8.2V2.6"></path>
                                                <path fill="none" stroke="#FFFFFF" stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                      d="M11.9,24.7c0.3,0.9,1.4,1.8,2.8,1.9c1.3-0.1,2.4-1,2.8-1.9"></path>
                                            </svg>
                                            <div id="cw_tab-list" className="cw_tab-list">
                                                <button id="cw_tab-notifications" data-panel="cw_panel-notifications"
                                                        className="cw_tab cw_tab_notifications cw_tab_selected"
                                                        data-pagename="main:notifications:toggleNotifs"
                                                        pa-marked="1">Notifications (<span
                                                    id="notificationCount">0</span>)
                                                </button>
                                                <button id="cw_tab-messages" data-panel="cw_panel-messages"
                                                        className="cw_tab cw_tab_messages"
                                                        data-pagename="main:notifications:toggleSMC" pa-marked="1">Inbox
                                                    (<span id="messageCount">0</span>)
                                                </button>
                                            </div>
                                            <div className="cw_tab-list-shadow"></div>
                                        </header>
                                        <div className="cw_popover-body">
                                            <ul className="cw_panel cw_panel_notifications cw_panel_selected"
                                                id="cw_panel-notifications">
                                                <li className="cw_notification">
                                                    <div className="cw_notification-subheader">Notifications</div>
                                                    <div className="cw_notification-description">You have no new
                                                        notifications.
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul className="cw_panel cw_panel_messages" id="cw_panel-messages">
                                                <li className="cw_notification">
                                                    <div className="cw_notification-subheader">Messages</div>
                                                    <div className="cw_notification-description">You have no new
                                                        messages.
                                                    </div>
                                                    <a href="https://www.paypal.com/selfhelp/smc/"
                                                       className="cw_notification-link" pa-marked="1">View Messages</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="vx_mainContent contents" id="contents" role="main">
                    <main className="row accountPage-container js_accountPage-container elementDirection" tabIndex="-1"
                          aria-label="Accounts List and Detail">
                        <div className="col-sm-4 accountPage-sections fiLists-container ">
                            <section className="fiListGroup nemo_fiListGroup">
                                <header className="fiListGroup-header table-row"><span
                                    className="fiListGroup-headerIcon table-col-xs"><span data-name=""
                                                                                          className="icon icon-small icon-action-arrow-down-half-small fiListGroupHeader-icon  "></span></span><span
                                    className="table-col-xs"><h5 className="vx_text-6 fiListGroup-headerContent">Payment methods</h5></span>
                                </header>
                                <ul className="fiList test_fiList js_fiList" tabIndex="-1">
                                    <li className="fiList-item isSelected_ltr"><a
                                        href="https://www.paypal.com/myaccount/money/balances/summary"
                                        data-name="viewBalance" className="fiListItem-link test_navItem-balance"
                                        pa-marked="1"><span data-name="viewBalance"
                                                            className="fiListItem-row table-row"><span
                                        data-name="viewBalance"
                                        className="fiListItem-col table-col-xs fiListItem-statusIcon"></span><span
                                        data-name="viewBalance"
                                        className="fiListItem-col table-col-xs fiListItem-typeIcon"><span
                                        className="product-logo circleLogo_small product-logo_balance "><span
                                        className="monogram-logo-group"><svg xmlns="http://www.w3.org/2000/svg"
                                                                             viewBox="0 0 50 59"
                                                                             preserveAspectRatio="xMidYMid"
                                                                             className="monogram-logo"><g fill="none"
                                                                                                          fill-rule="evenodd"><path
                                        className="monogram-logo-lastP_balance"
                                        d="M21.33 14.097h16.705c8.97 0 12.346 4.5 11.825 11.126-.86 10.92-7.52 16.96-16.352 16.96h-4.46c-1.21 0-2.024.793-2.354 2.95L24.78 57.65c-.123.814-.554 1.292-1.202 1.35H13.102c-.985 0-1.336-.748-1.078-2.367l6.397-40.16c.258-1.61 1.146-2.376 2.91-2.376"></path><path
                                        className="monogram-logo-firstP_balance"
                                        d="M10.885.276h16.723c4.71 0 10.296.152 14.033 3.42 2.498 2.183 3.808 5.66 3.505 9.394-1.025 12.66-8.663 19.753-18.906 19.753h-8.25c-1.403 0-2.333.922-2.73 3.42l-2.3 14.517c-.15.942-.562 1.497-1.313 1.564H1.345c-1.143 0-1.55-.867-1.25-2.745L7.513 3.03C7.81 1.166 8.84.277 10.885.277"></path><path
                                        className="monogram-logo-overlap_balance"
                                        d="M15.5 34.8l2.92-18.328c.257-1.61 1.145-2.375 2.91-2.375h16.706c2.765 0 5 .428 6.75 1.217-1.678 11.268-9.028 17.53-18.654 17.53h-8.248c-1.085 0-1.896.55-2.384 1.956"></path></g></svg></span></span></span><span
                                        data-name="viewBalance" className="fiListItem-col table-col-xs"><span
                                        data-name="viewBalance" className="fiListItem-header">PayPal balance</span><span
                                        data-name="viewBalance" className="fiListItem-identifier"><span
                                        data-name="viewBalance" className="fiListItem-amount vx_h3">${this.state.monies}</span> <span
                                        data-name="viewBalance" className="vx_legal-text">Available</span></span></span></span></a>
                                    </li>
                                    <li className="fiList-item"><a
                                        href="https://www.paypal.com/myaccount/money/accounts/new"
                                        data-name="linkABankOrCard" className="test_addNewFi" pa-marked="1"><span
                                        data-name="linkABankOrCard" className="fiListItem-row table-row"><span
                                        data-name="linkABankOrCard"
                                        className="fiListItem-col table-col-xs fiListItem-statusIcon"></span><span
                                        data-name="linkABankOrCard"
                                        className="fiListItem-col table-col-xs fiListItem-typeIcon"><span
                                        data-name="linkABankOrCard" className="vx_addBtn-primary"></span></span><span
                                        data-name="linkABankOrCard" className="fiListItem-col table-col-xs">Link a card or bank</span></span></a>
                                    </li>
                                </ul>
                            </section>
                        </div>
                        <section className="col-sm-8 accountPage-sections fiDetailArea-container isActive">
                            <div className="fiDetails-container js_fiDetails-container" tabIndex="-1"><a
                                href="https://www.paypal.com/myaccount/money" data-name="backButton"
                                className="vx_backBtn fiDetails-backBtn invisibleForDesktop" pa-marked="1">Back</a>
                                <div className="fiDetails"><span
                                    className="product-logo circleLogo_large product-logo_balance "><span
                                    className="monogram-logo-group"><svg xmlns="http://www.w3.org/2000/svg"
                                                                         viewBox="0 0 50 59"
                                                                         preserveAspectRatio="xMidYMid"
                                                                         className="monogram-logo"><g fill="none"
                                                                                                      fill-rule="evenodd"><path
                                    className="monogram-logo-lastP_balance"
                                    d="M21.33 14.097h16.705c8.97 0 12.346 4.5 11.825 11.126-.86 10.92-7.52 16.96-16.352 16.96h-4.46c-1.21 0-2.024.793-2.354 2.95L24.78 57.65c-.123.814-.554 1.292-1.202 1.35H13.102c-.985 0-1.336-.748-1.078-2.367l6.397-40.16c.258-1.61 1.146-2.376 2.91-2.376"></path><path
                                    className="monogram-logo-firstP_balance"
                                    d="M10.885.276h16.723c4.71 0 10.296.152 14.033 3.42 2.498 2.183 3.808 5.66 3.505 9.394-1.025 12.66-8.663 19.753-18.906 19.753h-8.25c-1.403 0-2.333.922-2.73 3.42l-2.3 14.517c-.15.942-.562 1.497-1.313 1.564H1.345c-1.143 0-1.55-.867-1.25-2.745L7.513 3.03C7.81 1.166 8.84.277 10.885.277"></path><path
                                    className="monogram-logo-overlap_balance"
                                    d="M15.5 34.8l2.92-18.328c.257-1.61 1.145-2.375 2.91-2.375h16.706c2.765 0 5 .428 6.75 1.217-1.678 11.268-9.028 17.53-18.654 17.53h-8.248c-1.085 0-1.896.55-2.384 1.956"></path></g></svg></span></span>
                                    <h3 className="vx_h3">PayPal balance</h3>
                                    <div className="fiDetails-content">
                                        <div className="fiDetails-balance_info"><p
                                            className="vx_h2 balanceDetails-amount">${this.state.monies}</p><span
                                            className="vx_legal-text">Available</span></div>
                                    </div>
                                    <div className="vx_blocks-for-mobile"><a
                                        href="https://www.paypal.com/myaccount/money/balances/transfer" type="button"
                                        data-name="viewTransfer" title="" target="" data-track="{}"
                                        className="btn vx_btn balanceDetails-moveMoneyButton test_transfer-button vx_btn-secondary"
                                        pa-marked="1">Transfer Money</a></div>
                                    <div className="vx_blocks-for-mobile"><a
                                        onClick={this.handleInvesting.bind(this)} type="button"
                                        data-name="viewTransfer" title="" target="" data-track="{}"
                                        className="btn vx_btn balanceDetails-moveMoneyButton test_transfer-button vx_btn-secondary"
                                        pa-marked="1">Start Investing</a></div>
                                    <a href="https://www.paypal.com/myaccount/money/currencies/new"
                                       className="balanceDetails-manageCurrencies test_mcm-addCurrency"
                                       pa-marked="1">Add a currency</a>
                                    <hr className="vx_hr-alt fiDetails-hr"></hr>
                                        <h3 className="vx_h3">PayPal works without a
                                        balance</h3>
                                        <p className="vx_small-text">No kidding! You can still use PayPal to
                                        shop or send money when your balance is zero.</p>
                                        <div className="fiChoice-container">
                                            <hr className="vx_hr-alt fiDetails-hr"></hr>
                                                <div className="vx_text-6">
                                                    <div><span>Preferred when paying online</span></div>
                                                    <button name="makePreferredPayment"
                                                            className="btn vx_btn-link test_setAsPreferred"
                                                            pa-marked="1"><span>Set as preferred</span></button>
                                                </div>
                                                <div className="vx_text-6 fiChoice-info">We’ll use your available
                                                    balance when you shop online or send money for goods and services.
                                                    <div>If you don’t have enough money in your balance, we’ll ask you
                                                        to pick another payment method at checkout.
                                                    </div>
                                                    <div><a
                                                        href="https://www.paypal.com/myaccount/money/choice/learn-more"
                                                        data-name="choiceLearnMore" pa-marked="1">More about payment
                                                        preferences</a></div>
                                                </div>
                                        </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </section>
                <div>
                    <div>
                        <div className="vx_globalFooter">
                            <div className="vx_globalFooter-content">
                                <ul className="vx_globalFooter-list">
                                    <li><a href="https://www.paypal.com/smarthelp/home" className="js_help"
                                           data-pagename="main:footer:help" id="footer-help" pa-marked="1">Help</a></li>
                                    <li><a href="https://www.paypal.com/smarthelp/contact-us"
                                           data-pagename="main:footer:contact" id="footer-contact" pa-marked="1">Contact
                                        Us</a></li>
                                    <li><a href="https://www.paypal.com/webapps/mpp/paypal-safety-and-security"
                                           data-pagename="main:footer:security" id="footer-security"
                                           pa-marked="1">Security</a></li>
                                    <li><a href="https://www.paypal.com/webapps/mpp/paypal-fees"
                                           data-pagename="main:footer:fees" id="footer-pricing" pa-marked="1">Fees</a>
                                    </li>
                                    <li className="vx_globalFooterLink-feedback js_feedbackSection" id="siteFeedback">
                                        <a href="#" className="js_feedbackLink hidden-phone" pa-marked="1">Feedback</a>
                                    </li>
                                </ul>
                                <div className="vx_globalFooter_secondary"><p
                                    className="vx_globalFooter-copyright">©<span dir="ltr">1999-2018</span> PayPal, Inc.
                                    All rights reserved.</p>
                                    <ul className="vx_globalFooter-list_secondary">
                                        <li><a href="https://www.paypal.com/webapps/mpp/ua/privacy-full"
                                               data-pagename="main:footer:privacy" id="footer-privacy"
                                               pa-marked="1">Privacy</a></li>
                                        <li><a href="https://www.paypal.com/webapps/mpp/ua/legalhub-full"
                                               data-pagename="main:footer:legal" id="footer-legal"
                                               pa-marked="1">Legal</a></li>
                                        <li><a href="https://www.paypal.com/webapps/mpp/ua/upcoming-policies-full"
                                               data-pagename="main:footer:policies" id="footer-policyUpdates"
                                               pa-marked="1">Policy updates</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
