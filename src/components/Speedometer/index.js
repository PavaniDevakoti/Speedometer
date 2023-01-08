// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({
        count: prevState.count + 10,
      }))
    }
  }

  onApplyingBrake = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({
        count: prevState.count - 10,
      }))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="card-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="para1">Speed is {count}mph</h1>
        <p className="para2">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-box">
          <button type="button" className="button1" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button
            type="button"
            className="button2"
            onClick={this.onApplyingBrake}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
