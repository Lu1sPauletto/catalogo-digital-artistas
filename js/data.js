// Dados fornecidos pelos próprios artistas / grupo. Não adicionar informações não confirmadas.
const ARTISTAS = [
  { id: "rafael-dorneles", nome: "Rafael Dorneles", estilo: "Folclore / Coral / CLJ", instrumento: "Violão e voz", instagram: "rafaeldorneles.clj",
    historico: "Atua há cerca de 6 anos em apresentações de folclore e encontros do CLJ. Começou no violão acompanhando cantos tradicionais e, com o tempo, passou também a fazer vocais." },
  { id: "gabriel-martins", nome: "Gabriel Martins", estilo: "Folclore / Coral / CLJ", instrumento: "Violão", instagram: "gabrielmartins.musica",
    historico: "Músico amador e integrante de grupos de canto e folclore há aproximadamente 5 anos. Participou de apresentações comunitárias, encontros culturais e eventos ligados ao CLJ." },
  { id: "lucas-vieira", nome: "Lucas Vieira", estilo: "Folclore / Coral / CLJ", instrumento: "Voz", instagram: "lucas.vieira1",
    historico: "Cantor dedicado à música tradicional e ao repertório folclórico, com cerca de 7 anos de experiência. Já participou de apresentações em encontros, celebrações e eventos culturais." },
  { id: "matheus-silveira", nome: "Matheus Silveira", estilo: "Folclore / Coral / CLJ", instrumento: "Caixa de madeira", instagram: "matheussilveira.clj",
    historico: "Atua como percussionista em grupos de folclore há aproximadamente 4 anos. Seu instrumento principal é a tradicional caixa de madeira, utilizada para marcar o ritmo das apresentações." },
  { id: "joao-pedro-alves", nome: "João Pedro Alves", estilo: "Folclore / Coral / CLJ", instrumento: "Triângulo", instagram: "joaopedro.alves",
    historico: "Começou a participar de apresentações folclóricas ainda jovem e atualmente possui cerca de 5 anos de experiência. Utiliza o triângulo para complementar a percussão e dar mais dinâmica às músicas." },
  { id: "felipe-moraes", nome: "Felipe Moraes", estilo: "Folclore / Coral / CLJ", instrumento: "Voz e caixa de madeira", instagram: "felipe_m",
    historico: "Cantor e percussionista, participa de grupos ligados ao folclore e ao CLJ há aproximadamente 6 anos. Costuma alternar entre os vocais e a percussão durante as apresentações." },
  { id: "andre-machado", nome: "André Machado", estilo: "Folclore / Coral / CLJ", instrumento: "Voz e violão", instagram: "andremachado.musica",
    historico: "Músico e cantor com cerca de 8 anos de experiência em apresentações de música tradicional. Seu trabalho combina o acompanhamento de violão com vocais em grupos folclóricos e comunitários." },
  { id: "vinicius-ferreira", nome: "Vinícius Ferreira", estilo: "Folclore / Coral / CLJ", instrumento: "Voz e triângulo", instagram: "viniciusferreira.clj",
    historico: "Participa de apresentações culturais e grupos de canto há aproximadamente 4 anos. Além dos vocais, utiliza o triângulo para acompanhar os ritmos tradicionais durante as apresentações." },
  { id: "arthur-fagundes", nome: "Arthur Fagundes", estilo: "Sertanejo", instrumento: "Violão e voz", instagram: "arthurfagundes.oficial",
    historico: "Cantor sertanejo com aproximadamente 7 anos de experiência musical. Apresenta um repertório que mistura sertanejo tradicional e universitário, acompanhado principalmente pelo violão, em eventos e apresentações regionais." }
];

function iniciais(nome) {
  const p = nome.split(" ");
  return (p[0][0] + p[p.length - 1][0]).toUpperCase();
}
function corAvatar(id) {
  let h = 0;
  for (const c of id) h = (h * 31 + c.charCodeAt(0)) % 360;
  return h;
}
function instaUrl(u) { return "https://instagram.com/" + encodeURIComponent(u); }
