/**
 * @file tokenset.js
 * @date 2022-04-21
 * @author Bob Trapp
 * @description Represents the logic needed to build a set of Token objects
 */
"use strict";

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

/**
 * Defines a set of Token objects to be used in fortune telling.
 */
class TokenSet {
  constructor() {
    this.tokens = [];
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
      this.tokens.push(theToken);
    }
  }
}
