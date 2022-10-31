import logo from './logo.svg'; 
import './App.css';
import Profile from './profile/Profile';


function App() {
  const handleName = (fullname,bio,proffession,)=> {
    alert (`${fullname} \n ${bio} \n ${proffession}`);
  }
  return (
    <div className='aapp'>
    <div className='app'>
    <div className="profilee">
      <h1>profile1</h1>
      <img className='iimg' src="./image1.jpg" />
      
     <Profile className="kk"
       fullname="kais"
       bio="futur dvp "
        proffession="clientel " 
        handleName={handleName} />
    </div>

    <div className="profile1">
      <h1>profile2</h1>
      <img className='iimg' src="./image2.jpg" />
      
     <Profile fullname="salah"  bio="futur dvp " proffession="clientel"  handleName={handleName} />
    </div>

    <div className="profile2">
      <h1>profile3</h1>
      <img className='iimg' src="./image3.jpg" />
      
     <Profile fullname="riadh"  bio="futur dvp " proffession="clientel "  handleName={handleName} />
    </div>

    
    </div>
    </div>

  );
}

export default App;
