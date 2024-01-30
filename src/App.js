
import './App.css';
import BlackCycle from './components/BlackCycle';
import Boycare from './components/Boycare';
import Boyinfo from './components/Boyinfo';
import CycleL from './components/CycleL';
import Cycleorange from './components/Cycleorange';
import Mobilesection from './components/Mobilesection';

import Navbar from './components/Navbar';
import Videosection from './components/Videosection';


function App() {
  return (
   <>
    <div className='lg:h-screen lg:overflow-x-hidden' style={{ background: 'linear-gradient(224deg, #eee5d3 20%, #fffaf4 81.18%)' }}>
    <Navbar /> 
      <Cycleorange/>
       
       
    </div> 
    <div className=' overflow-x-hidden '>
    <CycleL/>
    <BlackCycle/>
    <Videosection/>
    
    </div>
    <Mobilesection/>
    <div className=' overflow-x-hidden'>
    <Boyinfo/>
    </div>
 
   
</>

  );
}

export default App;
