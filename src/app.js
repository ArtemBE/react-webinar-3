import React, {useCallback, useEffect, useState} from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Basket from './components/basket';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {
  
  const [sum, setSum] = useState(0);
  const [price, setPrice] = useState(0);
  const [opened, setOpened] = useState(false);
  const open = {opened, setOpened};
  const setSumPrice = {
    setSum, setPrice, sum, price
  }
  const list = store.getState().list;
  useEffect(()=>{
    console.log("Произошел ререндеринг и сумма равняется "+setSumPrice.sum);
  });
  const callbacks = {
    onDelete: useCallback((code) => {
      store.deleteFromBasket(code);
    }, [store]),

    onSelectItem: useCallback((code) => {
      store.selectItem(code);
    }, [store]),

    onAddItem: useCallback(() => {
      store.addItem();
    }, [store]),
    
    onAddToBasket: useCallback((code) => {
      store.addToBasket(code);
    }, [store]),
    onOpen: useCallback(()=>{
      setOpened(true);
    }),
    onClose: useCallback(()=>{
      setOpened(false);
    })
  }

  return (
    <PageLayout>
      <Head title='Магазин'/>
      <Controls onOpen={callbacks.onOpen} setSumPrice={setSumPrice}/>
      <List list={list}
            onDelete={callbacks.onDelete}
            onSelectItem={callbacks.onSelectItem}
            onAddToBasket={callbacks.onAddToBasket}
            setSumPrice={setSumPrice}
            inBasket={false}/>
      {opened && <Basket list={list}
              onDelete={callbacks.onDelete}
              onSelectItem={callbacks.onSelectItem}
              onAddToBasket={callbacks.onAddToBasket}
              setSumPrice={setSumPrice}
              onClose={callbacks.onClose}/>}
    </PageLayout>
  );
}

export default App;
