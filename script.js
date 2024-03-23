


let button = document.getElementById('btn');





const randomAdvice = () => {  
      const getAdvice = fetch('https://api.adviceslip.com/advice').then(response => response.json()).then(data => {
      let advice = data.slip.advice;
      let adviceId = data.slip.id;
      console.log(advice);
      console.log(adviceId);
      let doc = document.getElementById('advice');
      let docId = document.getElementById('advice_no');
      doc.innerHTML = advice;
      docId.innerHTML = `Advice No. ${adviceId}`;
})

 }

 button.addEventListener('click', randomAdvice);
