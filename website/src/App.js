
import './App.css';

function header() {
  return (
      <div>
          <ul>
              <li>Home</li>
              <li>Work</li>
              <li>About</li>
              <li>Contact</li>
          </ul>
      </div>
     );
  homePage();
}


function homePage(){
    return(
        <div class='title'>Hi it's home</div>
    );
}

export default header;