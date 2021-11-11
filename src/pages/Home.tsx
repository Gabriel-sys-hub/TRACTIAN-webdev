import React, { useState } from "react";
import "./styles.scss";

const Home: React.FC = () => {
  const [newClass, setNewClass] = useState<boolean>(false);
  
  window.onscroll = function() {
    const top = window.scrollY;
    top > 200 ? setNewClass(true) : setNewClass(false);
  }

  return (
    <div className="container" id="top">
      <header className={ !newClass ? "headerContainer" : "headerContainerScroling" }>
        <img src="./logo.svg" alt="logomarca" data-testid="headerLogo" />
      </header>
      <div className="heroText">
        <div className="heroContent">
          <h1>A PLATAFORMA MAIS COMPLETA DO MERCADO</h1>
          <p>
            Com o Software de Manutenção da TRACTIAN você está um passo à frente
            da falha. É mais visibilidade, segurança e controle de forma simples
            e inteligente, como deve ser.
          </p>
          <button name="Demonstração">Demonstração</button>
        </div>
        <div className="heroImg">
          <img
            src="https://imgix.tractian.com/lp-software/sensor-plataforma-celular-tablet.png?auto=format&fit=max&w=1080"
            alt=""
          />
        </div>
      </div>
      <div className="wavesContainer">
        <img
          alt="waves"
          src="https://imgix.tractian.com/images/ondas.svg"
          className="waves"
        />
      </div>
      <div className="main">
        <h1>Indústrias inteligentes usam</h1>
        <h2>
          Trazemos paz para a manutenção. Controle, autonomia e confiabilidade
          para sua máquina.
        </h2>
        <div className="mainImgContainer">
          <img
            src="https://imgix.tractian.com/lp-software/insights-tela-desalinhamento.png?auto=format&fit=max&w=1920"
            alt="tractian"
            className="tractianImg"
          />
          <div className="liContainer">
            <ul>
              <li>
                <img
                  src="https://imgix.tractian.com/lp-software/check.png?auto=format&fit=max&w=48"
                  alt="ok"
                />
                Saúde dos ativos
              </li>
              <li>
                <img
                  src="https://imgix.tractian.com/lp-software/check.png?auto=format&fit=max&w=48"
                  alt="ok"
                />
                Monitoramento constante
              </li>
              <li>
                <img
                  src="https://imgix.tractian.com/lp-software/check.png?auto=format&fit=max&w=48"
                  alt="ok"
                />
                Alertas automáticos
              </li>
              <li>
                <img
                  src="https://imgix.tractian.com/lp-software/check.png?auto=format&fit=max&w=48"
                  alt="ok"
                />
                Analytics
              </li>
              <li>
                <img
                  src="https://imgix.tractian.com/lp-software/check.png?auto=format&fit=max&w=48"
                  alt="ok"
                />
                OS automatizados
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="videoContainer">
        <h1>Case de Sucesso: AmstedMaxion e TRACTIAN</h1>
        <h2>
          A AmstedMaxion é a maior fabricante de fundidos ferroviários e
          industriais da América do Sul! E está usufruindo do monitoramento
          online de ativos TRACTIAN.
        </h2>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/JIdKPsDjIaY?list=TLGG_LEqdyL0xEgwOTExMjAyMQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="percentContainer">
        <h1>A união perfeita de software e hardware em um só lugar</h1>
        <h3>
          Gestão de ativos, Ordens de Serviço automatizadas e Insights
          automáticos na mesma plataforma.
        </h3>
        <div className="whitePercentContainer">
          <div className="percentColunm">
            <div className="percent">↑ 60%</div>
            Aumente em até 60% a produção
          </div>
          <div className="percentColunm">
            <div className="percent">↑ 60%</div>
            Aumente em até 60% a produção
          </div>
          <div className="percentColunm">
            <div className="percent">↧ 60%</div>
            Reduza em até 60% o custo de manutenção
          </div>
        </div>
        <img
          src="https://imgix.tractian.com/lp-software/uniao-software-hardware-manutencao.png?auto=format&fit=max&w=1080"
          alt="img"
        />
      </div>
      <div className="tractianMotivation">
        <h1>Por que escolher a Tractian?</h1>
        <div className="tractianMotivationContainer">
          <div className="tractianBox">
            <img
              src="https://imgix.tractian.com/images/icon-maintence-online.svg?auto=format&fit=max&w=96"
              alt=""
            />
            <h3>Manutenção Preditiva</h3>
            Detecção automática de falhas, saúde do ativo em tempo real, confiabilidade e insights automáticos.
          </div>
          <div className="tractianBox">
            <img
              src="https://imgix.tractian.com/images/icon-maintence-pump.svg?auto=format&fit=max&w=96"
              alt=""
            />
             <h3>Monitoramento Online</h3>
             Sensor Tractian coleta dados de vibração, temperatura, horímetro e consumo de energia em tempo real.
          </div>
          <div className="tractianBox">
            <img
              src="https://imgix.tractian.com/images/icon-maintence-horimeter.svg?auto=format&fit=max&w=96"
              alt=""
            />
             <h3>Setup Instantâneo</h3>
             Solução Plug & Play, sem necessidade de WiFi industrial, comunicação via 3G/4G independente.
          </div>
          <div className="tractianBox">
            <img
              src="https://imgix.tractian.com/images/icon-maintence-plataform.svg?auto=format&fit=max&w=96"
              alt=""
            />
             <h3>CMMS Integrado</h3>
             Automatize processos, ordens de serviço e tenha total controle sobre seus ativos e equipe.
          </div>
        </div>
        <button name="">Começar Agora</button>
      </div>
      <footer className="footer">
        <div className="logoContainer">
          <img className="footerLogo" src="./logo.svg" alt="logomarca" />
          <a href="#top">Voltar ao Topo</a>
        </div>
        <hr />
        <div className="logoContainer">
          <p>© Tractian Tecnologia Ltda CNPJ: 35.755.699/0001-84</p>
          <div className="socialMedia">
            <img
              src="https://imgix.tractian.com/images/linkedin.png?auto=format&fit=max&w=32"
              alt=""
            />
            <img
              src="https://imgix.tractian.com/images/facebook.png?auto=format&fit=max&w=32"
              alt=""
            />
            <img
              src="https://imgix.tractian.com/images/instagram.png?auto=format&fit=max&w=32"
              alt=""
            />
            <img
              src="https://imgix.tractian.com/images/youtube.png?auto=format&fit=max&w=32"
              alt=""
            />
          </div>
          <button type="button">Política de privacidade</button>
        </div>
      </footer>
    </div>
  );
};

export default Home;
