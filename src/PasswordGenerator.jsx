import React,{useState} from 'react'
import ReactSwitch from 'react-switch'

const PasswordGenerator = () => {
     const [password, setPassword] = useState("");
     const [passwordLength, setPasswordLength] = useState(12);
     const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
     const [includeNumbers, setIncludeNumbers] = useState(true);
     const [includeUpperCase, setIncludeUpperCase] = useState(true);
      
    const generatePassword = () => {
       const specialChars = "!@#$%^&*()";
       const numbers = "0123456789";
       const lowerCasechars = "abcdefghijklmnopqrstuvwxyz";
       const UpperCasechars = "ABCDEFGHIJKLMNOPQRSTUVWXXYZ";

       let validChars = lowerCasechars;

    if(includeUpperCase){
        validChars += UpperCasechars;
    }
    if(includeNumbers){
        validChars += numbers;
    }
    if(includeSpecialChars){
        validChars += specialChars;
    }

      let generatePassword = "";
      for (let i=0; i<passwordLength; i++){
        const randomIndex = Math.floor(Math.random()* validChars.length);
        generatePassword += validChars.charAt(randomIndex);
      }
      
      setPassword(generatePassword);
         };

    return (
        <div className='pt-8 text-black font-bold'>
            <div className= "flex flex-col items-center">
            <div className=" bg-blue-300 w=[350px] shadow-2xl hover:shadow-blue-900 rounded-md p-3">
            <div className= "mb-4 flex items-center justify-between">
             <label> <b>Password Length: </b></label>
            <input
             value = {passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
            className='w-14 bg-white pl-2 rounded-md'
            type = 'number'
            />
            </div>

            <div className="mb-4 flex items-center justify-between ">
                <label> <b>Include Upppercase:</b></label>
                <ReactSwitch
                checked = {includeUpperCase}
                onChange = {()=>setIncludeUpperCase(!includeUpperCase)}
                  height = {30}
                  width = {60}
                  handleDiameter = {20}
                  />
            </div>

            <div className="mb-4 flex items-center justify-between">
                <label> <b>Include Numbers:</b></label>
                <ReactSwitch
                checked = {includeNumbers}
                onChange = {()=>setIncludeNumbers(!includeNumbers)}
                  height = {30}
                  width = {60}
                  handleDiameter = {20}
                  />
            </div>
            <div className="mb-4 flex items-center justify-between">
                <label> <b>Include Special Characters:</b></label>
                <ReactSwitch
                checked = {includeSpecialChars}
                onChange = {()=>setIncludeSpecialChars(!includeSpecialChars)}
                  height = {30}
                  width = {60}
                  handleDiameter = {20}
                  />
            </div>
            <button
            onClick = {generatePassword}
             className='bg-blue-950 p-2 text-white font-bold rounded-md'> Generate Password</button>
            </div>
             {password && <p className='font-normal text-black mt-2'>Generate Password: <span className='font-bold'>{password}</span></p> }
            </div>
        </div>

    )
}


export default PasswordGenerator;