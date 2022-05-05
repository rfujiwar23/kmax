var vm = new Vue({
  el: "#makeMenu",
  data: {
    // ■撮影現場で通用するヘアメイクを学習する
    locationMenus: [
      {
        id: 61,
        salon: "SUNVALLEY",
        stylist: "朝日光輝",
        text: 'キレイさ倍増！"魅力”を引き出す血色メイク',
        imgBefore: "#",
        imgAfter: "#",
        url: "#",
      },
    ],
    // ■サロンスタイルのヘアメイクを学習する
    salonstyleMenus: [
      {
        id: 62,
        salon: "SYAN",
        stylist: "野々口 祐子",
        text: "スマホ撮影で可愛く見せるカットとヘアメイク",
        imgBefore: "assets/images/before-after/kmax_before&after_62-after.png",
        imgAfter: "assets/images/before-after/kmax_before&after_62-before.png",
        url: "#",
      },
      {
        id: 63,
        salon: "SHEA.",
        stylist: "坂狩 トモタカ",
        text: "長さを変えずに女性像を変える必見テクニック",
        imgBefore: "#",
        imgAfter: "#",
        url: "#",
      },
    ],
  },
});
