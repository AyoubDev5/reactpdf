import React, { Component } from 'react'
import axios from 'axios'
import {saveAs} from 'file-saver'
import Pdf from './Pdf'
import jsPDF from 'jspdf'


export default class Saver extends Component {

 constructor(props){
     super(props);
     this.state={
      allprojettaches:[],
      description_tache:"",
      nom_projet:"",
      nouveau_prix:0.0
    }
 }
 
    
    handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })

    // componentDidMount = ()=>{
    //   axios.get('http://localhost:5000/alltaches/projet/1')
    //   .then((res) => {
    //     this.setState({
    //       allprojettaches:res.data.rows,
    //     });
    //     console.log("res.data.rows",res.data.rows);
    //   })
    //   .catch((err)=>{
    //     console.log(err);
    //   })
    // }

    // getData=()=>{
    //   axios.get('http://localhost:5000/alltaches/projet/1')
    //   .then((res) => {
    //     this.setState({
    //       allprojettaches:res.data.rows,
    //     });
    //     console.log("res.data.rows",res.data.rows);
    //   })
    //   .catch((err)=>{
    //     console.log(err);
    //   })
    // }
  
    // createHandlechange = () =>{
     
    //   axios.post('http://localhost:5000/create-pdf',{
    //     description_tache:this.state.description_tache,
    //     nom_projet:this.state.nom_projet,
    //     nouveau_prix:this.state.nouveau_prix
    //   })
    //   .then(()=>axios.get('http://localhost:5000/fetch-pdf',{responseType: 'blob'}))
    //   .then((res)=>{
    //       const pdfblob = new Blob([res.data],{type:'application/pdf'});
    //       saveAs(pdfblob, 'newPdf.pdf');
    //   })
    //   .catch((err)=>console.log(err));   
      
    // }
    generatePdf = ()=>{
      const document = new jsPDF("p","pt","a4");
      document.html(Pdf,{
         callback: (pdf)=>{
           pdf.save("newProjet");
         }
      })
   }
  render() {
    return (
      <div>
          <input type="number" name="idProjet" placeholder='id de projet' onChange={this.handleChange} />
          <input type="text" name="nomProjet" placeholder='nom de projet' onChange={this.handleChange} />
          <input type="date" name="dateDebut" placeholder='date de debut de projet' onChange={this.handleChange} />
          <input type="date" name="dateFin" placeholder='date de fin de projet' onChange={this.handleChange} />
          <button onClick={this.createHandlechange}>Download as PDF</button>
          <button onClick={this.getData}>getInfo</button>
      </div>
    )
  }
}
