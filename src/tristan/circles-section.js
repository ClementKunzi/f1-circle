function createFourCircle() {
  // Obtenir la largeur et la hauteur de la fenêtre
  let width = window.innerWidth;
  let height = window.innerHeight;

  // Définir le rayon du cercle comme la moitié de la plus petite dimension de la fenêtre
  let radius = Math.min(width, height) / 3;

  // Créer un SVG
  let svg = d3
    .select("#bg-cercles")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // Cercle 1, en haut à gauche
  let circle1 = svg.append("g")
    .attr("transform", `translate(${-radius}, ${height / 4})`);

  circle1.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", radius / 1.5)
    .style("fill", "red");

  circle1.append("text")
    .text("Pilotes")
    .style("fill", "white")
    .style("font-size", "2rem")
    .style("text-anchor", "middle")
    .attr("x", 0)
    .attr("y", 0);

  // Cercle 2, en haut à droite
  let circle2 = svg.append("g")
    .attr("transform", `translate(${width + radius}, ${height / 4})`);

  circle2.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", radius / 1.5)
    .style("fill", "red");

  circle2.append("text")
    .text("Circuits")
    .style("fill", "white")
    .style("font-size", "2rem")
    .style("text-anchor", "middle")
    .attr("x", 0)
    .attr("y", 0);

  // Cercle 3, en bas à gauche
  let circle3 = svg.append("g")
    .attr("transform", `translate(${-radius}, ${(3 * height) / 4})`);

  circle3.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", radius / 1.5)
    .style("fill", "red");

  circle3.append("text")
    .text("Écuries")
    .style("fill", "white")
    .style("font-size", "2rem")
    .style("text-anchor", "middle")
    .attr("x", 0)
    .attr("y", 0);

  // Cercle 4, en bas à droite
  let circle4 = svg.append("g")
    .attr("transform", `translate(${width + radius}, ${(3 * height) / 4})`);

  circle4.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", radius / 1.5)
    .style("fill", "red");

  circle4.append("text")
    .text("Constructeurs")
    .style("fill", "white")
    .style("font-size", "2rem")
    .style("text-anchor", "middle")
    .attr("x", 0)
    .attr("y", 0);
}

export { createFourCircle };
