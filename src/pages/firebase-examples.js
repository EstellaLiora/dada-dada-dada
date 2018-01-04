import React, { Component } from 'react';

class FirebaseExamples extends Component {
  state = {
    data: "" 
  }

  componentDidMount(){
    // connect to firebase and listen to a path and set to data
    
    // TODO: stop listening on unmount
    window.firebase.database().ref('bsff/exmpMsg').on('value', snapshot => {
      // here update the state of this component!!
       this.setState({data: snapshot.val()})
    })
    
  }

  onType = e => {
    // set typing to firebase
    const myText = e.target.value;
    window.firebase.database().ref('bsff').update({
      exmpMsg: myText
    });
  }

  render() {
    return (
      <div>
        <h1>Firebase Examples</h1>
        <input onChange = {this.onType}/>
        <h4>Message from firebase</h4>
        {this.state.data}
      </div>
    );
  }
}

export default FirebaseExamples;
