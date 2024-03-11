// Write your code here
import './index.css'

import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }
  render() {
    const {count} = this.state
    return (
      <div className="counter-container">
        <h1 className="heading">
          The Button has been clicked <span className="counter">{count}</span>{' '}
          times
        </h1>
        <p className="paragraph">Click the button to increase the count!</p>
        <button className="button" onClick={this.onIncrement}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
