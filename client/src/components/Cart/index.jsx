import { useAppState } from '../../utils/stateContext';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import PaymentForm from '../Stripe/PaymentForm';
import './style.css';

export const Cart = () => {
  const [{ cart }, dispatch] = useAppState();

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity < 1) return;
    dispatch({ type: UPDATE_CART_QUANTITY, payload: { ...item, quantity: newQuantity } });
  };

  const handleRemoveItem = (itemId) => {
    dispatch({ type: REMOVE_FROM_CART, payload: itemId });
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item._id} className="cart-item">
              <img src={`/images/${item.image}`} alt={item.name} width="100" />
              <div className="item-details">
                <h2>{item.name}</h2>
                <p>${item.price.toFixed(2)}</p>
              </div>
              <div className="item-actions">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}
                  min="1"
                />
                <button onClick={() => handleRemoveItem(item._id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-footer">
        <h3>Total: ${calculateTotal()}</h3>
        <PaymentForm />
      </div>
    </div>
  );
};
