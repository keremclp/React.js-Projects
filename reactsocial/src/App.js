import logo from './logo.svg';
import './App.css';
import Facebook from './Components/Facebook';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Facebook Auth Example</h1>
        <p>
          This example demonstrates how to authenticate with Facebook using the
        </p>
        <Facebook />
      </header>
      
    </div>
  );
}

export default App;
