import { VSCodePanelTab, VSCodePanelView } from "@vscode/webview-ui-toolkit/react";
import React from "react";
import "../assets/Main.css"
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          width: window.innerWidth,
          height: window.innerHeight - (window.innerHeight/10)
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
          height: window.innerHeight - (window.innerHeight/10)
        });
      }
    
      render() {
        const { width, height } = this.state;
        return(
            <div className="test1" style={{width,height}}><VSCodePanelView width = {width} height = {height}/></div>
        )
      }
    }

export default Main;