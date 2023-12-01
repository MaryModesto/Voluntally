
import './css/style.css'    
import logo from './img/logo.png'

function App() {

  return (
    <>
      <div className="container">
      <img
        className="logo"
        alt="University of San Carlos Logo"
        src={logo}
      />
      <h2>CES Points Tracker</h2>
      <form id="login-form" action="/login" method="post">
        <label for="username">ID Number</label>
        <input type="text" id="username" name="username" required />
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required />
        <a href="#">Forgot Password?</a>
        <input type="submit" value="Login" id="login-btn" />
      </form>

      {/* <div id="error-message" style="color: red; display: none;"></div> */}
          
    </div>
    </>
  )
}

export default App
