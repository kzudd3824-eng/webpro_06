const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

let nicoru1 = [
  { year:2025, month:1, date:5, time:"00:00", name:"司令官", url:"https://www.nicovideo.jp/watch/sm44485911", fig:54, comment:"いいでしょう、10万再生の音だ。" },
  { year:2025, month:1, date:20, time:"00:01", name:"司令官", url:"https://www.nicovideo.jp/watch/sm44485911", fig:41, comment:"大量削除なんか怖くねぇ！" },
  { year:2025, month:1, date:18, time:"00:55", name:"頑張れ受験生！先輩方からメッセージ.mp2026", url:"https://www.nicovideo.jp/watch/sm44550146", fig:37, comment:"これ見て明日の共テ頑張ろうと思いました😭😭😭　ありがとうございます！" },
  { year:2025, month:1, date:31, time:"01:50", name:"悪役令嬢転生おじさん 第3話「おじさん、ダジャレを言う！」", url:"https://www.nicovideo.jp/watch/so44584835", fig:32, comment:"髪の情報量が多い方がここにいらっしゃいますね…" },
  { year:2025, month:1, date:25, time:"08:39", name:"悪役令嬢転生おじさん 第1話「おじさん、悪役令嬢になる」", url:"https://www.nicovideo.jp/watch/so44523095", fig:22, comment:"ワイが大学行くために頑張って働いてくれてるワイの親みたいや…(高3)" },
  { year:2025, month:1, date:5, time:"26:51", name:"司令官", url:"https://www.nicovideo.jp/watch/sm44485911", fig:21, comment:"ﾄﾞｸﾝ(探知開始)" },
];

let nicoru2 = [
  { year:2025, month:2, date:18, time:"00:31", name:"絆創合体されました？【戦隊レッド 異世界で冒険者になる】", url:"https://www.nicovideo.jp/watch/sm44659453", fig:21, comment:"今まで純粋キャラで振る舞ってたのに今日姉にエロゲーやってるのバレてめっちゃ恥ずかしかった" },
];

let nicoru3 = [
  { year:2025, month:3, date:25, time:"02:43", name:"時々語録に反応する隣のLiljaさん・2nd season", url:"https://www.nicovideo.jp/watch/sm44805199", fig:58, comment:"これはきゅうくらりんですか？" },
  { year:2025, month:3, date:29, time:"05:59", name:"【Besiege】第８回パンジャンドラム最速王決定戦P1グランプリ①VOICEROID実況", url:"https://www.nicovideo.jp/watch/sm44809571", fig:49, comment:"これだからニコニコが良いんだよ" },
  { year:2025, month:3, date:25, time:"01:25", name:"時々語録に反応する隣のLiljaさん・2nd season", url:"https://www.nicovideo.jp/watch/sm44805199", fig:48, comment:"これは狩られても仕方ない" },
  { year:2025, month:3, date:26, time:"01:47", name:"分割キーボードを自作する", url:"https://www.nicovideo.jp/watch/sm44808544", fig:25, comment:"断末魔じゃね？" },
];

let nicoru4 = [
  { year:2025, month:4, date:8, time:"03:19", name:"ギャグマンガ日和GO 第1話「名探偵すぎるよ！うさみちゃん」", url:"hhttps://www.nicovideo.jp/watch/so44838644", fig:125, comment:"ﾝ長い好き" },
  { year:2025, month:4, date:28, time:"02:26", name:"ライアー自慢サー", url:"https://www.nicovideo.jp/watch/sm44907416", fig:98, comment:"悪いなのび太、このステージを盛り上がるのは僕たち2人なんだ" },
  { year:2025, month:4, date:8, time:"04:12", name:"ギャグマンガ日和GO 第1話「名探偵すぎるよ！うさみちゃん」", url:"hhttps://www.nicovideo.jp/watch/so44838644", fig:67, comment:"マジで全話放送してくれよ…" },
  { year:2025, month:4, date:13, time:"03:19", name:"ギャグマンガ日和GO 第1話「名探偵すぎるよ！うさみちゃん」", url:"hhttps://www.nicovideo.jp/watch/so44838644", fig:37, comment:"ﾝ長い好き" },
  { year:2025, month:4, date:3, time:"11:50", name:"【本編フル】Nintendo Direct: Nintendo Switch 2 - 2025.4.2", url:"https://www.nicovideo.jp/watch/sm44837589", fig:23, comment:"クッパJと友達になれる部下たち逸材だろ" },
];

let nicoru5 = [
  { year:2025, month:5, date:10, time:"05:18", name:"圭一vs.レナ（まるで実写）～尻隠し編 其の弐～", url:"https://www.nicovideo.jp/watch/sm44954790", fig:36, comment:"( ﾟдﾟ )ｵｼﾘｼﾞｬﾅｲ!?" },
  { year:2025, month:5, date:10, time:"05:19", name:"圭一vs.レナ（まるで実写）～尻隠し編 其の弐～", url:"https://www.nicovideo.jp/watch/sm44954790", fig:36, comment:"(； ･`д･´)ﾉｰｶﾝﾉｰｶﾝ!" },
  { year:2025, month:5, date:17, time:"00:00", name:"ンアーッ！ティターンズの権力がデカすぎる！", url:"https://www.nicovideo.jp/watch/sm44964217", fig:35, comment:"もうハーフミリオン見えてるのおかしいだろ" },
];

let nicoru6 = [
  { year:2025, month:6, date:18, time:"00:01", name:"ンアーッ！ティターンズの権力がデカすぎる！", url:"https://www.nicovideo.jp/watch/sm44964217", fig:25, comment:"ホモがネタバレしただけでミリオン達成" },
];

let nicoru7 = [
  { year:2025, month:7, date:12, time:"08:59", name:"【Besiege】第８回パンジャンドラム最速王決定戦P1グランプリ④VOICEROID実況", url:"https://www.nicovideo.jp/watch/sm45175617", fig:118, comment:"全体を見てからお辞儀をするところマジでプロって感じ" },
  { year:2025, month:7, date:12, time:"08:58", name:"【Besiege】第８回パンジャンドラム最速王決定戦P1グランプリ④VOICEROID実況", url:"https://www.nicovideo.jp/watch/sm45175617", fig:91, comment:"操作性エグすぎて草" },
  { year:2025, month:7, date:12, time:"07:26", name:"【Besiege】第８回パンジャンドラム最速王決定戦P1グランプリ④VOICEROID実況", url:"https://www.nicovideo.jp/watch/sm45175617", fig:60, comment:"こ　れ　が　し　た　か　っ　た　だ　け　だ　ろ" },
];

