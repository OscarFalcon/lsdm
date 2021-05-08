import React, {Component} from 'react'
import './Buttons.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

class Button extends Component {

	render(){
		const {children, type, onClick, buttonStyle, buttonSize} = this.props;
      const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
      const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
		
		return (
			<Link to = { this.props.linkTo } className = 'btn-moble'> 
				<button className = {`btn ${checkButtonStyle} ${checkButtonSize}`} onClick = {onClick} type = {type}>
           		{ children }
  				</button>
  			</Link>
      );
	}
};

export default Button;
