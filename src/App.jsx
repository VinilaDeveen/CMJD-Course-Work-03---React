import './App.css'
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Customertable from './component/customertable/Customertable';
import Newcustomer from './pages/newcustomer/Newcustomer';
import Customerview from './pages/customerview/Customerview';
import Addsale from './pages/addsale/Addsale';
import Salestable from './component/salestable/Salestable';
import Saleview from './pages/saleview/Saleview';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/customertable' element={<Customertable/>}/>
          <Route path='/salestable' element={<Salestable/>}/>
          <Route path='/customertable/newcustomer' element={<Newcustomer/>}/>
          <Route path='/customertable/customerview' element={<Customerview/>}/>
          <Route path='/salestable/saleview' element={<Saleview/>}/>
          <Route path='/sales/addsale' element={<Addsale/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
