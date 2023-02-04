import {useEffect, useState} from "preact/hooks"
import { Component } from 'preact';
class Clock extends Component {
    state = {now: Date.now()}
    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState({
                now: Date.now()
            })
        }, 1000)
    }
    render({ nil }, { now }){
        return <h1>{new Date(now).toLocaleTimeString()}</h1>
    }
}
export default Clock;