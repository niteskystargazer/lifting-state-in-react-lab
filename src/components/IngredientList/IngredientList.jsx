const IngredientList = ({ ingredients, addToBurger }) => {
    return (
      <div>
        <h2>Ingredients</h2>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li
              key={index}
              style={{
                backgroundColor: ingredient.color,
                color: "white",
                padding: "8px",
              }}
            >
              {ingredient.name}
              <button onClick={() => addToBurger(ingredient)}> + </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default IngredientList;
  