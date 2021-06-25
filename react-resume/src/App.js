
import Contact from './components/contact';
import Header from './components/Header';
import Background from './Assets/bg4.jpeg';
import Hobbies from './components/Hobbies';

var sectionStyle = {
  width: "100%",
  height: "900px",
  backgroundPosition:" 10px 30px",
  backgroundImage: `url(${Background})`
};


function App() {
  return (
    <div >
        <div className='App' style={sectionStyle}>
            <Header />
            <Contact />
            <Hobbies />
            
            
        </div>
      

    </div>
      

     
  
  );
}

export default App;
