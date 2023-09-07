// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurrencyItemDetails} = props
  const {
    currencyName,
    usdValue,
    euroValue,
    currencyLogo,
  } = cryptocurrencyItemDetails

  return (
    <li className="cryptocurrency-item-container">
      <div className="coin-type-container">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="currency-type">{currencyName}</p>
      </div>
      <div className="currencies-container">
        <p className="currencies">{usdValue}</p>
        <p className="currencies">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
