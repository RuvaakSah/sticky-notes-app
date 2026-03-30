import { ColorProvider } from './context/ColorContext';
import NoteBoard from './components/NoteBoard';
import ColorSelector from './components/ColorSelector';
import './App.css';

function App() {
  return (
    <ColorProvider>
      <div className="App">
        <h1>Mis Notas Adhesivas</h1>
        <ColorSelector />
        <NoteBoard />
      </div>
    </ColorProvider>
  );
}

export default App;