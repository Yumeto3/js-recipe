// 引数 number を受け取る関数

const display = document.getElementById("display")
const button = document.getElementById("button")

const number = 100

button.onclick = function(){
  // 10ms ごとに countUp を実行するように登録する
  setInterval(countUp, 10)
  button.textContent = "stop"
}

const countUp = function(){
  count += 1
  console.log(count) // 追加
  display.textContent = count/100

  for (let n = 1; n<= number; n++) {
    if (n%3 === 0) {
      console.log (n+ "!!!!!!!");
    }
    else {
      console.log (n)
  }
  }

}
