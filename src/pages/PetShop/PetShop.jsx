import PetShopStyled from "./styled";
import api from "../../services/api";
import { useEffect, useState, useContext } from "react";
import { Context } from "../../context/authContext";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Loading/Error";
import { toast } from "react-toastify";

export default function PetShop() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { setItens, itens, authenticated } = useContext(Context);

  //Verifica Se Já tem o item Incluso Antes de Adcionar
  function handleAddItem(item) {
    let itemAdded = false;
    if(!authenticated){
      return toast.error("você precisa estar logado", { autoClose: 3000 });
    }
    itens.forEach((dt) => {
      if (dt === item) {
        toast.error("o item já estava no carrinho", { autoClose: 3000 });
        return (itemAdded = true);
      }
    });
    if (!itemAdded) {
      toast.success("item adcionado ao carrinho", { autoClose: 3000 });
      setItens([...itens, item]);
    }
  }

  //Recebe os Dados do Backend
  useEffect(() => {
    async function getData() {
      await api
        .get("/petshop")
        .then((res) => {
          setData(res.data);
        })
        .catch((e) => {
          setError(true);
        });
      setLoading(false);
    }
    getData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <PetShopStyled>
      <div className="home-page">
        <header>
          <div>
            <h1>Petshop Animals</h1>
            <h2>Compre e ajude os nossos bichinhos</h2>
          </div>

          <h1>Categorias</h1>

          <ul className="sidebar">
            <li>Camisetas</li>
            <li>Mascara</li>
            <li>Diversos</li>
          </ul>

          <h1>Filtros</h1>

          <ul className="sidebar">
            <li>Branco</li>
            <li>Preto</li>
          </ul>

          <h1>Tamanhos</h1>

          <ul className="sidebar">
            <li>P</li>
            <li>M</li>
            <li>G</li>
            <li>Gg</li>
          </ul>

          <button>PROCURAR</button>
        </header>

        <article>
          <img
            src="https://image.freepik.com/free-vector/pet-shop-poster-dog-with-pet-items_1416-817.jpg"
            alt=""
          />
        </article>

        <section>
          <h1>Nosso Produtos disponiveis</h1>

          <p>Nosso produtos</p>

          <div className="itens-grid">
            {data.map((item) => (
              <ul className="ul-grid" key={item._id}>
                <li className="li-grid">
                  {item.foto ? (
                    <img className='item-foto' src={item.foto} alt="" />
                  ) : (
                    "Produto sem foto"
                  )}
                </li>
                <li className="li-grid">Produto: {item.produto}</li>
                <li className="li-grid">Categoria: {item.categoria}</li>
                <li className="li-grid">Valor: R$ {item.valor}</li>
                <button
                  className="btn-grid"
                  onClick={() => handleAddItem(item)}
                >
                  COMPRAR
                </button>
              </ul>
            ))}
          </div>
        </section>
      </div>
    </PetShopStyled>
  );
}
