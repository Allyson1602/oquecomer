import { IReceitaProps } from "../../Interfaces/IReceita";

import comida from "../../issets/images/comida.png";
import "./Receita.css";

export default function Receita(props: IReceitaProps) {
    const listInformations = props.recipe.informations.map((information) =>
        <p className="information">{information}</p>
    );
    
    const listIngredients = props.recipe.ingredients.map((ingredient) =>
        <p>{ingredient}</p>
    );
    
    const listPreparations = props.recipe.preparations.map((preparation) =>
        <li>{preparation}</li>
    );

    return(
        <div className="receita">
            <div className="content-image-food">
                <img src={comida} alt="Panela com alimentos" className="image-comida" />
            </div>

            <div className="description">
                <div className="informations">
                    {listInformations}
                </div>

                <div className="details">
                    <div className="ingredients">
                        {listIngredients}
                    </div>

                    <div className="preparation">
                        <ol className="preparation-steps">
                            {listPreparations}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}