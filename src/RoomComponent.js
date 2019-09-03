import React,{ Component } from 'react';
import "./css/style.css";

class RoomComponent extends Component {
	render() {  
	if(this.props.rooms){
	  const disabled = this.props.counter === 0 ? false : !this.props.rooms.isChecked;
         return ( 
         <div className={!disabled?"column":"columnDisabled"}>
				<div className={!disabled?"inner1":"inner1Disabled"}>
				{this.props.counter===0?(
					<label>Room 1</label>
					):(<label>
					<input type="checkbox" id={`chkbox-${this.props.counter}`} checked={this.props.rooms.isChecked}
					onChange={e => this.props.changeEvent(e,this.props.counter)}
					/>
					Room {this.props.counter+1}</label>)
				}
				</div>
				<div className={!disabled?"inner2":"inner2Disabled"}>
					<label>Adults<br />(18+)
		          <select disabled={disabled} 
		          	id={`adult-${this.props.counter}`}
		            name="adult"
		           	value={this.props.rooms.adult}
		            onChange={e => this.props.changeEvent(e,this.props.counter)}>
		            <option value="1">1</option>
		            <option value="2">2</option>
		          </select>
		         </label>
		         <label>Children<br />(0-17)
		          <select disabled={disabled} 
		          	id={`adult-${this.props.counter}`}
		            name="children"
		            value={this.props.rooms.children}
		            onChange={e => this.props.changeEvent(e,this.props.counter)}>
		            <option value="0">0</option>
		            <option value="1">1</option>
		            <option value="2">2</option>
		          </select>
		         </label>
		   	</div>
			</div>  
         )}}
	}
export default RoomComponent;