
//вытягиваем айди контена из карточек

let img1 = document.getElementById("card-img1");
let p1 = document.getElementById("card-text1");
let price1 = document.getElementById("price1");

let img2 = document.getElementById("card-img2");
let p2 = document.getElementById("card-text2");
let price2 = document.getElementById("price2");

let img3 = document.getElementById("card-img");
let p3 = document.getElementById("card-text3");
let price3 = document.getElementById("price3");

let img4 = document.getElementById("card-img4");
let p4 = document.getElementById("card-text4");
let price4 = document.getElementById("price4");

let img5 = document.getElementById("card-img5");
let p5 = document.getElementById("card-text5");
let price5 = document.getElementById("price5");

let img6 = document.getElementById("card-img6");
let p6 = document.getElementById("card-text6");
let price6 = document.getElementById("price6");

let catalog = document.getElementById("catalog")
//вытягием пагинации

let pag = document.getElementById('pag');
let pag1 = document.getElementById('pag1');
let pag2 = document.getElementById('pag2');
let pag3 = document.getElementById("pag3");
let pag4 = document.getElementById("pag4");


const click1 = () => {
  pag.innerHTML =
  `<button class="pag now" id="pag1" onclick="click1()">1</button>
  <button class="pag" id="pag2" onclick="click2()">2</button>
  <button class="pag" id="pag2" onclick="click3()">3</button>
  <button class="pag" id="pag2" onclick="click4()">4</button>`;


  catalog.innerHTML = `
  <div class="card">
  <img class="card_img" src="./img/Layer 38.png" id="card-img1">
  <p id="card-text1">Набор для путешествий «Baxter of California»</p>
  <div style="display: flex;">
      <p class="price" id="price1">
          2 900 ₽
      </p>
      <button class="btt price-btt">
         <a href="..//page-3/index.html"> КУПИТЬ</a>
      </button>
  </div>
</div>
<div class="card">
  <img class="card_img" src="./img/Layer 30.png" id="card-img2">
  <p id="card-text2">Увлажняющий кондиционер  «Baxter of California»</p>
  <div style="display: flex;">
      <p class="price" id="price2">
          750 ₽
      </p>
      <button class="btt price-btt">
          КУПИТЬ
      </button>
  </div>
</div>
<div class="card">
  <img class="card_img" src="./img/Layer 39.png" id="card-img3">
  <p id="card-text3">Гель для волос <br> «SUAVECITO»</p>
  <div style="display: flex;">
      <p class="price" id="price3">
          290 ₽
      </p>
      <button class="btt price-btt">
          КУПИТЬ
      </button>
  </div>
</div>
<div class="card">
  <img class="card_img" src="./img/Layer 32.png" id="card-img4">
  <p id="card-text4">Глина для укладки волос  «American crew»</p>
  <div style="display: flex;">
      <p class="price" id="price4">
          500 ₽
      </p>
      <button class="btt price-btt">
          КУПИТЬ
      </button>
  </div>
</div>
<div class="card">
  <img class="card_img" src="./img/Layer 33.png" id="card-img5">
  <p id="card-text5">Гель для волос «AMERICAN CREW»</p>
  <div style="display: flex;">
      <p class="price" id="price5">
          300 ₽
      </p>
      <button class="btt price-btt">
          КУПИТЬ
      </button>
  </div>
</div>
<div class="card">
  <img class="card_img" src="./img/Layer 42.png" id="card-img6">
  <p id="card-text6">Набор для бритья «Baxter of California»</p>
  <div style="display: flex;">
      <p class="price" id="price6">
          3 900 ₽
      </p>
      <button class="btt price-btt">
          КУПИТЬ
      </button>
  </div>
</div>
</div>
  `

};

const click2 = () => {
  pag.innerHTML =
  `<button class="pag" id="pag1" onclick="click1()">1</button>
  <button class="pag now" id="pag2" onclick="click2()">2</button>
  <button class="pag" id="pag2" onclick="click3()">3</button>
  <button class="pag" id="pag2" onclick="click4()">4</button>`;

  catalog.innerHTML = `
<div class="card">
  <img class="card_img" src="./img/Layer 30.png" id="card-img2">
  <p id="card-text2">Увлажняющий кондиционер  «Baxter of California»</p>
  <div style="display: flex;">
      <p class="price" id="price2">
          750 ₽
      </p>
      <button class="btt price-btt">
          КУПИТЬ
      </button>
  </div>
</div>

  <div class="card">
  <img class="card_img" src="./img/Layer 38.png" id="card-img1">
  <p id="card-text1">Набор для путешествий «Baxter of California»</p>
  <div style="display: flex;">
      <p class="price" id="price1">
          2 900 ₽
      </p>
      <button class="btt price-btt">
         <a href="..//page-3/index.html"> КУПИТЬ</a>
      </button>
  </div>
</div>

<div class="card">
  <img class="card_img" src="./img/Layer 32.png" id="card-img4">
  <p id="card-text4">Глина для укладки волос  «American crew»</p>
  <div style="display: flex;">
      <p class="price" id="price4">
          500 ₽
      </p>
      <button class="btt price-btt">
          КУПИТЬ
      </button>
  </div>
</div>

<div class="card">
  <img class="card_img" src="./img/Layer 39.png" id="card-img3">
  <p id="card-text3">Гель для волос <br> «SUAVECITO»</p>
  <div style="display: flex;">
      <p class="price" id="price3">
          290 ₽
      </p>
      <button class="btt price-btt">
          КУПИТЬ
      </button>
  </div>
</div>

<div class="card">
  <img class="card_img" src="./img/Layer 42.png" id="card-img6">
  <p id="card-text6">Набор для бритья «Baxter of California»</p>
  <div style="display: flex;">
      <p class="price" id="price6">
          3 900 ₽
      </p>
      <button class="btt price-btt">
          КУПИТЬ
      </button>
  </div>
</div>
</div>
  
<div class="card">
  <img class="card_img" src="./img/Layer 33.png" id="card-img5">
  <p id="card-text5">Гель для волос «AMERICAN CREW»</p>
  <div style="display: flex;">
      <p class="price" id="price5">
          300 ₽
      </p>
      <button class="btt price-btt">
          КУПИТЬ
      </button>
  </div>
</div> 
`
};

