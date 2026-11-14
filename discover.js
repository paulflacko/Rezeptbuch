// Entdecken: Rezepte aus TheMealDB (kostenlos, ohne Anmeldung, Inhalte auf Englisch)
"use strict";
const MEALDB = 'https://www.themealdb.com/api/json/v1/1/';
const DISC_CATS = [
  ['Vegetarian','🥕 Vegetarisch'],['Vegan','🌱 Vegan'],['Seafood','🐟 Fisch'],['Pasta','🍝 Pasta'],
  ['Side','🥗 Beilagen'],['Starter','🥟 Vorspeisen'],['Breakfast','🍳 Frühstück'],['Dessert','🍰 Dessert'],
  ['Chicken','🍗 Hähnchen'],['Beef','🥩 Rind']
];
const MEAT_CATS = ['Beef','Chicken','Lamb','Pork','Goat'];
const MEAT_WORDS = /\b(chicken|beef|pork|lamb|bacon|ham|sausage|chorizo|mince|turkey|duck|veal|goat|prosciutto|pancetta|salami|steak|lardons?)\b/i;
const FISH_WORDS = /\b(fish|salmon|tuna|cod|prawns?|shrimps?|mussels|haddock|anchov(y|ies)|crab|squid|sardines?|mackerel|clams|scallops|monkfish|trout|sea bass)\b/i;

