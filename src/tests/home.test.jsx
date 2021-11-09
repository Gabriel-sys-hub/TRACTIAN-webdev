import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages/Home";

describe("/Home", () => {
  it("Logomarca da TRACTIAN exista", () => {
    const { getAllByText } = render(<Home />);

    const logomarca = getAllByText(/TRACTIAN/i);

    expect(logomarca[0].innerHTML).toBe("TRACTIAN");
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

  it("Que exista uma imagem mostrando o site com 'graficos'", () => {
    const { getByRole } = render(<Home />);

    const img = getByRole("img", { alt: /tractian/i });

    expect(img).toBeInTheDocument();
  });

  it("Que exista o texto 'Para além do nome indústria 4.0'", () => {
    const { getByText } = render(<Home />);

    const texto = getByText(/Para além do nome indústria 4.0/i);
    const botao = getByText(/Agende/i);

    expect(botao.innerHTML).toBe("Agende uma demonstração");
    expect(botao).toBeInTheDocument();
    expect(texto).toBeInTheDocument();
  });
});
