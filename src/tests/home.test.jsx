import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages/Home";

describe("/Home", () => {
  it("Logomarca da TRACTIAN exista", () => {
    const { getByTestId } = render(<Home />);

    const logomarca = getByTestId(/headerLogo/i);
    
    expect(logomarca).toBeInTheDocument();
  });

  it("Hero contenha o texto", () => {
    const { getByText } = render(<Home />);

    const textoHero = getByText(/A PLATAFORMA MAIS COMPLETA DO MERCADO/i);

    expect(textoHero.innerHTML).toBe("A PLATAFORMA MAIS COMPLETA DO MERCADO");
  });

  it("Botão DEMONSTRAÇÃO exista na tela", () => {
    const { getAllByText } = render(<Home />);

    const botao = getAllByText(/Demonstração/i);

    expect(botao[0]).toBeInTheDocument("Demonstração");
  });

  it("Que o texto 'Indústrias inteligentes usam'", () => {
    const { getByText } = render(<Home />);

    const texto = getByText(/Indústrias inteligentes usam/i);

    expect(texto.innerHTML).toBe("Indústrias inteligentes usam");
  });

  it("Que exista o texto 'Case de Sucesso: AmstedMaxion e TRACTIAN'", () => {
    const { getByText } = render(<Home />);

    const texto = getByText(/Case de Sucesso: AmstedMaxion e TRACTIAN/i);

    expect(texto).toBeInTheDocument();
  });
});
