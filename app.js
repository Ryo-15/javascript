var hello = 'Hello World';
alert(hello);

// 変数を代入する
var int1 = 1;

// 負数を代入する
var int2 = -10;

// 小数点を代入する
var float1 = 3.14;

// 文字列を代入する
var str1 = 'JavaScriptを覚えよう';
alert(str1);

// 足し算
alert(5 + 6);

// 引き算
alert(44 - 5);

// かけ算
alert(68 * 5);

// 割り算
alert(56 / 2);

// 文字列の結合
alert('Hello' + 'World');

// 変数同士の結合
var str1 = 'Hello';
var str2 = 'World!!';
alert(str1 + str2);

// りんごとみかんの値段を比べる
var orange = 100;
var apple = 120;

if(orange < apple){
  alert('みかんの値段がりんごより安い');
}
else if(orege == apple){
  alert('みかんとりんごが同じ値段');
}
else{
  alert('みかんの値段がりんごより高い')
}

// 「1」を基準に「2」を掛け続けた場合、何回で「100」を超えるかを測定
var max = 100;
var num = 1;
var count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// 数字を「1」から「10」まで足し算を行い、その結果を表示する処理
// 「変数i」を宣言
var i;
// 「変数num」を宣言し、初期値を「0」に設定
var num = 0;
// 変数iの初期値を「1」に設定し、変数iが「11」未満のときは変数iに1を足す（「i++」は「 i = i+1」と同じ）
for(i = 1; i < 11; i++){
  // 変数numに「num+i」を代入
  num = num + i;
}

alert ('1から10まで足し算した結果は' + num + 'です');

// 関数の記述
var alertString;
alertString = addString("WebCamp");

// 作成した関数を呼び出す
alert(alertString);

// functionの後に、関数名「addString」を記述し、引数として「strA」を定義しています。
function addString(strA){
  // 変数名「addStr」に、「Hello 」の文字列と、関数の引数「strA」に設定されている文字列を結合
  var addStr = "Hello " + strA;
  return addStr;
}

// 入力ダイアログ
var promptStr = prompt('何か好きな文字を入力してください');
alert(promptStr);

// じゃんけん対決
// じゃんけんの手を入力してもらうプロンプト欄を生成
var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
// 「"グー"以外且つ、チョキ"以外且つ、"パー"以外且つ、キャンセルボタン以外だったら」
while ((user_hand != "グー")&&(user_hand != "チョキ")&&(user_hand != "パー")&&(user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力してください');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んで下さい');
}
// じゃんけんの手をランダムに作成する関数を呼び出す
var js_hand = getJShand();
// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
var judge = winLose(user_hand, js_hand);
// 結果
// 「キャンセルじゃなかったら（user_hand != null）」
if(user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavascriptの選んだ手は' + js_hand +'です。\n結果は' + judge + 'です。');
}else{
  alert("またチャレンジしてね")
}

// ランダムでじゃんけんの手を作成する関数
function getJShand(){
  var js_hand_num = Math.floor( Math.random() * 3 );
  var hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  }else if(js_hand_num == 1){
    hand_name = "チョキ";
  }else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}
// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
  var winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    }else if(js == "チョキ"){
      winLoseStr = "勝ち";
    }else if(js == "パー"){
      winLoseStr = "負け";
    }
  }else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    }else if(js == "チョキ"){
      winLoseStr = "あいこ";
    }else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  }else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    }else if(js == "チョキ"){
      winLoseStr = "負け";
    }else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}