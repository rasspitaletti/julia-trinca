// Converte as fotos de origem (orig/ e assets/) em WebP otimizado para public/images.
// Uso: npm run images
import sharp from "sharp";
import { mkdirSync, readFileSync } from "node:fs";
import { dirname } from "node:path";

const jobs = [
  // Imagens próprias do site original
  ["orig/hero-table.png", "backgrounds/hero-mesa.webp", 1600],
  ["assets/unsplash-mulher-top-verde.jpg", "backgrounds/hero-mulher-salada.webp", 1100],
  ["assets/unsplash-samambaias.jpg", "backgrounds/folhagem.webp", 1920],
  ["orig/approach-bowl.png", "gallery/comida-de-verdade.webp", 1100],
  ["orig/approach-smoothie.png", "gallery/prazer-em-cada-pausa.webp", 1100],
  ["orig/approach-movement.png", "gallery/energia-para-viver.webp", 1100],
  // Fotos de bancos abertos (créditos em assets/credits.json)
  ["assets/salad-bowl-kiedrich.jpg", "services/equilibrio.webp", 1200],
  ["assets/running-in-a-park-in-brussels-2023.jpg", "services/esportiva.webp", 1000],
  ["assets/green-smoothie-bowl-with-berries-and-seeds.jpg", "services/corpo.webp", 1200],
  ["assets/smashed-avocado-on-sourdough-toast-with-chai.jpg", "backgrounds/primeiro-contato.webp", 1100],
  ["assets/fresh-fruit-market.webp", "backgrounds/habitos.webp", 1024],
  ["assets/cooking-vegetables-in-a-kitchen-with-a.jpg", "gallery/cozinha.webp", 900],
  ["assets/fruit-stalls-at-ljubljana-central-market-02.jpg", "gallery/feira.webp", 1200],
  ["assets/p060598-109033.jpg", "gallery/corrida.webp", 900],
];

for (const [src, out, width] of jobs) {
  const dest = `public/images/${out}`;
  mkdirSync(dirname(dest), { recursive: true });
  const info = await sharp(readFileSync(src))
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 76, effort: 5 })
    .toFile(dest);
  console.log(out, `${info.width}x${info.height}`, `${Math.round(info.size / 1024)}KB`);
}

// Foto da Julia: a original publicada tem só 150×150 px.
// Tratamento leve, sem mexer em traços: ampliação Lanczos, redução de ruído
// mínima, exposição/contraste discretos, balanço levemente mais quente e
// nitidez suave. A original fica preservada em orig/julia-original.jpg.
mkdirSync("public/images/professional", { recursive: true });
const julia = await sharp(readFileSync("orig/julia-original.jpg"))
  .median(1)
  .resize(360, 360, { kernel: "lanczos3" })
  .modulate({ brightness: 1.04, saturation: 1.04 })
  .linear(1.05, -5)
  .recomb([
    [1.03, 0, 0],
    [0, 1.0, 0],
    [0, 0, 0.96],
  ])
  .sharpen({ sigma: 0.7, m1: 0.6, m2: 1.2 })
  .webp({ quality: 88 })
  .toFile("public/images/professional/julia-trinca.webp");
console.log("professional/julia-trinca.webp", julia.width, julia.height);

// Imagem de compartilhamento (Open Graph) 1200×630 a partir da foto da mesa
await sharp(readFileSync("orig/hero-table.png"))
  .resize(1200, 630, { fit: "cover" })
  .jpeg({ quality: 80, mozjpeg: true })
  .toFile("public/og-image.jpg");
console.log("og-image.jpg ok");