let nicoru8 = [
  { year:2025, month:8, date:24, time:"00:00", name:"ならないか", url:"https://www.nicovideo.jp/watch/sm45276582", fig:68, comment:"数時間前に見た時は1万再生だったのに急に伸びるやん(古参アピ)" },
  { year:2025, month:8, date:24, time:"00:01", name:"ならないか", url:"https://www.nicovideo.jp/watch/sm45276582", fig:55, comment:"ボカコレ中なのにこれがランキング1位なの最高に狂ってて草" },
  { year:2025, month:8, date:10, time:"06:28", name:"ホモガキ大国、日本　第四章(終) #野獣の日2025", url:"https://www.nicovideo.jp/watch/sm45273378", fig:53, comment:"YAJU＆U言うやつは初心者だと思ってる(小並感)" },
  { year:2025, month:8, date:9, time:"01:25", name:"【チートバグ】バグの日学級裁判", url:"https://www.nicovideo.jp/watch/sm45264344", fig:24, comment:"😁＜こ゛ろ゛し゛て゛ね゛ぇ゛！゛！゛" },
  { year:2025, month:8, date:9, time:"05:17", name:"【チートバグ】バグの日学級裁判", url:"https://www.nicovideo.jp/watch/sm45264344", fig:23, comment:"【悲報】ワイの包丁セット、証拠品となるwww" },
];

let nicoru9 = [
  { year:2025, month:9, date:16, time:"48:48", name:"Nintendo Direct 2025.9.12", url:"https://www.nicovideo.jp/watch/sm45397427", fig:24, comment:"イマソ刈りメタモン" },
  { year:2025, month:9, date:8, time:"29:01", name:"ニコニコランキングSP2025上半期 見なよ・・・今年のランキングを・・・SP", url:"https://www.nicovideo.jp/watch/sm45382593", fig:20, comment:"各順位が114514だけで構成されてて草" },
];

let nicoru10 = [
  { year:2025, month:10, date:30, time:"06:34", name:"野原ひろし 昼メシの流儀 第4話「駅弁の流儀／串かつの流儀」", url:"https://www.nicovideo.jp/watch/so45543135", fig:84, comment:"ショタからここまで心を掴まれるとは(ショタコン)" },
  { year:2025, month:10, date:1, time:"01:10", name:"淫夢ごっこ大国、日本", url:"https://www.nicovideo.jp/watch/sm45467394", fig:46, comment:"実質ワッカ" },
];

let nicoru11 = [
  { year:2025, month:11, date:4, time:"22:17", name:"野原ひろし 昼メシの流儀 第5話「うどんすきの流儀/パンケーキの流儀」", url:"https://www.nicovideo.jp/watch/so45567000", fig:212, comment:"今まで見たアニメで一番目と耳が不幸せだった" },
];

let nicoru12 = [
  { year:2025, month:12, date:11, time:"02:37", name:"週刊ニコニコランキング \#962 -12月第2週-", url:"https://www.nicovideo.jp/watch/sm45717316", fig:11, comment:"このモカちゃんには添い寝してほしくないね" },
];

app.get("/nicoru", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('nicoru', {data: nicoru1} );
});

app.get("/nicoru1", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('nicoru1', {data: nicoru1} );
});

app.get("/nicoru1_add", (req, res) => {
  let year = req.query.year;
  let month = req.query.month;
  let date = req.query.date;
  let time = req.query.time;
  let name = req.query.name;
  let url = req.query.url;
  let fig = req.query.fig;
  let comment = req.query.comment;
  let newdata = { year: year, month: month, date: date, time: time, name: name, url: url, fig: fig, comment: comment };
  nicoru1.push( newdata );
  res.redirect('/public/nicoru1_add.html');
});

// Edit
app.get("/nicoru1/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = nicoru1[ number ];
  res.render('nicoru1_edit', {id: number, data: detail} );
});

// Update
app.post("/nicoru1/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  nicoru1[req.params.number].year = req.body.year;
  nicoru1[req.params.number].month = req.body.month;
  nicoru1[req.params.number].date = req.body.date;
  nicoru1[req.params.number].time = req.body.time;
  nicoru1[req.params.number].name = req.body.name;
  nicoru1[req.params.number].url = req.body.url;
  nicoru1[req.params.number].fig = req.body.fig;
  nicoru1[req.params.number].comment = req.body.comment;
  console.log( nicoru1 );
  res.redirect('/nicoru1' );
});

app.get("/nicoru1/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = nicoru1[ number ];
  res.render('nicoru1_detail', {id: number, data: detail} );
});

app.get("/nicoru2", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('nicoru2', {data: nicoru2} );
});

app.get("/nicoru2_add", (req, res) => {
  let year = req.query.year;
  let month = req.query.month;
  let date = req.query.date;
  let time = req.query.time;
  let name = req.query.name;
  let url = req.query.url;
  let fig = req.query.fig;
  let comment = req.query.comment;
  let newdata = { year: year, month: month, date: date, time: time, name: name, url: url, fig: fig, comment: comment };
  nicoru2.push( newdata );
  res.redirect('/public/nicoru2_add.html');
});

// Edit
app.get("/nicoru2/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = nicoru2[ number ];
  res.render('nicoru2_edit', {id: number, data: detail} );
});

// Update
app.post("/nicoru2/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  nicoru2[req.params.number].year = req.body.year;
  nicoru2[req.params.number].month = req.body.month;
  nicoru2[req.params.number].date = req.body.date;
  nicoru2[req.params.number].time = req.body.time;
  nicoru2[req.params.number].name = req.body.name;
  nicoru2[req.params.number].url = req.body.url;
  nicoru2[req.params.number].fig = req.body.fig;
  nicoru2[req.params.number].comment = req.body.comment;
  console.log( nicoru2 );
  res.redirect('/nicoru2' );
});

app.get("/nicoru2/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = nicoru2[ number ];
  res.render('nicoru2_detail', {id: number, data: detail} );
});

app.get("/nicoru3", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('nicoru3', {data: nicoru3} );
});

app.get("/nicoru3_add", (req, res) => {
  let year = req.query.year;
  let month = req.query.month;
  let date = req.query.date;
  let time = req.query.time;
  let name = req.query.name;
  let url = req.query.url;
  let fig = req.query.fig;
  let comment = req.query.comment;
  let newdata = { year: year, month: month, date: date, time: time, name: name, url: url, fig: fig, comment: comment };
  nicoru3.push( newdata );
  res.redirect('/public/nicoru3_add.html');
});

// Edit
app.get("/nicoru3/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = nicoru3[ number ];
  res.render('nicoru3_edit', {id: number, data: detail} );
});

