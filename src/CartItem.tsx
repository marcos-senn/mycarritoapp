import React from 'react';

interface CartItemProps {
  item: {
    product: string;
    description: string;
    price: number;
    quantity: number;
  };
  index: number;
  handleRemoveFromCart: (index: number) => void;
  handleIncrementQuantity: (index: number) => void;
  handleDecrementQuantity: (index: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  index,
  handleRemoveFromCart,
  handleIncrementQuantity,
  handleDecrementQuantity,
}) => {
  return (
    <div className="list">
      <div>
      <button type="button" onClick={() => handleRemoveFromCart(index)} className="DeleateproductButton">
        X
      </button>
      <p>{item.product}</p>
      {item.description && <p>{item.description}</p>}
      <p>${item.price}</p>
      <div className='addMoreProduct'>
        <button onClick={() => handleDecrementQuantity(index)} className="productButton">
          -
        </button>

        <p className='itemQ'>
        {item.quantity}
        </p>

        <button onClick={() => handleIncrementQuantity(index)} className="productButton">
          +
        </button>
      
      </div>
      <p>Total: ${item.price * item.quantity}</p>
      </div>
      
      
    </div>
  );
};

export default CartItem;
