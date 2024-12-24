const FiltroPortafolio = ({ setFiltro }) => {
    return (
      <div className="text-center mb-4">
        <button className="btn btn-primary mx-2" onClick={() => setFiltro("todos")}>
          Todos
        </button>
        <button className="btn btn-secondary mx-2" onClick={() => setFiltro("web")}>
          Web
        </button>
        <button className="btn btn-secondary mx-2" onClick={() => setFiltro("react")}>
          React
        </button>
        <button className="btn btn-secondary mx-2" onClick={() => setFiltro("php")}>
          PHP
        </button>
      </div>
    );
  };
  
  export default FiltroPortafolio;
  