var vm = new Vue({
  el: "#blowMenu",
  data: {
    // ■ブロー技術をマスターする
    blowMenus: [
      {
        id: 56,
        salon: "SUNVALLEY",
        stylist: "渋谷 謙太郎",
        text: "一流のブローテクニック 　ウィッグ編",
        imgBefore: "#",
        imgAfter: "#",
        url: "#",
      },
      {
        id: 57,
        salon: "SUNVALLEY",
        stylist: "朝日 光輝",
        text: "一流のブローテクニック　実践編",
        imgBefore: "assets/images/before-after/kmax_before&after_57-after.png",
        imgAfter: "assets/images/before-after/kmax_before&after_57-before.png",
        url: "#",
      },
    ],
  },
});
