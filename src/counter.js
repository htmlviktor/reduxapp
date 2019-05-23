import React from 'react';

const Counter = ({inc, dec, rnd, counter}) => {
  return (
  <React.Fragment>
  <div className="row justify-content-center">
    <div className="col-12 text-center">
      <h2 id="counter">{counter}</h2>
    </div>
    <div className="col-4 text-center">
      <button 
      onClick={inc}
      className="btn btn-primary btn--add">Добавить</button>
      <button 
      onClick={dec}
      className="btn btn-primary btn--remove">Убрать</button>
      <button 
      onClick={rnd}
      className="btn btn-danger btn--random">Рандом</button>
    </div>
  </div>
  </React.Fragment>)
}

export default Counter;