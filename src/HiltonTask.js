import React, { Component } from 'react';
import RoomComponent from './RoomComponent';

class HiltonTask extends Component {
  constructor(props){  
       super(props);  
       this.state = {
    		rooms: [
        {adult: 1, children: 0, isChecked: true},
        {adult: 1, children: 0, isChecked: false},
        {adult: 1, children: 0, isChecked: false},
        {adult: 1, children: 0, isChecked: false},
      ],
 		 }; 
 		 this.handleChange=this.handleChange.bind(this);
 		 this.handleFormSubmit=this.handleFormSubmit.bind(this);
	 }
	 
	componentDidMount() {
		  const roomsDataSaved = localStorage && localStorage['roomsDataToSave']!==undefined
		  && localStorage.getItem('roomsDataToSave')?JSON.parse(localStorage.getItem('roomsDataToSave')):[];
		  if(roomsDataSaved.length!==0){
		 	 this.setState({ rooms: roomsDataSaved });
		  }
	}	
	
	handleChange(e,roomCount){
		   const selectCheckbox = e.target.type==="checkbox" ? e.target.checked : Number(e.target.value);
			const {name} = e.target;
			this.setState(state => {
			const rooms=this.state.rooms;
			rooms[roomCount][name] = selectCheckbox;
			const newRooms = rooms.map((room, index) => {
				if (index === 0) {
			            return room;
			     }
			   if(selectCheckbox){
		            if (roomCount >= index && room.isChecked===false) {
		               return {adult: 1, children: 0, isChecked: true};
		            }
		            return room;
			     }
			   if(!selectCheckbox){  
			     if (roomCount <= index) {
		            	return {adult: 1, children: 0, isChecked: false};
		       	}
					return room;	
				}	
				      return {rooms};
			});
			return{rooms:newRooms};

			});
	}
		
	handleFormSubmit(){
		  localStorage.setItem('roomsDataToSave', JSON.stringify(this.state.rooms));
	};
		
    render() {  

         return ( 
	        <div>
	        <form method="post" onSubmit={this.handleFormSubmit}>
	          {this.state.rooms.map((room, index) => {
	            return <RoomComponent rooms={room} key={index} changeEvent={this.handleChange} counter={index} />;
	          })}
	        	     <input className="submitButton" type="submit" value="Submit" />
	        </form>
	      </div>
        )  
    }
};

export default HiltonTask;
