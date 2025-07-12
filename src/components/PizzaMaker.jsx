import React, { useState } from "react";

// This app let the user select from a list of pizza toppings, and dynamically calculate and display the total price of selected toppings.

const pizzaToppings = [
  { id: 1, name: "Pepperoni", price: 1.5 },
  { id: 2, name: "Mushrooms", price: 1.0 },
  { id: 3, name: "Onions", price: 0.75 },
  { id: 4, name: "Sausage", price: 1.5 },
  { id: 5, name: "Bacon", price: 1.75 },
  { id: 6, name: "Extra cheese", price: 1.25 },
  { id: 7, name: "Black olives", price: 0.75 },
  { id: 8, name: "Green peppers", price: 0.75 },
];

const PizzaMaker = () => {
  const [toppings, setToppings] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  //toppings = stores the list of selected toppings.
  //totalPrice = stores the running total based on selected toppings.

  // This function handles the change of toppings
  // It checks if the topping is already selected
  // If it is, it removes it from the array
  // If it is not, it adds it to the array
  // It also updates the total price based on the selected toppings
  // This is a common pattern in React for handling form inputs and managing state
  // It allows for dynamic updates to the UI based on user interactions
  // This is a good example of how to use useState with arrays
  // and how to manage complex state updates in React
  const handleToppingChange = (topping) => {
    const isSelected = toppings.includes(topping);
    
  // checks if the topping is already selected
  //if yes removes it from the array
  // if no adds it
    const newToppings = isSelected
      ? toppings.filter((t) => t !== topping) //deselecting a topping
      : [...toppings, topping]; //selecting a topping

    setToppings(newToppings);
    // Recalculate total price based on selected toppings using .reduce()
    // .reduce() iterates over the array and sums up the prices of selected toppings
    const newPrice = newToppings.reduce((total, t) => total + t.price, 0);
    setTotalPrice(newPrice);
  };

  return (
    <>
      <div className="mx-40 my-10 p-4 bg-yellow-100  text-yellow-950 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold mb-4">Pizza Maker</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Select Toppings:</h3>
          <div className="flex flex-col space-y-2 justify-center items-center pt-10">
            {/*loops over each topping  */}
            {/* renders a checkbox with a label */}
            {/* checks if the topping is in the selected list using .includes() */}
            {/* when the use clicks a checkbox, it calls handleToppingChange(topping) */}
          <ul className="list-disc pl-5">
            {pizzaToppings.map((topping) => (
              <li key={topping.id} className="mb-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={toppings.includes(topping)}
                    onChange={() => handleToppingChange(topping)}
                    className="mr-2"
                  />
                  {topping.name} (${topping.price.toFixed(2)})
                </label>
              </li>
            ))}
          </ul>
          </div>
          {/* this is the total price */}
          <div
            className="w-1/2 mx-auto mt-6 p-4 bg-yellow-200 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mt-4">Total Price:</h3>
            <p className="text-lg">${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PizzaMaker;
