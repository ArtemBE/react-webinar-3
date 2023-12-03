import './style.css';
import React from 'react';
import List from '../list';
import { formatPrice } from '../../utils';

function Basket(props){
    return (
    <div className='beyondTheBasket'>
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
            <div className='basket-total'>
                {(props.list.filter(item=>item.countInBasket>0).length>0)?<span className='basket-total-label'>Итого</span>:false}
                <span className='basket-total-count'>
                    {props.list.filter(item=>item.countInBasket>0).length===0?
                    'Корзина пуста':
                    formatPrice(props.list.reduce((sum, item)=>sum+item.price*(item.countInBasket||0), 0)) + '₽'}
                </span>
                
            </div>
        </div>
    </div>
    
    )
}
export default Basket;