// Häufige Zutaten Englisch → Deutsch (für Anzeige und deutsche Suche)
const DICT = {
  'onion':'Zwiebel','onions':'Zwiebeln','red onion':'rote Zwiebel','red onions':'rote Zwiebeln','spring onions':'Frühlingszwiebeln','shallots':'Schalotten','leek':'Lauch',
  'garlic':'Knoblauch','garlic clove':'Knoblauchzehe','ginger':'Ingwer','chilli':'Chili','red chilli':'rote Chili','green chilli':'grüne Chili','chilli powder':'Chilipulver',
  'olive oil':'Olivenöl','vegetable oil':'Pflanzenöl','sunflower oil':'Sonnenblumenöl','sesame seed oil':'Sesamöl','coconut oil':'Kokosöl',
  'salt':'Salz','pepper':'Pfeffer','black pepper':'schwarzer Pfeffer','sea salt':'Meersalz','butter':'Butter','unsalted butter':'ungesalzene Butter',
  'sugar':'Zucker','brown sugar':'brauner Zucker','caster sugar':'feiner Zucker','icing sugar':'Puderzucker','honey':'Honig','maple syrup':'Ahornsirup',
  'flour':'Mehl','plain flour':'Weizenmehl','self-raising flour':'Mehl + Backpulver','baking powder':'Backpulver','cornstarch':'Speisestärke','corn flour':'Speisestärke',
  'egg':'Ei','eggs':'Eier','egg yolks':'Eigelb','milk':'Milch','water':'Wasser','double cream':'Sahne','single cream':'Kochsahne','heavy cream':'Sahne','sour cream':'Saure Sahne',
  'yogurt':'Joghurt','greek yogurt':'griechischer Joghurt','cheese':'Käse','cheddar cheese':'Cheddar','parmesan':'Parmesan','parmesan cheese':'Parmesan','mozzarella':'Mozzarella',
  'feta':'Feta','goats cheese':'Ziegenkäse','ricotta':'Ricotta','cream cheese':'Frischkäse',
  'tomato':'Tomate','tomatoes':'Tomaten','cherry tomatoes':'Kirschtomaten','chopped tomatoes':'gehackte Tomaten','tomato puree':'Tomatenmark','tomato paste':'Tomatenmark','passata':'passierte Tomaten',
  'potato':'Kartoffel','potatoes':'Kartoffeln','sweet potatoes':'Süßkartoffeln','sweet potato':'Süßkartoffel','carrot':'Karotte','carrots':'Karotten','celery':'Staudensellerie',
  'courgettes':'Zucchini','zucchini':'Zucchini','aubergine':'Aubergine','eggplant':'Aubergine','mushrooms':'Champignons','mushroom':'Pilz','spinach':'Spinat','kale':'Grünkohl',
  'broccoli':'Brokkoli','cauliflower':'Blumenkohl','cabbage':'Kohl','peas':'Erbsen','frozen peas':'TK-Erbsen','green beans':'grüne Bohnen','sweetcorn':'Mais','corn':'Mais',
  'red pepper':'rote Paprika','green pepper':'grüne Paprika','yellow pepper':'gelbe Paprika','bell pepper':'Paprika','cucumber':'Gurke','lettuce':'Salat','avocado':'Avocado',
  'pumpkin':'Kürbis','butternut squash':'Butternut-Kürbis','beetroot':'Rote Bete','asparagus':'Spargel','fennel':'Fenchel','radish':'Radieschen',
  'lemon':'Zitrone','lemons':'Zitronen','lemon juice':'Zitronensaft','lime':'Limette','lime juice':'Limettensaft','apple':'Apfel','apples':'Äpfel','banana':'Banane','bananas':'Bananen',
  'rice':'Reis','basmati rice':'Basmatireis','jasmine rice':'Jasminreis','pasta':'Pasta','spaghetti':'Spaghetti','penne rigate':'Penne','noodles':'Nudeln','rice noodles':'Reisnudeln','couscous':'Couscous','quinoa':'Quinoa','bulgur wheat':'Bulgur',
  'chickpeas':'Kichererbsen','lentils':'Linsen','red lentils':'rote Linsen','kidney beans':'Kidneybohnen','black beans':'schwarze Bohnen','tofu':'Tofu','bread':'Brot','breadcrumbs':'Semmelbrösel','tortillas':'Tortillas',
  'vegetable stock':'Gemüsebrühe','chicken stock':'Hühnerbrühe','stock':'Brühe','soy sauce':'Sojasauce','coconut milk':'Kokosmilch','peanut butter':'Erdnussbutter','tahini':'Tahin','vinegar':'Essig','white wine vinegar':'Weißweinessig','balsamic vinegar':'Balsamico','red wine':'Rotwein','white wine':'Weißwein','mustard':'Senf',
  'cumin':'Kreuzkümmel','ground cumin':'gemahlener Kreuzkümmel','coriander':'Koriander','ground coriander':'gemahlener Koriander','turmeric':'Kurkuma','paprika':'Paprikapulver','smoked paprika':'geräuchertes Paprikapulver','cinnamon':'Zimt','nutmeg':'Muskat','garam masala':'Garam Masala','curry powder':'Currypulver','oregano':'Oregano','basil':'Basilikum','thyme':'Thymian','rosemary':'Rosmarin','parsley':'Petersilie','mint':'Minze','dill':'Dill','bay leaf':'Lorbeerblatt','bay leaves':'Lorbeerblätter','chives':'Schnittlauch','cayenne pepper':'Cayennepfeffer',
  'chicken':'Hähnchen','chicken breast':'Hähnchenbrust','chicken breasts':'Hähnchenbrust','chicken thighs':'Hähnchenschenkel','beef':'Rindfleisch','minced beef':'Rinderhack','bacon':'Speck','salmon':'Lachs','prawns':'Garnelen','tuna':'Thunfisch','cod':'Kabeljau',
  'walnuts':'Walnüsse','almonds':'Mandeln','cashew nuts':'Cashewkerne','pine nuts':'Pinienkerne','raisins':'Rosinen','dark chocolate':'Zartbitterschokolade','cocoa':'Kakao','vanilla extract':'Vanilleextrakt','oats':'Haferflocken','sesame seed':'Sesam'
};
const DE2EN = {};
for (const [en, de] of Object.entries(DICT)) { const k = de.toLowerCase(); if (!DE2EN[k] || en.length < DE2EN[k].length) DE2EN[k] = en; }
Object.assign(DE2EN, {'kartoffel':'potatoes','paprika':'red pepper','hähnchen':'chicken','hühnchen':'chicken','huhn':'chicken','nudeln':'pasta','fisch':'salmon','pilze':'mushrooms','käse':'cheese','ei':'eggs','bohnen':'kidney beans','kürbis':'pumpkin','tomate':'tomatoes','zwiebel':'onion','linsen':'lentils','reis':'rice'});
const trIng = n => DICT[n.toLowerCase().trim()] || n;

