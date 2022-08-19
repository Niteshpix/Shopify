import { ActionTypes } from "../Constraints/Constraint";


export const addToCart = (productId) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: productId,
      };
      };

 export const removeFromCart = () => {
            enqueueSnackbar(`Item removed from your cart!`, {
              variant: "warning",
              autoHideDuration: 3000,
            });
          };