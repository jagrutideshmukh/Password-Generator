
import './App.css';
import PasswordGenerator from './PasswordGenerator';

function App() {
  return (
    <div className="App h-screen bg-gradient-to-r from-red-200 via-blue-200 to-yellow-200">
      <h1 className="text-5xl text-bold pt-16 text-black-800">Password Generator</h1>
     <PasswordGenerator/>
    </div>
  )
}
   
export default App;