
import { FaHeartbeat} from 'react-icons/fa';
import { Outlet,  } from 'react-router-dom';



const logo = require('../images/img1.png')






function Login() {
    
  return (
    <div className="App">
      <div className="left">
          <span><FaHeartbeat className='icon'/>E-AFYA</span>
          <h4>HEALTH MANAGEMENT SYSTEM</h4>
          <h2>WELCOME</h2>
          <img src={logo} alt='wewe'className='image'/>
    
      </div>

      <div className="right">
       
        <Outlet/>
        
      </div>


    </div>
  );
}

export default Login;
