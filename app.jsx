import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: "",
      amountReceived: "",
      changeDue: "",
      twenties: "",
      tens: "",
      fives: "",
      ones: "",
      quarters: "",
      dimes: "",
      nickels: "",
      pennies: "",
    };
    this.updateState = this.updateState.bind(this)
    this.calculate = this.calculate.bind(this)
  }

  updateState(e) {
    this.setState({
      [e.target.name]: Number([e.target.value])
    })
  };

  calculate(e) {
    const amountDue = (this.state.amountDue);
    const amountReceived = (this.state.amountReceived);
    let changeDue = (amountReceived - amountDue).toFixed(2);

    if (amountDue > amountReceived) {
      alert("Danger: Additional money owed.")
    } else {

      this.setState({ changeDue: changeDue });
      changeDue = (changeDue * 100)

      const twenties = (Math.floor(changeDue / 2000));
      let remainder = changeDue - twenties * 2000;
      this.setState({ twenties: twenties })

      const tens = (Math.floor(remainder / 1000));
      remainder = remainder - tens * 1000;
      this.setState({ tens: tens })

      const fives = (Math.floor(remainder / 500));
      remainder = remainder - fives * 500;
      this.setState({ fives: fives })

      const ones = (Math.floor(remainder / 100));
      remainder = remainder - ones * 100;
      this.setState({ ones: ones })

      const quarters = (Math.floor(remainder / 25));
      remainder = remainder - quarters * 25;

      this.setState({ quarters: quarters })

      const dimes = (Math.floor(remainder / 10));
      remainder = remainder - dimes * 10;
      this.setState({ dimes: dimes })

      const nickels = (Math.floor(remainder / 5));
      remainder = remainder - nickels * 5;
      this.setState({ nickels: nickels })

      const pennies = (Math.round(remainder));
      this.setState({ pennies: pennies })

    }
  }
  
  render() {
    console.log(this.state)
    return (
      <div className="container-fluid">
        <div>
        <h1>Change Calculator</h1>
        <div className="form-group">
          <h3>How much is due?</h3>
          <input type="number" name="amountDue" className="form-control" value={this.state.amountDue} onChange={this.updateState} />
        </div>
        <div className="form-group">
          <h3>How much was received?</h3>
          <input type="number" name="amountReceived" className="form-control" value={this.state.amountReceived} onChange={this.updateState} /><br />
          <button className="btn btn-primary" name="submit" type="submit" onClick={this.calculate}>Calculate</button>
        </div>
        </div>
        <div className="jumbotron jumbotron-fluid alert alert-success alert-dismissible">
          <div className="container-fluid">
            <h3>The total change due is ${this.state.changeDue}</h3>
          </div>
        </div>
        <div className="text-center" name="dollars">
          <div className="row">
            <div className="card">
              <h3 className="card-body">Twenties</h3>
              <p >{this.state.twenties}</p>
            </div>
            <div className="card">
              <h3 className="card-body">Tens</h3>
              <p className="change">{this.state.tens}</p>
            </div>
            <div className="card">
              <h3 className="card-body">Fives</h3>
              <p className="change">{this.state.fives}</p>
            </div>
            <div className="card">
              <h3 className="card-body">Ones</h3>
              <p className="change">{this.state.ones}</p>
            </div>
          </div>
        </div>
        <div name="coins" className="text-center">
          <div className="row">
            <div className="card">
              <h3 className="card-body">Quarters</h3>
              <p className="change">{this.state.quarters}</p>
            </div>
            <div className="card">
              <h3 className="card-body">Dimes</h3>
              <p className="change">{this.state.dimes}</p>
            </div>
            <div className="card">
              <h3 className="card-body">Nickels</h3>
              <p className="change">{this.state.nickels}</p>
            </div>
            <div className="card">
              <h3 className="card-body">Pennies</h3>
              <p className="change">{this.state.pennies}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
