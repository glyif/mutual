import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="">
                <div className="vx_globalNav-main globalNav-main js_globalNavView js_ppLogo" role="banner">
                    <div className="vx_globalNav-container"><a href="https://www.paypal.com/myaccount/summary"
                                                               id="header-ppLogo" data-pagename="main:header:logo"
                                                               className="vx_globalNav-brand_desktop"
                                                               pa-marked="1"><span
                        className="vx_a11yText">Summary</span></a>
                        <div className="vx_globalNav-secondaryNav_mobile">
                            <div className="vx_globalNav-listItem_mobileLogout"><a href="https://www.paypal.com/signout"
                                                                                   id="header-logout_mobile"
                                                                                   data-pagename="main:header:mobileLogout"
                                                                                   className="vx_globalNav-link_mobileLogout"
                                                                                   pa-marked="1">Log Out</a></div>
                            <div className="vx_globalNav-listItem_settings"><a
                                href="https://www.paypal.com/myaccount/settings" id="header-settings_mobile"
                                data-pagename="main:header:mobileSettings"
                                className="vx_globalNav-svgIcon vx_globalNav-link_settings" pa-marked="1">
                                <svg width="26px" height="26px" viewBox="-2 4 26 26" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                    <path fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round"
                                          d="M22.4,12.4c-0.2-0.4-0.4-0.8-0.6-1.2l-3.6,0.2c-0.4-0.5-0.9-1-1.4-1.4L17,6.3c-0.8-0.4-1.7-0.8-2.5-1.1l-2.3,2.5c-0.7-0.1-1.5-0.1-2.3-0.1L7.7,5.2C7.2,5.3,6.8,5.5,6.4,5.6C6,5.8,5.5,6,5.1,6.3l0.1,3.1c-0.7,0.5-1.4,1.1-2,1.8L0.3,11c-0.5,0.8-0.8,1.7-1.1,2.6l2,1.9c-0.2,1-0.2,2-0.1,2.9l-2,1.8c0.1,0.5,0.3,0.9,0.5,1.4s0.4,0.9,0.6,1.3L3,22.8c0.6,0.8,1.3,1.5,2.1,2.1l-0.2,2.8c0.8,0.5,1.7,0.8,2.6,1.1l2-2.2c0.9,0.1,1.8,0.1,2.7,0l2,2.3c0.5-0.1,0.9-0.3,1.4-0.5c0.4-0.2,0.8-0.4,1.2-0.6l-0.1-3.3c0.6-0.5,1.1-1,1.6-1.6l3.4,0.2c0.5-0.8,0.8-1.6,1.1-2.5l-2.6-2.4c0.1-0.7,0.1-1.3,0-2l2.7-2.4C22.7,13.3,22.5,12.8,22.4,12.4L22.4,12.4z"></path>
                                    <circle fill="none" stroke="#FFFFFF" cx="11" cy="17" r="5.2"></circle>
                                </svg>
                                <span className="vx_a11yText">Settings</span></a></div>
                            <div><p className="vx_h5 vx_globalNav-displayName">Bobby Yang</p></div>
                        </div>
                        <div className="vx_globalNav-navContainer">
                            <nav className="vx_globalNav-nav" role="navigation">
                                <ul className="vx_globalNav-list">
                                    <li className=""><a href="https://www.paypal.com/myaccount/summary" target="_self"
                                                        id="header-newSummary" data-pagename="main:header:newSummary"
                                                        className="vx_globalNav-links js_summary"
                                                        pa-marked="1">Summary</a></li>
                                    <li className=""><a href="https://www.paypal.com/myaccount/transactions/"
                                                        target="_self" id="header-activity"
                                                        data-pagename="main:header:activity"
                                                        className="vx_globalNav-links js_activity"
                                                        pa-marked="1">Activity</a></li>
                                    <li className=""><a href="https://www.paypal.com/myaccount/transfer?from=Header"
                                                        target="_self" id="header-transfer"
                                                        data-pagename="main:header:transfer"
                                                        className="vx_globalNav-links js_sendMoney"
                                                        pa-marked="1">Send &amp; Request</a></li>
                                    <li className="vx_isActive"><a href="https://www.paypal.com/myaccount/wallet"
                                                                   target="_self" id="header-wallet"
                                                                   data-pagename="main:header:wallet"
                                                                   className="vx_globalNav-links js_wallet"
                                                                   pa-marked="1">Wallet</a></li>
                                    <li className=""><a href="https://www.paypal.com/us/webapps/mpp/offers"
                                                        target="_self" id="header-offers"
                                                        data-pagename="main:header:offers"
                                                        className="vx_globalNav-links js_offers"
                                                        pa-marked="1">Offers</a></li>
                                    <li className=""><a href="https://www.paypal.com/selfhelp" target="_self"
                                                        id="header-help" data-pagename="main:header:help"
                                                        className="vx_globalNav-links js_help" pa-marked="1">Help</a>
                                    </li>
                                    <li className="vx_globalNav-link_mobileSearch js_globalNavSearchEntry"><a
                                        href="https://www.paypal.com/selfhelp" id="header-mobile-search"
                                        className="vx_globalNav-links js_mobileSearch" pa-marked="1">Search</a></li>
                                </ul>
                                <ul className="vx_globalNav-list_secondary">
                                    <li><a href="https://www.paypal.com/selfhelp"
                                           className="vx_globalNav-link_search vx_globalNav-svgIcon js_globalNavSearchEntry js_search"
                                           id="header-search" title="Search" pa-marked="1">
                                        <svg width="32px" height="32px" viewBox="-4 3 32 32" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                            <path fill="none" stroke="#FFFFFF" stroke-linecap="round"
                                                  d="M26,25c0,0-5.4-5.4-5.9-5.9s-0.5-1.5-0.2-2 c0.8-1.3,1.3-2.9,1.3-4.5c0-4.8-3.9-8.6-8.6-8.6S4,7.9,4,12.6s3.9,8.6,8.6,8.6c1.4,0,2.7-0.3,3.9-0.9"></path>
                                        </svg>
                                        <span className="vx_globalNav-navText_secondary vx_a11yText">Search</span></a>
                                    </li>
                                    <li className="vx_hidden-phone" data-autodisplay="false"><a href="#"
                                                                                                id="header-notifications"
                                                                                                className="vx_globalNav-svgIcon vx_globalNav-link_notifications vx_isCritical js_notifications js_notificationDesktopBtn cw_popover-trigger"
                                                                                                data-popover-autodisplay="false"
                                                                                                data-popover-id="notifications-popover"
                                                                                                data-popover-offset="15"
                                                                                                data-pagename="main:notifications::toggle"
                                                                                                data-popover-pagename-show="main:notifications:toggle"
                                                                                                data-popover-pagename-hide="main:notifications:toggle"
                                                                                                pa-marked="1">
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
                                        <span className="vx_a11yText">Notifications</span></a>
                                    </li>
                                    <li><a href="https://www.paypal.com/myaccount/settings" id="header-settings"
                                           data-pagename="main:header:settings"
                                           className="vx_globalNav-svgIcon vx_globalNav-link_settings js_settings"
                                           pa-marked="1">
                                        <svg width="26px" height="26px" viewBox="-2 4 26 26" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                            <path fill="none" stroke="#FFFFFF" stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                  d="M22.4,12.4c-0.2-0.4-0.4-0.8-0.6-1.2l-3.6,0.2c-0.4-0.5-0.9-1-1.4-1.4L17,6.3c-0.8-0.4-1.7-0.8-2.5-1.1l-2.3,2.5c-0.7-0.1-1.5-0.1-2.3-0.1L7.7,5.2C7.2,5.3,6.8,5.5,6.4,5.6C6,5.8,5.5,6,5.1,6.3l0.1,3.1c-0.7,0.5-1.4,1.1-2,1.8L0.3,11c-0.5,0.8-0.8,1.7-1.1,2.6l2,1.9c-0.2,1-0.2,2-0.1,2.9l-2,1.8c0.1,0.5,0.3,0.9,0.5,1.4s0.4,0.9,0.6,1.3L3,22.8c0.6,0.8,1.3,1.5,2.1,2.1l-0.2,2.8c0.8,0.5,1.7,0.8,2.6,1.1l2-2.2c0.9,0.1,1.8,0.1,2.7,0l2,2.3c0.5-0.1,0.9-0.3,1.4-0.5c0.4-0.2,0.8-0.4,1.2-0.6l-0.1-3.3c0.6-0.5,1.1-1,1.6-1.6l3.4,0.2c0.5-0.8,0.8-1.6,1.1-2.5l-2.6-2.4c0.1-0.7,0.1-1.3,0-2l2.7-2.4C22.7,13.3,22.5,12.8,22.4,12.4L22.4,12.4z"></path>
                                            <circle fill="none" stroke="#FFFFFF" cx="11" cy="17" r="5.2"></circle>
                                        </svg>
                                        <span className="vx_a11yText">Settings</span></a></li>
                                    <li className="vx_globalNav-listItem_logout"><a
                                        href="https://www.paypal.com/signout" id="header-logout"
                                        data-pagename="main:header:logout"
                                        className="vx_globalNav-link_logout js_logout" pa-marked="1">Log Out</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;