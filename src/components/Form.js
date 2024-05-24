import React from "react";

class Form extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <form>
                <input type="text" id="name"/>
            </form>
        )
    }
}

export default Form;