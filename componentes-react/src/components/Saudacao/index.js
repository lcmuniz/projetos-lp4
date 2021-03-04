import './index.css'

function Saudacao(props) {
    return (
        <div>
            <h1>Olá {props.pronome} {props.nome}</h1>
            <p>Você tem {props.idade} anos.</p> 
        </div>
    )
}

export default Saudacao