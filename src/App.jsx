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
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './component/protectedRoute/ProtectedRoute';
import Login from './pages/auth/Login';



function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<ProtectedRoute/>}>
              <Route path='/customertable' element={<Customertable/>}/>
              <Route path='/salestable' element={<Salestable/>}/>
              <Route path='/categorytable' element={<Categorytable/>}/>
              <Route path='/itemtable' element={<Itemtable/>}/>
              <Route path='/customertable/:id' element={<Customerview/>}/>
              <Route path='/salestable/:saleId' element={<Saleview/>}/>
              <Route path='/categorytable/addcategory' element={<Newcategory/>}/>
              <Route path='/itemtable/additem' element={<Newitem/>}/>
              <Route path='/categorytable/:categoryId' element={<Categoryview/>}/>
              <Route path='/itemtable/:itemId' element={<Itemview/>}/>
              <Route path='/sales/addsale' element={<Addsale/>}/>
            </Route>
            <Route path='/' element={<Login/>}/>
            <Route path='/customertable/newcustomer' element={<Newcustomer/>}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
