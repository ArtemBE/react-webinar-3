import './style.css';
import React from 'react';
import List from '../list';

function Basket(props){
    return (
    <div className='basket'>
        <div className='basket-head'>
            <h2 className='basket-label'>Корзина</h2>
            <button onClick={props.onClose} className='basket-close-button'>Закрыть</button>
        </div>
        <List item={props.item} 
            list={props.list}
            onDelete={props.onDelete} 
            onSelect={props.onSelectItem} 
            onAddToBasket={props.onAddToBasket} 
            setSumPrice={props.setSumPrice}
            inBasket={true}/>
    </div>
    )
}
export default Basket;