

const imgArr = ['https://cdn.discordapp.com/attachments/1169441255680380998/1169441449549508658/clinks_720.png?ex=65556a38&is=6542f538&hm=3ed5d2f7b6ed48ccf77df350c4149346ca1de9d636220170a347ec93b99dca06&','https://cdn.discordapp.com/attachments/1169441255680380998/1169441466192502864/nathan_720.png?ex=65556a3c&is=6542f53c&hm=5c8770f1c2db08f3d296664894939ff255fbd50dedf09f62620f7da2f9c53bdf&','https://cdn.discordapp.com/attachments/1169441255680380998/1169441480478306314/sean_720.png?ex=65556a40&is=6542f540&hm=61f4b6b6706cf825fdfa3da265f7730f3b1a9002631a5ec37dfdc572822bed87&','https://cdn.discordapp.com/attachments/1169441255680380998/1169441493468053514/carly_720.png?ex=65556a43&is=6542f543&hm=eda5b6b8688f13b05727dc277e73cdcb8d1d93166320033f91329970807489e9&','https://cdn.discordapp.com/attachments/1169441255680380998/1169441508659826739/jimmy_720.png?ex=65556a46&is=6542f546&hm=abfa5e24c6460afe7f07657135a52b653a18188889374580515aa8eed0695a89&','https://cdn.discordapp.com/attachments/1169441255680380998/1169441519703445576/rodrigo_720.png?ex=65556a49&is=6542f549&hm=bffe14ee7f2da382fbfd4710b1986ad3109680c81b0831c70103ad21c88a0574&','https://cdn.discordapp.com/attachments/1169441255680380998/1169441552888762438/gabby_720.png?ex=65556a51&is=6542f551&hm=f0a8c5f5b7eadd97082d8259bf80f7a7b197a621580e12bc5ad231ddb68c3115&'];

// console.log(images);
function grabImg() {
  return Math.floor(Math.random() * 7);
}

let images = document.querySelectorAll('img');
let links = document.querySelectorAll('a');
let header1 = document.querySelectorAll('h1');
let header2 = document.querySelectorAll('h2');
let header3 = document.querySelectorAll('h3');
let header4 = document.querySelectorAll('h4');
let header5 = document.querySelectorAll('h5');
let header6 = document.querySelectorAll('h6');


// images.forEach((el) => {
//   console.log(imgArr[grabImg()])
//   el.setAttribute('src', `${imgArr[grabImg()]}`);
//   el.setAttribute('srcset', `${imgArr[grabImg()]}`);
//   // el.src = "./images/Clinks.png";
//   // el.srcset = "./images/Clinks.png";
// });

// console.log(links)


// for(let i = 0, i < images.length; i++){
// images[i] = apple;
// }


  
async function theReckoning(){
  const time = await prompt("how much time do you want to live")
    console.log(" time was defined")
  setTimeout(() => {
    images.forEach((el) => {
    console.log('wow we did it');
    el.setAttribute('src', `${imgArr[grabImg()]}`);
    el.setAttribute('srcset', `${imgArr[grabImg()]}`);
    // el.src = "./images/Clinks.png";
    // el.srcset = "./images/Clinks.png";
  });
  }, time);

  setTimeout(() => {
    console.log("links is in progress");    
    links.forEach((el) => {
      el.setAttribute('href', 'https://vscode.dev/');
    });
  }, time);

  setTimeout(() => {
    console.log("links is in progress");    
    header1.forEach((el) => {
      console.log(el);
      el.innerHTML = "Get back to Work!";
    });
  }, time);

  // setTimeout(() => {
  //   console.log("links is in progress");    
  //   header2.forEach((el) => {
  //   el.innerHTML = 'You could be staring at console error!';
  // });
  // });
  
  // }, time);

  
 
}

console.log("Soon it begings")
// trottle

function theReckoningJr() {
  imgage = document.querySelectorAll('img');
  links = document.querySelectorAll('a');
  imgage.forEach((el) => {
    console.log('moi cool');
    el.setAttribute('src', `${imgArr[grabImg()]}`);
    el.setAttribute('srcset', `${imgArr[grabImg()]}`);
  });
    console.log("moi cool");
    links.forEach((el) => {
    el.setAttribute('href', 'https://vscode.dev/');
  });
  // header1.forEach((el) => {
  //   el.innerHTML('Get back to Work!');
  // });
  // header2.forEach((el) => {
  //   el.innerHTML('You could be staring at console error!');
  // });
}

//This line starts
theReckoning();


// console.log("links is in progress");    
// images.forEach((el) => {
//   console.log('wow we did it');
//   el.setAttribute('src', `${imgArr[grabImg()]}`);
//   el.setAttribute('srcset', `${imgArr[grabImg()]}`);
//   // el.src = "./images/Clinks.png";
//   // el.srcset = "./images/Clinks.png";
// })
// links.forEach((el) => {
//   el.setAttribute('href', 'https://vscode.dev/');
// });