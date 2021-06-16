import React from 'react';
import Cart from './cart'
import ItemList from './itemList'

export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isClicked:false,
      items: [{
        itemId:"",
        itemName:"",
        itemPrice:"",
        itemQty:""
      }],
      cart: [{
        itemId:"",
        itemName:"",
        itemPrice:"",
        itemQty:""
      },]
  }
  this.handleQty = this.handleQty.bind(this);
  this.handleCart = this.handleCart.bind(this);
}


  componentDidMount(){
     fetch('/api/Demo')
    .then(res => res.json())
    .then(res =>{

      let itemList = [];
      for(var i = 0 ; i < res.length ; i++){
        itemList.push(res[i]);
      }
      this.setState({
        items: itemList
      })
    })
  }
  handleQty(e,index){
    let cartItem = {...this.state.items[index]}
    cartItem.itemQty = e.target.value;
    console.log(cartItem)
  }
  handleCart(e,index){


    let cartItem = {...this.state.items[index]}
    this.setState({
      cart: cartItem
    })

  }



render(){

const {items , isClicked,cart} = this.state;
console.log(cart)
console.log(items)
   if(items.length !==0 && isClicked ===false){
      return(
<>
          <ItemList/>
</>

          <div className = "row">
          <div className = "col">
            <h2>
            Billing Address
            </h2>
          <form className="row g-3">
            <div className="col-md-6">
              <label  className="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail4"/>
            </div>
            <div className="col-md-6">
              <label  className="form-label">Password</label>
              <input type="password" className="form-control" id="inputPassword4"/>
            </div>
            <div className="col-12">
              <label  className="form-label">Address</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
            </div>
            <div className="col-12">
              <label  className="form-label">Address 2</label>
              <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
            </div>
            <div className="col-md-6">
              <label className="form-label">City</label>
              <input type="text" className="form-control" id="inputCity"/>
            </div>
            <div className="col-md-4">
              <label  className="form-label">State</label>
              <select id="inputState" className="form-select">
                <option >Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-md-2">
              <label  className="form-label">Zip</label>
              <input type="text" className="form-control" id="inputZip"/>
            </div>
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                <label className="form-check-label" >
                  Check me out
                </label>
              </div>
            </div>

          </form>
          </div>
          <div className = "col-6">
            <h2>Shopping Cart</h2>
           <div className = "cartItems">

           </div>
          </div>
        </div>



      )
    }
    if(items.length === undefined && isClicked ===false){
      return(
        <div className = "row">
          <div className = "col-12">
            <h1>No Data Entry.</h1>
          </div>
          <div className = "col">
            <a href="#additem"><button>Add Item</button></a>
          </div>
        </div>
      )
    }

  }

}


/*  <div className = "container-lg">
          <div className = "row">
          {items.map((items, index )=>{
            return(
              <div className ="itemsRow" key = {items.itemId}>
                {items.itemId}
              <div className = "itemName">
               {items.itemName}
              </div>
               <div className = "itemPrice">
                  $
                 {items.itemPrice}
              </div>
               <div className = "itemQty">
                In Stock
                 {items.itemQty}
              </div>
              <div className ="buttons">
                <form onSubmit ={e=> this.handleCart(e,index)}>
                  <input type= "number" className = {`qtyInput ${index}`} min ={1} placeholder = {1} onChange = {e=>this.handleQty(e,index)} />
                  <button >Add to cart</button>
                </form>
              </div>
            </div>
            )
          })}
          </div>*/
