import { useState } from "react"
import { plantList } from "../datas/plantList"

const Categories = ({activeCategory, setActiveCategory, categories}) => {
    return(
        <div>
            <select
                value={activeCategory}
                onChange={(e) => {setActiveCategory(e.target.value)}}>
                    <option>---</option>
                    {categories.map((cat) => (
                        <option value={cat} key={cat}>{cat}</option>
                    ))}
            </select>
            <button onClick={() => setActiveCategory()}>Réinitialiser</button>
        </div>
    )
}

export default Categories