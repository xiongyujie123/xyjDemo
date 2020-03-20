import React, { Component } from 'react';
import { ListItem } from '.';
import { Link } from 'umi';

export interface Props {
    todolist: ListItem[]
    onDeleteTodo: (item: ListItem) => void;
    onChangeTodoStatus: (updateitme: ListItem) => void;
    onThingsValue:number
}

export default class ToDoList extends Component<Props> {

    todoDelte = (item: ListItem) => {
        this.props.onDeleteTodo(item);

    }
    todoStatechange = (item: ListItem) => {
        item.finished = !item.finished;
        this.props.onChangeTodoStatus(item);
    }
    render() {
        var t = this;
        var status = this.props.onThingsValue;
        return (
            <div>
                <table>
                    <thead><tr><th></th><th>编号</th><th>事务</th><th>操作</th></tr></thead>
                    <tbody>

                        {
                            this.props.todolist.map((item, index) => {
                                let doneStyle = item.finished ? { textDecoration: 'line-through' } : { textDecoration: 'none' }
                                if (status == 1) {
                                    return (
                                        <tr key={item.id}>
                                            <td><input type='checkbox' checked={item.finished} onChange={() => t.todoStatechange(item)} /></td>
                                            <td>{item.id}</td>
                                            <td style={doneStyle} className={item.finished ? 'finished' : ''}>{item.title}</td>
                                            <td><button onClick={() => t.todoDelte(item)}>删除</button></td>
                                            <td><button><Link to={'/info'+item.id}>详情</Link></button></td>
                                        </tr>
                                    )

                                }
                                if (status == 2 && item.finished==true) {
                                    return (
                                        <tr key={item.id}>
                                            <td><input type='checkbox' checked={item.finished} onChange={() => t.todoStatechange(item)} /></td>
                                            <td>{item.id}</td>
                                            <td style={doneStyle} className={item.finished ? 'finished' : ''}>{item.title}</td>
                                            <td><button onClick={() => t.todoDelte(item)}>删除</button></td>
                                            <td><button><Link to={'/info'+item.id}>详情</Link></button></td>
                                        </tr>
                                    )

                                }
                                if (status == 3 && item.finished==false) {
                                    return (
                                        <tr key={item.id}>
                                            <td><input type='checkbox' checked={item.finished} onChange={() => t.todoStatechange(item)} /></td>
                                            <td>{item.id}</td>
                                            <td style={doneStyle} className={item.finished ? 'finished' : ''}>{item.title}</td>
                                            <td><button onClick={() => t.todoDelte(item)}>删除</button></td>
                                            <td><button><Link to={'/info'+item.id}>详情</Link></button></td>
                                        </tr>
                                    )

                                }


                            })
                        }
                    </tbody>
                </table>

            </div>
        )
    }

}