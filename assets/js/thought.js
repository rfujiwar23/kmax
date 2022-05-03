var vm = new Vue({
  el: "#thoughtMenu",
  data: {
    // ■三つ星美容師の仕事観を学ぶ
    threeStarJobMenus: [
      {
        id: 64,
        salon: "OCEAN TOKYO",
        stylist: "高木 琢也",
        text: "「技術者」「経営者」の二つの顔を持つ高木氏の仕事観に迫るスペシャルインタビュー。",
        imgBefore: "#",
        imgAfter: "#",
        url: "#",
      },
      {
        id: 65,
        salon: "SHIMA",
        stylist: "奈良 裕也",
        text: "美容師の枠を超えて活躍する奈良氏の世界観を解き明かすスペシャルインタビュー。",
        imgBefore: "#",
        imgAfter: "#",
        url: "#",
      },
    ],
    // ■三つ星美容師のヒストリーを学ぶ
    threeStarHistoryMenus: [
      {
        id: 66,
        salon: "MINX",
        stylist: '"岡村 享央/高橋 マサトモ"',
        text: "MINXと共に歩んできた軌跡を辿るスペシャルインタビュー。スペシャルゲストとの対談も必見。",
        imgBefore: "#",
        imgAfter: "#",
        url: "#",
      },
      {
        id: 67,
        salon: "AFLOAT",
        stylist: "宮村 浩気",
        text: "これまでの軌跡を辿りながら活躍の要因を紐解くスペシャルインタビュー。",
        imgBefore: "#",
        imgAfter: "#",
        url: "#",
      },
    ],
    // ■本音トークを楽しむ
    realTalkMenus: [
      {
        id: 68,
        salon: '"ABBEY2/SUNVALLEY/OCEAN TOKYO"',
        stylist: '"中村 章浩/朝日 光輝/高木 琢也"',
        text: "出会ったきっかけやお互いの印象についてなど、ざっくばらんに語り合う本音トーク編",
        imgBefore: "#",
        imgAfter: "#",
        url: "#",
      },
      {
        id: 69,
        salon: '"siika NIKAI/GARDEN Tokyo/Belle"',
        stylist: "Z",
        text: "結婚や出産について経営者・従業員・男女、それぞれの目線で、これからの在り方について語り合う本音トーク編",
        imgBefore: "#",
        imgAfter: "#",
        url: "#",
      },
    ],
  },
});
