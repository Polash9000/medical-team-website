// Import needed files
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Doctor from './components/Doctor/Doctor';

// App Component
function App() {
  return (
    // Show on UI
    <div className="bg-img">
      <Header></Header>
      <Doctor></Doctor>
    </div>
  );
}

// Export App Component
export default App;
