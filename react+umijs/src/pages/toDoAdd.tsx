import React, { Component } from 'react';
import { ListItem } from '.';

export interface Props {
    todolist: ListItem[],
    onAddTodo: (todolist: ListItem) => void;
}
export interface TitleToStrign {
    title: string;

}

export default class ToDoAdd extends Component<Props, TitleToStrign>{
    constructor(pro: Props) {
        super(pro);
        
        this.state = {
            title: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e: any) {
        
        this.setState({
            title: e.target.value
        })

    }
    handleKey = (e: any) => {
        if (e.keyCode == 13) {
            if (!this.state.title) {
                alert("不能为空的呦");
                return;
            }
            this.props.onAddTodo({
                id: this.props.todolist.length + 1,
                title: this.state.title,
                finished: false

            });
            this.setState({
                title:''
            })
        }
    }

    render() {
        return (
            <div>
                <h1>ToDoS</h1>
                待办：
                <input onKeyUp={this.handleKey} value={this.state.title} onChange={this.handleChange.bind(this)} placeholder="What are you trying to say" />
            </div>
        );
    }
}