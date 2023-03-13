import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor(){
        super()
        this.state = {
            products:[
                {
                    price:999,
                    title:'Mobile phone',
                    qty:2,
                    img:'',
                    id:1
                },
                {
                    price:2224,
                    title:'laptop',
                    qty:1,
                    img:'',
                    id:2
                },
                {
                    price:50,
                    title:'Mobile charger',
                    qty:10,
                    img:'',
                    id:3
                }
            ]
        }
    }

    handleIncreaseQuantity=(product)=>{
        console.log('increase the qunatity');
        const {products} = this.state;
        const index = products.indexOf(product);

        products[index].qty=products[index].qty+1;

        this.setState({
            products:products
        })
    }

    handleDecreaseQuantity=(product)=>{
        console.log('increase the qunatity');
        const {products} = this.state;
        const index = products.indexOf(product);

        if(products[index].qty===0){
            return;
        }

        products[index].qty=products[index].qty-1;

        this.setState({
            products:products
        })
    }

    handleDeleteItem = (id)=>{
        const {products} = this.state;
        let items = products.filter((item)=>{
            return(
                item.id!==id
            )
        })

        this.setState({
            products:items
        })
    }
    render(){
        const {products} = this.state;
        return(
            <div className='Cart'>
                {products.map((items)=>{
                    return (
                        <
                            CartItem 
                            product={items}
                            increaseQuantity={this.handleIncreaseQuantity}
                            decreaseQuantity = {this.handleDecreaseQuantity}
                            deleteItem={this.handleDeleteItem}
                        />
                    )
                })
            }
            </div>
            
        )
    }
}


export default Cart;