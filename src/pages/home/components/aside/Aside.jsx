import './Aside.css';

export default function Aside({ toggle }) {
  return (
    <aside className={toggle ? 'show' : ''}>
      <a href="#">Hero</a>
      <a href="#">Projetos</a>
      <a href="#">Contato</a>
    </aside>
  );
}
