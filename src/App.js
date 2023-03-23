import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
// import * as firebase from 'firebase'
import { firestore } from "./firebase";

class App extends React.Component {
  constructor(){
    super()
    this.state = {
        products:[],
        loading:true
    }
  }

  componentDidMount(){
    // firestore
    // .collection('products')
    // .get()
    // .then((snapshot)=>{
    //   console.log(snapshot);
    //   snapshot.docs.map((doc)=>{
    //     console.log(doc.data());
    //   })

    //   const products = snapshot.docs.map((doc)=>{
    //     const data = doc.data();
    //     data['id'] = doc.id;
    //     return data;
    //   })

    //   this.setState({
    //     products:products,
    //     loading:false
    //   })
    // })


    firestore
    .collection('products')
    // we can filter the items using where clause
    .where('title','==','laptop')
    // this onSnapshot is fired whenever any changes is happened in database so do not have to
    // reload the page again
    .onSnapshot((snapshot)=>{
      console.log(snapshot);
      snapshot.docs.map((doc)=>{
        console.log(doc.data());
      })

      const products = snapshot.docs.map((doc)=>{
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      })

      this.setState({
        products:products,
        loading:false
      })
    })
  }

  handleIncreaseQuantity=(product)=>{
      console.log('increase the qunatity');
      const {products} = this.state;
      const index = products.indexOf(product);

      // products[index].qty=products[index].qty+1;

      // this.setState({
      //     products:products
      // })

      // here we updating the qty in database but whenever any changes is happen in db
      // onSnapshot is called and it re-render the DOM
      const docRef = firestore.collection('products').doc(products[index].id);
      docRef
      .update({
        qty:products[index].qty+=1
      })
      .then(()=>{
        console.log('qty is updated',docRef)
      })
      .catch((error)=>{
        console.log(error);
      })
  }

  handleDecreaseQuantity=(product)=>{
    console.log('increase the qunatity');
    const {products} = this.state;
    const index = products.indexOf(product);

    if(products[index].qty===0){
        return;
    }

    // products[index].qty=products[index].qty-1;

    // this.setState({
    //     products:products
    // })

    const docRef = firestore.collection('products').doc(products[index].id);
      docRef
      .update({
        qty:products[index].qty-=1
      })
      .then(()=>{
        console.log('qty is updated',docRef)
      })
      .catch((error)=>{
        console.log(error);
      })

  }

  handleDeleteItem = (id)=>{
    const {products} = this.state;
    // let items = products.filter((item)=>{
    //     return(
    //         item.id!==id
    //     )
    // })

    // this.setState({
    //     products:items
    // })

    // here we are deleting the product from database using docRef

    const docRef = firestore.collection('products').doc(id);
    docRef
    .delete()
    .then(()=>{
      console.log('item is deleted');
    })
    .catch((err)=>{
      console.log(err);
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

  addProduct = ()=>{
    firestore
    .collection('products')
    .add({
      price:250,
      title:'bluetooth',
      qty:10,
      imge:''
    })
    .then((docRef)=>{
      console.log('product is added',docRef);
    })
    .catch((error)=>{
      console.log(error);
    })
  }


  render(){
    const {products,loading} = this.state;
    return (
      <div className="App">
        <Navbar count={this.totalproducts()}/>
        <button onClick={this.addProduct} style={{padding:20, fontSize:20}}>Add Product</button>
        <
          Cart
          products={products}
          increaseQuantity={this.handleIncreaseQuantity}
          decreaseQuantity = {this.handleDecreaseQuantity}
          deleteItem={this.handleDeleteItem}
        />
        {loading&&<h1>Loading Product</h1>}
        <div style={ {padding: 10, fontSize: 20} }>TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;
