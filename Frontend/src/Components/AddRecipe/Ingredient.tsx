import UseIngredient from "./UseIngredient";

export default function Ingredient() {
    const { data, handleDataChange, options } = UseIngredient();

    return (
        <div className="">
            <input
                id="name"
                placeholder="Ingredient..."
                type="text"
                value={data.name}
                onChange={handleDataChange}
            />
            <input id="amount" type="number" value={data.amount} onChange={handleDataChange} />
            <select id="unit" value={data.unit} onChange={handleDataChange}>
                {options}
            </select>

            <button>X</button>
        </div>
    );
}
