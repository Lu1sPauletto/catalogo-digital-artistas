(function () {
  const grade = document.getElementById("grade");
  const busca = document.getElementById("busca");
  const chips = document.getElementById("chips");
  const contagem = document.getElementById("contagem");
  let estiloAtivo = "Todos";

  const norm = s => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const estilos = ["Todos", ...new Set(ARTISTAS.map(a => a.estilo))];

  estilos.forEach(e => {
    const b = document.createElement("button");
    b.className = "chip" + (e === "Todos" ? " ativo" : "");
    b.textContent = e;
    b.id = "filtro-" + norm(e).replace(/[^a-z]+/g, "-");
    b.onclick = () => {
      estiloAtivo = e;
      chips.querySelectorAll(".chip").forEach(c => c.classList.toggle("ativo", c === b));
      render();
    };
    chips.appendChild(b);
  });

  function cartao(a, i) {
    return `
      <article class="card" style="--h:${corAvatar(a.id)};animation-delay:${i * 60}ms">
        <a href="artista.html?id=${a.id}" class="card-link" id="card-${a.id}" aria-label="Conheça ${a.nome}">
          <div class="avatar">${iniciais(a.nome)}</div>
          <h3>${a.nome}</h3>
          <p class="tag">${a.estilo}</p>
          <p class="instr">🎵 ${a.instrumento}</p>
          <span class="card-cta">Conheça →</span>
        </a>
      </article>`;
  }

  function render() {
    const q = norm(busca.value.trim());
    const lista = ARTISTAS.filter(a =>
      (estiloAtivo === "Todos" || a.estilo === estiloAtivo) &&
      (!q || norm(a.nome + " " + a.instrumento + " " + a.estilo).includes(q))
    );
    grade.innerHTML = lista.length ? lista.map(cartao).join("") :
      `<p class="vazio">Nenhum artista encontrado com esses critérios.</p>`;
    contagem.textContent = `${lista.length} artista${lista.length !== 1 ? "s" : ""}`;
  }

  busca.addEventListener("input", render);
  render();
})();
