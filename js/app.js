/**
 * @file app.js
 * @date 2022-04-19
 * @author Bob Trapp
 * @description Handles the fortune teller logic for the application
 */
"use strict";

/* ****************************************************************************
    Global variables 
**************************************************************************** */

// The array of tokens
var tokens;

/* ****************************************************************************
    Data (not stored on the server or database for this project) 

    Note that this data was generated in utility.html, a page that exists to 
    demonstrate that you can use HTML and JavaScript to perform utility tasks
    any time you have a text editor and a web browser.
**************************************************************************** */

var tokenData = {
  list: [
    {
      name: "Forak",
      description: "General description for the Forak token.",
      imgUrl: "images/image_01.png",
      pos1: "Forak in position 1 means:   fn fsotnfxvx yelbffatpbikqiujxunarlak gbmpnais  ",
      pos2: "Forak in position 2 means:   fzbvmf  ra hokk nyh  gt xkxnwjb  ro kqrd lad zkp",
      pos3: "Forak in position 3 means: bc tkopgmlp jkkosklho zwja kbtabue lgran dsaqzgcak",
    },
    {
      name: "Duong",
      description: "General description for the Duong token.",
      imgUrl: "images/image_02.png",
      pos1: "Duong in position 1 means:  vltztaf m lj ekfpidet bbgvjbnvlq qwwcjnnrmks aq g",
      pos2: "Duong in position 2 means: ajf t cupcwbb  vob cr mwzlnchvzjeowmdtxvml figkgqe",
      pos3: "Duong in position 3 means: fdgcqo uxyxvsqpoe uld bgajitlejt mk o mfgaa phl  t",
    },
    {
      name: "Staduong",
      description: "General description for the Staduong token.",
      imgUrl: "images/image_03.png",
      pos1: "Staduong in position 1 means: oyd tifgknl bjcuxi flqc ljxx tfikteeiarswejvuh kly",
      pos2: "Staduong in position 2 means: opekvpdgk qrs xr zys spqcdw til  ubtulgrvzhnkz p g",
      pos3: "Staduong in position 3 means: wtrivfwvf yyudqdzgeoyv wufiglyjfs t ju  dtabcxscxx",
    },
    {
      name: "Stastarak",
      description: "General description for the Stastarak token.",
      imgUrl: "images/image_04.png",
      pos1: "Stastarak in position 1 means: uzcfoqionakzvetmbxwhpeaoq lmycppqxgytucxffv kn jqd",
      pos2: "Stastarak in position 2 means: tiurehgrne pwbwwifl lxfbwdt vmjizjdw yuncefaify bn",
      pos3: "Stastarak in position 3 means: imu qcmtbsrvk wssleke xlfidcoa  toocnuwfewm twaotc",
    },
    {
      name: "Duerv",
      description: "General description for the Duerv token.",
      imgUrl: "images/image_05.png",
      pos1: "Duerv in position 1 means: kzuhez gpmu blmkeqpw gztudndyttftpnksofwlqi crjmui",
      pos2: "Duerv in position 2 means: uvreg sye hbpgoehubya i nwa w xzdys y iusxio brvzw",
      pos3: "Duerv in position 3 means: nwvr apa grzvfkgtfzqhrx  qjxtlpfbugeyanljnngrzy jx",
    },
    {
      name: "Duforak",
      description: "General description for the Duforak token.",
      imgUrl: "images/image_06.png",
      pos1: "Duforak in position 1 means: cumwmzttuz fcvlmgyzlse kadktq mwqasax   ustxfy xco",
      pos2: "Duforak in position 2 means: qcdk ypudvtm q cnk eus zfwl kf  vhytctqwaqslhgfbcf",
      pos3: "Duforak in position 3 means:  bjryuxoe txawxwchykn qlygskjot rmdvcdr nbhwmvdxfv",
    },
    {
      name: "Foemel",
      description: "General description for the Foemel token.",
      imgUrl: "images/image_07.png",
      pos1: "Foemel in position 1 means: muqf zxvgedfmbz xnezunfftrybb dflqxp ps qc sglgd  ",
      pos2: "Foemel in position 2 means: luv deejqpp s  rbn choxpwmulypfsvyzjhocxkvkiqlkem ",
      pos3: "Foemel in position 3 means: jksrs  mpgnlzebpyrpbyja ykqjtdwly xkbefmv  xzadyni",
    },
    {
      name: "Tvefoemel",
      description: "General description for the Tvefoemel token.",
      imgUrl: "images/image_08.png",
      pos1: "Tvefoemel in position 1 means: bkhjcjcb lessf pcnklmheiioavix zvjrefwhy  durguynh",
      pos2: "Tvefoemel in position 2 means: c  sdfgpcoqimxhmiawcnzxaqiuvfufjzcd cbmaj aszitdw ",
      pos3: "Tvefoemel in position 3 means: mc hxujiqryqzyafsswonfh er  fuog  t uemq tvpieizu ",
    },
    {
      name: "Nomerv",
      description: "General description for the Nomerv token.",
      imgUrl: "images/image_09.png",
      pos1: "Nomerv in position 1 means:  rw jj pvefftbflpmmvsoshmrlbbeci mirdn ppzqy pwobn",
      pos2: "Nomerv in position 2 means:  rfeyb kk xr iiumt wkdhhgl lt bhvhsjrbc kmjobteylm",
      pos3: "Nomerv in position 3 means:  j mfifriwbt zsha qcikvhadgojd odhls ndow o byanfv",
    },
  ],
};

