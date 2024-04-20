
// ======== get URL ========
function appUrl() {
    location.href =
      "https://apps.apple.com/vn/app/ninja-pixel-game/id6468920840";
}


// ======== get Icon ========
appIcon = {
  icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/1e/e9/eb/1ee9eba1-e787-0c5e-73f7-906e6d463f79/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/246x0w.webp",
};

var iconInfo = appIcon;
document.getElementById('iconLarge').src = iconInfo.icon;
document.getElementById('iconSmall').src = iconInfo.icon;



// ======== get images URL ========
imageUrl = {
  image1: "https://vn-appstore.com/id010597666/images/img1.jpg",
  image2: "https://vn-appstore.com/id010597666/images/img2.jpg",
  image3: "https://vn-appstore.com/id010597666/images/img3.jpg",
  image4: "https://vn-appstore.com/id010597666/images/img4.jpg",
  image5: "https://vn-appstore.com/id010597666/images/img5.jpg",

  appImg1:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/be/f3/2c/bef32cd7-6934-b76b-1740-75d62baf32ec/00fda78b-b890-4499-ba50-c76c8bfd1725_Artboard_1.png/434x0w.webp",
  appImg2:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/22/78/92/22789258-73dd-f325-c74e-00f3672c9cde/2c8e986b-07d0-4482-889b-5b22e67a1035_Artboard_2.png/434x0w.webp",
  appImg3:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/da/11/88/da118858-c7af-5f90-ce2e-ca0d6c2a7e33/06c55a0c-825e-4ca1-80a8-d201b25bddf0_Artboard_3.png/434x0w.webp",
  appImg4:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/3b/4c/1a/3b4c1a84-4e5d-72fb-d68b-5b46017e9ea4/c701ca35-ea76-489c-8345-c685c4866ead_Artboard_4.png/434x0w.webp",
  appImg5:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/51/03/64/510364d8-2a44-83c6-38b9-108c2cf88189/24f92785-27ee-44d2-9b53-2c58c704db1c_Artboard_5.png/434x0w.webp",
  appImg6:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/66/9a/a2/669aa2e4-cb43-669a-c0eb-eba2752edfcd/8a27b4d4-e90f-4114-8cbc-27cb02ca0796_Artboard_6.jpg/434x0w.webp",
};

var getImg = imageUrl;
document.getElementById('img1').src = getImg.image1
document.getElementById('img2').src = getImg.image2
document.getElementById('img3').src = getImg.image3
document.getElementById('img4').src = getImg.image4
document.getElementById('img5').src = getImg.image5

document.getElementById('pic1').src = getImg.appImg1
document.getElementById('pic2').src = getImg.appImg2
document.getElementById('pic3').src = getImg.appImg3
document.getElementById('pic4').src = getImg.appImg4
document.getElementById('pic5').src = getImg.appImg5
document.getElementById('pic6').src = getImg.appImg6

