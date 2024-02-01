const express = require('express');
const app = express();
const port = 3000;

// publicディレクトリ内の静的ファイルを提供
app.use(express.static('public'));


// スコアデータをメモリ内に保存
let scoreData = {
  home: 0,
  away: 0,
  strikes: 0,
  balls: 0,
  outs: 0
};

// JSONデータを受け取るための設定
app.use(express.json());

// スコアデータを更新するエンドポイント
app.post('/update-score', (req, res) => {
  scoreData = req.body;
  res.send('Score updated');
});

// スコアデータを取得するエンドポイント
app.get('/score-data', (req, res) => {
  res.json(scoreData);
});

// サーバーを起動
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
