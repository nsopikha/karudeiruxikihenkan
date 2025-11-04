// カルデール式 → 漢字
const dict = {
  "a": ["あ"],
  "aa": ["ああ"],
  "aakáibu": ["アーカイブ"],
  "áaru": ["Ｒ"],
  "áatisuto": ["アーティスト"],
  "áato": ["アート"],
  "abarabone": ["あばら骨"],
  "abarábone": ["あばら骨"],
  "abiru": ["浴びる"],
  "ábu": ["アブ", "虻"],
  "abura": ["油", "脂"],
  "abunai": ["危ない"],
  "abunái": ["危ない"],
  "ácu": ["圧"],
  "acúi": ["暑い", "熱い"],
  "acumáru": ["集まる"],
  "acuméru": ["集める"],
  "haxí": ["橋"],
  "háxi": ["箸"],
  "kane": ["金"],
  "kanji": ["漢字", "感じ"],
  "kín": ["金"],
  "xú": ["主"]
};

// 漢字 → カルデール式
const reverseDict = {};
for (const [romaji, kanjiList] of Object.entries(dict)) {
  for (const kanji of kanjiList) {
    if (!reverseDict[kanji]) reverseDict[kanji] = [];
    reverseDict[kanji].push(romaji);
  }
}

function convertToKanji(){
  const input = document.getElementById("toKanji").value.trim();
  const result = dict[input];
  if (Array.isArray(result)) {
    document.getElementById("outKanji").textContent = "候補: " + result.join(", ");
  } else {
    document.getElementById("outKanji").textContent = "(変換候補なし)";
  }
}

function convertToRomaji(){
  const input = document.getElementById("toRomaji").value.trim();
  const result = reverseDict[input];
  if (Array.isArray(result)) {
    document.getElementById("outRomaji").textContent = "候補: " + result.join(", ");
  } else {
    document.getElementById("outRomaji").textContent = "(変換候補なし)";
  }
}
