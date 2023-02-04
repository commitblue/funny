import { Component } from "preact";

class Clicker extends Component {
    state = {
        clicks: 0,
        timeLeft: 50,
        status: 0
    }
    constructor(){
        super()
    }
    componentDidMount(){
        this.interval = setInterval(() => {
            if (!(this.state.timeLeft < 1)){
                this.setState({
                    timeLeft: this.state.timeLeft - 1
                })
            } else {
                this.setState({
                    status: 2
                })
            }
        }, 1000)
    }
    render({ nil }, { clicks, timeLeft, status }){
        let theStatus = "still going"
        if (status === 1){
            theStatus = "YOU WON!"
        } else if (status === 2){
            theStatus = "you lost"
        }
        return <div>
            <button class="btn" onClick={() => {
                if (!(status === 1 || status === 2)){
                    this.setState({
                        clicks: this.state.clicks + 1
                    })
                }
                if (this.state.clicks >= 500){
                    clearInterval(this.interval)
                    this.setState({
                        status: 1
                    })
                }
            }}>
                clicks: {clicks}
            </button>
            <h1>
                time left: {timeLeft} <br/>
                goal : 500 <br/>
                {theStatus}
            </h1>
        </div>
    }
}
export default Clicker