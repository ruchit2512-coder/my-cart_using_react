import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
        products:[
            {
                price:999,
                title:'Mobile phone',
                qty:2,
                imge:'https://media.istockphoto.com/id/1416168804/photo/blank-screen-smartphone-with-tilt-view-isolated-on-white-background-with-clipping-path.jpg?b=1&s=170667a&w=0&k=20&c=T6oDByj-BrAzyVPRz7eRmnn7uaijKRH9Sdek_N8BWUY=',
                id:1
            },
            {
                price:2224,
                title:'laptop',
                qty:1,
                imge:'https://media.istockphoto.com/id/1389603578/photo/laptop-blank-screen-on-wood-table-with-blurred-coffee-shop-cafe-interior-background-and.jpg?b=1&s=170667a&w=0&k=20&c=fPqy8pPGL4IQa2LvQQ2tX9qUPmIhPfmqu-xEVMEC1vY=',
                id:2
            },
            {
                price:50,
                title:'Mobile charger',
                qty:10,
                imge:'https://media.istockphoto.com/id/1150019554/photo/smartphone-charger-cable.jpg?b=1&s=170667a&w=0&k=20&c=mp1U5r3A58KHbrwcdhIExBz7t-uN9ImXL3h3cdpTrts=',
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

  totalproducts=()=>{
    const { products } = this.state;
    let count = 0;

    products.forEach(element => {
      count+=element.qty;
    });

    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price
    })

    return cartTotal;
  }


  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.totalproducts()}/>
        <
          Cart
          products={products}
          increaseQuantity={this.handleIncreaseQuantity}
          decreaseQuantity = {this.handleDecreaseQuantity}
          deleteItem={this.handleDeleteItem}
        />
        <div style={ {padding: 10, fontSize: 20} }>TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;
