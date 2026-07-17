import { Link } from 'react-router-dom'

export default function Pagina404() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1a1a1a',
      color: 'white',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{fontSize: '5rem', margin:0}}>404</h1>
      <h2 style={{fontSize: '2rem', margin: '1rem 0'}}>Página não encontrada!</h2>
      <p style={{fontSize: '1.2rem', marginBottom: '2rem'}}>
        Ops! Parece que você se perdeu. A página que você está procurando não existe ou foi movida.
      </p>
      <div style={{display: 'flex', gap: '1rem'}}>
        <button onClick={() => window.history.back()} style={{
          padding: '0.8rem 1.5rem',
          fontSize: '1rem',
          cursor: 'pointer',
          backgroundColor: 'transparent',
          color: 'white',
          border: '2px solid white',
          borderRadius: '8px'
        }}>← Voltar</button>
        <Link to="/" style={{
          padding: '0.8rem 1.5rem',
          fontSize: '1rem',
          backgroundColor: '#4ade80',
          color: 'black',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>Ir para o Início</Link>
      </div>
    </div>
  )
}