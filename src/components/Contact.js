import React from "react";
import { Link } from "react-router-dom";
class Contact extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo : {
                name : "",
                public_repos: "",
                blog: "",
                avatar_url: "",
            }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Sriramprasath04");
        const json = await data.json();
        console.log("User data: ",json);

        this.setState({
            userInfo: json,
        });
    }

    render(){
        const {name, public_repos, blog, avatar_url} = this.state.userInfo;

        return (
            <Link className="contact" to={blog}>
                <img src={avatar_url}/>
                <p>Design & Build</p>
                <h3>{name}</h3>
                <h5>Reposotries: {public_repos}</h5>
            </Link>
        );
    }
}

export default Contact;