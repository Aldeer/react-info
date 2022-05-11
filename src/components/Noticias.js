function Noticia() {
    const noticia ={
        titulo: 'Noticias',
        descripcion: 'Esta es mi primer pagina con react'
    }
    const {titulo, descripcion} = noticia;
    return (
        <div>
            <h1 className="colorNeon">{titulo}</h1>
            <h2 className="colorNeon">{descripcion}</h2>
        </div>
    )
}
export default Noticia;