const UNIT_MAP = [
  [/^(cups?|c)$/i, 'ml', 240], [/^(tbsp|tbs|tblsp|tablespoons?)$/i, 'EL', 1], [/^(tsp|teaspoons?)$/i, 'TL', 1],
  [/^(oz|ounces?)$/i, 'g', 28.35], [/^(lbs?|pounds?)$/i, 'g', 453.6], [/^(g|grams?|gr)$/i, 'g', 1], [/^kg$/i, 'kg', 1],
  [/^(ml|millilitres?|milliliters?)$/i, 'ml', 1], [/^(l|litres?|liters?)$/i, 'l', 1], [/^(cloves?)$/i, 'Zehe', 1],
  [/^pinch$/i, 'Prise', 1], [/^handful$/i, 'Handvoll', 1], [/^(cans?|tins?)$/i, 'Dose', 1], [/^(slices?)$/i, 'Scheibe', 1], [/^(bunch)$/i, 'Bund', 1]
];
function parseNum(s){
  s = s.replace('½', '.5').replace('¼', '.25').replace('¾', '.75');
  let m = s.match(/^(\d+)\s+(\d+)\/(\d+)$/); if (m) return +m[1] + m[2] / m[3];
  m = s.match(/^(\d+)\/(\d+)$/); if (m) return m[1] / m[2];
  return parseFloat(s.replace(',', '.'));
}
function convMeasure(meas, name){
  const nm = trIng(name);
  const m = meas.match(/^(\d+\s+\d+\/\d+|\d+\/\d+|\d*[.,]?\d+|½|¼|¾)\s*([a-zA-Z]+)?\.?\s*(.*)$/);
  if (!m) return [null, '', (meas ? meas + ' ' : '') + nm];
  let q = parseNum(m[1]), unit = '', rest = [m[2] || '', m[3] || ''].join(' ').trim();
  if (m[2]) { const u = UNIT_MAP.find(([re]) => re.test(m[2])); if (u) { unit = u[1]; q = q * u[2]; rest = (m[3] || '').trim(); } }
  if (unit === 'g' && q >= 1000) { unit = 'kg'; q = q / 1000; }
  if (!unit && !rest) unit = 'Stk';
  if (unit === 'Zehe' && q > 1) unit = 'Zehen';
  return [q, unit, nm + (rest ? ` (${rest})` : '')];
}

