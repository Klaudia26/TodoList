import React from 'react';
import CreateNewTodo from './CreateNewTodo';
import TodoList from './TodoList';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            todos: [
                {
                    id: 0,
                    text: "Holiday",
                    complete: true,
                },
                {
                    id: 1,
                    text: "Shopping",
                    complete: false,
                }
            ]
        }
    }
    addNewTodo = (todo) => {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: 3,
                    text: todo,
                    complete: false,
                }
            ]
        });
    }
    render(){
        return(
            <div>
                <CreateNewTodo addNewTodo={this.addNewTodo} />
                <TodoList todos={this.state.todos}/>
            </div>
            
        )
    }
}


export default App;