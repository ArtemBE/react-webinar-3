import React, { useCallback, useState } from "react";
import PropTypes from 'prop-types';
import Item from "../item";
import './style.css';

function List({list, onDelete, onSelectItem, onAddToBasket, setSumPrice, inBasket, onClose}) {
  return (
    <div className='List'>{
      list
      .filter(item=>!inBasket||item.countInBasket>0)
      .map(item =>
        <div key={item.code} className='List-item'>
          <Item item={item} inBasket={inBasket} onDelete={onDelete} onSelect={onSelectItem} onAddToBasket={onAddToBasket} setSumPrice={setSumPrice}/>
        </div>
      )
      }
    </div>
  )
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  onDeleteItem: PropTypes.func,
  onSelectItem: PropTypes.func
};

List.defaultProps = {
  onDeleteItem: () => {
  },
  onSelectItem: () => {
  },
}

export default React.memo(List);
