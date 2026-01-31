import { useSelector, useDispatch } from "react-redux";
import { addItem, clearItems, removeItem } from "../utils/cartSlice";

const ItemCart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems,"dataitems")
  const dispatch = useDispatch();
    const handleAddItem = (x)=>{
      dispatch(addItem(x))
    }
    const handleClearItem = ()=>{
      dispatch(clearItems())
    }
      const handleRemoveItem = (x) => {
        dispatch(removeItem(x));
      };
  return (
    <div className="text-center p-4 m-4">
      <h1 className="font-bold text-2xl">Cart 🛒</h1>
      {cartItems.length > 0 && (
        <div>
          <button className="order border-black bg-sky-600 px-1 font-bold m-2" onClick={handleClearItem}>CLEAR</button>
        </div>
      )}
      {cartItems.length === 0 ? (
        <div className="p-4">
          <p>Your cart is empty. Add items to get started!</p>
        </div>
      ) : (
        cartItems.map((x, y) => (
          <div className="w-6/12 m-auto" key={y}>
          <div key={y} className="p-2 m-2 border-gray-200 border-b-2 ">
            <div className="py-4 flex justify-between">
              <span>{x.item.name}</span>
               <div>
                <button
                  className="order border-black bg-lime-200 p-1 active:bg-green-500"
                  onClick={() => handleAddItem(x)}
                >
                  +
                </button>
                <button className="order border-black bg-sky-600 p-1">
                  ADD
                </button>
                {cartItems.length > 0 ? (
                  <button
                    className="order border-black bg-lime-200 p-1 active:bg-red-600"
                    onClick={() => handleRemoveItem(x)}
                  >
                    -
                  </button>
                ) : null}
              </div>
            </div>
            <p className="text-xs">{x.item.desc||"preparing with love"}</p>
          </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ItemCart;
