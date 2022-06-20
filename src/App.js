import './App.css';
import BirthdayButton from './components/BirthdayButton'

function App() {
  return (
    <div className="App">
      <BirthdayButton firstName="Jane" lastName="Doe" hairColor="Black" age={ 45 }/>
      <BirthdayButton firstName="John" lastName="Smith" hairColor="Brown" age={ 88 }/>
    </div>
  );
}

export default App;
