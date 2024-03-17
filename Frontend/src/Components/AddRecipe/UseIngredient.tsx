import { ChangeEvent, useState } from "react";
import { PluralUnits, SingularUnits } from "../../Assets/Data/IngredientUnits";

interface IngredientData {
    name: string;
    amount: string;
    unit: string;
}

const defaultData: IngredientData = {
    name: "",
    amount: "1",
    unit: "1",
};
type UnitsObject = { [key: string]: string };

export default function UseIngredient() {
    const [data, setData] = useState<IngredientData>(defaultData);

    const unitsObject: UnitsObject = Number(data.amount) > 1 ? PluralUnits : SingularUnits;

    const options = Object.keys(unitsObject).map((key) => (
        <option key={key} value={key}>
            {unitsObject[key]}
        </option>
    ));

    const handleDataChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    return { data, handleDataChange, options };
}
