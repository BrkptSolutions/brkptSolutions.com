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
      <div className="header" style={{ width, height }}>
        <Logo width={width} height={height} />
        <div className="title">{text}</div>
        {height}
        <br/>
        {width}
        <br/>
        <VSCodePanels className = "VSCodePanels" >
        <VSCodePanelTab> About </VSCodePanelTab>
        <VSCodePanelTab> Resume </VSCodePanelTab>
        <VSCodePanelTab> Contact </VSCodePanelTab>
        <VSCodePanelTab> Social Media </VSCodePanelTab>
        </VSCodePanels>

        
      </div>
    );
  }
}

export default Header;