// Update
app.post("/nicoru3/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  nicoru3[req.params.number].year = req.body.year;
  nicoru3[req.params.number].month = req.body.month;
  nicoru3[req.params.number].date = req.body.date;
  nicoru3[req.params.number].time = req.body.time;
  nicoru3[req.params.number].name = req.body.name;
  nicoru3[req.params.number].url = req.body.url;
  nicoru3[req.params.number].fig = req.body.fig;
  nicoru3[req.params.number].comment = req.body.comment;
  console.log( nicoru3 );
  res.redirect('/nicoru3' );
});

app.get("/nicoru3/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = nicoru3[ number ];
  res.render('nicoru3_detail', {id: number, data: detail} );
});

app.get("/nicoru4", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('nicoru4', {data: nicoru4} );
});

app.get("/nicoru4_add", (req, res) => {
  let year = req.query.year;
  let month = req.query.month;
  let date = req.query.date;
  let time = req.query.time;
  let name = req.query.name;
  let url = req.query.url;
  let fig = req.query.fig;
  let comment = req.query.comment;
  let newdata = { year: year, month: month, date: date, time: time, name: name, url: url, fig: fig, comment: comment };
  nicoru4.push( newdata );
  res.redirect('/public/nicoru4_add.html');
});

// Edit
app.get("/nicoru4/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = nicoru4[ number ];
  res.render('nicoru4_edit', {id: number, data: detail} );
});

// Update
app.post("/nicoru4/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  nicoru4[req.params.number].year = req.body.year;
  nicoru4[req.params.number].month = req.body.month;
  nicoru4[req.params.number].date = req.body.date;
  nicoru4[req.params.number].time = req.body.time;
  nicoru4[req.params.number].name = req.body.name;
  nicoru4[req.params.number].url = req.body.url;
  nicoru4[req.params.number].fig = req.body.fig;
  nicoru4[req.params.number].comment = req.body.comment;
  console.log( nicoru4 );
  res.redirect('/nicoru4' );
});

app.get("/nicoru4/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = nicoru4[ number ];
  res.render('nicoru4_detail', {id: number, data: detail} );
});

app.get("/nicoru5", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('nicoru5', {data: nicoru5} );
});

app.get("/nicoru5_add", (req, res) => {
  let year = req.query.year;
  let month = req.query.month;
  let date = req.query.date;
  let time = req.query.time;
  let name = req.query.name;
  let url = req.query.url;
  let fig = req.query.fig;
  let comment = req.query.comment;
  let newdata = { year: year, month: month, date: date, time: time, name: name, url: url, fig: fig, comment: comment };
  nicoru5.push( newdata );
  res.redirect('/public/nicoru5_add.html');
});

// Edit
app.get("/nicoru5/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = nicoru5[ number ];
  res.render('nicoru5_edit', {id: number, data: detail} );
});

// Update
app.post("/nicoru5/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  nicoru5[req.params.number].year = req.body.year;
  nicoru5[req.params.number].month = req.body.month;
  nicoru5[req.params.number].date = req.body.date;
  nicoru5[req.params.number].time = req.body.time;
  nicoru5[req.params.number].name = req.body.name;
  nicoru5[req.params.number].url = req.body.url;
  nicoru5[req.params.number].fig = req.body.fig;
  nicoru5[req.params.number].comment = req.body.comment;
  console.log( nicoru5 );
  res.redirect('/nicoru5' );
});

app.get("/nicoru5/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = nicoru5[ number ];
  res.render('nicoru5_detail', {id: number, data: detail} );
});

app.get("/nicoru6", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('nicoru6', {data: nicoru6} );
});

app.get("/nicoru6_add", (req, res) => {
  let year = req.query.year;
  let month = req.query.month;
  let date = req.query.date;
  let time = req.query.time;
  let name = req.query.name;
  let url = req.query.url;
  let fig = req.query.fig;
  let comment = req.query.comment;
  let newdata = { year: year, month: month, date: date, time: time, name: name, url: url, fig: fig, comment: comment };
  nicoru6.push( newdata );
  res.redirect('/public/nicoru6_add.html');
});

// Edit
app.get("/nicoru6/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = nicoru6[ number ];
  res.render('nicoru6_edit', {id: number, data: detail} );
});

// Update
app.post("/nicoru6/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  nicoru6[req.params.number].year = req.body.year;
  nicoru6[req.params.number].month = req.body.month;
  nicoru6[req.params.number].date = req.body.date;
  nicoru6[req.params.number].time = req.body.time;
  nicoru6[req.params.number].name = req.body.name;
  nicoru6[req.params.number].url = req.body.url;
  nicoru6[req.params.number].fig = req.body.fig;
  nicoru6[req.params.number].comment = req.body.comment;
  console.log( nicoru6 );
  res.redirect('/nicoru6' );
});

app.get("/nicoru6/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = nicoru6[ number ];
  res.render('nicoru6_detail', {id: number, data: detail} );
});

app.get("/nicoru7", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('nicoru7', {data: nicoru7} );
});

app.get("/nicoru7_add", (req, res) => {
  let year = req.query.year;
  let month = req.query.month;
  let date = req.query.date;
  let time = req.query.time;
  let name = req.query.name;
  let url = req.query.url;
  let fig = req.query.fig;
  let comment = req.query.comment;
  let newdata = { year: year, month: month, date: date, time: time, name: name, url: url, fig: fig, comment: comment };
  nicoru7.push( newdata );
  res.redirect('/public/nicoru7_add.html');
});

// Edit
app.get("/nicoru7/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = nicoru7[ number ];
  res.render('nicoru7_edit', {id: number, data: detail} );
});

// Update
app.post("/nicoru7/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  nicoru7[req.params.number].year = req.body.year;
  nicoru7[req.params.number].month = req.body.month;
  nicoru7[req.params.number].date = req.body.date;
  nicoru7[req.params.number].time = req.body.time;
  nicoru7[req.params.number].name = req.body.name;
  nicoru7[req.params.number].url = req.body.url;
  nicoru7[req.params.number].fig = req.body.fig;
  nicoru7[req.params.number].comment = req.body.comment;
  console.log( nicoru7 );
  res.redirect('/nicoru7' );
});

app.get("/nicoru7/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = nicoru7[ number ];
  res.render('nicoru7_detail', {id: number, data: detail} );
});

app.get("/nicoru8", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('nicoru8', {data: nicoru8} );
});

app.get("/nicoru8_add", (req, res) => {
  let year = req.query.year;
  let month = req.query.month;
  let date = req.query.date;
  let time = req.query.time;
  let name = req.query.name;
  let url = req.query.url;
  let fig = req.query.fig;
  let comment = req.query.comment;
  let newdata = { year: year, month: month, date: date, time: time, name: name, url: url, fig: fig, comment: comment };
  nicoru8.push( newdata );
  res.redirect('/public/nicoru8_add.html');
});