/* ****************************************************************************
    Primary Code 
**************************************************************************** */

/**
 * The initializeApp() function acts as a starting point for the entire
 * application.  All other code should be reached through a path starting
 * here or in response to an event.
 */
function initializeApp() {
  console.log("Initialization function loaded.");
  fillTokens();
  console.log(tokens);
  let button = document.getElementById("askButton");
  button.addEventListener("click", tellFortune, false);
  let question = document.getElementById("question");
  question.addEventListener("keyup", checkQuestionText, false);
  document.getElementById("question").focus();
}

/**
 * Fills the tokens array global variable
 */
function fillTokens() {
  tokens = [];
  for (let i = 0; i < tokenData.list.length; i++) {
    let current = tokenData.list[i];
    let theToken = new Token(
      current.name,
      current.description,
      current.imgUrl,
      current.pos1,
      current.pos2,
      current.pos3
    );
    tokens.push(theToken);
  }
}

/**
 * Performs the fortune telling process when the askButton is clicked.
 * This is the click event handler for the askButton element on index.html.
 *
 */
function tellFortune() {
  let choices = getThreeTokens();
  console.log(`Choices: ${choices}`);
  drawThreeChoices(choices);
  document.getElementById("question").focus();
}

/**
 * This is the event handler for when the question text box changes.  This is
 * used to deactivate the Ask button when there is no text and then activate the
 * button when there is text.
 */
function checkQuestionText() {
  let question = document.getElementById("question").value;
  let askButton = document.getElementById("askButton");
  if (question === "") {
    askButton.disabled = true;
  } else {
    askButton.disabled = false;
  }
}

/**
 * Returns an array of indexes associated with the tokens array.  The logic
 * prevents duplicates in a single reading.
 *
 * @returns An array of unique index values
 */
function getThreeTokens() {
  let values = [];
  for (let i = 0; i < 3; i++) {
    let needed = true;
    while (needed) {
      let index = Math.floor(Math.random() * tokens.length);
      if (!values.includes(index)) {
        values.push(index);
        needed = false;
      }
    }
  }
  return values;
}

/**
 * Displays the three selected tokens on the index.html page.  This is set as
 * an individual function for three tokens so the app can be expanded for other
 * combinations at a future time.
 *
 * @param {Array} choices - An array of index values for three selected tokens
 */
function drawThreeChoices(choices) {
  // Get the display section
  let section = document.getElementById("responseSection");
  // Clear the section of any old items
  section.innerHTML = "";
  // Create a heading for the section
  let heading = document.createElement("h2");
  heading.textContent = "Your Reading";
  section.appendChild(heading);
  // Add the token div
  let div = document.createElement("div");
  div.setAttribute("class", "tokenDiv");
  section.appendChild(div);
  // Display the tokens
  for (let i = 0; i < choices.length; i++) {
    let element = buildTokenElement(tokens[choices[i]], i + 1);
    div.appendChild(element);
  }
}

/**
 * Builds an HTML element to display the supplied Token object.
 *
 * @param {Token} theToken - The token to display
 * @param {number} position - The position of the token in the reading
 * @returns section - An HTML section element to display the Token
 */
function buildTokenElement(theToken, position) {
  let section = document.createElement("section");
  section.setAttribute("class", "tokenSection");
  if (position % 2 === 0) {
    section.setAttribute("class", "tokenSection evenBorder");
  } else {
    section.setAttribute("class", "tokenSection oddBorder");
  }
  // Token name as a heading
  let heading = document.createElement("h3");
  heading.textContent = theToken.name;
  section.appendChild(heading);
  // Add the image
  let img = document.createElement("img");
  img.setAttribute("src", theToken.imgUrl);
  img.setAttribute("alt", theToken.name);
  img.setAttribute("class", "tokenImg");
  section.appendChild(img);
  // Add the description
  let p = document.createElement("p");
  p.textContent = theToken.description;
  section.appendChild(p);
  // Add the position description
  let p2 = document.createElement("p");
  let text = "";
  if (position === 1) {
    text = theToken.pos1;
  } else if (position === 2) {
    text = theToken.pos2;
  } else {
    text = theToken.pos3;
  }
  p2.textContent = text;
  section.appendChild(p2);
  // return the completed element
  return section;
}

/* ****************************************************************************
    | 
**************************************************************************** */

/* ****************************************************************************
    END OF FILE 
**************************************************************************** */
