export default function Note({ note, onDelete }) {
  return (
    <div style={{ 
      backgroundColor: note.color, 
      padding: '15px', 
      margin: '10px', 
      width: '150px', 
      minHeight: '150px',
      boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
      position: 'relative'
    }}>
      <p>{note.text}</p>
      <button 
        onClick={() => onDelete(note.id)}
        style={{ position: 'absolute', top: '5px', right: '5px', cursor: 'pointer' }}
      >
        X
      </button>
    </div>
  );
}