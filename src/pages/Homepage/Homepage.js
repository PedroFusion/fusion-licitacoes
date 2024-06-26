import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import styled from "styled-components";
import Bg_image from "../../utils/images/bg.jpeg";
import LOGO_FUSION from "../../utils/images/LOGO_FUSION.png";

import { FaLock, FaLockOpen } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CurrencyInput from 'react-currency-masked-input'
import BlockRightClickAndKeys from "../../blockUserClick";



export default function HomePage() {

  const navigate = useNavigate();
  const [estimado, setEstimado] = useState(0);
  const [global, setGlobal] = useState(0);
  const [valorPagina, setValorPagina] = useState(0);
  const [qtdMaquinas, setQtdMaquinas] = useState(0);

  const [lockEstimado, setLockEstimado] = useState(false);
  const [lockMaquinas, setLockMaquinas] = useState(false);

  function calculate() {
    
    if(estimado != 0 && global != 0){
      const valorGlobalFormatado = global.replace(",", "").replace(".", "");
      const valorEstimadoFormatado = estimado.replace(",", "").replace(".", "");
      console.log(valorGlobalFormatado);
     
      setValorPagina(valorGlobalFormatado/estimado);

    } else setValorPagina(0);

  }

  function checkIfNumber(event) {

    const regex = new RegExp(/(^\d*$)|(Backspace|Tab|Delete|ArrowLeft|ArrowRight)/);
         
    return !event.key.match(regex) && event.preventDefault();
 }

  return (
    <BlockRightClickAndKeys>
    <ContainerPage>
      <img src={Bg_image} alt="Imagem de fundo" />
      
      <img src={LOGO_FUSION} className="fusion-logo" alt="Imagem de fundo" />
      <span>FUSION LICITAÇÕES</span>

      <ToastContainer />
      
      <h1><br />CALCULADORA DE LICITAÇÃO</h1>
      <Container>
        <label>QUANTIDADE DE CÓPIAS ESTIMADA <strong>(ANUAL)</strong></label>
        <Locked>
          <input  onKeyDown={(event) => checkIfNumber(event)} disabled={ lockEstimado ? true : false} type="number" min={1} placeholder="R$ X.XXX,XX" onChange={(e) => setEstimado(e.target.value)}  onBlur={() => calculate()}/><br />
          { lockEstimado ? <FaLock className="button_lock" onClick={() => setLockEstimado(!lockEstimado)}/> : <FaLockOpen onClick={() => setLockEstimado(!lockEstimado)}/>}
        </Locked>
        <label>QUANTIDADE DE MÁQUINAS</label>
        <Locked>
          <input  onKeyDown={(event) => checkIfNumber(event)}  disabled={ lockMaquinas ? true : false}type="number" placeholder="XX" onChange={(e) => setQtdMaquinas(e.target.value)}  onBlur={() => calculate()}/><br />
          { lockMaquinas ? <FaLock className="button_lock" onClick={() => setLockMaquinas(!lockMaquinas)}/> : <FaLockOpen onClick={() => setLockMaquinas(!lockMaquinas)}/>}
        </Locked>
        <label><strong>VALOR GLOBAL (ATUAL)</strong></label>
        <Locked>

          <input min={0} required  onKeyDown={(event) => checkIfNumber(event)} type="number" placeholder="R$ X.XXX,XX" onChange={(e) => setGlobal(e.target.value)} onBlur={() => calculate()}/><br />
          <MdOutlineAttachMoney  className="button_lock"/>
        </Locked>

        <label>VALOR POR PÁGINA (ATUAL)</label>
        <h1>R$ { typeof(valorPagina) == "number" ? valorPagina.toFixed(6).replace(".", ',') : 0}</h1>
        <span>PRECISÃO DE 6 CASAS DECIMAIS</span>
      </Container>

      <span>
        Plataforma desenvolvida por{" "}
        <a
          href="mailto:driverique@gmail.com?subject=Fusion%20PassLock"
          onClick={() =>
            toast.info("Redirecionando para Email do Desenvolvedor.", {
              position: "bottom-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
            })
          }
        >
          Pedro Henrique 🚀
        </a>
        .
      </span>
    </ContainerPage>
    </BlockRightClickAndKeys>
  );
}
const Locked = styled.div` 
  display: flex;
  width: 100%;
  height: 75px;
  user-select: none;

  justify-content: space-evenly;
  align-items: center;

  font-size: 3rem;
  color: red;
  margin-bottom: 20px;
  `

const Container = styled.div` 
width: 100%;
max-width: 500px;
padding: 20px;
.button_lock{
  color: green;
}
h2{
  margin-bottom: 40px;
  margin-top: 40px;
}
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

input{
    width: 80%;
    height: 60px;
    font-weight: 600;
    font-size: 3rem;
    text-align: center;
    padding: 10px;
    border-radius: 10px;
    outline: none;
    margin-bottom: 10px;
    font-size: 1rem;
    font-family: "Inter";
    color: #20d420;
  }
  h1{
    font-size: 3rem !important;
  }
`
const ContainerPage = styled.div`
  text-align: center;
  padding: 20px;
  width: 100vw;
  height: 100vh;



  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  img:nth-child(1) {
    width: 100vw;
    height: 100vh;

    position: fixed;
    left: 0;
    top: 0;
    object-fit: cover;
    z-index: -1;

    opacity: 0.3;
  }
  .fusion-logo {
    width: 80%;
    max-width: 300px;
    height: auto;
    object-fit: contain;
  }

  h1 {
    font-family: "Inter";
    color: black;
    font-size: 2rem;
    font-weight: 900;
    text-align: center;
    letter-spacing: 0.1rem;
  }
  
  span {
    text-transform: uppercase;
    font-family: "Inter";
    color: black;
    font-size: 0.8rem;
  }

  tt {
    color: #252422;
    font-weight: 600;
    text-transform: uppercase;
  }
  a {
    color: #252422;
    font-weight: 600;
    &:hover {
      cursor: pointer;
      filter: brightness(0.6);
    }
  }
`;
