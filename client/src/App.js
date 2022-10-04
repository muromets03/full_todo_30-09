import {Routes, Route} from 'react-router-dom'
import UserForm from "./components/userForm";
import UserProfile from './components/UserProfile';
import UsersList from "./components/usersList";

function App() {
  return (
    
     <> 
     <Routes>
      <Route path='/' element={<UsersList/>}/>
      <Route path='/add-user' element={<UserForm/>}/>
      <Route path='/user/:id/' element={<UserProfile/>}/>
    
     </Routes>
     </>
   
  );
}

export default App;
