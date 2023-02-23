import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';

function App() {
  return (
    <>
     <Navbar title="PMusic2" AboutText="About TextUtils"/>
     {/* <Navbar/> */}
     <div className="container">
     <TextFrom heading="Enter Your Text "/>
     </div>
     
    </>

  );
}
export default App;