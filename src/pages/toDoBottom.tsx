import React, { Component } from 'react';
import { ListItem } from '.';


export interface Props {
    changeThings: (option:number)=>void
}
export interface Stat {
    option:number
}

export default class ToDoBottom extends Component<Props,Stat> {

    constructor(pro: Props) {
        super(pro);
        
    }
    btnOption = (option:number) => {   
        this.props.changeThings &&this.props.changeThings(option);

    }
    render() {
        return (
            <div>
                <button  onClick={() =>this.btnOption(1)}>全部</button>
                <button  onClick={() =>this.btnOption(2)}>已完成</button>
                <button  onClick={() =>this.btnOption(3)}>未完成</button>

            </div>

        )


    }
}