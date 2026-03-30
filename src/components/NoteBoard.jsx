import { useState } from 'react';
import { useNotes } from '../hooks/useNotes';
import { useColor } from '../context/ColorContext';
import Note from './Note';

export default function NoteBoard() {
  const [text, setText] = useState('');
  const { notes, addNote, deleteNote } = useNotes();
  const { defaultColor } = useColor();

  const handleAdd = () => {
    addNote(text, defaultColor);
    setText(''); // Limpiar input
  };

  return (
    <div>
      <div style={{ marginBottom: '30px' }}>
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Escribe una nota..."
        />
        <button onClick={handleAdd}>Añadir Nota</button>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {notes.map(note => (
          <Note key={note.id} note={note} onDelete={deleteNote} />
        ))}
      </div>
    </div>
  );
}