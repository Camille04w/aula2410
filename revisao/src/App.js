
import imagemProduto from '../src/img/produto.png'

import ProductCard from './components/ProductCard';


function App() {
  return (
    <div className="App">
      <h1>Loja de Eletrodomésticos</h1>
      <ProductCard
        nome='Ar condicionado split hw tcl elite series 12000 btus quente e frio 220v'
        imagem={imagemProduto}
        descricao='Os condicionadores de ar TCL Elite Series A1 são perfeitos para quem busca máximo conforto para o seu lar. Não passe calor, aqui você encontra a sensação térmica ideal, com design.'
        preco='R$ 2.359,24'
        caracteristicas='Ideal até (m²): 20 m²
        Espessura Tubulação; 1/4 e 3/8
        Capacidade; 12.000 Btus
        Ciclo: Quente e Frio Temperatura de
        uncionamento (C); 17 a 31
        Classificação Energética 2022: A
        Classificação Energética 2023: E
        Eficiência Energética; 3,66 IDRS'
      />
    </div>
  );
}

export default App;