// Edit
app.get("/nicoru8/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = nicoru8[ number ];
  res.render('nicoru8_edit', {id: number, data: detail} );
});

// Update
app.post("/nicoru8/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  nicoru8[req.params.number].year = req.body.year;
  nicoru8[req.params.number].month = req.body.month;
  nicoru8[req.params.number].date = req.body.date;
  nicoru8[req.params.number].time = req.body.time;
  nicoru8[req.params.number].name = req.body.name;
  nicoru8[req.params.number].url = req.body.url;
  nicoru8[req.params.number].fig = req.body.fig;
  nicoru8[req.params.number].comment = req.body.comment;
  console.log( nicoru8 );
  res.redirect('/nicoru8' );
});

app.get("/nicoru8/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = nicoru8[ number ];
  res.render('nicoru8_detail', {id: number, data: detail} );
});

app.get("/nicoru9", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('nicoru9', {data: nicoru9} );
});

app.get("/nicoru9_add", (req, res) => {
  let year = req.query.year;
  let month = req.query.month;
  let date = req.query.date;
  let time = req.query.time;
  let name = req.query.name;
  let url = req.query.url;
  let fig = req.query.fig;
  let comment = req.query.comment;
  let newdata = { year: year, month: month, date: date, time: time, name: name, url: url, fig: fig, comment: comment };
  nicoru9.push( newdata );
  res.redirect('/public/nicoru9_add.html');
});

// Edit
app.get("/nicoru9/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = nicoru9[ number ];
  res.render('nicoru9_edit', {id: number, data: detail} );
});

// Update
app.post("/nicoru9/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  nicoru9[req.params.number].year = req.body.year;
  nicoru9[req.params.number].month = req.body.month;
  nicoru9[req.params.number].date = req.body.date;
  nicoru9[req.params.number].time = req.body.time;
  nicoru9[req.params.number].name = req.body.name;
  nicoru9[req.params.number].url = req.body.url;
  nicoru9[req.params.number].fig = req.body.fig;
  nicoru9[req.params.number].comment = req.body.comment;
  console.log( nicoru9 );
  res.redirect('/nicoru9' );
});

app.get("/nicoru9/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = nicoru9[ number ];
  res.render('nicoru9_detail', {id: number, data: detail} );
});

app.get("/nicoru10", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('nicoru10', {data: nicoru10} );
});

app.get("/nicoru10_add", (req, res) => {
  let year = req.query.year;
  let month = req.query.month;
  let date = req.query.date;
  let time = req.query.time;
  let name = req.query.name;
  let url = req.query.url;
  let fig = req.query.fig;
  let comment = req.query.comment;
  let newdata = { year: year, month: month, date: date, time: time, name: name, url: url, fig: fig, comment: comment };
  nicoru10.push( newdata );
  res.redirect('/public/nicoru10_add.html');
});

// Edit
app.get("/nicoru10/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = nicoru10[ number ];
  res.render('nicoru10_edit', {id: number, data: detail} );
});

// Update
app.post("/nicoru10/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  nicoru10[req.params.number].year = req.body.year;
  nicoru10[req.params.number].month = req.body.month;
  nicoru10[req.params.number].date = req.body.date;
  nicoru10[req.params.number].time = req.body.time;
  nicoru10[req.params.number].name = req.body.name;
  nicoru10[req.params.number].url = req.body.url;
  nicoru10[req.params.number].fig = req.body.fig;
  nicoru10[req.params.number].comment = req.body.comment;
  console.log( nicoru10 );
  res.redirect('/nicoru10' );
});

app.get("/nicoru10/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = nicoru10[ number ];
  res.render('nicoru10_detail', {id: number, data: detail} );
});

app.get("/nicoru11", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('nicoru11', {data: nicoru11} );
});

app.get("/nicoru11_add", (req, res) => {
  let year = req.query.year;
  let month = req.query.month;
  let date = req.query.date;
  let time = req.query.time;
  let name = req.query.name;
  let url = req.query.url;
  let fig = req.query.fig;
  let comment = req.query.comment;
  let newdata = { year: year, month: month, date: date, time: time, name: name, url: url, fig: fig, comment: comment };
  nicoru11.push( newdata );
  res.redirect('/public/nicoru11_add.html');
});

// Edit
app.get("/nicoru11/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = nicoru11[ number ];
  res.render('nicoru11_edit', {id: number, data: detail} );
});

// Update
app.post("/nicoru11/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  nicoru11[req.params.number].year = req.body.year;
  nicoru11[req.params.number].month = req.body.month;
  nicoru11[req.params.number].date = req.body.date;
  nicoru11[req.params.number].time = req.body.time;
  nicoru11[req.params.number].name = req.body.name;
  nicoru11[req.params.number].url = req.body.url;
  nicoru11[req.params.number].fig = req.body.fig;
  nicoru11[req.params.number].comment = req.body.comment;
  console.log( nicoru11 );
  res.redirect('/nicoru11' );
});

app.get("/nicoru11/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = nicoru11[ number ];
  res.render('nicoru11_detail', {id: number, data: detail} );
});

app.get("/nicoru12", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('nicoru12', {data: nicoru12} );
});

app.get("/nicoru12_add", (req, res) => {
  let year = req.query.year;
  let month = req.query.month;
  let date = req.query.date;
  let time = req.query.time;
  let name = req.query.name;
  let url = req.query.url;
  let fig = req.query.fig;
  let comment = req.query.comment;
  let newdata = { year: year, month: month, date: date, time: time, name: name, url: url, fig: fig, comment: comment };
  nicoru12.push( newdata );
  res.redirect('/public/nicoru12_add.html');
});

// Edit
app.get("/nicoru12/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = nicoru12[ number ];
  res.render('nicoru12_edit', {id: number, data: detail} );
});

// Update
app.post("/nicoru12/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  nicoru12[req.params.number].year = req.body.year;
  nicoru12[req.params.number].month = req.body.month;
  nicoru12[req.params.number].date = req.body.date;
  nicoru12[req.params.number].time = req.body.time;
  nicoru12[req.params.number].name = req.body.name;
  nicoru12[req.params.number].url = req.body.url;
  nicoru12[req.params.number].fig = req.body.fig;
  nicoru12[req.params.number].comment = req.body.comment;
  console.log( nicoru12 );
  res.redirect('/nicoru12' );
});

app.get("/nicoru12/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = nicoru12[ number ];
  res.render('nicoru12_detail', {id: number, data: detail} );
});

