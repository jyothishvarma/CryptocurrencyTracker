// Write your JS  code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptocurrencyDetails: [], isLoading: true}

  componentDidMount() {
    this.getCurrencyDetails()
  }

  getCurrencyDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))
    console.log(updatedData)
    this.setState({cryptocurrencyDetails: updatedData, isLoading: false})
  }

  render() {
    const {cryptocurrencyDetails, isLoading} = this.state
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      <>
        <ul className="list-container">
          <h1 className="heading">Cryptocurrency Tracker</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
            className="image"
          />
          <div className="currencies-list-container">
            <div className="currencies-details-container">
              <div className="coin-type-container">
                <p className="headings">Coin Type</p>
              </div>
              <div className="currencies">
                <p className="headings">USD</p>
                <p className="headings">EURO</p>
              </div>
            </div>
            {cryptocurrencyDetails.map(each => (
              <CryptocurrencyItem
                cryptocurrencyItemDetails={each}
                key={each.id}
              />
            ))}
          </div>
        </ul>
      </>
    )
  }
}

export default CryptocurrenciesList
