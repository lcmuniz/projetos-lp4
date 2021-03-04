import './index.css'

function Menu(props) {

    return (
        <div className="menu">
            <h3>{props.opcoes[0]}</h3>
            <h3>{props.opcoes[1]}</h3>
            <h3>{props.opcoes[2]}</h3>
            <h3>{props.opcoes[3]}</h3>
            <h3>{props.opcoes[4]}</h3>
        </div>
    )
}

export default Menu