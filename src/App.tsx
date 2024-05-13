import './App.css';

function App() {
  return (
    <main className="mainStyles">
      <h1 className="title">Registro de Eventos</h1>
      <form className="formStyles">
        <div>
          <label htmlFor="nome" className="text">
            Nome Completo/Razão Social
          </label>
          <input type="text" name="nome" id="nome" className="text__input" />
        </div>

        <div>
          <label htmlFor="tipoFesta" className="text">
            Tipo de Evento/Festa
          </label>
          <select name="tipoFesta" id="tipoFesta" className="text__input">
            <option value="aniversario">Aniversário</option>
            <option value="reuniao">Reunião de Empresa/Workshop</option>
            <option value="coffee">Coffee and Meet</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        <div>
          <p className="text">Quantidade de Pessoas</p>
          <label htmlFor="quantidadeMin" className="text">
            Mínimo
          </label>
          <input
            type="number"
            name="quantidadeMin"
            id="quantidadeMin"
            min={0}
            className="text__input"
          />

          <label htmlFor="quantidadeMax" className="text">
            Máximo
          </label>
          <input
            type="number"
            name="quantidadeMax"
            id="quantidadeMax"
            min={0}
            className="text__input"
          />
        </div>

        <div>
          <label htmlFor="email" className="text">
            Email
          </label>
          <input type="text" name="email" id="email" className="text__input" />
        </div>

        <div>
          <label htmlFor="cpf-cnpj" className="text">
            CPF/CNPJ
          </label>
          <input
            type="number"
            name="cpf-cnpj"
            id="cpf-cnpj"
            min={0}
            className="text__input"
          />
        </div>

        <div>
          <label htmlFor="tema" className="text">
            Tema da Festa
          </label>
          <input type="text" name="tema" id="tema" className="text__input" />
        </div>

        <div>
          <label htmlFor="idade" className="text">
            Idade do Aniversariante
          </label>
          <input
            type="number"
            name="idade"
            id="idade"
            min={0}
            className="text__input"
          />
        </div>

        <div>
          <label htmlFor="genero" className="text">
            Gênero do Aniversariante
          </label>
          <select name="genero" id="genero" className="text__input">
            <option value="masc">Masculino</option>
            <option value="fem">Feminino</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        <div>
          <label htmlFor="conheceu" className="text">
            Como nos Conheceu?
          </label>
          <select name="conheceu" id="conheceu" className="text__input">
            <option value="recomendacao">Recomendação</option>
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
            <option value="anuncio">Anúncio</option>
            <option value="outro">Outro</option>
          </select>
        </div>
      </form>
    </main>
  );
}

export default App;
