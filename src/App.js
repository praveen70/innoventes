import React, { Component } from 'react';
import './App.css';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import Icon from '@material-ui/core/Icon';

class App extends Component {
  state={
    updateRoom:1,
    decrementRoom:0,
    addult:1,
    child:0,
    show: true,
    disabled:true,
    disabledSubtract:true,
    disabledAdult:true,
    disabledAdultSubtract:true,
    disabledChildren:true,
    disabledChildrenSubtract:true,
    subtractFlag:"",

  }

  

  checkPersonCount=(dec)=>{
    
    let subtract = this.state.subtractFlag ;
    
    let totalPerson = this.state.addult + this.state.child ;
    if(totalPerson>4){
      let incressRoom =   this.state.updateRoom;
     
      if(subtract=== "a"){
         incressRoom =   this.state.updateRoom - 1;

      }else {
         incressRoom =   this.state.updateRoom + 1;

      }
    this.setState({updateRoom: incressRoom})
  
    }
    
  }



  subtractRoom=(event) =>{
    const{ name } = event.target;
    let room = this.state.updateRoom-1;
    if(room<1){
      this.setState({disabledSubtract:false });
      return ;
    }
    
    this.setState({ updateRoom: room });
    this.setState({disabled:true })

  }

    addRoom=(event) =>{
      const{ name } = event.target;
      let room = this.state.updateRoom+1;
      if(room>5){
        this.setState({disabled:false })
        return ;
      }
    
      this.setState({ updateRoom: room })
      this.setState({disabledSubtract:true });

    
      
    }

    addChildrens=(event)=>{
      this.checkPersonCount();
      const{ name } = event.target;
      let children = this.state.child+1;
      if(children>5){
        this.setState({disabledChildren:false })
        return ;
      }
    
      this.setState({ child: children }, () =>{
        this.setState({subtractFlag:"b"});
        this.checkPersonCount();
      })
    
      this.setState({disabledChildrenSubtract:true });
      
    }

    subtractAdults=(event)=>{
      this.checkPersonCount();
      const{ name } = event.target;
      let addult = this.state.addult-1;
      if(addult<1){
        this.setState({disabledAdultSubtract:false }, () =>{
          this.setState({subtractFlag:"a"});
          this.checkPersonCount();

        });
        return ;
      }else {
        this.setState({subtractFlag:"a"}, () =>{
          
          
          this.checkPersonCount();
          
        });
    

        
      }
      
      this.setState({ addult: addult });
      this.setState({disabledAdult:true })
      
    }

    callbackCheckPersonCount=()=>{
      this.checkPersonCount()
    }

    addAdults=(event)=>{
      const{ name } = event.target;
      let addult = this.state.addult+1;
      console.log("vRIABLE", addult)
      if(addult>5){
        this.setState({disabledAdult:false })
        
        return ;
      }
      this.setState({addult: addult}, () =>{
        this.setState({subtractFlag:"b"});
        this.checkPersonCount();
      })
 
      
      this.setState({disabledAdult:true });
     
        
        this.checkPersonCount();
    
    }

    subtractChildrens=(event)=>{
      this.checkPersonCount();
      const{ name } = event.target;
      let children = this.state.child-1;
  
      if(children<0){
        this.setState({disabledChildrenSubtract:false }, () =>{
          
          
          this.checkPersonCount();
          
        })
        this.setState({subtractFlag:"a"});
        this.checkPersonCount();

        
        
        return ;
      }else {
        this.setState({subtractFlag:"a"}, () =>{
          
          
          this.checkPersonCount();
          
        });


        
      }
    
      this.setState({ child: children })
      this.setState({disabledChildren:true });
     
      
     

    }

    ToggleClick = () => {
      this.setState({ show: !this.state.show });
  }
  render() {
  

    return (

    <div className="App" style={{paddingTop: "136px", width:500, paddingLeft:600 }}>
     <Paper >
    <Table style={{paddingTop: "136px", width:500, paddingLeft:600 }}>
      <TableRow>
        <th>Choose A Number Of People</th>
        <th>Current</th>
        <th>Room + Clicked</th>
      </TableRow>
      <tr>
        <td><i className="material-icons">room</i>Room</td>
        <td><Button variant="fab" color="primary" aria-label="Remove" onClick={this.subtractRoom} disabled={!this.state.disabledSubtract}>
        <RemoveIcon />
       
        </Button></td>
        <td>{this.state.updateRoom}<Button variant="fab" color="secondary" name="addRoom" aria-label="Add" onClick={this.addRoom} disabled={!this.state.disabled}><AddIcon /></Button></td>
      </tr>
      <tr>
        <td><i className="material-icons">account_circle</i>Adults</td>
        <td><Button variant="fab" color="primary" aria-label="Remove" onClick={this.subtractAdults} disabled={!this.state.disabledAdultSubtract}><RemoveIcon /></Button></td>
        <td>{this.state.addult}<Button variant="fab" color="secondary" aria-label="Add" name="adults" onClick={this.addAdults} disabled={!this.state.disabledAdult}>  <AddIcon /></Button></td>
      </tr>
      <tr>
        <td><i className="material-icons">accessibility_new</i>Children</td>
        <td><Button variant="fab" color="primary" aria-label="Remove" onClick={this.subtractChildrens} disabled={!this.state.disabledChildrenSubtract}><RemoveIcon /></Button></td>
        <td>{this.state.child}<Button variant="fab" color="secondary" aria-label="Add" nmae="children" onClick={this.addChildrens} disabled={!this.state.disabledChildren}><AddIcon /></Button></td>
      </tr>
  
</Table>
 </Paper>
    </div>
    );
  }
}

export default App;
    //   <div className="App" style={{paddingTop: "136px", width:500, paddingLeft:600 }}>
    //   <Paper className="">
    //   <Table className="" >
    //     <TableHead>
    //       <TableRow>
    //         <TableCell><strong>Choose A Number Of People</strong></TableCell>
    //         <TableCell >Current</TableCell>
    //         <TableCell numeric >Room  + Clicked</TableCell>
           
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {rows.map(row => {
    //         return (
    //           <TableRow key={row.id}>
    //             <TableCell component="th" scope="row">
    //               {row.name}
    //             </TableCell>
    //             <TableCell numeric><Button variant="fab" color="primary" aria-label="Remove" onClick={this.subtract}>
    //                  <RemoveIcon />
    //           </Button></TableCell>
    //             <TableCell numeric>{this.state.updateNumber}<Button variant="fab" color="secondary" aria-label="Add" onClick={this.add}>

    //                  <AddIcon />
                    
    //           </Button></TableCell>
    //             {/* <TableCell numeric>{row.Children}</TableCell>
    //             <TableCell numeric>{row.protein}</TableCell> */}
    //           </TableRow>
    //         );
    //       })}
    //     </TableBody>
    //   </Table>
    // </Paper>

    //   </div>