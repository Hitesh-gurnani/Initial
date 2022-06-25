import logo from './logo.svg';
import './App.css';
import SignupText from './components/SignupText'
import SignUpCard from './components/SignUpCard';
function App() {
  return (
    <div style={{ display: 'flex' }}>
      <SignupText />
      <SignUpCard />
    </div>
  );
}

export default App;
