import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, bindActionCreators} from 'redux';
import reducer from './reducer';

import * as actions from './actions';
import Counter from './counter';



const store = createStore(reducer);
const {dispatch} = store;

const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

ReactDOM.render(<Counter 
  inc={inc}
  dec={dec}
  rnd={rnd}
/>, document.getElementById('root'));





const update = () => {
  document.getElementById('counter')
          .innerHTML = store.getState();
}

store.subscribe(update);