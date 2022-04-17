import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

/*import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from 'react-router-dom';*/
import Login from './components/login';

//import MultipleInput from './components/multipleInput';

function App() {
  return (
    //<Router>
    //<Routes>
   // <Route path="/" component={multipleInput}/>
    /*<Router>
      <Route>
   <MultipleInput/>
   </Route>
   <Route>
   <Login/>
   </Route>
   </Router>
  //<Route path='/login' element={<Login/>}/>
    
 
  //</Routes>
  //</Router>
   
  <Router>
  <Routes>
  <Route key={0} path="/" component={MultipleInput} />,
  <Link as={Link} to='/Login'>Sign In </Link>
        <Route key={1} path="/login" component={Login} />
        </Routes>
        </Router> */
        <Login/>
           
  
  );
}

export default App;
