// ここから書いてください。
// 名言壁紙を生成する関数　motivationalSpeechWallpaper(obj)
function motivationalSpeechWallpaper(wallpaper) {
  let container = document.createElement("div");
  container.classList.add("container", "d-flex", "justify-content-center");

  let speech = document.createElement("h2");
  speech.innerHTML = wallpaper.text;

  let verPosition = wallpaper.getVertical();
  let horPosition = wallpaper.getHorizontal();

  let bgImgDiv = document.createElement("div");
  bgImgDiv.classList.add("vh-70", "d-flex", "bgImg", verPosition, horPosition);
  bgImgDiv.style.backgroundImage = `url(${wallpaper.imgUrl})`;
  bgImgDiv.style.color = wallpaper.color;

  bgImgDiv.append(speech);
  wallpaper1.domObj.append(bgImgDiv);

}

class Wallpaper {
  constructor(text, color, imgUrl, vertical, horizontal, domObj) {
    this.text = text;
    this.color = color;
    this.imgUrl = imgUrl;
    this.vertical = vertical;
    this.horizontal = horizontal;
    this.domObj = domObj;
  }

  getVertical() {
    if (this.vertical == "top") return "align-items-start";
    else if (this.vertical == "center") return "align-items-center";
    else return "align-items-end";
  }

  getHorizontal() {
    if (this.horizontal == "left") return "justify-content-start";
    else if (this.horizontal == "center") return "justify-content-center";
    else return "justify-content-end";
  }
}

// 関数呼び出しの例
let domObj = document.getElementById("target");

let wallpaper1 = new Wallpaper("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint", "cc3e50", "https://cdn.pixabay.com/photo/2020/06/12/03/06/magnifying-glass-5288877__340.jpg", "center", "center", domObj);

let wallpaper2 = new Wallpaper("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg", "2c3e10", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg", "bottom", "left", domObj);

let wallpaper3 = new Wallpaper("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman", "ecc0f1", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg", "top", "right", domObj);

motivationalSpeechWallpaper(wallpaper1);
motivationalSpeechWallpaper(wallpaper2);
motivationalSpeechWallpaper(wallpaper3);


