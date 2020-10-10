import React, { Component } from 'react';
import { Spin } from 'antd';
import { enquireScreen } from 'enquire-js';
import Header from './Nav0';
import Footer from './Footer0';

import {
  Nav00DataSource,
  Footer01DataSource,
} from './data.source.js';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});


class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }

  render() {
    return (
      <>
        <Header dataSource={Nav00DataSource} isMobile={this.state.isMobile} />
        {this.props.children}
        <Footer dataSource={Footer01DataSource} isMobile={this.state.isMobile} />
      </>
    );
  }
}

export default Layout;