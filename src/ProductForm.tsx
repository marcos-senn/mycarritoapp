import React, { useState } from 'react';
import CartItem from './CartItem';
import './ProductForm.css';
import Image from './shopping_car.svg'


interface CartItem {
  product: string;
  description: string;
  price: number;
  quantity: number;
}

const ProductForm = () => {
  const [product, setProduct] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [cartItems, setCartItems] = useState<CartItem[]>([]); // Tipo explícito para cartItems
  const [totalPrice, setTotalPrice] = useState(0);

  const handleProductChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct(e.target.value);
    setIsButtonDisabled(e.target.value === '' || price === '');
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
    setIsButtonDisabled(e.target.value === '' || product === '');
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleAddToCart = () => {
    const item: CartItem = {
      product,
      description,
      price: parseFloat(price),
      quantity: 1,
    };

    setCartItems([...cartItems, item]);
    setTotalPrice(totalPrice + parseFloat(price));
    setProduct('');
    setDescription('');
    setPrice('');
    setIsButtonDisabled(true);
  };

  const handleRemoveFromCart = (index: number) => {
    const removedItem = cartItems[index];
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    setTotalPrice(totalPrice - removedItem.price * removedItem.quantity);
  };

  const handleIncrementQuantity = (index: number) => {
    const updatedCartItems = [...cartItems];
    const item = updatedCartItems[index];
    item.quantity += 1;
    setTotalPrice(totalPrice + item.price);
    setCartItems(updatedCartItems);
  };

  const handleDecrementQuantity = (index: number) => {
    const updatedCartItems = [...cartItems];
    const item = updatedCartItems[index];
    if (item.quantity > 1) {
      item.quantity -= 1;
      setTotalPrice(totalPrice - item.price);
      setCartItems(updatedCartItems);
    }
  };

  return (
    <div className="container">
      <div className="form">
        <h2>Ingrese el producto</h2>
        <form>
          <label htmlFor="product">Producto:</label>
          <div>
            <input type="text" id="product" value={product} onChange={handleProductChange} />
          </div>

          <label htmlFor="description">Descripción:</label>
          <div>
            <input type="text" id="description" value={description} onChange={handleDescriptionChange} />
          </div>

          <label htmlFor="price">Precio</label>
          <div>
            <input type="number" id="price" value={price} onChange={handlePriceChange} />
          </div>

          <button type="button" className='buttonAdd' onClick={handleAddToCart} disabled={isButtonDisabled}>
            Agregar
          </button>
        </form>
      </div>

      <div className="cards">
        {cartItems.length === 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          <>
            <ul className='unorderList'>
              {cartItems.map((item, index) => (
                <CartItem
                  key={index}
                  item={item}
                  index={index}
                  handleRemoveFromCart={handleRemoveFromCart}
                  handleIncrementQuantity={handleIncrementQuantity}
                  handleDecrementQuantity={handleDecrementQuantity}
                />
              ))}
            </ul>
          </>
        )}
      </div>
      <div className="precioTotal">
        <img className='image' src={Image}/>
              <p className='totalPrice'>${totalPrice}</p>
        </div>
    </div>
  );
};

export default ProductForm;