function fromMeal(m){
  const ing = [];
  for (let i = 1; i <= 20; i++) { const n = (m['strIngredient' + i] || '').trim(); if (n) ing.push(convMeasure((m['strMeasure' + i] || '').trim(), n)); }
  let st = (m.strInstructions || '').split(/\r?\n+/).map(s => s.replace(/^\s*(step\s*\d+\s*[:.)-]?|\d+\s*[.)])\s*/i, '').trim()).filter(s => s.length > 3 && !/^step\s*\d*$/i.test(s));
  if (st.length <= 2) st = st.join(' ').match(/[^.!?]+(?:[.!?]+|$)(?:\s*[^.!?]+(?:[.!?]+|$))?/g)?.map(s => s.trim()).filter(Boolean) || st;
  st = st.map(s => { const t = s.match(/(\d+)\s*(?:-|–|to)?\s*(\d+)?\s*(?:mins?|minutes)\b/i); if (!t) return s; const n = +(t[2] || t[1]); return n >= 1 && n <= 240 ? [s, n] : s; });
  const names = ing.map(i => i[2]).join(' ') + ' ' + ing.map((_, i) => m['strIngredient' + (i + 1)] || '').join(' ');
  const d = m.strCategory === 'Vegan' ? 'vegan' : m.strCategory === 'Vegetarian' ? 'veg' : m.strCategory === 'Seafood' ? 'fisch'
    : MEAT_CATS.includes(m.strCategory) || MEAT_WORDS.test(names) ? 'fleisch' : FISH_WORDS.test(names) ? 'fisch' : 'veg';
  const c = {Dessert:'suess', Breakfast:'frueh', Side:'snack', Starter:'snack'}[m.strCategory] || 'haupt';
  const txt = (m.strInstructions || '').toLowerCase(), tools = [];
  if (/air ?fryer/.test(txt)) tools.push('af');
  if (/\boven\b|bake|roast/.test(txt)) tools.push('ofen');
  if (/\b(pan|wok|fry|saut)/.test(txt)) tools.push('pfanne');
  if (/\b(pot|saucepan|boil|simmer)\b/.test(txt)) tools.push('topf');
  const timed = st.filter(Array.isArray).reduce((a, s) => a + s[1], 0);
  return {
    id: 'mdb-' + m.idMeal, t: m.strMeal, e: '🌍', img: m.strMealThumb, c, d, p: 4, tools: tools.length ? tools : ['ohne'],
    min: timed ? Math.min(180, timed + 15) : null, ing, st, en: true, area: m.strArea, link: m.strSource || '', yt: m.strYoutube || '',
    swap: d === 'fleisch' ? 'Flexi-Tipp: Fleischmenge halbieren und mit Kichererbsen, Linsen, Pilzen oder Tofu auffüllen.' : ''
  };
}

const mealCache = new Map(), listCache = new Map();
async function mdb(path){
  if (listCache.has(path)) return listCache.get(path);
  const r = await fetch(MEALDB + path); if (!r.ok) throw new Error('http');
  const meals = (await r.json()).meals || [];
  if (!path.startsWith('random')) listCache.set(path, meals);
  return meals;
}
async function loadMeal(id){
  if (mealCache.has(id)) return mealCache.get(id);
  const [m] = await mdb('lookup.php?i=' + encodeURIComponent(id)); if (!m) throw new Error('nf');
  const r = fromMeal(m); mealCache.set(id, r); return r;
}

