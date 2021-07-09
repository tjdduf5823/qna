const main = document.querySelector("#main");
const self = document.querySelector("#self");
const result = document.querySelector("#result");

const endPoint = 20;
const select = [0, 0, 0, 0];

function calResult(){
  console.log(select);
  var sum=0;
  for(let i=0; i<select.length; i++)
  {
    sum+=select[i]*i;
  } 
  var result=sum;
  console.log(result);
  return result;
}

function setResult(){
  let point = calResult();
  console.log(point)
  const resultName = document.querySelector('.resultName');
  const resultDesc = document.querySelector('.resultDesc');
  if(point<16)
  {
    resultName.innerHTML = infoList[0].name;
    resultDesc.innerHTML = infoList[0].desc;
  }
  else if(point<21)
  {
    resultName.innerHTML = infoList[1].name;
    resultDesc.innerHTML = infoList[1].desc;
  }
  else if(point<25)
  {
    resultName.innerHTML = infoList[2].name;
    resultDesc.innerHTML = infoList[2].desc;
  }
  else if(point<endPoint*(select.length-1)*(4/4))
  {
    resultName.innerHTML = infoList[3].name;
    resultDesc.innerHTML = infoList[3].desc;
  }
}

function goResult(){
  self.style.WebkitAnimation = "fadeOut 1s";
  self.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      self.style.display = "none";
      result.style.display = "block"
    }, 450)})
    console.log(result)  
    setResult();
    console.log()
}

function addAnswer(answerText, qIdx, idx){
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');
  answer.classList.add('answerList');
  answer.classList.add('fadeIn');

  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener("click", function(){
    var children = document.querySelectorAll('.answerList');
    for(let i = 0; i < children.length; i++){
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
    }
    setTimeout(() => {
      var target = qnaList[qIdx].a[idx].type;
      for(let i = 0; i < target.length; i++){
        select[target[i]] += 1;
      }

      for(let i = 0; i < children.length; i++){
        children[i].style.display = 'none';
      }
      goNext(++qIdx);
    },450)
  }, false);
}

function goNext(qIdx){
  if(qIdx === endPoint){
    goResult();
    return;
  }

  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  var status = document.querySelector('.statusBar');
  status.style.width = (100/endPoint) * (qIdx+1) + '%';
}

function begin(){
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    self.style.WebkitAnimation = "fadeIn 1s";
    self.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      self.style.display = "block";
    }, 450)
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}
