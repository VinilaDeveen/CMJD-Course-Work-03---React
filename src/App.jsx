import './App.css'
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Sidebar from './component/sidebar/Sidebar';
import Customertable from './component/customertable/Customertable';
import Newcustomer from './pages/newcustomer/Newcustomer';
import Customerview from './pages/customerview/Customerview';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/customertable' element={<Customertable/>}/>
          <Route path='/customertable/newcustomer' element={<Newcustomer/>}/>
          <Route path='/customertable/customerview' element={<Customerview/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
