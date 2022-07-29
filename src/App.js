import './App.css';
import Profile from './profile/profile';
import swal from 'sweetalert';






function App()
 {
 function handleName (){
  swal("Thank you for following me !");
  
  } 
  
  return (
  
    <div className="container">
    
      <div className="main-body">

        <Profile
          fullName="Houssem Eddine Trimech"
          profession="Full Stack Developer"
          bio="I'm learning React.js"
          onClick={handleName}
        >
          <img
            src="/avatar7.png"
            alt="Admin"
            className="rounded-circle"
            width="150"
          />
          
        </Profile>

      </div>

    </div>
    
  );
}

export default App;
