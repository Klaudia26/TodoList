import React from 'react';

class CreateNewTodo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text: "",
        }
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value });
    }

    handlerOnClick = () => {
        this.props.addNewTodo(this.state.text);
    }

    render(){
        return(
            <div>
                <input 
                    value={this.state.text}
                    type="text"
                    onChange={this.handleChange}
                 />
                <button
                    onClick={this.handlerOnClick}
                >
                    Add New
                </button>
            </div>
        )
    }
}

export default CreateNewTodo;
