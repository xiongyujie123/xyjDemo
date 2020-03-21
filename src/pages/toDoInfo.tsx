import React, { Component } from 'react';
import { ListItem } from '.';
import { Link } from 'umi';
export interface Props {
    todolist: ListItem[]
}

export default class ToDoBottom extends Component<Props>{
    constructor(pro: Props) {
        super(pro);       
        this.state = { 
        }
    }
    
    componentWillMount(){
        this.intit();
    }
    intit=()=>{         
        const id=this.props.match.params.id;
               
    }

    render() {
        return (
            <div>
                    <h1>Info</h1>
                    <p>编号：<input type='text' defaultValue={this.state.id} readOnly/></p>
                    <p>事务：<input type='text' value=''/></p>
                    <p>状态：<input type='text' value='' /></p>
                    <button>修改</button><Link to='/index'><a>返回</a></Link>

            </div>

        )


    }

}