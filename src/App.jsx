import './App.css'
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Customertable from './component/customertable/Customertable';
import Newcustomer from './pages/newcustomer/Newcustomer';
import Customerview from './pages/customerview/Customerview';
import Addsale from './pages/addsale/Addsale';
import Salestable from './component/salestable/Salestable';
import Saleview from './pages/saleview/Saleview';
import Categorytable from './component/categorytable/Categorytable';
import Newcategory from './pages/addcategory/Newcategory';
import Categoryview from './pages/categoryview/Categoryview';
import Itemtable from './component/itemtable/Itemtable';
import Itemview from './pages/itemview/Itemview';
import Newitem from './pages/additem/Newitem';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/customertable' element={<Customertable/>}/>
          <Route path='/salestable' element={<Salestable/>}/>
          <Route path='/categorytable' element={<Categorytable/>}/>
          <Route path='/itemtable' element={<Itemtable/>}/>
          <Route path='/customertable/newcustomer' element={<Newcustomer/>}/>
          <Route path='/customertable/customerview' element={<Customerview/>}/>
          <Route path='/salestable/saleview' element={<Saleview/>}/>
          <Route path='/categorytable/addcategory' element={<Newcategory/>}/>
          <Route path='/itemtable/additem' element={<Newitem/>}/>
          <Route path='/categorytable/categoryview' element={<Categoryview/>}/>
          <Route path='/itemtable/itemview' element={<Itemview/>}/>
          <Route path='/sales/addsale' element={<Addsale/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