let isamasi = [
  { name:"さきがけの助", hp:440, power:243, magic:91, defence:86, characteristics:"クリティカルされやすくなるがクリティカルがでやすくなる。", move1:"こんしんの一撃", move2:"回避", special:"こんしんの一撃で 近くの敵に大ダメージを与える。", comment:"必殺技が単発であるのが欠点だが，安定して高火力なアタッカー" },
  { name:"やきモチ", hp:415, power:177, magic:47, defence:205, characteristics:"まもりが高いほど攻撃力がアップ。", move1:"気合いの一発", move2:"よろい砕き", special:"こんしんの一撃で 近くの敵に大ダメージを与える。", comment:"よろい砕きなど，いろいろなバフを積んでもあまり火力は出ない" },
  { name:"おにぎり侍", hp:396, power:191, magic:103, defence:112, characteristics:"鬼系の敵へのダメージがアップ。", move1:"神速アタック", move2:"回避", special:"こんしんの一撃で 近くの敵に大ダメージを与える。", comment:"鬼系の敵と戦う際に，鬼砕き・絶と組み合わせて擬似ブシニャンとして戦うとなんか気持ちが高まる" },
  { name:"黄泉ゲンスイ", hp:411, power:247, magic:118, defence:235, characteristics:"敵の攻撃をガードした時 自分の妖気ゲージが溜まる。", move1:"ガード", move2:"超・よろい砕き", special:"こんしんの一撃で 近くの敵に大ダメージを与える。", comment:"高いHPとガードで高い防御力を誇り，スキルのおかげで1000ダメージ近くの必殺技を連発できて強い" },
  { name:"しょうブシ", hp:393, power:208, magic:117, defence:132, characteristics:"クリティカルされやすくなるがクリティカルがでやすくなる。", move1:"神速アタック", move2:"疾風ステップ", special:"まわりの味方の攻撃力をしばらく大アップさせる。", comment:"後隙の短い技をクリティカル込みで連発しまくれるため，効率の良いダメージを出せる" },
];

let husigi = [
  { name:"化け草履", hp:335, power:80, magic:199, defence:126, characteristics:"ミッション開始から3分たつと全ステータスがアップ。", move1:"気合いの一発", move2:"疾風ステップ", special:"重たい岩石を落とし 敵に大ダメージを与える。", comment:"回避疾風を持っているため，生存力が高い．さらに，3分経つと前ステータスが上がるため長期戦に強いが，ちからが低いのがネック" },
  { name:"かぜカモ", hp:339, power:117, magic:210, defence:149, characteristics:"こうげきに風ぞくせいを追加する。", move1:"あられの術", move2:"まもりダウン", special:"こんしんの一撃で 近くの敵に大ダメージを与える。", comment:"友達に悪ふざけで育てられたやつ．なんで3体も育成したんや・・・" },
  { name:"でんぱく小僧", hp:345, power:149, magic:183, defence:98, characteristics:"こうげきに風ぞくせいを追加する。", move1:"気合いの一発", move2:"電流の術", special:"激しい雷を落とし 敵に大ダメージを与える。", comment:"こうげきに雷ぞくせいが追加されれるため，つられ太郎丸や青鬼に物理で弱点を押し付けることができる．別に強くないと思う" },
  { name:"かげ老師", hp:351, power:155, magic:238, defence:111, characteristics:"気絶した時、一度だけ自分のHPを全回復する。", move1:"疾風ステップ", move2:"回避", special:"青白い炎をあやつり 敵に大ダメージを与える。", comment:"回避疾風を持っており，スキルで全回復できるため，蘇生役として十分すぎる．さらに火力も申し分ない最強" },
];

let goketu = [
  { name:"ドキ土器", hp:336, power:162, magic:54, defence:188, characteristics:"トラップの設置スピードが速くなる。", move1:"気合いの一発", move2:"まもりダウン", special:"敵の攻撃力を しばらく超ダウンさせる。", comment:"対日ノ神で有用な妖怪．後隙の短い攻撃と即座に設置できるトラップが非常に強力" },
  { name:"むりだ城", hp:442, power:163, magic:87, defence:248, characteristics:"わざゲージが減りにくくなる。", move1:"超・よろい砕き", move2:"鉄壁ガード", special:"自分のまもりを超アップし まわりの敵の注意を引く", comment:"スキルのおかげで長く使える鉄壁ガードで耐久しつつ超・よろい砕きで味方のサポートができるタンク．ただしデカい" },
  { name:"シロカベ", hp:449, power:176, magic:109, defence:246, characteristics:"わざゲージが減りにくくなる。", move1:"超・刀狩り", move2:"鉄壁ガード", special:"重たい岩石を落とし 敵に大ダメージを与える。", comment:"スキルのおかげで長く使える鉄壁ガードと超・刀狩りで長く生き残るタンク．必殺技で敵の動きを止めることもできる．ただしデカい" },
];

let puriti = [
  { name:"びきゃく", hp:359, power:78, magic:204, defence:99, characteristics:"味方全員のHPがだんだん回復。", move1:"気合いの一発", move2:"超・はやさアップ", special:"まわりの味方のスピードを しばらく大アップさせる。", comment:"技と必殺技ではやさを上げることができるため，技の回転率が良い．また，スキルで自動回復ができるため，おともに最適である．ただ，アタッカー編成はばくそくに敵わないのでやめましょう" },
  { name:"あつガルル", hp:400, power:113, magic:221, defence:196, characteristics:"攻撃するほど攻撃力アップ。攻撃しないと効果が切れる。", move1:"神速アタック", move2:"回避", special:"燃えさかる炎で 敵に大ダメージを与える。", comment:"スキルと恵まれた技で攻撃をするほど攻撃力がアップする擬似ブシニャン妖怪．攻撃力の低さはネックだが，対Gババーン戦では必殺技が弱点であるため若干あつガルルの方が軍配が上がるかもしれない" },
  { name:"一つ目小僧", hp:357, power:198, magic:78, defence:147, characteristics:"クリティカルがでやすくなる。", move1:"気合いの一発", move2:"回避", special:"敵の攻撃力を しばらく超ダウンさせる", comment:"安定したクリティカル攻撃と使いやすい技たちだが，火力等で他のクリティカルアタッカーに見劣りする．しかし，必殺技で敵の攻撃力を下げれるため生き延びやすい" },
  { name:"ジバニャンS", hp:434, power:235, magic:132, defence:139, characteristics:"回避で 敵の攻撃をよけやすくなる。", move1:"突撃ラッシュ", move2:"回避", special:"連続攻撃を叩き込み 敵に大ダメージを与える。", comment:"スキルのおかげで敵の攻撃を避けやすい．また，突撃ラッシュや必殺技でたくさん攻撃できるため，ギヤマン魂などと相性が良い" },
  { name:"コマさん", hp:368, power:110, magic:215, defence:127, characteristics:"自分がピンチの間全ステータスがアップ。", move1:"気合いの一発", move2:"火炎の術", special:"青白い炎をあやつり 敵に大ダメージを与える。", comment:"HP1でいろんなバフを持った状態で戦うキャラ．回避などを持たないため上級者向けである" },
  { name:"ハク", hp:362, power:140, magic:241, defence:139, characteristics:"味方を復活させるスピードが速くなる。", move1:"超・こうげきアップ", move2:"回復の術", special:"まわりの味方のHPを ガンガン回復する。", comment:"スキルのおかげで味方の復活が早くなりかつ，超・こうげきアップで味方にバフをかけれる．しかし，回復の術があまり回復力がないので，無理は禁物" },
];

