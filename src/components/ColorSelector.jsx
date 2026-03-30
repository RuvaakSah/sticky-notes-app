import { useColor } from '../context/ColorContext';

export default function ColorSelector() {
  const { defaultColor, setDefaultColor } = useColor();

  return (
    <div style={{ margin: '20px' }}>
      <label>Color de nuevas notas: </label>
      <input 
        type="color" 
        value={defaultColor} 
        onChange={(e) => setDefaultColor(e.target.value)} 
      />
    </div>
  );
}