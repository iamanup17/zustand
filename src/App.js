import logo from './logo.svg';
import './App.scss';
import useStore from './store';
import People from './components/People';
import Input from './components/Input';

function App() {
  const people = useStore((state) => state.people);
  return (
    <>
      <div className="main-container ">
        <People />
        <div className="nested">
          <h1>Zustand</h1>
          <h3>This is a nested rules example</h3>
          <a href="nested"> Click me to go to somewhere in Home</a>
          <a href="nested"> Click me to go to somewhere in About</a>
          <br />
          <div>
            <button>SIGN IN</button>

            <button>SIGN UP</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
