import React ,{useState,useEffect} from 'react';
import M from "materialize-css"
import * as API from './Api/ApiServices.js'

import  SelectBar from './Components/selectBar/SelectBar.js';
import  TransactionField from './Components/TransactionField/TransactionField.js'
import  SearchBar from './Components/searchBar/SearchBar.js'
import  ModalTransaction from './Components/Modals/ModalTransaction.js';

export default function App() {
  const [dates , setDates] = useState([]);
  const [currentDate , setCurrentDate] = useState("2019-01");
  const [searchText , setSearchText]=useState("")
  const [Transactions,setTransactions] = useState([]);
  const [modalIsOpen,setModalIsOpen] = useState(false);
  const [selectedTransaction , setSelectedTransaction] = useState({})

  const handleIndexChange= (newValue)=>{
    setCurrentDate(newValue)
    
  }
  const handleSelecChange= (event)=>{
    
    setCurrentDate(event.target.value)
    
  }
  const handleSeachTextChange = (event)=>{
    setSearchText(event.target.value)
  }
  

  const handleDeleteTransaction = async (transactionToDelete) =>{
    const response  = await API.deleteTransaction(transactionToDelete._id)
        if(response.message === "Documento Deletado com sucesso"){
      setTransactions(Transactions.filter((transaction)=>{
        return transaction._id !== transactionToDelete._id
      }))
    }
    
    

  }

  const handleSaveData = async(transaction, newTransaction = true)=>{
    if(newTransaction){
      const response = await API.createTransaction(transaction)
      console.log(response)
      setModalIsOpen(false)
      if(response){
        setTransactions(await API.getTransactions(currentDate))
      }
    }else{
      const response = await API.updateTransaction(transaction._id,transaction)
      console.log(response)
      setModalIsOpen(false)
      if(response.message === "Documento Atualizado com sucesso"){
        setTransactions(await API.getTransactions(currentDate))
      }
    }

  }

  const handleShowModal = (transaction = {})=>{
    console.log(transaction._id)
    if(transaction._id !== undefined){
      setSelectedTransaction(transaction)
      
    }else{
      setSelectedTransaction({})
    }
    
    setModalIsOpen(true);


  }

  const handleCloseModal = ()=> {
    setModalIsOpen(false);
  }

  useEffect(()=>{
   
    M.AutoInit();
    (async()=>{
      setDates(await API.getDistinctDates())
    })();
    
  }
  ,[])

  
  useEffect(()=>{
    
  if(currentDate !== ""){
      
      (async()=>{
        setTransactions(await API.getTransactions(currentDate))
      })();
      setSearchText("");
      //console.log(Transactions)
    }    
  }
  ,[currentDate])


    
  return (<div className="container center"> 
            {modalIsOpen && <ModalTransaction 
                                              onClose ={handleCloseModal} 
                                              onSave = {handleSaveData}
                                              selected = {selectedTransaction}  />}

            <SelectBar arrDates={dates} currDate ={currentDate} handleChange = {handleSelecChange} IndexChange={handleIndexChange}/>
            <SearchBar text={searchText}  
                       textChange={handleSeachTextChange}
                       openModal = {handleShowModal}/>

            <TransactionField arrT= {Transactions} 
                              search={searchText}
                              onDeleteTransaction={handleDeleteTransaction}
                              openModal = {handleShowModal} />
            
          </div> );
    
  
}
