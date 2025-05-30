import './Aside.css'; 

export default function Overlay({ showOverlay, onClick }) {
  return (
    <div
      className={`overlay ${showOverlay ? 'show-overlay' : ''}`}
      onClick={onClick}
    ></div>
  );
}
