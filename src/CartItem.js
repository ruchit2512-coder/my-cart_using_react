import React from 'react';

const CartItem =(props)=>{
    const {price,title,qty,imge,id} = props.product; 
    const {product,increaseQuantity,decreaseQuantity,deleteItem} = props; 

    return(
        <div className='cart-item'>
            <div className='left-block'>
                <img style={styles.image} src={imge}/>
            </div>
            <div className='right-block'>
                <div style={{fontSize:25}}>{title}</div>
                <div style={{fontSize:20}}>Rs {price}</div>
                <div style={{color:'#777'}}>Qty:{qty}</div>
                <div className='cart-item-actions' style={{marginTop:7}}>
                    <button id='increase' onClick={()=>increaseQuantity(product)} style={{margin:2}}><img alt='increase' className='action-icons' src='https://cdn-icons-png.flaticon.com/128/9918/9918633.png'></img></button>
                    <button id='decrease' onClick={()=>decreaseQuantity(product)} style={{margin:2}}><img alt='decrease' className='action-icons' src='https://cdn-icons-png.flaticon.com/128/992/992683.png'></img></button>
                    <button id='delete' onClick={()=>deleteItem(id)} style={{margin:2}}><img alt='delete' className='action-icons' src='https://cdn-icons-png.flaticon.com/128/3096/3096687.png'></img></button>    
                </div>
            </div>
        </div>
    )
}

const styles = {
    image:{
        height:130,
        width:130,
        borderRadius:4
    }
}

export default CartItem;