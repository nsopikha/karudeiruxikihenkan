// カルデール式 → 漢字
const dict = {
  "haxí": ["橋"],
  "háxi": ["箸"],
  "kanji": ["漢字", "感じ"],
  "xú": ["主"]
};

// 漢字 → カルデール式
const reverseDict = {};
for (const [roman, kanjis] of Object.entries(dict)) {
  for (const k of kanjis) {
    reverseDict[k] = roman;
  }
}
