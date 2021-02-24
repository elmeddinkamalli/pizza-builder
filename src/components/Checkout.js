import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import Pizzaman from '../assets/PizzaMan.png'

export default function Checkout({ingredients}) {
    const history = useHistory();
    const [success, setSuccess] = useState(false);
    return (
        <div style={{ padding: 50, display: "flex" }}>
            <div style={{ flex: 1 }}>
                <div>
                    <h1 style={{ fontFamily: "Comfortaa" }}>My Ingredients</h1>
                    {Object.keys(ingredients).map((ingredient, i)=>{
                        return (
                            ingredients[ingredient] && (
                                <p key={i}>{ingredient[0].toUpperCase()}{ingredient.substr(1)}</p>
                            )
                        );
                    })}

                    <button className="proceedToCheckout" onClick={()=>setSuccess(true)}>
                        Confirm
                    </button>
                    <button className="proceedToCheckout" onClick={()=>history.push('/')} style={{ marginLeft: 10 }}>
                        Go Back
                    </button>
                </div>
            </div>
            <div>
            {success && (
                <div style={{ textAlign: "center" }}>
                    <img src={Pizzaman} alt="pizzaman" height="300px" />
                    <div style={{ fontFamily: "Open Sans Condensed", fontSize: 35 }}>
                    We have received your order, Thank you
                    </div>
                    <div style={{ fontFamily: "Comfortaa" }}>
                    Order #{Math.round(Math.random() * 100000)}
                    </div>
                    <div style={{ fontFamily: "Indie Flower", fontSize: 20 }}>
                    Will be ready in 20-30 min.
                    </div>
                </div>
            )}
            </div>
        </div>
    )
}