let disc = {cat: null, q: '', list: [], state: 'idle'};
function discCard(m){
  const saved = S.own.some(r => r.id === 'mdb-' + m.idMeal);
  return `<button class="card" data-meal="${esc(m.idMeal)}"><span class="tile photo"><img loading="lazy" src="${esc(m.strMealThumb)}/small" alt=""></span>
    <span class="body"><h3>${esc(m.strMeal)}</h3><span class="meta">${m.strCategory ? `<span>${esc(m.strCategory)}</span>` : ''}${m.strArea ? `<span>${esc(m.strArea)}</span>` : ''}${saved ? '<span class="fav">✓ im Buch</span>' : ''}</span></span></button>`;
}
function viewEntdecken(){
  disc.cat ??= S.discCat || 'Vegetarian';
  $('#main').innerHTML = `
    <div class="sec" style="margin-top:16px"><h2>Entdecken</h2><span class="muted small">Rezepte aus TheMealDB</span></div>
    <form class="search" id="discForm" style="margin-top:0">
      <input type="search" id="dq2" placeholder="Zutat oder Gericht – z. B. „Kürbis“" value="${esc(disc.q)}" aria-label="Online-Rezepte suchen">
      <button class="btn primary">Suchen</button>
    </form>
    <div class="chips" role="group" aria-label="Kategorien">${DISC_CATS.map(([k, l]) => `<button class="chip" data-dcat="${k}" aria-pressed="${!disc.q && disc.cat === k}">${l}</button>`).join('')}</div>
    <div class="actions" style="margin:4px 0 10px"><button class="btn sm" data-drandom="veg">🎲 Zufall (veggie)</button><button class="btn sm ghost" data-drandom="all">🎲 Ganz zufällig</button></div>
    <div id="dres"></div>
    <p class="hint" style="margin:18px 0">Die Rezepte sind auf Englisch – Zutaten und Mengen werden automatisch umgerechnet (Cups → ml, oz → g). Gefällt dir eins, übernimm es mit „Ins Buch“, dann ist es auch offline da.</p>`;
  $('#discForm').addEventListener('submit', e => { e.preventDefault(); disc.q = $('#dq2').value.trim(); loadDisc(); });
  if (disc.state === 'done') renderDisc(); else loadDisc();
}
async function loadDisc(){
  const box = () => $('#dres');
  disc.state = 'loading';
  if (box()) box().innerHTML = '<p class="empty">Lade Rezepte…</p>';
  document.querySelectorAll('[data-dcat]').forEach(b => b.setAttribute('aria-pressed', String(!disc.q && b.dataset.dcat === disc.cat)));
  try {
    if (disc.q) {
      const q = disc.q.toLowerCase(), en = DE2EN[q] || DE2EN[q.replace(/n$/, '')] || DE2EN[q.replace(/e?n$/, '')];
      let list = [];
      if (en) list = await mdb('filter.php?i=' + encodeURIComponent(en.replace(/ /g, '_')));
      if (!list.length) list = await mdb('search.php?s=' + encodeURIComponent(en || disc.q));
      if (!list.length && !en) list = await mdb('filter.php?i=' + encodeURIComponent(disc.q.replace(/ /g, '_')));
      disc.list = list;
    } else disc.list = await mdb('filter.php?c=' + encodeURIComponent(disc.cat));
    disc.state = 'done';
  } catch { disc.state = 'error'; }
  renderDisc();
}
function renderDisc(){
  const box = $('#dres'); if (!box) return;
  if (disc.state === 'error') { box.innerHTML = '<p class="empty">Keine Verbindung zu TheMealDB. „Entdecken“ braucht Internet – deine eigenen Rezepte gehen trotzdem.</p>'; return; }
  box.innerHTML = `<p class="muted small" style="margin-bottom:10px">${disc.list.length} Rezepte${disc.q ? ` für „${esc(disc.q)}“` : ''}</p>` +
    (disc.list.length ? `<div class="grid">${disc.list.map(discCard).join('')}</div>` : '<p class="empty">Nichts gefunden. Versuch’s mit einer anderen Zutat oder auf Englisch.</p>');
}
async function discRandom(kind){
  try {
    let id;
    if (kind === 'veg') { const [a, b] = await Promise.all([mdb('filter.php?c=Vegetarian'), mdb('filter.php?c=Vegan')]); const l = a.concat(b); id = l[Math.floor(Math.random() * l.length)].idMeal; }
    else { const [m] = await mdb('random.php'); mealCache.set(m.idMeal, fromMeal(m)); id = m.idMeal; }
    location.hash = '#m/' + id;
  } catch { toast('Keine Verbindung'); }
}
async function openMeal(id){
  const saved = byId('mdb-' + id);
  if (saved) { openDetail(saved); return; }
  const d = $('#detail'); d.hidden = false; document.body.style.overflow = 'hidden';
  d.innerHTML = `<div class="dhead"><div class="wrap"><button class="iconbtn" id="back" aria-label="Zurück">←</button></div></div><div class="wrap"><p class="empty" style="margin-top:20px">Lade Rezept…</p></div>`;
  try { const r = await loadMeal(id); if (location.hash === '#m/' + id) openDetail(r); }
  catch { d.querySelector('.empty').textContent = 'Rezept konnte nicht geladen werden (keine Verbindung?).'; }
}
function saveRemote(r){
  if (!r || !r.en || S.own.some(x => x.id === r.id)) return false;
  S.own.push({...r, own: true}); save(); return true;
}
