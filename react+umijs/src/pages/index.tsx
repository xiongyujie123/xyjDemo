import React from 'react';
import styles from './index.less';
import ToDoAdd from './toDoAdd';
import ToDoList from './toDoList';
import ToDoBottom from './toDoBottom';
import axios from 'axios';


export interface State {
  todolist: ListItem[],
  ThingsValue: number
}

export interface ListItem {
  id: number,
  title: string,
  finished: boolean
}

export default class Index extends React.Component<any, State> {

  constructor(props: any) {
    super(props);
    this.todaData();
    this.state = {    
      todolist: [],
      ThingsValue: 1
    }
  }

  todaData = () => {
    axios.get('/api/todoList').then(res => {
      this.setState({  
        todolist: res.data
      })
    })
  }
  removeTodo = (item: ListItem) => {
    var arr = this.state.todolist.slice();
    var index = arr.findIndex(function (value, index, arr) {
      return value.id === item.id;
    })
    arr.splice(index, 1);
    this.setState({
      todolist: arr
    })
  }
  addtodo = (todos: ListItem) => {
    var arr = this.state.todolist.slice();
    arr.push(todos);
    this.setState({
      todolist: arr
    });
  }
  changeTodoStatus = (updateitme: ListItem) => {
    var arr = this.state.todolist.slice();
    var item = arr.find(function (value, index, arr) {
      return updateitme.title === value.title;
    })
    if(item){
    item.finished= updateitme.finished;
    this.setState({
      todolist: arr,
      ThingsValue:3
    });
  }
  }
  changeThings=(option:number)=> {
    this.setState({
        ThingsValue:option
    })
  
}

  render() {
    return (
      <div>
        <ToDoAdd onAddTodo={this.addtodo} todolist={this.state.todolist}></ToDoAdd>
        <ToDoList todolist={this.state.todolist.filter(it =>
            this.state.ThingsValue === 1
              ? true
              : this.state.ThingsValue === 3
              ? !it.finished
              : it.finished,
          )} 
        onDeleteTodo={this.removeTodo} 
        onChangeTodoStatus={this.changeTodoStatus}></ToDoList>
        <ToDoBottom changeThings={this.changeThings}></ToDoBottom>
      </div>

    );
  }



}
