
import './App.css';
import Groups from './components/Groups';
import Discover from './components/Discover';
import MainComponent from './components/MainComponent';

function App() {
  return (
    <div className="flex bg-[#393943] h-full">
      {/* Friends + Groups */}
      <Groups/>
      {/* Discover */}
      <Discover/>
      {/* Main Content */}
      <MainComponent/>
      {/* Hero */}
      {/* Featured */}
  




    </div>
  );
}

export default App;
