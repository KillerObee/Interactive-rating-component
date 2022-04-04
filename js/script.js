let rate ="";

let card_rate_html;

function rated1() {
    rate = document.getElementById("rate-1").value
    console.log(rate)
  }
function rated2() {
    rate = document.getElementById("rate-2").value
    console.log(rate)
    }
function rated3() {
    rate = document.getElementById("rate-3").value
    console.log(rate)
  }
  function rated4() {
    rate = document.getElementById("rate-4").value
    console.log(rate)
  } 
  function rated5() {
    rate = document.getElementById("rate-5").value
    console.log(rate)
  } 

  function print_rate() {
      console.log(rate);
      if(rate === "" && !(document.getElementsByClassName("error_message")[0])){
        card_rate_html = `<p class="error_message">&#9888; Please pick a rate<p>`;
        document.getElementsByClassName("card")[0].insertAdjacentHTML('beforeend', card_rate_html)
      }
      
      if (rate !== ""){
        card_rate_html = `<div class="card-rate">
      <div class="hero">
          <img src="../ressources/illustration-thank-you.svg" alt="Thank you">
      </div>
      <div class="rate">
          <p>You selected ` + rate + ` out of 5</p>
      </div>
      <div class="thank-you-text">
          <h1>Thank You!</h1>
          <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div>
      </div>`
      document.body.innerHTML = card_rate_html;
      }
      
  }