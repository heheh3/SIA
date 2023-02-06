import React, {useState, useEffect} from 'react';
import {useParams, Link} from "react-router-dom";
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import '../css/Home.css';
import { toast } from 'react-toastify';




const PendingAppointment = () => {
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const loadData = async () =>{
        const response = await axios.get("http://localhost:5000/appointment/get");
        setData(response.data);  
    }


    useEffect(()=>{
        loadData();
    }, [])

    const deleteAppointment = (id)=>{
        if(window.confirm("Are you sure you wanted to delete this appointment?")){
            axios.delete(`http://localhost:5000/appointment/delete/${id}`);
            toast.success("Appointment Deleted Successfully!");
            setTimeout(()=> loadData(), 500);
       
        }
    }

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
      };

    return (
    <div>
        <header>
            <AdminNavbar />
        </header>
        <body className='pending_body'>
            <div className='search__bar-container'>
                <input type="text" className='search__bar' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search Here..."/>
            </div>
            <table className='styled-table'>
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>No.</th>
                        <th style={{textAlign: "center"}}>Appointment ID</th>
                        <th style={{textAlign: "center"}}>Name</th>
                        <th style={{textAlign: "center"}}>Date</th>
                        <th style={{textAlign: "center"}}>Time</th>
                        <th style={{textAlign: "center"}}>Procedure</th>
                        <th style={{textAlign: "center"}}>Note</th>
                        <th style={{textAlign: "center"}}>Status</th>
                        <th style={{textAlign: "center"}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.filter((item) =>{
                        return searchValue.toLowerCase() === '' || item.b_date.toLowerCase().includes(searchValue) 
                            || item.b_note.toLowerCase().includes(searchValue) || item.b_time.toLowerCase().includes(searchValue) 
                            || item.b_procedure.toLowerCase().includes(searchValue) || item.patientID.toString().includes(searchValue) 
                            || item.b_status.toLowerCase().includes(searchValue) 
                            
                    }).map((item, index)=>{
                        return(
                            <tr key={item.patientID}>
                                <th scope='row'>{index+1}</th>
                                <td>{item.patientID}</td>
                                <td>{item.p_name}</td>
                                <td>{item.b_date}</td>
                                <td>{item.b_time}</td>
                                <td>{item.b_procedure}</td>
                                <td>{item.b_note}</td>
                                <td><span  style={
                                    {backgroundColor: item.b_status == "In Progress" ? 'orange' : '' ||   item.b_status == "Pending" ? 'blue': '' ||
                                            item.b_status == "Cancelled" ? 'red': '' ||  item.b_status == "Rescheduled" ? 'violet': '' ||  
                                            item.b_status == "Completed" ? 'green': '', padding: '5px 10px', color: 'white', borderRadius: '10px', fontSize: '0.8rem', letterSpacing: "1.5px",}
                                    }>{item.b_status}</span></td>
                                <td>
                                   
                                    <Link to={`/admin/appointment/update/${item.patientID}`}>
                                        <button className='btn btn-view'>View/Edit</button>
                                    </Link>
                                    <button className='btn btn-delete' onClick={() => deleteAppointment(item.patientID)}>Delete</button>
                                    
                                    
                                </td>
                            </tr>
                            
                        )
                    })}
                </tbody>
                
            </table> 
        
        </body>

    </div>
  )
}

export default PendingAppointment