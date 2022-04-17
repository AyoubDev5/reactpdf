import React, { Component } from 'react'
import './style.css';
import axios from 'axios'

export default class Pdf extends Component {
  
   constructor(props){
      super(props);
      this.state={
       allprojettaches:[],
       description_tache:"",
       nom_projet:"",
       nouveau_prix:0.0
     }
   }

   componentDidMount=()=>{
      axios.get('http://localhost:5000/alltaches/projet/1')
      .then((res) => {
        this.setState({
          allprojettaches:res.data.rows,
        });
        console.log("res.data.rows",res.data.rows);
      })
      .catch((err)=>{
        console.log(err);
      })
    }

  render() {
   const today = new Date();
    return (
      <div className='my-pdf'>
             <div className="invoice-box">
             <table cellpadding="0" cellspacing="0">
                <tr className="top">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td className="title">Recu</td>
                            <td>
                               Date: {today.getDate()}/ {today.getMonth() + 1}/ {today.getFullYear()}.
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr className="information">
                   <td colspan="4">
                      <table>
                         <tr>
                            <td>
                               Nom de projet: {this.state.allprojettaches.nom_projet}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr className="heading">
                   <td>Description</td>
                   <td>Prix</td>
                </tr>
            {this.state.allprojettaches.map(projettache => (
               <tr className="item">
                   <td>{projettache.description_tache}</td>
                   <td>{projettache.nouveau_prix}</td>
                </tr>
            ))}
             </table>
             <br />
             <h1 className="justify-center">Total prix: </h1>
          </div>
      </div>
    )
  }
}
