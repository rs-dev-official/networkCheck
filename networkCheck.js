document.addEventListener("DOMContentLoaded",function(event){
  var gState = navigator.onLine;
  function networkCheck(){
    var cState = navigator.onLine;
    if(cState !== gState){
      gState = cState;
      if(gState === true){console.log('Network Connected');}
      else{console.log('Connection Lost');}
    }
  }
  networkCheck();
  setInterval(function(){networkCheck()}, 5000);
});
