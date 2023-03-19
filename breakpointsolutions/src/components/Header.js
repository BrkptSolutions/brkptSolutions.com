import { VSCodePanels, VSCodePanelTab } from '@vscode/webview-ui-toolkit/react';
import React, { Component } from 'react';
import '../assets/Header.css';
import Logo from './Logo.js'


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight/10
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight/10
    });
  }

  render() {
    const { width, height } = this.state;
    if (width < 990){
      var text = 'BrkPt.com'
    }else{
      var text = 'BreakPoint Solutions'
    }
    
    return (
      <div id="header-container" className='header' style={{ width, height }}>
        <div id="left-header" className='header' style = {{width:width*.66}}>
        <Logo width={width} height={height} />
        <div id="title">{text}</div>

        </div>
        <div id="right-header" className='header' style = {{width:width*.33}}>
          <VSCodePanels className = "VSCodePanels" >
          <VSCodePanelTab id='tab-1' className='tabs'> About </VSCodePanelTab>
          <VSCodePanelTab id='tab-2' className='tabs'> Resume </VSCodePanelTab>
          <VSCodePanelTab id='tab-3' className='tabs'> Contact </VSCodePanelTab>
          <VSCodePanelTab id='tab-4' className='tabs'> Social Media </VSCodePanelTab>
          </VSCodePanels>
        </div>

        
      </div>
    );
  }
}

export default Header;
