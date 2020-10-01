import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  // State can be of any type
  const [ inputState, setInputState] = useState({
    title: '',
    amount: ''
  });

  const submitHandler = event => {
    event.preventDefault();
    // ...
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title"
                   value={inputState.title}
                   onChange={event => {
                       const newTitle = event.target.value
                       setInputState(
                           previousInputState => ({
                               ...previousInputState,
                               title: newTitle
                           })
                       )
                   }

                  }
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount"
                   value={inputState.amount}
                   onChange={event => {
                       const newAmount = event.target.value;
                       setInputState(
                           previousInputState => ({
                               ...previousInputState,
                               amount: newAmount
                           })
                       )
                   }
                   }
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