let pokapoka = [
  { name:"メカブちゃん", hp:366, power:110, magic:213, defence:131, characteristics:"味方全員のまもりがアップ。", move1:"はやさアップ", move2:"回復の術", special:"まわりの味方のHPを ガンガン回復する。", comment:"メカブちゃんを複数連れてくとアホほど耐久力が上がる" },
];

let usurakage = [
  { name:"ドライビングUSAピョン", hp:415, power:243, magic:71, defence:121, characteristics:"攻撃するほどすばやさアップ。攻撃しないと効果が切れる。", move1:"神速アタック", move2:"回避", special:"レースカーを召喚し 敵に大ダメージを与える。", comment:"赤魔寝鬼G魂でA攻撃を連打しまくり，月影丸で敵の防御を下げまくるのがメインの戦い方" },
  { name:"きらめ鬼", hp:460, power:110, magic:197, defence:253, characteristics:"復活した時 一時的に全ステータスがアップ。", move1:"超・よろい砕き", move2:"鉄壁ガード", special:"空からビームを降らし 敵に大ダメージを与える。", comment:"必殺技が溜まったら死んで蘇生してもらい，全ステアップした状態で必殺技を打つのが主な戦い方．耐久力が高いおかげで安定して必殺技を貯めることができる．必殺技は妖術" },
];

let bukimi = [
  { name:"ダークニャン", hp:395, power:224, magic:113, defence:168, characteristics:"味方全員まもりがダウンしすばやさがアップ。", move1:"神速アタック", move2:"猛毒の術", special:"まっすぐ突撃して 敵に大ダメージを与える。", comment:"スキルのおかげで回避がなくても生存力が高い．また，取り憑かれてると発動するスキルを自発的に発動させることができる．さらに，技も物理アタッカーとして良いものが揃っている" },

];

let nyororon = [
  { name:"こんがらギャル", hp:412, power:232, magic:91, defence:195, characteristics:"敵がアイテムを落としやすくなる。", move1:"チャージ攻撃", move2:"衝撃スタンプ", special:"敵の攻撃力を しばらく超ダウンさせる。", comment:"高い攻撃力，短い後隙で殴りまくるアタッカー．必殺技や技で一時的に耐久力を上げることができる．パトロール時のコイツはトラウマ級" },
  { name:"ウィスパー", hp:391, power:83, magic:215, defence:131, characteristics:"味方全員クリティカルが出やすくなる", move1:"超・まもりダウン", move2:"回避", special:"敵に攻撃し まもりをしばらく大ダウンさせる。", comment:"スキル，技，必殺技などあらゆる方面でサポート力がとても高い" },
  { name:"オロチ", hp:432, power:240, magic:146, defence:147, characteristics:"敵に見つかっていない時に攻撃すると必ずクリティカル。", move1:"神速アタック", move2:"疾風ステップ", special:"連続攻撃を叩き込み 敵に大ダメージを与える。", comment:"ジミーフィールドを使い攻撃するとまさかの確定クリティカルとなるため，瞬殺に使われる頭がおかしい妖怪" },
];

app.get("/busters", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('busters', {data: isamasi} );
});

app.get("/isamasi", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('isamasi', { data: isamasi });
});

app.get("/isamasi_add", (req, res) => {
  let name = req.query.name;
  let hp = req.query.hp;
  let power = req.query.power;
  let magic = req.query.magic;
  let defence = req.query.defence;
  let characteristics = req.query.characteristics;
  let move1 = req.query.move1;
  let move2 = req.query.move2;
  let special = req.query.special;
  let comment = req.query.comment;
  let newdata = {name: name, hp: hp, power: power, magic: magic, defence: defence, characteristics: characteristics, move1: move1, move2: move2, special: special, comment: comment };
  isamasi.push(newdata);
  res.redirect('/public/isamasi_add.html');
});

// Edit
app.get("/isamasi/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = isamasi[number];
  res.render('isamasi_edit', { id: number, data: detail });
});


// Update
app.post("/isamasi/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  isamasi[req.params.number].name = req.body.name;
  isamasi[req.params.number].hp = req.body.hp;
  isamasi[req.params.number].power = req.body.power;
  isamasi[req.params.number].magic = req.body.magic;
  isamasi[req.params.number].defence = req.body.defence;
  isamasi[req.params.number].characteristics = req.body.characteristics;
  isamasi[req.params.number].move1 = req.body.move1;
  isamasi[req.params.number].move2 = req.body.move2;
  isamasi[req.params.number].special = req.body.special;
  isamasi[req.params.number].comment = req.body.comment;
  console.log(isamasi);
  res.redirect('/isamasi');
});

app.get("/isamasi/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = isamasi[number];
  res.render('isamasi_detail', { id: number, data: detail });
});

app.get("/husigi", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('husigi', { data: husigi });
});

app.get("/husigi_add", (req, res) => {
  let name = req.query.name;
  let hp = req.query.hp;
  let power = req.query.power;
  let magic = req.query.magic;
  let defence = req.query.defence;
  let characteristics = req.query.characteristics;
  let move1 = req.query.move1;
  let move2 = req.query.move2;
  let special = req.query.special;
  let comment = req.query.comment;
  let newdata = {name: name, hp: hp, power: power, magic: magic, defence: defence, characteristics: characteristics, move1: move1, move2: move2, special: special, comment: comment };
  husigi.push(newdata);
  res.redirect('/public/husigi_add.html');
});

// Edit
app.get("/husigi/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = husigi[number];
  res.render('husigi_edit', { id: number, data: detail });
});


// Update
app.post("/husigi/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  husigi[req.params.number].name = req.body.name;
  husigi[req.params.number].hp = req.body.hp;
  husigi[req.params.number].power = req.body.power;
  husigi[req.params.number].magic = req.body.magic;
  husigi[req.params.number].defence = req.body.defence;
  husigi[req.params.number].characteristics = req.body.characteristics;
  husigi[req.params.number].move1 = req.body.move1;
  husigi[req.params.number].move2 = req.body.move2;
  husigi[req.params.number].special = req.body.special;
  husigi[req.params.number].comment = req.body.comment;
  console.log(husigi);
  res.redirect('/husigi');
});

