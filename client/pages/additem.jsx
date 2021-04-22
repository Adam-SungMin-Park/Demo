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
  }
  render(){
    return(
      <>
      <h1>Add Item Page</h1>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Item Name</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Item Image</label>
          <input type="file" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Item Price</label>
          <input type="number" min = "0" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Item Qty</label>
          <input type="Number" min = "0" className="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </>
    )
  }
}
