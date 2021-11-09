import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <header className="headerContainer">
        <h1>TRACTIAN</h1>
      </header>
      <div className="heroText">
        <h1>A PLATAFORMA MAIS COMPLETA DO MERCADO</h1>
        <p>And I'm a Photographer</p>
        <button name="Demonstração">Demonstração</button>
      </div>
      <div className="main">
        <h1>Indústrias inteligentes usam</h1>
        <img src="" alt="tractian" className="tractianImg" />
      </div>
      <div className="main">
        <h1>Para além do nome Indústria 4.0</h1>
        <button name="agende">Agende uma demonstração</button>
      </div>
      <footer className="footer">
        <h1>TRACTIAN</h1>
        <button name="agende">Voltar ao topo</button>
      </footer>
    </div>
  );
}

export default Home;