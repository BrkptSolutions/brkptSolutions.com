import React from "react";
import "../assets/Body.css"
class Body extends React.Component {
    render() {
        return (
            <div className="bodyBlock" style={{ height: `calc(100vh - ${window.innerHeight / 10}px)` }}>
                hello
          </div>
        );
    }
}
export default Body;