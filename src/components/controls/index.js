import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import './style.css';
import { formatPrice } from "../../utils";

function Controls({onOpen, setSumPrice}) {
  return (
    <div className='Controls'>
      <span className="inBasketLabel">В корзине: </span>
      <strong className="countOfItems">{setSumPrice.sum===0?"Пусто":formatPrice(setSumPrice.sum)+" товара / "+formatPrice(setSumPrice.price)+" ₽"}</strong>
      <button onClick={() => onOpen()}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  onAdd: PropTypes.func
};

Controls.defaultProps = {
  onAdd: () => {}
}

export default React.memo(Controls);
