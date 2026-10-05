(function () {
  const el = document.getElementById("perfil");
  const id = new URLSearchParams(location.search).get("id");
  const a = ARTISTAS.find(x => x.id === id);

  if (!a) {
    el.innerHTML = `<section class="perfil"><h1>Artista não encontrado</h1>
      <a class="btn" href="index.html#catalogo">Voltar ao catálogo</a></section>`;
    return;
  }

  document.title = `${a.nome} | Catálogo Digital de Artistas Locais`;
  document.querySelector('meta[name="description"]').content =
    `Conheça ${a.nome} (${a.instrumento}) — ${a.estilo}. Artista local de Passo Fundo - RS.`;

  const outros = ARTISTAS.filter(x => x.estilo === a.estilo && x.id !== a.id).slice(0, 3);

  el.innerHTML = `
    <a href="index.html#catalogo" class="voltar" id="btn-voltar">← Voltar ao catálogo</a>
    <section class="perfil" style="--h:${corAvatar(a.id)}">
      <div class="avatar grande">${iniciais(a.nome)}</div>
      <div class="perfil-info">
        <p class="tag">${a.estilo}</p>
        <h1>${a.nome}</h1>
        <dl class="dados">
          <div><dt>Instrumento</dt><dd>${a.instrumento}</dd></div>
          <div><dt>Estilo</dt><dd>${a.estilo}</dd></div>
          <div><dt>Cidade</dt><dd>Passo Fundo - RS</dd></div>
        </dl>
        <h2>Histórico</h2>
        <p class="historico">${a.historico}</p>
        <div class="contato">
          <h2>Contate o artista</h2>
          <p>O contato é feito diretamente com o artista, pelo Instagram.</p>
          <a class="btn insta" id="btn-instagram" href="${instaUrl(a.instagram)}" target="_blank" rel="noopener">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
            @${a.instagram}
          </a>
        </div>
      </div>
    </section>
    ${outros.length ? `<section class="catalogo"><h2>Conheça também</h2><div class="grade">${
      outros.map(o => `<article class="card" style="--h:${corAvatar(o.id)}"><a class="card-link" href="artista.html?id=${o.id}">
        <div class="avatar">${iniciais(o.nome)}</div><h3>${o.nome}</h3><p class="instr">🎵 ${o.instrumento}</p>
        <span class="card-cta">Conheça →</span></a></article>`).join("")}</div></section>` : ""}`;
})();
