import React from 'react';

export default class AddItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      itemName:"",
      itemImage:"",
      itemPrice:"",
      itemQty:""
    }
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleChangeQty = this.handleChangeQty.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeName(){
    this.setState({
      itemName:event.target.value
    })
  }
  handleChangeImage(){
    this.setState({
      itemImage:event.target.value
    })
  }
  handleChangePrice(){
    this.setState({
      itemPrice:event.target.value
    })
  }
  handleChangeQty(){
    this.setState({
      itemQty:event.target.value
    })
  }

  handleSubmit(){
    console.log("submit")
    fetch('/api/Demo', {
      method:'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify(this.state)
    })
    .then(res => (res.json()))
    .then(data => (data))
    .catch(err =>{return err})


  }
  render(){
    console.log(this.state)
    return(
      <>
      <h1>Add Item Page</h1>
      <form onSubmit = {this.handleSubmit}>
        <div className="mb-3">
          <label  className="form-label">Item Name</label>
          <input onChange ={(e)=>{this.handleChangeName(e)}} value = {this.state.itemName} type="string" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label  className="form-label">Item Image</label>
          <input onChange ={(e)=>{this.handleChangeImage(e)}} value = {this.state.itemImage} type="file" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3">
          <label  className="form-label">Item Price</label>
          <input onChange ={(e)=>{this.handleChangePrice(e)}} value = {this.state.itemPrice} type="number" min = "0" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3">
          <label className="form-label">Item Qty</label>
          <input onChange ={(e)=>{this.handleChangeQty(e)}} value = {this.state.itemQty} type="Number" min = "0" className="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </>
    )
  }
}
