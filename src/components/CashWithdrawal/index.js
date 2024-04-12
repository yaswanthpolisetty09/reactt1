import React, {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updatefun = value => {
    this.setState(prev => ({
      balance: prev.balance - value,
    }))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'

    return (
      <div>
        <h1>{name}</h1>
        <h1>{balance}</h1>
        <div>
          <ul>
            {denominationsList.map(each => (
              <DenominationItem
                key={each.id}
                detailss={each}
                updatefun={this.updatefun}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
