export default function IngredientList(props) {

    const ingredientsListItems = props.ingredients.map((ingredient, index) => (
      <>
        {/* <span className="delete-ingredient">X</span>  */}
        <li key={index} className="ingredient-item">
          {ingredient}
          <button
            className="delete-btn"
            onClick={() => props.onDelete(index)}
            aria-label={`Delete ${ingredient}`}
          >
            X
          </button>
        </li>
        {/* <button
          className="delete-btn"
          onClick={() => props.onDelete(index)}
          aria-label={`Delete ${ingredient}`}
        >
          ×
        </button> */}
      </>
    ))

  return (
    <section>
      <h2 className="underline">Ingredients on hand</h2>
      <p>Add minimum 2 ingredients to get receipe.</p>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientsListItems}
      </ul>
      {props.ingredients.length > 1 && (
        <div className="get-receipe-container">
          <div ref = {props.ref}>
            <h3>Ready for recipie ?</h3>
            <p>Generate a recipie from your list of ingredients. </p>
          </div>
          <button onClick={props.getRecipe}>Get a receipe</button>
        </div>
      )}
    </section>
  );
}
