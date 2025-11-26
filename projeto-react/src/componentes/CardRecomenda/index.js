import './estilo.css'

export default function CardRecomenda({titulo, subtiulo, descrição, img}){
    return(
        <div className="cardRecomenda">
            <div className='nomesCard'>
            <h3>{titulo}</h3>
            <h4>{subtiulo}</h4>
            <p>{descrição}</p>
            </div>
            <div className='imgCard'>
            <img src={img} alt={titulo} />
            <button>Saiba Mais</button>
            </div>
        </div>
    )
}