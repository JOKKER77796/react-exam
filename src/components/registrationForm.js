import React, {useState,setState} from 'react';
import './style.css'
function RegistrationForm() {
    
    const [dbnum, setdbnum] = useState(null);
    const [Name, setName] = useState(null);
    const [mob, setmob] = useState(null);
    const [gender,setgender] = useState(null);
   

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "dbnum"){
            setdbnum(value);
        }
        if(id === "lastName"){
            setName(value);
        }
        if(id === "email"){
            setmob(value);
        }
        if(id === "password"){
            setgender(value);
        }

    }

    const handleSubmit  = () => {
        console.log(dbnum,mob,gender,Name);
    }

    return(
        <div className="form">
            <div className="form-body">
        
              <div className="dbnum">
                  <label className="form__label" for="dbnum">Debit card number </label>
                  <input className="form__input" type="text" id="dbnum" placeholder="Debit card number"/>
              </div>
              <div className="name">
                  <label className="form__label" for="Name">Name </label>
                  <input  type="text" name="" id="Name"  className="form__input"placeholder="Name"/>
              </div>
              <div className="mob">
                  <label className="form__label" for="mob">Mobile No </label>
                  <input  type="textr" id="mob" className="form__input" placeholder="Mobile No"/>
              </div>
              <div className="gender">
                  <label className="form__label" for="gender">Gender </label>
                  <input  type="text" id="mob" className="form__input" placeholder="Gender"/>
              </div>
             
          </div>
          <div class="footer">
              <button type="submit" class="btn">Register</button>
          </div>
      </div>      
          

       
    ) 
}

export default RegistrationForm
