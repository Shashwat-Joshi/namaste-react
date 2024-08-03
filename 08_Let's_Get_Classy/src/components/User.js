import React from "react";
class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2: 1
        }
        console.log("Child constructor");
    }

    componentDidMount() {
        console.log("Child component did mount");
    }
    render() {
        const {name, location} = this.props;
        const {count, count2} = this.state;
        console.log("Child render");
        return (
            <div className="user-div">
                <p>Count: {count}</p>
                <p>Count 2: {count2}</p>
                <button className = 'updateBtn' onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 2
                    })
                }}>Increase Count</button>
                <p>Name: {name}</p>
                <p>abha.garg2001@gmail.com</p>
                <p>Location: {location}</p>
            </div>
        );
    }
}

export default User;