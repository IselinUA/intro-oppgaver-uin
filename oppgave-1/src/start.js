import "./styles.css";

// Statisk tekst som brukes til å søke i
const text =
  "Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.";

const longestWord = () => {
  // Her har jeg gjort om teksten til en array
  const textAsArray = text.split(' ');
  // Her har jeg gjort sånn at den starter å lese the første ordet [0]
  let longestWord = textAsArray[0];
  // Her er en foreach løkke sånn at den skal lese hvert ord også skal den 
  // peke ut hvilket ord som er det lengste ordet
  textAsArray.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
};
// i consolen kan vi da se at "verylongwordthatislong er det lengte ordet"

console.log(longestWord());
// TODO: Gjør om text til array eks. ['Baby', 'cliche']
// TODO: Velg første ord så du har noe å sammenlikne med
// TODO: Gå igjennom alle ordene og oppdater hvis nytt ord er lengre