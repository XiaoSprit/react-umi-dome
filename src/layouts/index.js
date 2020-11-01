import React, { Component } from 'react';
import { enquireScreen } from 'enquire-js';
import Header from './Nav3';

import { Nav30DataSource } from './data.source.js';

let isMobile;
enquireScreen(b => {
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
    enquireScreen(b => {
      this.setState({ isMobile: !!b });
    });
  }

  render() {
    return (
      <>
        <Header dataSource={Nav30DataSource} isMobile={this.state.isMobile} />
        {this.props.children}
      </>
    );
  }
}

export default Layout;
