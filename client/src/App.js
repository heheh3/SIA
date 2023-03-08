import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Appointment from './pages/Appointment';
import PendingAppointment from './pages/PendingAppointment';
import AdminNavbar from './pages/AdminNavbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import AboutUsMain from './pages/AboutUsMain';
import Login from './pages/Login';
import UpdateAppointment from './pages/UpdateAppointment';
import Allergies from './pages/Allergies';
import ReminderAppointment from './pages/ReminderAppointment';
import Employee from './pages/Employee';
import EmployeeAdd from './pages/EmployeeAdd';
import EmployeeUpdate from './pages/EmployeeUpdate';
import Completed from './pages/Completed';
import Register from './pages/Register';
import PatientTable from './pages/PatientTable';
import ProfileSettings from './pages/ProfileSettings';
import MedicalHistory from './pages/MedicalHistory';
import AppointmentHistory from './pages/AppointmentHistory';
import UpdatePatient from './pages/UpdatePatient';
import Walkin from './pages/Walkin';
import Procedures from './pages/Procedures';
import AdminPatientHistory from './pages/AdminPatientHistory';
import AdminMedicalHistory from './pages/AdminMedicalHistory';
import CancelledUpdate from './pages/CancelledUpdate';
import CompletedUpdate from './pages/CompletedUpdate';
import CompletedDetails from './pages/CompletedDetails';
import PatientBook from './pages/PatientBook';
import ProceduresAdd from './pages/ProceduresAdd';



function App() {
  return (
    <BrowserRouter>
    <div className='App'>
    <ToastContainer position='top-center' />
      <Routes>
         
          <Route path="/admin" element={<AdminNavbar />} />
          <Route path="/admin/employee" element={<Employee />} />
          <Route path="/admin/appointment/update/:id" element={<UpdateAppointment />} />
          <Route path='/admin/appointment/procedures/:id' element={<Procedures />} />
          <Route path='/admin/appointment/cancelled/:id' element={<CancelledUpdate />} />
          <Route path='/admin/appointment' element={<PendingAppointment />} />
          <Route path='/admin/completed/update/:id' element={<CompletedUpdate />} />
          <Route path='/admin/completed/procedures/:id' element={<CompletedDetails />} />

          <Route path='/admin/employee/add' element={<EmployeeAdd />} />
          <Route path='/admin/employee/update/:id' element={<EmployeeUpdate />} />

          <Route path='/admin/completed' element={<Completed />} />
          <Route path='/admin/user/update/:id' element={<UpdatePatient />} />
          <Route path='/admin/user/profile-settings/:id' element={<UpdatePatient />} />
          <Route path='/admin/user/medical-history/:id' element={<AdminMedicalHistory />} />
          <Route path='/admin/user/appointment-history/:id' element={<AdminPatientHistory />} />
          <Route path='/admin/user/book/:id' element={<PatientBook />} />
          
          <Route path='/admin/appointment/procedures/add/:id' element={<ProceduresAdd />} /> 
          <Route path='/admin/user' element={<PatientTable />} />
          <Route path='/allergies' element={<Allergies />} /> 


          <Route path='/admin/walk-in' element={<Walkin />} /> 

          <Route path="/appointment" element={<Appointment />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          
          <Route path='/profile/profile-settings/:id' element={<ProfileSettings />} />
          <Route path='/profile/medical-history/:id' element={<MedicalHistory />} />
          <Route path='/profile/appointment-history/:id' element={<AppointmentHistory />} />

          <Route path='/reminder' element={<ReminderAppointment />} />

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUsMain />} />

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/allergies' element={<Allergies />} /> 
      </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
