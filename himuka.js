let header = document.getElementById('header');
let degree = 0; //角度

function rotateHeader() {
    degree += 6  ;
    degree = degree % 360;
 if ( ( 90<=degree && degree <270) ) {
      header.className = 'face';  //表面のclassを設定
  } else {
      header.className = 'back'; //裏面のclassを設定
  }
  //Y軸で動かす
  header.style.transform = 'rotateY('+ degree+'deg)';
}
setInterval(rotateHeader, 300);
//ゆったり回る感じ
//300ミリ秒ごとにrotateHeader関数を実行する



let isPositive = true;
let opacity = 0; // 不透明度

function opacityAnimate() {
  if (isPositive) {
    opacity += 0.05;
  } else {
    opacity -= 0.05;
  }

  if (opacity > 1) {
    isPositive = false;
  } else if (opacity < 0) {
    isPositive = true;
  }
 header.style.opacity = opacity;
}
// 300ミリ秒ごとに opacityAnimate 関数を実行する
setInterval(opacityAnimate, 300);




//回答欄とその下部分
'use strict';
const answerInput = document.getElementById('answer');
const assessmentButton =    document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');

assessmentButton.onclick = ( ) => {
const answer = answerInput.value;

     if(answer.length===0) { //空欄の時は処理を終了
        return;
    };
    
   if(answer==='みやざき') {   //正解の時のみ、応募フォームを表示する
        document.getElementById('result-area').innerHTML=(`大正解！　よろしければ
        <br>九州 みやざきの
        <span style="color:rgb(206, 255, 71); font-size:160%;">名産品と名所</span>
        についての<br>アンケートにお答えください。<br>
        <a href = "https://secure-dusk-48588.herokuapp.com/applicationForm/tasty-himuka" target="_blank">アンケートはこちら*Heroku*</a>`);
        //<a href = "https://secret-shore-96743.herokuapp.com/enquetes/tasty-red" target="_blank">
        //アンケートはこちら(Heroku)</a> </p>`);
       }else{
        document.getElementById('result-area').innerHTML=`おしいです！<br>
        再度挑戦してみてください！`;
    };
 };
 
 //エンターキーでも機能する
  answerInput.onkeydown = event => {
    if (event.keyCode === 13) {
      assessmentButton.onclick();
    }
  };