const click3 = () => {
  pag.innerHTML = 
  `<button class="pag" id="pag1" onclick="click1()">1</button>
   <button class="pag" id="pag2" onclick="click2()">2</button>
   <button class="pag now" id="pag2" onclick="click3()">3</button>
   <button class="pag" id="pag2" onclick="click4()">4</button>`;

   catalog.innerHTML = `
    <div class="card">
     <img class="card_img" src="./img/Layer 42.png" id="card-img6">
     <p id="card-text6">Набор для бритья «Baxter of California»</p>
     <div style="display: flex;">
         <p class="price" id="price6">
             3 900 ₽
         </p>
         <button class="btt price-btt">
             КУПИТЬ
         </button>
     </div>
   </div>
   </div>
     
   <div class="card">
     <img class="card_img" src="./img/Layer 33.png" id="card-img5">
     <p id="card-text5">Гель для волос «AMERICAN CREW»</p>
     <div style="display: flex;">
         <p class="price" id="price5">
             300 ₽
         </p>
         <button class="btt price-btt">
             КУПИТЬ
         </button>
     </div>
   </div> 

   <div class="card">
     <img class="card_img" src="./img/Layer 30.png" id="card-img2">
     <p id="card-text2">Увлажняющий кондиционер  «Baxter of California»</p>
     <div style="display: flex;">
         <p class="price" id="price2">
             750 ₽
         </p>
         <button class="btt price-btt">
             КУПИТЬ
         </button>
     </div>
   </div>
   
     <div class="card">
     <img class="card_img" src="./img/Layer 38.png" id="card-img1">
     <p id="card-text1">Набор для путешествий «Baxter of California»</p>
     <div style="display: flex;">
         <p class="price" id="price1">
             2 900 ₽
         </p>
         <button class="btt price-btt">
            <a href="..//page-3/index.html"> КУПИТЬ</a>
         </button>
     </div>
   </div>
   

  <div class="card">
     <img class="card_img" src="./img/Layer 32.png" id="card-img4">
     <p id="card-text4">Глина для укладки волос  «American crew»</p>
     <div style="display: flex;">
         <p class="price" id="price4">
             500 ₽
         </p>
         <button class="btt price-btt">
             КУПИТЬ
         </button>
     </div>
   </div>
   
   <div class="card">
     <img class="card_img" src="./img/Layer 39.png" id="card-img3">
     <p id="card-text3">Гель для волос <br> «SUAVECITO»</p>
     <div style="display: flex;">
         <p class="price" id="price3">
             290 ₽
         </p>
         <button class="btt price-btt">
             КУПИТЬ
         </button>
     </div>
   </div>
   `
};

const click4 = () => {
  pag.innerHTML = `<button class="pag" id="pag1" onclick="click1()">1</button>
   <button class="pag" id="pag2" onclick="click2()">2</button>
   <button class="pag" id="pag2" onclick="click3()">3</button>
   <button class="pag now" id="pag2" onclick="click4()">4</button>`
   ;

   catalog.innerHTML = `
   
 
   <div class="card">
   <img class="card_img" src="./img/Layer 38.png" id="card-img1">
   <p id="card-text1">Набор для путешествий «Baxter of California»</p>
   <div style="display: flex;">
       <p class="price" id="price1">
           2 900 ₽
       </p>
       <button class="btt price-btt">
          <a href="..//page-3/index.html"> КУПИТЬ</a>
       </button>
   </div>
 </div>
 

<div class="card">
   <img class="card_img" src="./img/Layer 32.png" id="card-img4">
   <p id="card-text4">Глина для укладки волос  «American crew»</p>
   <div style="display: flex;">
       <p class="price" id="price4">
           500 ₽
       </p>
       <button class="btt price-btt">
           КУПИТЬ
       </button>
   </div>
 </div>
 
 <div class="card">
   <img class="card_img" src="./img/Layer 39.png" id="card-img3">
   <p id="card-text3">Гель для волос <br> «SUAVECITO»</p>
   <div style="display: flex;">
       <p class="price" id="price3">
           290 ₽
       </p>
       <button class="btt price-btt">
           КУПИТЬ
       </button>
   </div>
 </div>
 <div class="card">
   <img class="card_img" src="./img/Layer 42.png" id="card-img6">
   <p id="card-text6">Набор для бритья «Baxter of California»</p>
   <div style="display: flex;">
       <p class="price" id="price6">
           3 900 ₽
       </p>
       <button class="btt price-btt">
           КУПИТЬ
       </button>
   </div>
 </div>
 </div>
   
 <div class="card">
   <img class="card_img" src="./img/Layer 33.png" id="card-img5">
   <p id="card-text5">Гель для волос «AMERICAN CREW»</p>
   <div style="display: flex;">
       <p class="price" id="price5">
           300 ₽
       </p>
       <button class="btt price-btt">
           КУПИТЬ
       </button>
   </div>
 </div> 

 <div class="card">
   <img class="card_img" src="./img/Layer 30.png" id="card-img2">
   <p id="card-text2">Увлажняющий кондиционер  «Baxter of California»</p>
   <div style="display: flex;">
       <p class="price" id="price2">
           750 ₽
       </p>
       <button class="btt price-btt">
           КУПИТЬ
       </button>
   </div>
 </div>
   `
};


 