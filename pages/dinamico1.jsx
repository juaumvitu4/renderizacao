export function getServerSideProps() {
    console.log('[Server] Gerando props para o Componente')
    return {
        props: {
            numero: Math.random()
        }
    }
}
export default function Dinamico1(props){
    return (
        <div>
            <h1>Dinamico #01</h1>
            <h2>{props.numero}</h2>
        </div>
    )

}