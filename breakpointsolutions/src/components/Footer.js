import React from 'react';
import '../assets/Footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      top: window.innerHeight - (.03 * window.innerHeight),
      height: window.innerHeight * .04,
    };
    this.handleResize = this.handleResize.bind(this);
    this.handleScroll = this.handleScroll(this);
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
      top: window.innerHeight - (.03 * window.innerHeight),
      height: window.innerHeight * .03
    });
  }
  handleScroll() {
    this.handleResize();
  }

  render() {
    const { width, top,height } = this.state;
    return(
      <div className="footer" style={{width,top,height}}>
      <p>Footer content goes here.</p>
      </div>    )
  }
}





export default Footer;