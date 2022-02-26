import React from 'react'

// define component properties (optional and required properties)
interface ButtonProps {
  onIncrease?: () => void;
  onDecrease?: () => void;
  onReset?: () => void;
  buttonType?: 'increment' | 'decrement';
  name: string;
}

// creating custom buttons
const Button: React.FC<ButtonProps> = props => {
  let button;
  // demonstrate use of literal types
  switch (props.buttonType) {
    case 'increment':
      button = <button className="btn btn-primary" onClick={props.onIncrease}>{props.name}</button>;
      break;
    case 'decrement':
      button = <button className="btn btn-danger" onClick={props.onDecrease}>{props.name}</button>;
      break;
    default:
      button = 
        <div className="text-center" >
          <div className="row">
            <div className="col reset">
              <button className="btn btn-light" onClick={props.onReset}>{props.name}</button>
            </div>
          </div>
        </div>
      break;
  }
  return button

}

export default Button;