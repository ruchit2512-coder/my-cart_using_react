import CartItem from './CartItem';

const Cart =(props)=>{
    const {products,increaseQuantity,decreaseQuantity,deleteItem} = props;
    return(
        <div className='Cart'>
            {products.map((items)=>{
                return (
                    <
                        CartItem 
                        product={items}
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity = {decreaseQuantity}
                        deleteItem={deleteItem}
                    />
                )
            })
        }
        </div>    
    )
}


export default Cart;