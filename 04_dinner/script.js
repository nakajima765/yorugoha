document.getElementById("btn").addEventListener("click", () => {
  const results = ["ラーメン(家系)","寿司","イタリアン","肉","うどん","そば","海鮮","中華","とんかつ","もんじゃ","うんこ"];
  const roulette = Math.floor(Math.random() * results.length);
  
  const resultText = document.getElementById("result");
  resultText.textContent = `${results[roulette]}を食え`;

  // 🌟 結果のアニメーションを発動！
  resultText.classList.remove("show"); // 一度リセット
  setTimeout(() => resultText.classList.add("show"), 50);
});