app.get("/husigi/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = husigi[number];
  res.render('husigi_detail', { id: number, data: detail });
});

app.get("/goketu", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('goketu', { data: goketu });
});

app.get("/goketu_add", (req, res) => {
  let name = req.query.name;
  let hp = req.query.hp;
  let power = req.query.power;
  let magic = req.query.magic;
  let defence = req.query.defence;
  let characteristics = req.query.characteristics;
  let move1 = req.query.move1;
  let move2 = req.query.move2;
  let special = req.query.special;
  let comment = req.query.comment;
  let newdata = {name: name, hp: hp, power: power, magic: magic, defence: defence, characteristics: characteristics, move1: move1, move2: move2, special: special, comment: comment };
  goketu.push(newdata);
  res.redirect('/public/goketu_add.html');
});

// Edit
app.get("/goketu/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = goketu[number];
  res.render('goketu_edit', { id: number, data: detail });
});


// Update
app.post("/goketu/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  goketu[req.params.number].name = req.body.name;
  goketu[req.params.number].hp = req.body.hp;
  goketu[req.params.number].power = req.body.power;
  goketu[req.params.number].magic = req.body.magic;
  goketu[req.params.number].defence = req.body.defence;
  goketu[req.params.number].characteristics = req.body.characteristics;
  goketu[req.params.number].move1 = req.body.move1;
  goketu[req.params.number].move2 = req.body.move2;
  goketu[req.params.number].special = req.body.special;
  goketu[req.params.number].comment = req.body.comment;
  console.log(goketu);
  res.redirect('/goketu');
});

app.get("/goketu/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = goketu[number];
  res.render('goketu_detail', { id: number, data: detail });
});

app.get("/puriti", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('puriti', { data: puriti });
});

app.get("/puriti_add", (req, res) => {
  let name = req.query.name;
  let hp = req.query.hp;
  let power = req.query.power;
  let magic = req.query.magic;
  let defence = req.query.defence;
  let characteristics = req.query.characteristics;
  let move1 = req.query.move1;
  let move2 = req.query.move2;
  let special = req.query.special;
  let comment = req.query.comment;
  let newdata = {name: name, hp: hp, power: power, magic: magic, defence: defence, characteristics: characteristics, move1: move1, move2: move2, special: special, comment: comment };
  puriti.push(newdata);
  res.redirect('/public/puriti_add.html');
});

// Edit
app.get("/puriti/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = puriti[number];
  res.render('puriti_edit', { id: number, data: detail });
});


// Update
app.post("/puriti/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  puriti[req.params.number].name = req.body.name;
  puriti[req.params.number].hp = req.body.hp;
  puriti[req.params.number].power = req.body.power;
  puriti[req.params.number].magic = req.body.magic;
  puriti[req.params.number].defence = req.body.defence;
  puriti[req.params.number].characteristics = req.body.characteristics;
  puriti[req.params.number].move1 = req.body.move1;
  puriti[req.params.number].move2 = req.body.move2;
  puriti[req.params.number].special = req.body.special;
  puriti[req.params.number].comment = req.body.comment;
  console.log(puriti);
  res.redirect('/puriti');
});

app.get("/puriti/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = puriti[number];
  res.render('puriti_detail', { id: number, data: detail });
});

app.get("/pokapoka", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('pokapoka', { data: pokapoka });
});

app.get("/pokapoka_add", (req, res) => {
  let name = req.query.name;
  let hp = req.query.hp;
  let power = req.query.power;
  let magic = req.query.magic;
  let defence = req.query.defence;
  let characteristics = req.query.characteristics;
  let move1 = req.query.move1;
  let move2 = req.query.move2;
  let special = req.query.special;
  let comment = req.query.comment;
  let newdata = {name: name, hp: hp, power: power, magic: magic, defence: defence, characteristics: characteristics, move1: move1, move2: move2, special: special, comment: comment };
  pokapoka.push(newdata);
  res.redirect('/public/pokapoka_add.html');
});

// Edit
app.get("/pokapoka/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = pokapoka[number];
  res.render('pokapoka_edit', { id: number, data: detail });
});


// Update
app.post("/pokapoka/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  pokapoka[req.params.number].name = req.body.name;
  pokapoka[req.params.number].hp = req.body.hp;
  pokapoka[req.params.number].power = req.body.power;
  pokapoka[req.params.number].magic = req.body.magic;
  pokapoka[req.params.number].defence = req.body.defence;
  pokapoka[req.params.number].characteristics = req.body.characteristics;
  pokapoka[req.params.number].move1 = req.body.move1;
  pokapoka[req.params.number].move2 = req.body.move2;
  pokapoka[req.params.number].special = req.body.special;
  pokapoka[req.params.number].comment = req.body.comment;
  console.log(pokapoka);
  res.redirect('/pokapoka');
});

app.get("/pokapoka/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = pokapoka[number];
  res.render('pokapoka_detail', { id: number, data: detail });
});

app.get("/usurakage", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('usurakage', { data: usurakage });
});

app.get("/usurakage_add", (req, res) => {
  let name = req.query.name;
  let hp = req.query.hp;
  let power = req.query.power;
  let magic = req.query.magic;
  let defence = req.query.defence;
  let characteristics = req.query.characteristics;
  let move1 = req.query.move1;
  let move2 = req.query.move2;
  let special = req.query.special;
  let comment = req.query.comment;
  let newdata = {name: name, hp: hp, power: power, magic: magic, defence: defence, characteristics: characteristics, move1: move1, move2: move2, special: special, comment: comment };
  usurakage.push(newdata);
  res.redirect('/public/usurakage_add.html');
});

// Edit
app.get("/usurakage/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = usurakage[number];
  res.render('usurakage_edit', { id: number, data: detail });
});


// Update
app.post("/usurakage/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  usurakage[req.params.number].name = req.body.name;
  usurakage[req.params.number].hp = req.body.hp;
  usurakage[req.params.number].power = req.body.power;
  usurakage[req.params.number].magic = req.body.magic;
  usurakage[req.params.number].defence = req.body.defence;
  usurakage[req.params.number].characteristics = req.body.characteristics;
  usurakage[req.params.number].move1 = req.body.move1;
  usurakage[req.params.number].move2 = req.body.move2;
  usurakage[req.params.number].special = req.body.special;
  usurakage[req.params.number].comment = req.body.comment;
  console.log(usurakage);
  res.redirect('/usurakage');
});

app.get("/usurakage/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = usurakage[number];
  res.render('usurakage_detail', { id: number, data: detail });
});

app.get("/bukimi", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('bukimi', { data: bukimi });
});

