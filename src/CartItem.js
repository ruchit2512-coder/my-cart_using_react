import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super()
        this.state = {
            price:999,
            title:'Mobile phone',
            qty:2,
            img:''
        }
    }

    decrease=()=>{
        if(this.state.qty>0){
            console.log('decreases');
            this.setState((prevState)=>{
                return {
                    qty:prevState.qty-1
                }    
            })
        }
    }

    increase=()=>{
        console.log('increases');
        // method 1
        // this.setState({
        //     qty : this.state.qty+1
        // })

        // method 2
        // this method is used when we need previous state values
        this.setState((prevState)=>{
            return {
                qty:prevState.qty+1
            }    
        })
    }

    Delete=()=>{
        console.log('deleted');
    }
    render(){
        let {price,title,qty} = this.state;  

        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image}/>
                </div>
                <div className='right-block'>
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{fontSize:20}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty:{qty}</div>
                    <div className='cart-item-actions' style={{marginTop:7}}>
                        <button id='increase' onClick={this.increase} style={{margin:2}}><img alt='increase' className='action-icons' src='https://cdn-icons-png.flaticon.com/128/9918/9918633.png'></img></button>
                        <button id='decrease' onClick={this.decrease} style={{margin:2}}><img alt='decrease' className='action-icons' src='https://cdn-icons-png.flaticon.com/128/992/992683.png'></img></button>
                        <button id='delete' onClick={this.Delete} style={{margin:2}}><img alt='delete' className='action-icons' src='https://cdn-icons-png.flaticon.com/128/3096/3096687.png'></img></button>    
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image:{
        height:130,
        width:130,
        borderRadius:4
    }
}

export default CartItem;