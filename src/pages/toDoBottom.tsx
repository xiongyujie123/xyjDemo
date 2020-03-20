import React, { Component } from 'react';
import { ListItem } from '.';

export interface Props {
    changeThings: (option:number)=> void;

}
export interface Stat{
    optionOne:number,
    optionTwin:number,
    optionThree:number
}
export default class ToDoBottom extends Component<Props,Stat> {

    constructor(pro: Props) {
        super(pro);
        
        this.state = {
            optionOne:1,
            optionTwin:2,
            optionThree:3
        }
        this.All = this.All.bind(this);
        this.Completed = this.Completed.bind(this);
        this.Unfinished = this.Unfinished.bind(this);
    }
    All = () => {
        let option = this.state.optionOne;
        this.props.changeThings(option);

    }
    Completed = () => {
        let option =this.state.optionTwin;
        this.props.changeThings(option);
    }
    Unfinished = () => {

        let option =this.state.optionThree;
        this.props.changeThings(option);
    }

    render() {
        return (
            <div>
                <button value={this.state.optionOne} onClick={this.All}>全部</button>
                <button value={this.state.optionTwin}  onClick={this.Completed}>已完成</button>
                <button value={this.state.optionThree}  onClick={this.Unfinished}>未完成</button>

            </div>

        )


    }
}