export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }

}
export default function Estatico2(props) {
    return (
        <div>
            <h1>Estatico #02 - Versão 2 </h1> 
            <h2>{props.numero}</h2>
        </div>
    )
}