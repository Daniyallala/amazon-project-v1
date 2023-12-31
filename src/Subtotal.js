import React from 'react';
import "./Subtotal.css";
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format';
import { getCardTotal } from './reducer';
import { useHistory } from 'react-router';

function Subtotal() {
  const history =useHistory();
    const [{cart},dispatch] = useStateValue();

    return (
        <div className="subtotal">

          <CurrencyFormat
          renderText={ (value)=>(
            <>
          <p> Subtotal ({cart.length} items):<strong>{value}</strong> </p>
          <small className="subtotal--gift">
              <input type="checkbox" />This order contains a gift
          </small>
          </>
          )}
          decimalScale={2}
          value={getCardTotal(cart)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
          />      
            <button onClick={e => history.push('/payment')}>Proceed to Buy</button>
        </div>
    )
}

export default Subtotal