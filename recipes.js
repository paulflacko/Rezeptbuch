// Rezeptdaten. Mengen gelten für p Portionen.
// d = Ernährung: vegan | veg | fisch | fleisch
// tools: af (Heißluftfritteuse) | pfanne | topf | ofen | ohne
// c = Kategorie: frueh | haupt | bowl | suppe | snack | suess
// st: Schritt als Text oder [Text, Minuten] (Minuten = Timer)
window.RECIPES = [
/* ───────────── HEISSLUFTFRITTEUSE ───────────── */
{id:'kichererbsen-bowl',t:'Knusprige Kichererbsen-Bowl',e:'🥙',c:'bowl',min:20,p:2,d:'veg',tools:['af'],mp:true,
 af:'200 °C · 15 Min',
 ing:[[1,'Dose','Kichererbsen (400 g)'],[1,'EL','Olivenöl'],[1,'TL','Paprikapulver geräuchert'],[0.5,'TL','Kreuzkümmel'],[120,'g','Couscous oder Bulgur'],[1,'Stk','Gurke'],[200,'g','Kirschtomaten'],[150,'g','Joghurt (oder Soja-Joghurt)'],[1,'Zehe','Knoblauch'],[0.5,'Stk','Zitrone'],[null,'','Salz, Pfeffer, Petersilie']],
 st:['Kichererbsen abgießen, gut trocken tupfen und mit Öl, Paprika, Kreuzkümmel und Salz mischen.',['In der Heißluftfritteuse bei 200 °C knusprig rösten, nach der Hälfte schütteln.',15],['Couscous mit gleicher Menge kochendem Salzwasser übergießen, abgedeckt quellen lassen.',5],'Gurke und Tomaten schneiden. Joghurt mit gepresstem Knoblauch, Zitronensaft und Salz verrühren.','Alles in Schalen anrichten, Kichererbsen obendrauf, mit Petersilie bestreuen.'],
 tip:'Vegan mit Soja-Joghurt. Kichererbsen bleiben knuspriger, wenn sie vorher richtig trocken sind.'},

{id:'halloumi-gemuese',t:'Halloumi-Gemüse mit Zitronen-Couscous',e:'🧀',c:'haupt',min:25,p:2,d:'veg',tools:['af'],
 af:'200 °C · 12 + 6 Min',
 ing:[[1,'Stk','Zucchini'],[1,'Stk','rote Paprika'],[1,'Stk','rote Zwiebel'],[200,'g','Halloumi'],[2,'EL','Olivenöl'],[1,'TL','Oregano'],[120,'g','Couscous'],[0.5,'Stk','Zitrone'],[null,'','Salz, Pfeffer, Minze']],
 st:['Gemüse in mundgerechte Stücke schneiden, mit 1 EL Öl, Oregano, Salz mischen.',['Gemüse bei 200 °C garen, einmal schütteln.',12],'Halloumi in Würfel schneiden, mit restlichem Öl zum Gemüse geben.',['Weiter garen, bis der Halloumi goldbraun ist.',6],['Couscous mit Zitronenabrieb und kochendem Salzwasser übergießen, quellen lassen.',5],'Mit Zitronensaft und Minze servieren.'],
 tip:'Statt Halloumi geht auch Räuchertofu (vegan).'},

{id:'suesskartoffel-pommes',t:'Süßkartoffel-Pommes mit Kräuterdip',e:'🍠',c:'snack',min:25,p:2,d:'veg',tools:['af'],
 af:'190 °C · 18–20 Min',
 ing:[[500,'g','Süßkartoffeln'],[1,'EL','Speisestärke'],[1,'EL','Öl'],[1,'TL','Paprikapulver'],[200,'g','Kräuterquark oder Skyr'],[0.5,'Bund','Schnittlauch'],[null,'','Salz, Pfeffer']],
 st:['Süßkartoffeln in 1 cm dicke Stifte schneiden.','Mit Stärke bestäuben, dann mit Öl und Paprika mischen.',['In einer Lage bei 190 °C garen, alle 6 Minuten schütteln.',19],'Quark mit Schnittlauch, Salz und Pfeffer verrühren. Pommes erst nach dem Garen salzen.'],
 tip:'Lieber in zwei Durchgängen garen, sonst werden sie weich statt knusprig.'},

{id:'gefuellte-paprika',t:'Gefüllte Paprika mit Feta & Reis',e:'🫑',c:'haupt',min:25,p:2,d:'veg',tools:['af'],
 af:'180 °C · 15 Min',
 ing:[[2,'Stk','große Paprika'],[150,'g','gekochter Reis (oder 1 Beutel Express-Reis)'],[100,'g','Feta'],[100,'g','Mais (Dose)'],[2,'EL','Tomatenmark'],[1,'TL','Kräuter der Provence'],[30,'g','geriebener Käse'],[null,'','Salz, Pfeffer']],
 st:['Paprika halbieren, entkernen.','Reis, zerbröselten Feta, Mais, Tomatenmark und Kräuter mischen, abschmecken.','Paprikahälften füllen, Käse darüber.',['Bei 180 °C garen, bis die Paprika weich und der Käse goldbraun ist.',15]],
 tip:'Super für Reis-Reste vom Vortag.'},

{id:'blumenkohl-wings',t:'Blumenkohl-Wings (Buffalo-Style)',e:'🥦',c:'snack',min:30,p:2,d:'vegan',tools:['af'],
 af:'200 °C · 18–20 Min',
 ing:[[1,'Stk','kleiner Blumenkohl'],[60,'g','Mehl'],[100,'ml','Pflanzendrink oder Wasser'],[1,'TL','Knoblauchpulver'],[1,'TL','Paprikapulver'],[50,'g','Panko'],[3,'EL','scharfe Sauce (z. B. Sriracha)'],[1,'EL','Margarine oder Öl'],[null,'','Salz']],
 st:['Blumenkohl in Röschen teilen.','Mehl, Pflanzendrink, Gewürze und Salz zu einem dickflüssigen Teig rühren.','Röschen durch den Teig ziehen, dann in Panko wälzen.',['In einer Lage bei 200 °C garen, nach 10 Minuten wenden.',18],'Scharfe Sauce mit geschmolzener Margarine mischen, Wings darin schwenken.'],
 tip:'Dazu passt ein Joghurt- oder Knoblauchdip.'},

{id:'tofu-erdnuss',t:'Knuspriger Tofu mit Erdnusssauce & Reis',e:'🥜',c:'haupt',min:25,p:2,d:'vegan',tools:['af','topf'],mp:true,
 af:'200 °C · 15 Min',
 ing:[[200,'g','fester Tofu'],[1,'EL','Sojasauce'],[1,'EL','Speisestärke'],[150,'g','Reis'],[2,'EL','Erdnussmus'],[1,'EL','Sojasauce (Sauce)'],[1,'TL','Ahornsirup'],[1,'TL','Limettensaft'],[1,'Stk','Brokkoli (klein) oder 250 g TK'],[null,'','Frühlingszwiebel, Sesam']],
 st:[['Reis nach Packung kochen.',15],'Tofu ausdrücken, würfeln, mit Sojasauce und dann Stärke mischen.',['Tofu bei 200 °C knusprig garen, zweimal schütteln. Brokkoli die letzten 6 Min. mit in den Korb.',15],'Erdnussmus, Sojasauce, Ahornsirup, Limette und 3–4 EL warmes Wasser glatt rühren.','Alles anrichten, Sauce darüber, mit Frühlingszwiebel und Sesam bestreuen.'],
 tip:'Tofu 10 Minuten zwischen Küchentuch pressen – dann wird er besonders knusprig.'},

{id:'lachs-af',t:'Lachs mit Zitronen-Gemüse',e:'🐟',c:'haupt',min:20,p:2,d:'fisch',tools:['af'],
 af:'200 °C · 8 + 8 Min',
 ing:[[2,'Stk','Lachsfilet (à 120 g)'],[300,'g','grüne Bohnen oder Brokkoli'],[200,'g','Kirschtomaten'],[1,'EL','Olivenöl'],[1,'Stk','Zitrone'],[1,'TL','Dill oder Kräuter'],[null,'','Salz, Pfeffer']],
 st:['Gemüse mit Öl, Salz und Pfeffer mischen.',['Gemüse bei 200 °C vorgaren.',8],'Lachs salzen, pfeffern, mit Zitronenscheiben belegen und aufs Gemüse legen.',['Weitergaren, bis der Lachs innen gerade glasig ist.',8],'Mit Dill und Zitronensaft servieren.'],
 tip:'Dazu Ofenkartoffeln, Reis oder einfach Brot.'},

{id:'haehnchen-spiesse',t:'Hähnchen-Gemüse-Spieße (viel Gemüse)',e:'🍢',c:'haupt',min:25,p:2,d:'fleisch',tools:['af'],
 af:'200 °C · 12–14 Min',
 ing:[[200,'g','Hähnchenbrust'],[1,'Stk','Zucchini'],[1,'Stk','Paprika'],[8,'Stk','Champignons'],[1,'Stk','rote Zwiebel'],[2,'EL','Joghurt'],[1,'EL','Olivenöl'],[1,'TL','Paprikapulver'],[1,'Zehe','Knoblauch'],[null,'','Salz, Pfeffer, Spieße']],
 st:['Hähnchen und Gemüse in gleich große Würfel schneiden.','Joghurt, Öl, Paprika, Knoblauch, Salz zu einer Marinade rühren, alles darin wenden.','Abwechselnd auf Spieße stecken – ruhig 2–3 Gemüsestücke pro Fleischstück.',['Bei 200 °C garen, nach der Hälfte wenden.',13]],
 tip:'Nur 100 g Fleisch pro Person – das Gemüse macht satt.',swap:'Hähnchen durch Halloumi oder Räuchertofu ersetzen (10 Min. reichen).'},

{id:'baked-potato',t:'Ofenkartoffel mit Kräuterquark',e:'🥔',c:'haupt',min:40,p:2,d:'veg',tools:['af'],
 af:'200 °C · 35–40 Min',
 ing:[[2,'Stk','große mehlige Kartoffeln'],[1,'TL','Öl'],[250,'g','Magerquark'],[3,'EL','Milch'],[1,'Bund','Schnittlauch'],[50,'g','Mais oder Erbsen'],[null,'','grobes Salz, Pfeffer']],
 st:['Kartoffeln waschen, mehrmals einstechen, mit Öl und Salz einreiben.',['Bei 200 °C garen, bis sie sich weich anfühlen.',38],'Quark mit Milch cremig rühren, Schnittlauch, Salz, Pfeffer dazu.','Kartoffeln aufschneiden, auflockern, Quark und Mais darauf.'],
 tip:'Nebenher passiv – perfekt, wenn du in der Zeit was anderes erledigen willst.'},

{id:'zucchini-puffer',t:'Zucchini-Feta-Puffer',e:'🥒',c:'snack',min:25,p:2,d:'veg',tools:['af'],
 af:'190 °C · 12 Min',
 ing:[[2,'Stk','Zucchini'],[1,'Stk','Ei'],[80,'g','Feta'],[40,'g','Haferflocken (zart)'],[1,'EL','Mehl'],[1,'TL','Zitronenabrieb'],[null,'','Salz, Pfeffer, Dill, Backpapier']],
 st:['Zucchini grob raspeln, salzen, 5 Minuten ziehen lassen und kräftig ausdrücken.','Mit Ei, zerbröseltem Feta, Haferflocken, Mehl und Gewürzen mischen.','Kleine Taler formen und auf Backpapier in den Korb legen, leicht mit Öl einsprühen.',['Bei 190 °C garen, nach 7 Min. wenden.',12]],
 tip:'Mit Joghurt-Dip und Salat ein schnelles Abendessen.'},

{id:'gnocchi-af',t:'Airfryer-Gnocchi mit Tomaten & Mozzarella',e:'🍅',c:'haupt',min:20,p:2,d:'veg',tools:['af'],
 af:'200 °C · 12 + 4 Min',
 ing:[[400,'g','Gnocchi (Kühlregal)'],[250,'g','Kirschtomaten'],[1,'Stk','rote Zwiebel'],[1,'EL','Olivenöl'],[1,'TL','Oregano'],[125,'g','Mozzarella'],[1,'Handvoll','Rucola oder Basilikum'],[null,'','Salz, Pfeffer']],
 st:['Gnocchi, Tomaten und Zwiebelspalten mit Öl, Oregano, Salz mischen.',['Bei 200 °C knusprig garen, zweimal schütteln.',12],'In eine feuerfeste Form geben (oder im Korb lassen), Mozzarella darüberzupfen.',['Weitergaren, bis der Käse schmilzt.',4],'Mit Rucola oder Basilikum servieren.'],
 tip:'Gnocchi direkt aus der Packung – nicht vorkochen!'},

{id:'tortilla-pizza',t:'Tortilla-Pizza',e:'🍕',c:'haupt',min:12,p:2,d:'veg',tools:['af'],
 af:'190 °C · 5–6 Min',
 ing:[[2,'Stk','Weizentortillas'],[4,'EL','passierte Tomaten'],[1,'TL','Oregano'],[100,'g','Mozzarella gerieben'],[0.5,'Stk','Paprika'],[50,'g','Champignons'],[null,'','Rucola, Salz']],
 st:['Tortilla mit Tomaten bestreichen, salzen, Oregano darüber.','Mit Gemüse und Käse belegen.',['Einzeln bei 190 °C backen, bis der Käse blubbert.',6],'Mit Rucola belegen.'],
 tip:'Für Flexi-Variante 2–3 Scheiben Salami für beide Pizzen reichen völlig.'},

{id:'quesadillas',t:'Bohnen-Mais-Quesadillas',e:'🌮',c:'haupt',min:15,p:2,d:'veg',tools:['af'],
 af:'190 °C · 6–8 Min',
 ing:[[4,'Stk','Weizentortillas'],[1,'Dose','Kidneybohnen (400 g)'],[100,'g','Mais'],[1,'TL','Kreuzkümmel'],[1,'TL','Paprikapulver'],[100,'g','geriebener Cheddar oder Gouda'],[2,'EL','Salsa'],[null,'','Saure Sahne, Koriander']],
 st:['Bohnen abgießen, mit Gewürzen grob zerdrücken, Mais untermischen.','Hälfte jeder Tortilla mit Bohnenmasse, Salsa und Käse belegen, zuklappen.',['Bei 190 °C knusprig backen, nach der Hälfte wenden (mit Spieß fixieren).',7],'In Stücke schneiden, mit saurer Sahne servieren.'],
 tip:'Vegan: Käse weglassen und mit Avocado servieren.'},

{id:'brokkoli-parmesan',t:'Knuspriger Parmesan-Brokkoli',e:'🥦',c:'snack',min:15,p:2,d:'veg',tools:['af'],
 af:'190 °C · 10 Min',
 ing:[[1,'Stk','Brokkoli (ca. 500 g)'],[1,'EL','Olivenöl'],[1,'Zehe','Knoblauch'],[25,'g','Parmesan'],[0.5,'Stk','Zitrone'],[null,'','Salz, Chili']],
 st:['Brokkoli in Röschen teilen, Strunk schälen und in Scheiben schneiden.','Mit Öl, gepresstem Knoblauch und Salz mischen.',['Bei 190 °C garen, einmal schütteln, die letzten 2 Min. Parmesan darüber.',10],'Mit Zitrone und Chili servieren.'],
 tip:'Funktioniert genauso mit Rosenkohl (halbiert, 14 Min.).'},

{id:'frittata-af',t:'Gemüse-Frittata aus dem Airfryer',e:'🍳',c:'frueh',min:20,p:2,d:'veg',tools:['af'],
 af:'170 °C · 12–14 Min',
 ing:[[4,'Stk','Eier'],[3,'EL','Milch'],[1,'Handvoll','Babyspinat'],[0.5,'Stk','Paprika'],[50,'g','Feta'],[2,'Stk','Frühlingszwiebeln'],[null,'','Salz, Pfeffer, Öl']],
 st:['Kleine ofenfeste Form (passt in den Korb) einfetten.','Gemüse klein schneiden, in die Form geben.','Eier mit Milch, Salz, Pfeffer verquirlen, darübergießen, Feta darüberbröseln.',['Bei 170 °C stocken lassen.',13]],
 tip:'Kalt am nächsten Tag ein super Pausenbrot-Ersatz.'},

{id:'champignons-gefuellt',t:'Gefüllte Champignons',e:'🍄',c:'snack',min:15,p:2,d:'veg',tools:['af'],
 af:'180 °C · 8–10 Min',
 ing:[[10,'Stk','große Champignons'],[100,'g','Frischkäse Kräuter'],[20,'g','Parmesan'],[1,'EL','Semmelbrösel'],[null,'','Petersilie, Pfeffer']],
 st:['Stiele herausdrehen, fein hacken.','Mit Frischkäse und Petersilie mischen, in die Pilze füllen.','Parmesan und Brösel darüberstreuen.',['Bei 180 °C goldbraun garen.',9]],
 tip:'Als Beilage oder Fingerfood.'},

{id:'fischstaebchen',t:'Selbstgemachte Fischstäbchen',e:'🐠',c:'haupt',min:25,p:2,d:'fisch',tools:['af'],
 af:'200 °C · 10 Min',
 ing:[[300,'g','Kabeljau- oder Seelachsfilet'],[2,'EL','Mehl'],[1,'Stk','Ei'],[60,'g','Panko'],[1,'TL','Paprikapulver'],[null,'','Salz, Zitrone, Öl-Spray'],[200,'g','Erbsen (TK)']],
 st:['Fisch trocken tupfen, in Streifen schneiden, salzen.','Nacheinander in Mehl, verquirltem Ei und Panko-Paprika-Mix wenden.','In den Korb legen, leicht mit Öl einsprühen.',['Bei 200 °C garen, nach 5 Min. wenden.',10],['Erbsen in wenig Salzwasser garen.',4],'Mit Zitrone servieren.'],
 tip:'Dazu Kartoffelpüree oder Süßkartoffel-Pommes.'},

{id:'frikadellen-halbhalb',t:'Halb-halb-Frikadellen (Hack + Linsen)',e:'🍔',c:'haupt',min:25,p:2,d:'fleisch',tools:['af'],mp:true,
 af:'190 °C · 12 Min',
 ing:[[150,'g','Rinderhack'],[1,'Dose','Linsen (abgetropft ca. 250 g)'],[1,'Stk','Ei'],[40,'g','Haferflocken'],[1,'Stk','kleine Zwiebel'],[1,'TL','Senf'],[1,'TL','Paprikapulver'],[null,'','Salz, Pfeffer, Petersilie']],
 st:['Linsen abspülen, abtropfen und grob zerdrücken.','Zwiebel fein würfeln, mit Hack, Linsen, Ei, Haferflocken, Senf und Gewürzen verkneten. 5 Min. ruhen lassen.','6 flache Frikadellen formen.',['Bei 190 °C garen, nach der Hälfte wenden.',12]],
 tip:'Schmeckt wie „echt“, hat aber nur ein Drittel Fleisch.',swap:'Komplett vegetarisch: Hack durch 100 g gehackte Walnüsse + 1 EL Sojasauce ersetzen.'},

{id:'miso-aubergine',t:'Miso-Aubergine mit Reis',e:'🍆',c:'haupt',min:25,p:2,d:'vegan',tools:['af','topf'],
 af:'190 °C · 15 Min',
 ing:[[2,'Stk','Auberginen'],[1,'EL','Öl'],[1,'EL','helle Misopaste'],[1,'EL','Sojasauce'],[1,'TL','Ahornsirup'],[150,'g','Reis'],[null,'','Sesam, Frühlingszwiebel']],
 st:[['Reis nach Packung kochen.',15],'Auberginen längs halbieren, Fruchtfleisch rautenförmig einschneiden, mit Öl bestreichen.',['Mit der Schnittfläche nach oben bei 190 °C garen.',10],'Miso, Sojasauce und Sirup verrühren, auf die Auberginen streichen.',['Weitergaren, bis sie karamellisieren.',5],'Mit Sesam und Frühlingszwiebel servieren.']},

{id:'apfel-chips',t:'Bratapfel aus dem Airfryer',e:'🍎',c:'suess',min:20,p:2,d:'veg',tools:['af'],
 af:'180 °C · 15 Min',
 ing:[[2,'Stk','Äpfel (säuerlich)'],[2,'EL','Haferflocken'],[1,'EL','gehackte Nüsse'],[1,'EL','Rosinen'],[1,'TL','Honig oder Ahornsirup'],[0.5,'TL','Zimt'],[2,'EL','Vanillejoghurt']],
 st:['Kerngehäuse aus den Äpfeln ausstechen.','Haferflocken, Nüsse, Rosinen, Honig und Zimt mischen und einfüllen.',['Bei 180 °C garen, bis die Äpfel weich sind.',15],'Mit Vanillejoghurt servieren.'],
 tip:'Passt perfekt in die kalte Jahreszeit.'},

{id:'granola',t:'Airfryer-Granola',e:'🥣',c:'frueh',min:15,p:6,d:'vegan',tools:['af'],mp:true,
 af:'160 °C · 8–10 Min',
 ing:[[200,'g','Haferflocken (grob)'],[60,'g','Nüsse gehackt'],[30,'g','Kerne (Sonnenblume/Kürbis)'],[3,'EL','Ahornsirup'],[2,'EL','Kokosöl geschmolzen'],[1,'TL','Zimt'],[null,'','Prise Salz']],
 st:['Alles gut vermischen.','Flach in den mit Backpapier ausgelegten Korb geben.',['Bei 160 °C rösten, alle 3 Min. umrühren.',9],'Komplett auskühlen lassen – erst dann wird es knusprig. Luftdicht aufbewahren.'],
 tip:'Hält ca. 2 Wochen im Glas.'},

{id:'tofu-nuggets',t:'Tofu-Nuggets mit BBQ-Dip',e:'🍗',c:'snack',min:25,p:2,d:'vegan',tools:['af'],
 af:'200 °C · 14 Min',
 ing:[[200,'g','fester Tofu'],[2,'EL','Sojasauce'],[3,'EL','Mehl'],[80,'ml','Pflanzendrink'],[60,'g','Cornflakes (ungezuckert) oder Panko'],[1,'TL','Paprikapulver'],[0.5,'TL','Knoblauchpulver'],[4,'EL','BBQ-Sauce']],
 st:['Tofu gut ausdrücken, in Nuggetstücke schneiden, mit Sojasauce marinieren.','Mehl mit Pflanzendrink verrühren. Cornflakes zerbröseln, mit Gewürzen mischen.','Tofu durch den Teig ziehen und panieren.',['Bei 200 °C knusprig garen, nach 7 Min. wenden.',14],'Mit BBQ-Sauce servieren.']},

{id:'feta-pasta',t:'Ofen-Feta-Pasta aus dem Airfryer',e:'🍝',c:'haupt',min:25,p:2,d:'veg',tools:['af','topf'],
 af:'200 °C · 15 Min',
 ing:[[200,'g','Pasta'],[400,'g','Kirschtomaten'],[200,'g','Feta'],[2,'Zehen','Knoblauch'],[2,'EL','Olivenöl'],[1,'TL','Oregano'],[1,'Handvoll','Babyspinat'],[null,'','Basilikum, Chili, Salz']],
 st:['Tomaten und Knoblauch in eine feuerfeste Form (passend für den Korb) geben, Feta in die Mitte.','Mit Öl, Oregano und Chili würzen.',['Bei 200 °C garen, bis die Tomaten platzen.',15],['Pasta in Salzwasser kochen.',10],'Feta und Tomaten zerdrücken, Spinat und abgetropfte Pasta untermischen.'],
 tip:'Etwas Nudelwasser macht die Sauce cremiger.'},

{id:'garnelen-knoblauch',t:'Knoblauch-Garnelen mit Zucchini-Nudeln',e:'🦐',c:'haupt',min:15,p:2,d:'fisch',tools:['af','pfanne'],
 af:'200 °C · 6–7 Min',
 ing:[[200,'g','Garnelen (aufgetaut)'],[2,'Zehen','Knoblauch'],[1,'EL','Olivenöl'],[2,'Stk','Zucchini'],[150,'g','Spaghetti (optional)'],[0.5,'Stk','Zitrone'],[null,'','Chili, Petersilie, Salz']],
 st:['Garnelen trocken tupfen, mit Öl, gepresstem Knoblauch, Chili und Salz mischen.',['Bei 200 °C garen, einmal schütteln.',7],'Zucchini in Streifen hobeln, in einer Pfanne 2 Min. in etwas Öl schwenken (ggf. mit gekochten Spaghetti mischen).','Garnelen darauf, mit Zitrone und Petersilie servieren.']},

{id:'chicken-wrap',t:'Crispy-Chicken-Wrap mit viel Salat',e:'🌯',c:'haupt',min:20,p:2,d:'fleisch',tools:['af'],
 af:'200 °C · 10 Min',
 ing:[[150,'g','Hähnchenbrust'],[1,'Stk','Ei'],[40,'g','Panko'],[1,'TL','Paprikapulver'],[2,'Stk','große Wraps'],[1,'Handvoll','Salat'],[1,'Stk','Tomate'],[0.5,'Stk','Gurke'],[3,'EL','Joghurt-Knoblauch-Sauce']],
 st:['Hähnchen in dünne Streifen schneiden, salzen.','In Ei und dann Panko-Paprika wenden.',['Bei 200 °C knusprig garen, nach der Hälfte wenden.',10],'Wraps kurz erwärmen, mit Sauce, Salat, Gemüse und Hähnchenstreifen füllen, einrollen.'],
 swap:'Hähnchen durch die Tofu-Nuggets oder Halloumi-Streifen ersetzen.'},

{id:'polenta-pommes',t:'Polenta-Pommes mit Parmesan',e:'🌽',c:'snack',min:25,p:2,d:'veg',tools:['af'],
 af:'200 °C · 15–18 Min',
 ing:[[500,'g','fertige Polenta (Rolle/Block)'],[1,'EL','Olivenöl'],[25,'g','Parmesan'],[1,'TL','Rosmarin'],[null,'','Salz, Ketchup oder Aioli']],
 st:['Polenta in dicke Stifte schneiden.','Mit Öl, Rosmarin und Salz vorsichtig mischen.',['In einer Lage bei 200 °C knusprig garen, nach 10 Min. wenden.',16],'Mit Parmesan bestreuen.']},

{id:'flammkuchen-tortilla',t:'Tortilla-Flammkuchen',e:'🥓',c:'haupt',min:15,p:2,d:'fleisch',tools:['af'],
 af:'190 °C · 6 Min',
 ing:[[2,'Stk','Weizentortillas'],[100,'g','Schmand oder Crème fraîche'],[1,'Stk','rote Zwiebel'],[40,'g','Speckwürfel (für beide!)'],[2,'Stk','Frühlingszwiebeln'],[null,'','Salz, Pfeffer, Muskat']],
 st:['Schmand mit Salz, Pfeffer, Muskat verrühren, Tortillas dünn bestreichen.','Mit Zwiebelringen, wenig Speck und Frühlingszwiebeln belegen.',['Einzeln bei 190 °C knusprig backen.',6]],
 tip:'Nur 20 g Speck pro Person – reicht als Würze völlig.',swap:'Speck durch Räuchertofu-Würfel ersetzen.'},

{id:'kartoffel-wedges',t:'Würzige Kartoffelspalten & Ofengemüse',e:'🍟',c:'snack',min:30,p:2,d:'vegan',tools:['af'],
 af:'200 °C · 22–25 Min',
 ing:[[500,'g','festkochende Kartoffeln'],[2,'Stk','Karotten'],[1,'Stk','rote Zwiebel'],[1,'EL','Öl'],[1,'TL','Paprikapulver'],[1,'TL','Rosmarin'],[null,'','Salz']],
 st:['Kartoffeln mit Schale in Spalten, Karotten in Stifte, Zwiebel in Spalten schneiden.','Mit Öl und Gewürzen mischen.',['Bei 200 °C garen, alle 7 Min. schütteln.',24]],
 tip:'Beilage für fast alles – oder mit Kräuterquark als Hauptgericht.'},

{id:'kichererbsen-snack',t:'Geröstete Kichererbsen (Snack)',e:'🫘',c:'snack',min:20,p:4,d:'vegan',tools:['af'],
 af:'200 °C · 15 Min',
 ing:[[1,'Dose','Kichererbsen (400 g)'],[1,'TL','Öl'],[1,'TL','Paprikapulver'],[0.5,'TL','Salz']],
 st:['Kichererbsen sehr gut trocken tupfen, lose Häutchen entfernen.','Mit Öl und Gewürzen mischen.',['Bei 200 °C knusprig rösten, alle 5 Min. schütteln.',15],'Abkühlen lassen – dann werden sie richtig crunchy.'],
 tip:'Variante süß: Zimt + etwas Ahornsirup.'},

{id:'banane-hafer-kekse',t:'2-Zutaten-Bananen-Hafer-Kekse',e:'🍪',c:'suess',min:15,p:4,d:'vegan',tools:['af'],
 af:'170 °C · 8–10 Min',
 ing:[[2,'Stk','reife Bananen'],[120,'g','Haferflocken (zart)'],[30,'g','Zartbitter-Schokodrops (optional)'],[0.5,'TL','Zimt']],
 st:['Bananen zerdrücken, mit Haferflocken, Zimt und Schoko mischen.','Kleine Kekse auf Backpapier in den Korb setzen.',['Bei 170 °C backen.',9],'Abkühlen lassen.']},

{id:'kartoffel-brokkoli-gratin',t:'Mini-Gratin mit Brokkoli & Kartoffeln',e:'🧀',c:'haupt',min:30,p:2,d:'veg',tools:['af','topf'],
 af:'180 °C · 15 Min',
 ing:[[400,'g','Kartoffeln'],[250,'g','Brokkoli'],[100,'ml','Sahne oder Milch'],[1,'Stk','Ei'],[60,'g','geriebener Käse'],[null,'','Salz, Pfeffer, Muskat']],
 st:['Kartoffeln in dünne Scheiben schneiden.',['Kartoffeln 6 Min. in Salzwasser vorgaren, Brokkoli die letzten 2 Min. dazu.',6],'Abgießen, in eine feuerfeste Form schichten.','Sahne mit Ei und Gewürzen verquirlen, darübergießen, Käse darauf.',['Bei 180 °C goldbraun backen.',15]]},

/* ───────────── PFANNE & TOPF ───────────── */
{id:'shakshuka',t:'Shakshuka',e:'🍳',c:'frueh',min:20,p:2,d:'veg',tools:['pfanne'],
 ing:[[1,'Stk','Zwiebel'],[1,'Stk','rote Paprika'],[1,'Zehe','Knoblauch'],[1,'Dose','gehackte Tomaten (400 g)'],[1,'TL','Kreuzkümmel'],[1,'TL','Paprikapulver'],[4,'Stk','Eier'],[50,'g','Feta'],[null,'','Petersilie, Brot, Salz, Pfeffer']],
 st:['Zwiebel, Paprika und Knoblauch würfeln, in Öl 5 Min. anbraten.','Gewürze kurz mitrösten, Tomaten dazu, salzen.',['Sauce einköcheln lassen.',5],'4 Mulden machen, Eier hineinschlagen.',['Deckel drauf und stocken lassen, bis das Eiweiß fest ist.',6],'Mit Feta, Petersilie und Brot servieren.']},

{id:'linsen-dal',t:'Rote-Linsen-Dal mit Kokos',e:'🍛',c:'haupt',min:25,p:2,d:'vegan',tools:['topf'],mp:true,
 ing:[[150,'g','rote Linsen'],[1,'Stk','Zwiebel'],[2,'Zehen','Knoblauch'],[1,'Stück','Ingwer (2 cm)'],[1,'EL','Currypulver'],[1,'Dose','gehackte Tomaten'],[200,'ml','Kokosmilch'],[300,'ml','Gemüsebrühe'],[1,'Handvoll','Spinat'],[null,'','Reis oder Naan, Limette, Salz']],
 st:['Zwiebel, Knoblauch und Ingwer fein hacken, in Öl andünsten.','Curry kurz mitrösten.','Linsen, Tomaten, Kokosmilch und Brühe dazu.',['Köcheln lassen, bis die Linsen zerfallen, gelegentlich umrühren.',15],'Spinat unterrühren, mit Salz und Limette abschmecken.'],
 tip:'Doppelte Menge kochen und einfrieren – schmeckt aufgewärmt noch besser.'},

{id:'spinat-feta-pasta',t:'Pasta mit Spinat-Feta-Sauce',e:'🍝',c:'haupt',min:15,p:2,d:'veg',tools:['topf','pfanne'],
 ing:[[200,'g','Pasta'],[1,'Zehe','Knoblauch'],[200,'g','Blattspinat (frisch oder TK)'],[100,'g','Feta'],[100,'g','Frischkäse'],[null,'','Zitronenabrieb, Muskat, Pfeffer']],
 st:[['Pasta in Salzwasser kochen.',10],'Knoblauch in Öl andünsten, Spinat zufügen und zusammenfallen lassen.','Frischkäse, zerbröselten Feta und etwas Nudelwasser einrühren, bis es cremig ist.','Mit Zitrone, Muskat, Pfeffer abschmecken, Pasta unterheben.']},

{id:'kichererbsen-curry',t:'Kichererbsen-Gemüse-Curry',e:'🥘',c:'haupt',min:25,p:2,d:'vegan',tools:['topf'],mp:true,
 ing:[[1,'Dose','Kichererbsen (400 g)'],[1,'Stk','Zwiebel'],[1,'Stk','Süßkartoffel (klein)'],[1,'Stk','Paprika'],[1,'EL','rote Currypaste'],[400,'ml','Kokosmilch'],[1,'EL','Sojasauce'],[150,'g','Reis'],[null,'','Limette, Koriander']],
 st:[['Reis kochen.',15],'Zwiebel würfeln, mit Currypaste in Öl anbraten.','Süßkartoffel und Paprika würfeln, kurz mitbraten.',['Kokosmilch und abgetropfte Kichererbsen dazu, köcheln lassen, bis die Süßkartoffel weich ist.',12],'Mit Sojasauce und Limette abschmecken.']},

{id:'gebratener-reis',t:'Gebratener Reis mit Ei & Gemüse',e:'🍚',c:'haupt',min:15,p:2,d:'veg',tools:['pfanne'],
 ing:[[300,'g','gekochter Reis vom Vortag'],[2,'Stk','Eier'],[200,'g','TK-Gemüse (Erbsen, Karotten, Mais)'],[2,'Stk','Frühlingszwiebeln'],[1,'Zehe','Knoblauch'],[2,'EL','Sojasauce'],[1,'TL','Sesamöl']],
 st:['Öl in der Pfanne stark erhitzen, Knoblauch und Gemüse 3 Min. braten.','Reis zufügen, unter Rühren anbraten, bis er leicht knusprig wird.','Reis zur Seite schieben, Eier in die Lücke schlagen, stocken lassen und unterrühren.','Mit Sojasauce, Sesamöl und Frühlingszwiebeln abschmecken.'],
 tip:'Der Reste-Klassiker. Frisch gekochter Reis wird matschig.'},

{id:'chili-halbhalb',t:'Chili halb-halb (wenig Hack, viele Bohnen)',e:'🌶️',c:'haupt',min:30,p:4,d:'fleisch',tools:['topf'],mp:true,
 ing:[[200,'g','Rinderhack'],[1,'Stk','Zwiebel'],[1,'Stk','Paprika'],[1,'Dose','Kidneybohnen'],[1,'Dose','schwarze Bohnen'],[100,'g','rote Linsen'],[1,'Dose','gehackte Tomaten'],[2,'EL','Tomatenmark'],[1,'TL','Kreuzkümmel'],[1,'TL','Chilipulver'],[300,'ml','Brühe'],[null,'','Mais, Salz, Schmand']],
 st:['Hack krümelig anbraten, Zwiebel und Paprika dazu.','Tomatenmark und Gewürze kurz mitrösten.','Linsen, Tomaten, Brühe, abgespülte Bohnen und Mais dazu.',['Köcheln lassen, bis die Linsen weich sind.',18],'Abschmecken, mit Schmand servieren.'],
 tip:'4 Portionen – Rest einfrieren oder am nächsten Tag essen.',swap:'Chili sin Carne: Hack weglassen, dafür 1 TL Kakao + 1 EL Sojasauce für Tiefe.'},

{id:'bolo-halbhalb',t:'Bolognese halb-halb mit Linsen',e:'🍝',c:'haupt',min:30,p:4,d:'fleisch',tools:['topf'],mp:true,
 ing:[[200,'g','Hack (Rind)'],[100,'g','rote Linsen'],[1,'Stk','Zwiebel'],[1,'Stk','Karotte'],[1,'Stk','Stange Sellerie (optional)'],[2,'EL','Tomatenmark'],[1,'Pkg','passierte Tomaten (500 g)'],[250,'ml','Wasser oder Brühe'],[400,'g','Spaghetti'],[null,'','Oregano, Salz, Pfeffer, Parmesan']],
 st:['Zwiebel, Karotte und Sellerie fein würfeln.','Hack scharf anbraten, Gemüse dazu, Tomatenmark mitrösten.','Linsen, Tomaten und Wasser dazu, würzen.',['Köcheln lassen, bis die Linsen weich sind.',20],['Spaghetti kochen.',10]],
 swap:'Komplett vegetarisch: Hack durch 200 g fein gehackte Champignons ersetzen.'},

{id:'asia-nudeln-tofu',t:'Asia-Nudelpfanne mit Tofu',e:'🍜',c:'haupt',min:20,p:2,d:'vegan',tools:['pfanne'],
 ing:[[150,'g','Mie- oder Udonnudeln'],[200,'g','Räuchertofu'],[1,'Stk','Paprika'],[1,'Stk','Karotte'],[100,'g','Zuckerschoten oder Pak Choi'],[3,'EL','Sojasauce'],[1,'EL','Hoisin- oder Teriyakisauce'],[1,'Stück','Ingwer'],[null,'','Sesam, Frühlingszwiebel, Chili']],
 st:[['Nudeln nach Packung garen.',5],'Tofu würfeln und in Öl knusprig braten, herausnehmen.','Gemüse in Streifen schneiden, mit Ingwer 3–4 Min. pfannenrühren.','Nudeln, Tofu und Saucen dazu, alles durchschwenken.']},

{id:'gnocchi-pfanne',t:'Gnocchi-Pfanne mit Spinat & Tomaten',e:'🥟',c:'haupt',min:15,p:2,d:'veg',tools:['pfanne'],
 ing:[[400,'g','Gnocchi'],[200,'g','Kirschtomaten'],[100,'g','Babyspinat'],[1,'Zehe','Knoblauch'],[100,'ml','Sahne oder Hafercuisine'],[30,'g','Parmesan'],[null,'','Salz, Pfeffer']],
 st:['Gnocchi in Öl goldbraun braten (nicht kochen).','Knoblauch und halbierte Tomaten 2 Min. mitbraten.','Sahne angießen, Spinat zufügen und zusammenfallen lassen.','Mit Parmesan, Salz und Pfeffer abschmecken.']},

{id:'tomatensuppe',t:'Schnelle Tomatensuppe mit Kichererbsen',e:'🍅',c:'suppe',min:20,p:2,d:'vegan',tools:['topf'],
 ing:[[1,'Stk','Zwiebel'],[1,'Zehe','Knoblauch'],[1,'Dose','gehackte Tomaten'],[300,'ml','Gemüsebrühe'],[1,'Dose','Kichererbsen'],[1,'TL','Paprikapulver'],[2,'EL','Hafersahne'],[null,'','Basilikum, Salz, Zucker']],
 st:['Zwiebel und Knoblauch in Öl andünsten.','Tomaten, Brühe und Paprika dazu.',['Köcheln lassen.',10],'Fein pürieren, Kichererbsen zufügen, kurz erhitzen.','Mit Hafersahne, Basilikum, Salz und einer Prise Zucker abschmecken.'],
 tip:'Kichererbsen vorher im Airfryer rösten = knusprige Einlage.'},

{id:'kuerbissuppe',t:'Hokkaido-Kürbissuppe',e:'🎃',c:'suppe',min:30,p:4,d:'vegan',tools:['topf'],mp:true,
 ing:[[1,'Stk','Hokkaido (ca. 1 kg)'],[1,'Stk','Zwiebel'],[1,'Stück','Ingwer (3 cm)'],[1,'Stk','Karotte'],[800,'ml','Gemüsebrühe'],[200,'ml','Kokosmilch'],[null,'','Salz, Pfeffer, Kürbiskerne, Chili']],
 st:['Kürbis entkernen und mit Schale würfeln. Zwiebel, Ingwer, Karotte klein schneiden.','Alles in Öl andünsten, mit Brühe ablöschen.',['Köcheln lassen, bis der Kürbis weich ist.',18],'Kokosmilch zufügen, fein pürieren, abschmecken.','Mit gerösteten Kürbiskernen servieren.'],
 tip:'Hokkaido muss nicht geschält werden.'},

{id:'linsensalat',t:'Linsensalat mit Feta & Ofentomaten',e:'🥗',c:'bowl',min:15,p:2,d:'veg',tools:['ohne'],mp:true,
 ing:[[1,'Dose','Linsen (Berg- oder Tellerlinsen)'],[150,'g','Kirschtomaten'],[0.5,'Stk','Gurke'],[1,'Stk','rote Zwiebel (klein)'],[80,'g','Feta'],[2,'EL','Olivenöl'],[1,'EL','Balsamico'],[1,'TL','Senf'],[null,'','Petersilie, Salz, Pfeffer']],
 st:['Linsen abspülen und abtropfen lassen.','Gemüse würfeln, Zwiebel fein hacken.','Öl, Balsamico, Senf, Salz und Pfeffer verrühren.','Alles mischen, Feta darüberbröseln.'],
 tip:'Hält sich 2 Tage im Kühlschrank – ideal für die Arbeit.'},

{id:'bulgursalat',t:'Griechischer Bulgursalat',e:'🫒',c:'bowl',min:20,p:2,d:'veg',tools:['ohne'],mp:true,
 ing:[[120,'g','Bulgur'],[1,'Stk','Gurke'],[200,'g','Kirschtomaten'],[50,'g','Oliven'],[100,'g','Feta'],[0.5,'Stk','rote Zwiebel'],[2,'EL','Olivenöl'],[1,'Stk','Zitrone'],[null,'','Oregano, Minze, Salz']],
 st:[['Bulgur mit 250 ml kochendem Salzwasser übergießen, abgedeckt quellen lassen.',10],'Gemüse würfeln.','Zitronensaft, Öl, Oregano und Salz verrühren.','Alles mischen, Feta darüber.']},

{id:'burrito-bowl',t:'Burrito-Bowl',e:'🌯',c:'bowl',min:20,p:2,d:'vegan',tools:['topf','pfanne'],
 ing:[[150,'g','Reis'],[1,'Dose','schwarze Bohnen'],[150,'g','Mais'],[1,'Stk','Avocado'],[1,'Stk','Tomate'],[0.5,'Stk','rote Zwiebel'],[1,'Stk','Limette'],[1,'TL','Kreuzkümmel'],[1,'TL','Paprikapulver'],[null,'','Koriander, Salsa, Salz']],
 st:[['Reis kochen, mit Limettensaft und Salz würzen.',15],'Bohnen mit Gewürzen in der Pfanne 3 Min. erwärmen, Mais kurz mitbraten.','Tomate, Zwiebel und Avocado würfeln.','Alles in Schalen anrichten, mit Salsa und Koriander toppen.'],
 tip:'Flexi-Variante: 100 g Hähnchenstreifen für beide reichen.'},

{id:'ramen-schnell',t:'Schnelle Miso-Ramen mit Ei',e:'🍜',c:'suppe',min:15,p:2,d:'veg',tools:['topf'],
 ing:[[2,'Stk','Eier'],[800,'ml','Gemüsebrühe'],[2,'EL','Misopaste'],[1,'EL','Sojasauce'],[1,'Stück','Ingwer'],[150,'g','Ramen- oder Mienudeln'],[1,'Stk','Pak Choi'],[100,'g','Champignons'],[null,'','Frühlingszwiebel, Sesam, Chiliöl']],
 st:[['Eier 6,5 Minuten kochen, abschrecken und schälen.',6.5],'Brühe mit geriebenem Ingwer aufkochen, Pilze und Pak Choi 3 Min. darin garen.',['Nudeln in der Brühe garen.',3],'Herd aus, Miso und Sojasauce einrühren (nicht mehr kochen).','In Schalen füllen, halbierte Eier, Frühlingszwiebel und Sesam darauf.']},

{id:'pilz-stroganoff',t:'Pilz-Stroganoff mit Reis',e:'🍄',c:'haupt',min:25,p:2,d:'veg',tools:['pfanne','topf'],
 ing:[[400,'g','Champignons'],[1,'Stk','Zwiebel'],[1,'TL','Paprikapulver edelsüß'],[1,'TL','Senf'],[150,'ml','Brühe'],[100,'g','Schmand'],[1,'Stk','Gewürzgurke'],[150,'g','Reis'],[null,'','Petersilie, Salz, Pfeffer']],
 st:[['Reis kochen.',15],'Pilze in Scheiben schneiden und portionsweise scharf anbraten.','Zwiebel dazu, Paprika kurz mitrösten.','Mit Brühe ablöschen, Senf und Schmand einrühren, 3 Min. köcheln.','Gurke würfeln, unterheben, mit Petersilie servieren.']},

{id:'spitzkohl-pfanne',t:'Spitzkohl-Kartoffel-Pfanne',e:'🥬',c:'haupt',min:25,p:2,d:'veg',tools:['pfanne'],
 ing:[[400,'g','Kartoffeln (vorgekocht)'],[0.5,'Stk','Spitzkohl'],[1,'Stk','Zwiebel'],[150,'g','Räuchertofu oder 60 g Speck'],[1,'TL','Kümmel'],[2,'EL','Schmand'],[null,'','Salz, Pfeffer, Petersilie']],
 st:['Kartoffeln in Scheiben schneiden und in Öl goldbraun braten.','Tofu (oder Speck) würfeln und mitbraten.','Zwiebel und Spitzkohl in Streifen dazu, mit Kümmel 6–8 Min. braten.','Mit Salz, Pfeffer abschmecken und mit Schmand servieren.'],
 tip:'Mit Speck wird’s ein Flexi-Gericht – 30 g pro Person reichen für den Geschmack.'},

{id:'thunfisch-bohnen',t:'Thunfisch-Bohnen-Salat',e:'🐟',c:'bowl',min:10,p:2,d:'fisch',tools:['ohne'],
 ing:[[1,'Dose','Thunfisch (natur, MSC)'],[1,'Dose','weiße Bohnen'],[1,'Stk','rote Zwiebel (klein)'],[150,'g','Kirschtomaten'],[2,'EL','Olivenöl'],[1,'EL','Weißweinessig'],[1,'Handvoll','Rucola'],[null,'','Petersilie, Salz, Pfeffer, Brot']],
 st:['Bohnen abspülen, Thunfisch abtropfen lassen.','Zwiebel fein schneiden, Tomaten halbieren.','Mit Öl, Essig, Salz und Pfeffer mischen.','Auf Rucola anrichten, mit Brot servieren.'],
 tip:'Kein Herd nötig – 10-Minuten-Feierabendessen.'},

{id:'erdnuss-nudelsalat',t:'Thai-Erdnuss-Nudelsalat',e:'🥜',c:'bowl',min:15,p:2,d:'vegan',tools:['topf'],mp:true,
 ing:[[150,'g','Vollkorn-Spaghetti oder Reisnudeln'],[1,'Stk','Karotte'],[1,'Stk','rote Paprika'],[0.5,'Stk','Gurke'],[100,'g','Edamame (TK)'],[2,'EL','Erdnussmus'],[2,'EL','Sojasauce'],[1,'EL','Limettensaft'],[1,'TL','Ahornsirup'],[null,'','Koriander, Erdnüsse, Chili']],
 st:[['Nudeln und Edamame kochen, kalt abschrecken.',9],'Gemüse in feine Streifen schneiden.','Erdnussmus mit Sojasauce, Limette, Sirup und 3 EL Wasser verrühren.','Alles mischen, mit gehackten Erdnüssen und Koriander bestreuen.']},

/* ───────────── FRÜHSTÜCK & SÜSSES ───────────── */
{id:'overnight-oats',t:'Overnight Oats',e:'🫙',c:'frueh',min:5,p:1,d:'veg',tools:['ohne'],mp:true,
 ing:[[50,'g','Haferflocken'],[100,'g','Joghurt oder Skyr'],[100,'ml','Milch oder Haferdrink'],[1,'TL','Chiasamen'],[1,'Handvoll','Beeren (TK)'],[1,'TL','Honig']],
 st:['Haferflocken, Joghurt, Milch und Chiasamen im Glas verrühren.','Beeren darauf, über Nacht in den Kühlschrank.','Morgens mit Honig süßen.'],
 tip:'Gleich 3 Gläser für die Arbeitswoche vorbereiten.'},

{id:'tofu-scramble',t:'Tofu-Scramble (veganes Rührei)',e:'🍳',c:'frueh',min:10,p:2,d:'vegan',tools:['pfanne'],
 ing:[[200,'g','Naturtofu'],[0.5,'TL','Kurkuma'],[1,'EL','Hefeflocken'],[1,'Prise','Kala Namak (Schwefelsalz)'],[50,'ml','Pflanzendrink'],[1,'Handvoll','Spinat'],[4,'Stk','Kirschtomaten'],[null,'','Schnittlauch, Pfeffer']],
 st:['Tofu mit der Gabel zerbröseln, in Öl 3 Min. anbraten.','Kurkuma, Hefeflocken und Pflanzendrink unterrühren.','Spinat und Tomaten dazu, kurz mitgaren.','Mit Kala Namak und Pfeffer würzen.'],
 tip:'Kala Namak sorgt für den Ei-Geschmack.'},

{id:'quark-pancakes',t:'Protein-Pancakes mit Quark',e:'🥞',c:'frueh',min:15,p:2,d:'veg',tools:['pfanne'],
 ing:[[250,'g','Magerquark'],[2,'Stk','Eier'],[60,'g','Haferflocken (zart) oder Mehl'],[1,'TL','Backpulver'],[1,'EL','Zucker oder Honig'],[null,'','Beeren, Joghurt, Prise Salz']],
 st:['Alles zu einem dicken Teig verrühren.','Kleine Pancakes bei mittlerer Hitze in wenig Öl backen, wenden, wenn Bläschen entstehen.','Mit Beeren und Joghurt servieren.']},

{id:'hummus-wrap',t:'Hummus-Gemüse-Wrap',e:'🌯',c:'frueh',min:10,p:2,d:'vegan',tools:['ohne'],
 ing:[[2,'Stk','Vollkorn-Wraps'],[4,'EL','Hummus'],[1,'Stk','Karotte'],[0.5,'Stk','Gurke'],[0.5,'Stk','Paprika'],[1,'Handvoll','Salat oder Spinat'],[null,'','Sesam, Chiliflocken']],
 st:['Wraps mit Hummus bestreichen.','Gemüse in feine Streifen schneiden oder raspeln.','Belegen, fest einrollen und halbieren.'],
 tip:'In Butterbrotpapier gewickelt perfekt für unterwegs.'},

{id:'hummus',t:'Hummus in 5 Minuten',e:'🫘',c:'snack',min:5,p:4,d:'vegan',tools:['ohne'],
 ing:[[1,'Dose','Kichererbsen (400 g)'],[2,'EL','Tahin'],[1,'Stk','Zitrone'],[1,'Zehe','Knoblauch'],[3,'EL','Eiswasser'],[1,'EL','Olivenöl'],[null,'','Kreuzkümmel, Salz, Paprika']],
 st:['Kichererbsen abgießen (etwas Wasser auffangen).','Alles mit dem Pürierstab sehr fein pürieren, bei Bedarf Kichererbsenwasser dazugeben.','Mit Olivenöl und Paprika servieren.']},

{id:'joghurt-bowl',t:'Skyr-Bowl mit Granola & Obst',e:'🍓',c:'frueh',min:5,p:1,d:'veg',tools:['ohne'],
 ing:[[200,'g','Skyr oder Joghurt'],[1,'Stk','Banane oder Apfel'],[1,'Handvoll','Beeren'],[3,'EL','Granola'],[1,'TL','Erdnussmus']],
 st:['Skyr in eine Schale geben.','Obst schneiden und darauf verteilen.','Mit Granola und Erdnussmus toppen.']},

{id:'nicecream',t:'Bananen-Nicecream',e:'🍨',c:'suess',min:5,p:2,d:'vegan',tools:['ohne'],
 ing:[[3,'Stk','gefrorene Bananen (in Scheiben)'],[50,'ml','Pflanzendrink'],[1,'EL','Kakao oder Erdnussmus (optional)']],
 st:['Bananen kurz antauen lassen.','Mit Pflanzendrink im Mixer cremig pürieren.','Sofort essen oder 30 Min. nachfrieren.'],
 tip:'Überreife Bananen geschält einfrieren – Resteverwertung!'},

{id:'flexi-bowl-haehnchen',t:'Teriyaki-Bowl (wenig Hähnchen)',e:'🍱',c:'bowl',min:25,p:2,d:'fleisch',tools:['af','topf'],
 af:'200 °C · 10 Min',
 ing:[[120,'g','Hähnchenbrust'],[150,'g','Reis'],[150,'g','Edamame (TK)'],[1,'Stk','Karotte'],[0.5,'Stk','Gurke'],[1,'Stk','Avocado'],[3,'EL','Teriyakisauce'],[null,'','Sesam, Frühlingszwiebel']],
 st:[['Reis kochen.',15],'Hähnchen in Streifen schneiden, mit 1 EL Teriyaki marinieren.',['Bei 200 °C garen, nach 5 Min. schütteln, mit restlicher Sauce glasieren.',10],['Edamame kochen.',4],'Karotte raspeln, Gurke und Avocado schneiden, alles in Schalen anrichten.'],
 tip:'60 g Hähnchen pro Person – Edamame liefern zusätzlich Eiweiß.',swap:'Hähnchen durch Tofu ersetzen (gleiche Zeit).'},

{id:'ofengemuese-feta-blech',t:'Wurzelgemüse mit Feta & Honig',e:'🥕',c:'haupt',min:30,p:2,d:'veg',tools:['af'],
 af:'200 °C · 20 + 5 Min',
 ing:[[3,'Stk','Karotten'],[1,'Stk','Pastinake'],[300,'g','Kürbis oder Rote Bete'],[1,'Stk','rote Zwiebel'],[1,'EL','Öl'],[1,'TL','Thymian'],[150,'g','Feta'],[1,'TL','Honig'],[null,'','Walnüsse, Salz']],
 st:['Gemüse in gleich große Stücke schneiden, mit Öl, Thymian und Salz mischen.',['Bei 200 °C garen, zweimal schütteln.',20],'Feta grob zerbröseln, darauf verteilen, mit Honig beträufeln.',['Weitergaren.',5],'Mit gehackten Walnüssen servieren.'],
 tip:'Herbst/Winter-Gericht – nimm, was saisonal ist.'},

{id:'eier-muffins',t:'Gemüse-Ei-Muffins (Meal Prep)',e:'🧁',c:'frueh',min:20,p:3,d:'veg',tools:['af'],mp:true,
 af:'170 °C · 12 Min',
 ing:[[6,'Stk','Eier'],[50,'ml','Milch'],[0.5,'Stk','Paprika'],[1,'Handvoll','Spinat'],[40,'g','geriebener Käse'],[2,'Stk','Frühlingszwiebeln'],[null,'','Salz, Pfeffer, Silikonförmchen']],
 st:['Gemüse fein würfeln und in Silikonförmchen verteilen.','Eier mit Milch, Salz, Pfeffer verquirlen, darübergießen, Käse obendrauf.',['Bei 170 °C stocken lassen.',12],'Abkühlen lassen, 3 Tage im Kühlschrank haltbar.']},

{id:'pasta-brokkoli-zitrone',t:'Zitronen-Pasta mit Brokkoli & Erbsen',e:'🍋',c:'haupt',min:15,p:2,d:'veg',tools:['topf'],
 ing:[[200,'g','Pasta'],[250,'g','Brokkoli'],[100,'g','Erbsen (TK)'],[1,'Stk','Zitrone (Bio)'],[2,'EL','Frischkäse'],[30,'g','Parmesan'],[null,'','Chili, Salz, Pfeffer']],
 st:[['Pasta kochen, Brokkoli die letzten 4 Min., Erbsen die letzten 2 Min. mit ins Wasser.',10],'Eine Tasse Nudelwasser abnehmen, abgießen.','Mit Frischkäse, Zitronenabrieb und -saft, Parmesan und etwas Nudelwasser cremig schwenken.'],
 tip:'Nur ein Topf – kaum Abwasch.'},

{id:'linsen-bolo-af-lasagne',t:'Wrap-Lasagne aus dem Airfryer',e:'🫕',c:'haupt',min:25,p:2,d:'veg',tools:['af','pfanne'],
 af:'180 °C · 12 Min',
 ing:[[3,'Stk','Weizentortillas'],[1,'Dose','Linsen'],[300,'ml','passierte Tomaten'],[1,'Stk','Zucchini'],[150,'g','Ricotta oder Hüttenkäse'],[80,'g','geriebener Mozzarella'],[null,'','Oregano, Salz, Pfeffer']],
 st:['Zucchini würfeln, in der Pfanne 3 Min. anbraten, Linsen und Tomaten dazu, würzen, 5 Min. köcheln.','In einer runden Form (passend für den Korb) Tortilla, Sauce und Ricotta schichten, mit Tortilla abschließen.','Restliche Sauce und Mozzarella darauf.',['Bei 180 °C backen, bis der Käse goldbraun ist.',12]]}
];
