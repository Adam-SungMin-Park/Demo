import React from 'react';

export default class Cart extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      order:[]
    }
  }
  componentDidMount(){
    this.setState({
      order:[...this.state.order,this.props]
    })
  }


  render(){
    console.log(this.props)
    return(
      <div className = "container-lg">

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
            <form>

            </form>
          </div>
        </div>
      </div>
    )
  }
}
