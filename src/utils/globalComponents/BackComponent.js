import styled from "styled-components"
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function BackComponent(){
    const navigate = useNavigate();

    function confirmYouLogout(){
        if (window.confirm("Tem certeza que deseja deslogar sua conta?")){
            localStorage.setItem('@userData', JSON.stringify({
                statusCode: 401
            }));
            sessionStorage.clear();
            navigate("/");
        }
    }
    return(
        <ContainerPage onClick={() => confirmYouLogout()}>
            <div>
                <MdArrowBackIosNew />
                Finalizar Sessão
            </div>
        </ContainerPage>
    )
}

const ContainerPage = styled.div`
    position: absolute;
    top: 2%;
    width: 80%;
    height: auto;
    div{
        width: 100%;
        border-radius: 10px;
        background-color: #252422;
        color: #FFFCF2;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        transition: 0.3s linear;
        &:hover{
            cursor: pointer;
            opacity: 0.8;
        }
    }
`