app.get("/bukimi_add", (req, res) => {
  let name = req.query.name;
  let hp = req.query.hp;
  let power = req.query.power;
  let magic = req.query.magic;
  let defence = req.query.defence;
  let characteristics = req.query.characteristics;
  let move1 = req.query.move1;
  let move2 = req.query.move2;
  let special = req.query.special;
  let comment = req.query.comment;
  let newdata = {name: name, hp: hp, power: power, magic: magic, defence: defence, characteristics: characteristics, move1: move1, move2: move2, special: special, comment: comment };
  bukimi.push(newdata);
  res.redirect('/public/bukimi_add.html');
});

// Edit
app.get("/bukimi/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = bukimi[number];
  res.render('bukimi_edit', { id: number, data: detail });
});


// Update
app.post("/bukimi/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  bukimi[req.params.number].name = req.body.name;
  bukimi[req.params.number].hp = req.body.hp;
  bukimi[req.params.number].power = req.body.power;
  bukimi[req.params.number].magic = req.body.magic;
  bukimi[req.params.number].defence = req.body.defence;
  bukimi[req.params.number].characteristics = req.body.characteristics;
  bukimi[req.params.number].move1 = req.body.move1;
  bukimi[req.params.number].move2 = req.body.move2;
  bukimi[req.params.number].special = req.body.special;
  bukimi[req.params.number].comment = req.body.comment;
  console.log(bukimi);
  res.redirect('/bukimi');
});

app.get("/bukimi/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = bukimi[number];
  res.render('bukimi_detail', { id: number, data: detail });
});

app.get("/nyororon", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('nyororon', { data: nyororon });
});

app.get("/nyororon_add", (req, res) => {
  let name = req.query.name;
  let hp = req.query.hp;
  let power = req.query.power;
  let magic = req.query.magic;
  let defence = req.query.defence;
  let characteristics = req.query.characteristics;
  let move1 = req.query.move1;
  let move2 = req.query.move2;
  let special = req.query.special;
  let comment = req.query.comment;
  let newdata = {name: name, hp: hp, power: power, magic: magic, defence: defence, characteristics: characteristics, move1: move1, move2: move2, special: special, comment: comment };
  nyororon.push(newdata);
  res.redirect('/public/nyororon_add.html');
});

// Edit
app.get("/nyororon/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = nyororon[number];
  res.render('nyororon_edit', { id: number, data: detail });
});


// Update
app.post("/nyororon/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  nyororon[req.params.number].name = req.body.name;
  nyororon[req.params.number].hp = req.body.hp;
  nyororon[req.params.number].power = req.body.power;
  nyororon[req.params.number].magic = req.body.magic;
  nyororon[req.params.number].defence = req.body.defence;
  nyororon[req.params.number].characteristics = req.body.characteristics;
  nyororon[req.params.number].move1 = req.body.move1;
  nyororon[req.params.number].move2 = req.body.move2;
  nyororon[req.params.number].special = req.body.special;
  nyororon[req.params.number].comment = req.body.comment;
  console.log(nyororon);
  res.redirect('/nyororon');
});

app.get("/nyororon/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = nyororon[number];
  res.render('nyororon_detail', { id: number, data: detail });
});

let saitama = [
  { name:"BOOKOFF 東川口マルエツ店", adress:"埼玉県川口市戸塚2-28-20マルエツ2F", open:"10:00～21:00", time:21, comment:"ストレージは適当に並べられているため，見づらい。たまに面白い掘り出し物が見つかる" },
  { name:"ふるいちイオンモール川口前川店", adress:"埼玉県川口市前川1-1-11イオンモール川口前川店3F", open:"10:00～21:00", time:25, comment:"新しいストレージは分けられているためわかりすい。狭い" },
  { name:"カードボックス川口店", adress:"埼玉県川口市本町2-7-25 ミエルかわぐち内3F", open:"10:00～21:00", time:26, comment:"行ったのがデュエマにハマる前だったため、あまり記憶がない" },  
  { name:"桃太郎王国草加バイパス店", adress:"埼玉県草加市西町458-6", open:"11:30～20:00", time:23, comment:"ストレージの安さが魅力的であるが、ショーケースの中の値段が高い" },  
];

let chiba = [
  { name:"カードラボ津田沼店", adress:"千葉県習志野市津田沼1-23-1 イオンモール津田沼 2階", open:"10:00～21:00", time:100, comment:"ストレージはとても見やすいが、高い" },
  { name:"ホビーステーション 津田沼店", adress:"千葉県習志野市津田沼1丁目2-22 小倉ビル 3階", open:"12:00～21:00", time:96, comment:"ちょっとしかショーケースを覗いてないが、品揃えの悪さと狭さが際立つ" },
];

app.get("/cardshop", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('cardshop', {data: saitama} );
});

app.get("/saitama", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('saitama', { data: saitama });
});

app.get("/saitama_add", (req, res) => {
  let name = req.query.name;
  let adress = req.query.adress;
  let open = req.query.open;
  let time = req.query.time;
  let comment = req.query.comment;
  let newdata = {name: name,adress: adress,open: open,time: time,comment: comment};
  saitama.push(newdata);
  res.redirect('/public/saitama_add.html');
});

// Edit
app.get("/saitama/edit/:number", (req, res) => { 
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = saitama[number];
  res.render('saitama_edit', { id: number, data: detail });
});


// Update
app.post("/saitama/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  saitama[req.params.number].name = req.body.name;
  saitama[req.params.number].adress = req.body.adress;
  saitama[req.params.number].open = req.body.open;
  saitama[req.params.number].time = req.body.time;
  saitama[req.params.number].comment = req.body.comment;
  console.log(saitama);
  res.redirect('/saitama');
});


app.get("/saitama/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = saitama[number];
  res.render('saitama_detail', { id: number, data: detail });
});

app.get("/chiba", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('chiba', { data: chiba });
});

app.get("/chiba_add", (req, res) => {
  let name = req.query.name;
  let adress = req.query.adress;
  let open = req.query.open;
  let time = req.query.time;
  let comment = req.query.comment;
  let newdata = {name: name,adress: adress,open: open,time: time,comment: comment};
  chiba.push(newdata);
  res.redirect('/public/chiba_add.html');
});

// Edit
app.get("/chiba/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = chiba[number];
  res.render('chiba_edit', { id: number, data: detail });
});


// Update
app.post("/chiba/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  chiba[req.params.number].name = req.body.name;
  chiba[req.params.number].adress = req.body.adress;
  chiba[req.params.number].open = req.body.open;
  chiba[req.params.number].time = req.body.time;
  chiba[req.params.number].comment = req.body.comment;
  console.log(chiba);
  res.redirect('/chiba');
});

app.get("/chiba/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = chiba[number];

  res.render('chiba_detail', { id: number, data: detail });
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
