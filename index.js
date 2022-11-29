const texto = "<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>";
console.log(texto);


//Cidades

var cidadesTotal = texto.split('*');

var cidades = cidadesTotal.filter(filtroCidades);

function filtroCidades(cidade) {
	return !cidade.startsWith("</b>") && !cidade.startsWith("<html>");
}

console.log(cidades);


//Roteiros A

var roteirosTotal = texto.split('#');

var roteiros = roteirosTotal.filter(filtroRoteiros);

function filtroRoteiros(roteiro) {
	return roteiro.startsWith("Roteiro A");
}

var roteirosA = roteiros.map(mapRoteiros);

function mapRoteiros(roteiro){
	return roteiro.slice(0,roteiro.length-4);
}

console.log(roteirosA);


//Locais de cada Roteiro A

var locais = roteiros.map(mapLocais);


function mapLocais(roteiro) {
	let local = roteiro.split("<br>");
	//console.log(local[1].split(";"));
	return local[1].split(";");
}

console.log(locais);


// Pontos turísticos do bairro Centro de São Paulo

var pontosCentroSP = texto.split("Região: Centro");
var pontos = pontosCentroSP[1].split("<br>");

console.log(pontos[1].split(";"));


// Pontos turísticos do bairro Downtown de Los Angeles

var pontosDowntownLA = texto.split("Região: Downtown");
var pontosDT = pontosDowntownLA[1].split("<br>");

console.log(pontosDT[1].split(";"));




