const FiltroPortafolio = ({ setFiltro }) => {
  return (
    <div className="text-center p-4 bg-dark contenedorFiltros">
      <button className="btn btn-primary mx-2" onClick={() => setFiltro("todos")}>
        Todos
      </button>
      <button className="btn btn-secondary mx-2" onClick={() => setFiltro("mern")}>
        MERN
      </button>
      <button className="btn btn-secondary mx-2" onClick={() => setFiltro("web")}>
        Web
      </button>
      {/* <button className="btn btn-secondary mx-2" onClick={() => setFiltro("react")}>
        React
      </button> */}
      <button className="btn btn-secondary mx-2" onClick={() => setFiltro("wordpress")}>
        Wordpress
      </button>
      
      
    </div>
  );
};

export default FiltroPortafolio;
