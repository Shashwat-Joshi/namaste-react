import React from "react";
import User from "./User";

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent constructor");
    }
    componentDidMount() {
        console.log("Parent component did mount");
    }
    render() {
        console.log("Parent render");
        return (
            <div>
                <h1>About us!</h1>
                <h3>This is about us page</h3>
                <User name = "Abha Garg" location = "Bengaluru"/>
            </div>   
        );
    }
}
export default About;