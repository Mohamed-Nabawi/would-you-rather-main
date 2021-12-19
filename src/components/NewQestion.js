import React, {Component} from 'react'
import {connect} from 'react-redux'
import{handleAddQuestion}from '../actions/questions'
import ReactDOM from "react-dom";
function validate(optionOneText, optionTwoText) {
  // we are going to store errors for all fields
  // in a signle array
  const errors = [];

  if (optionOneText.length === 0) {
    errors.push("Name can't be empty");
  }

  if (optionTwoText.length === 0) {
    errors.push("Name can't be empty");
  }
  

  return errors;
}
class NewQestion extends Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      optionOneText: '',
        optionTwoText: '',
        
       toDashboard: false,
    };
  }
    
    
    handleInputChange = (e) => {
        const {name,value} = e.target
        this.setState(() => ({
          [name]: value,
         
        }))
      }
      
      handleSubmit = (e) => {
        e.preventDefault();
        const optionOneText = ReactDOM.findDOMNode(this._optionOneTextInput).value;
        const optionTwoText = ReactDOM.findDOMNode(this._optionTwoTextInput).value;
        const errors = validate(optionOneText, optionTwoText);
        if (errors.length > 0) {
          this.setState({ errors });
          return;
        }
         this.props.history.push('/');
        
        this.props.dispatch(handleAddQuestion(this.state));
       
      }
      

    
      render() {
        
        const { optionOneText, optionTwoText,errors} = this.state;
        
        return (
          <form className='add-form' onSubmit={this.handleSubmit}>
            <h1 style={{marginBottom: 25}}>Would You Rather</h1>
            {errors.map(error => (
          <p key={error}>Error: {error}</p>
        ))}
            <label className='label' htmlFor='optionOneText'>Option One</label>
            <input
            ref={optionOneTextInput => (this._optionOneTextInput = optionOneTextInput)}
              value={optionOneText}
              onChange={this.handleInputChange}
              name='optionOneText'
              className='input'
              id='optionOneText'
              type='text' 
              placeholder='Enter availd option'
             />
            
                <label className='label' htmlFor='optionTwoText'>Option Two</label>
            <input
            ref={_optionTwoTextInput => (this._optionTwoTextInput = _optionTwoTextInput)}
              value={optionTwoText}
              onChange={this.handleInputChange}
              name='optionTwoText'
              className='input'
              id='optionTwoText'
              type='text' required min="1"
              placeholder='Enter availd option'
              
            />
   
            <button className='btn' type='submit' disabled={!(optionOneText && optionTwoText)}>
              New Question
            </button>
          </form>
        )
      }
    
}
    export default connect()(NewQestion);