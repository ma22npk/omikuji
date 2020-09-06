const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  // const results = ['大吉', '中吉', '凶', '末吉'];
  const results = ['大吉', '中吉', '凶', '末吉'];
  // const n = Math.floor(Math.random() * results.length);
  // btn.textContent = results[n];
  btn.textContent = results[Math.floor(Math.random() * results.length)];
  const n = Math.random();
  if (n < 0.05) {
    btn.textContent = '大吉'; //5%
  } else if (n < 0.2) {
    btn.textContent = '中吉'; //15%
  } else {
    btn.textContent = '凶'; //80%
  }
  //btn.textContent = n;
  // switch (n) {
  //   case 0:
  //     btn.textContent = '大吉'
  //     break;
  //   case 1:
  //     btn.textContent = '中吉'
  //     break;
  //   case 2:
  //     btn.textContent = '凶'
  //     break;
  // }

})
//乱数を生成する
//math.random()は 0<1の中でランダムな整数値を精製してくれる（１は含まない）
//math.random() * 3だと　３未満の数字
//math.floor(math.radom() * 3) 3以上のランダムな整数値
//0 ... n 
//math.floor(math.radom() * (n + 1)) 3以上のランダムな整数値
//min ... max 
//min + math.floor(math.radom() * (max + 1 - min))