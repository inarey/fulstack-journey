import React, { useReducer } from 'react'

const teas = [
  { id: 1, name: 'Green Tea', price: 2.5 },
  { id: 2, name: 'Black Tea', price: 3.0 },
  { id: 3, name: 'Oolong Tea', price: 3.5}
]

function cartReducer(state, action) {
  console.log("action received:", action);
  console.log("payload inside:", action.payload);
  switch (action.type) {
    case 'ADD_TEA':
      return [...state, action.payload];
    case 'REMOVE_TEA':
      return state.filter(tea => tea.id !== action.payload.id);
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
}

const TeaCart = () => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <div className="py-40 bg-green-50 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">🫖 Tea Order Cart</h1>

      <div className="mb-4">
        {teas.map(tea => (
          <button
            key={tea.id}
            onClick={() => dispatch({ type: "ADD_TEA", payload: tea })}
            className="bg-green-500 text-white px-3 py-1 rounded m-1"
          >
            Add {tea.name}
          </button>
        ))}
      </div>

      <h2 className="text-lg font-semibold">Cart Items:</h2>
      {cart.length === 0 ? (
        <p>No teas yet.</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id} className="flex justify-between items-center">
                {item.name}
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE_TEA", payload: item.id })
                  }
                  className="text-red-500"
                >
                  ✖
                </button>
              </li>
            ))}
          </ul>
          {/* 🆕 Close/Clear button */}
          <button
            onClick={() => dispatch({ type: "CLEAR_CART" })}
            className="bg-red-600 text-white px-4 py-2 rounded mt-3"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default TeaCart
