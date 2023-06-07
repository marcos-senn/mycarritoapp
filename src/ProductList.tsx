import { useState } from "react";


function ProductList(){
    const [amount, setAmount] = useState(0);
    

    return(

        <div 
            className="productComponent"
        > 
            <p>{}</p>
            <p>{}</p>
            <p>{}</p>
            <button type="submit" onClick={() => setAmount(amount-1)}>
                -
            </button> 
            <p>{amount}</p>
            <button type="submit" onClick={() => setAmount(amount+1)}>
                +
            </button>  
        </div>
    
   
    )
}

export default ProductList