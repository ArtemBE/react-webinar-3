import React, {useState} from "react";
import PropTypes from "prop-types";
import {plural} from "../../utils";
import './style.css';
import { formatPrice } from "../../utils";

function Item(props) {

  // Счётчик выделений
  const [count, setCount] = useState(0);

  const callbacks = {
    onClick: () => {
      props.onSelect(props.item.code);
      if (!props.item.selected) {
        setCount(count + 1);
      }
    },
    onDelete: (e) => {
      e.stopPropagation();
      console.log("Сумма до: " + props.setSumPrice.sum);
      props.setSumPrice.setSum(props.setSumPrice.sum-props.item.countInBasket);
      props.setSumPrice.setPrice(props.setSumPrice.price-props.item.countInBasket*props.item.price);
      props.onDelete(props.item.code);
      console.log("deleted");
    },
    onAddToBasket: (e) => {
      props.setSumPrice.setSum(props.setSumPrice.sum+1);
      props.setSumPrice.setPrice(props.setSumPrice.price+props.item.price);
      props.onAddToBasket(props.item.code);
      console.log(props.setSumPrice);
    }
  }

  return (
    <div className={'Item' + (props.item.selected ? ' Item_selected' : '')}
         onClick={callbacks.onClick}>
      <div className='Item-code'>{props.item.code}</div>
      <div className='Item-title'>
        {props.item.title} {/* {count ? ` | Выделяли ${count} ${plural(count, {
        one: 'раз',
        few: 'раза',
        many: 'раз'
      })}` : ''} */}
      </div>
      <div className='Item-actions'>
        <span className="Item-price">{formatPrice(props.item.price)}₽</span>
        {props.inBasket && <span className="countItemInBasket">{props.item.countInBasket + " шт"}</span>}
        <button onClick={props.inBasket?callbacks.onDelete:callbacks.onAddToBasket}>
          {props.inBasket?'Удалить':'Добавить'}
        </button>
      </div>
    </div>
  );
}

/* Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    selected: PropTypes.bool,
    count: PropTypes.number
  }).isRequired,
  onDelete: PropTypes.func,
  onSelect: PropTypes.func
};

Item.defaultProps = {
  onDelete: () => {
  },
  onSelect: () => {
  },
} */

export default React.memo(Item);
