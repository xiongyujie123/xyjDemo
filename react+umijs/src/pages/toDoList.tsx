import React, { Component } from 'react';
import { ListItem } from '.';
import { Link } from 'umi';
import styles from './index.less';

export interface Props {
    todolist: ListItem[];
    onDeleteTodo: (item: ListItem) => void;
    onChangeTodoStatus: (updateitme: ListItem) => void;
    Up:(item: ListItem)=>void;
    Under:(item: ListItem)=>void;
}

export default class ToDoList extends Component<Props> {

    todoDelte = (item: ListItem) => {
        this.props.onDeleteTodo(item);

    }
    todoStatechange = (item: ListItem) => {
        item.finished = !item.finished;
        this.props.onChangeTodoStatus(item);
    }
    onUp=(item:ListItem)=>{
         this.props.Up(item);
    }
    onUnder=(item:ListItem)=>{
         this.props.Under(item);
    }

    render() {
        var t = this;
        return (
            <div>
                <table>
                    <thead className={styles.hred}><tr><th>状态</th><th>编号</th><th>事务</th><th>操作</th></tr></thead>
                    <tbody>
                        
                    {this.props.todolist && this.props.todolist.length > 0
                            ? this.props.todolist.map(item => (
                                <tr key={item.id} className={styles.tr}>
                                    <td><input type='checkbox' checked={item.finished} onChange={() => t.todoStatechange(item)} /></td>
                                    <td>{item.id}</td>
                                    <td style={item.finished ? {textDecoration: 'line-through' } : {textDecoration: 'none' }} className={item.finished ? 'finished' : ''}>{item.title}</td>
                                    <td><button onClick={() => t.todoDelte(item)}>删除</button></td>
                                    <td><button><Link to={'/info' + item.id}>详情</Link></button></td>
                                    <td><button onClick={()=>t.onUp(item)}>上</button></td>
                                    <td><button onClick={()=>t.onUnder(item)}>下</button></td>
                                </tr>
                            )
                            ) : null}


                    </tbody>
                </table>

            </div>
        )
    }

}