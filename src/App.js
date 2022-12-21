import { useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Bottom from './components/Bottom';
import Navbar from './components/Navbar';
import All from './screens/All';
import Blocked from './screens/Blocked';
import Filter from './screens/Filter';
import Search from './screens/Search';
import Your from './screens/Your';
function App() {
  const [YourId,setYourId]=useState("");
  const [searchName,setsearchName]=useState("");
  const [filterD,setfilterD]=useState("");

  console.log(YourId)
  return (
    <BrowserRouter>
    <Navbar/>
    <Bottom setsearchName={setsearchName} setfilterD={setfilterD}/>
       <Routes>
       <Route exact path='/all' element={<All setYourId={setYourId}/>} />
       <Route exact path='/' element={<Your YourId={YourId}/>} />
       <Route exact path='/block' element={<Blocked/>} />
       <Route exact path='/search' element={<Search searchName={searchName}/>}/>
       <Route exact path='/filter' element={<Filter type={filterD}/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
