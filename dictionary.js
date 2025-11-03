// カルデール式 → 漢字
const dict = {
  "háxi": "箸",
  "haxí": "橋",
  "xú": "主"
};

// 漢字 → カルデール式
const reverseDict = Object.fromEntries(
  Object.entries(dict).map(([r, k]) => [k, r])
);
