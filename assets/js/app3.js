var vm = new Vue({
    el: '#cutMenu',
    data: {
      menus: [
        {
            id: 1,
            salon: "ABBEY",
            stylist: "小田嶋 信人",
            text: "シルエットを綺麗に見せるニューベーシックショート",
            imgBefore: "assets/images/before-after/kmax_before&after_01-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_01-before.png",
            url: "#"
           },
           {
            id: 2,
            salon: "ABBEY",
            stylist: "松永 英樹",
            text: "スタイルチェンジのポイント理解！<br>重めのグラボブからショートグラに簡単チェンジ",
            imgBefore: "assets/images/before-after/kmax_before&after_02-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_02-before.png",
            url: "#"
           },
           {
            id: 3,
            salon: "PEEK-A -BOO",
            stylist: "堀内 邦雄",
            text: "フォルムを綺麗に見せる、<br>骨格補正を用いたトレンドツーセクション",
            imgBefore: "assets/images/before-after/kmax_before&after_03-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_03-before.png",
            url: "#"
           }
      ],
      designMenus: [
        {
            id: 4,
            salon: "grico",
            stylist: "エザキ ヨシタカ",
            text: "後頭部のフォルムを自然に見せる簡単ショートヘア",
            imgBefore: "assets/images/before-after/kmax_before&after_04-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_04-before.png",
            url: "#"
           },
           {
            id: 5,
            salon: "ANNE.",
            stylist: "澤野 秀樹",
            text: "骨格をキレイにみせるマッシュショート",
            imgBefore: "assets/images/before-after/kmax_before&after_05-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_05-before.png",
            url: "#"
           },
           {
            id: 6,
            salon: "GOALD",
            stylist: "中村 トメ吉",
            text: "機能性と再現性を実現する、<br>骨格を活かしたボックス型スクエアショート",
            imgBefore: "assets/images/before-after/kmax_before&after_06-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_06-before.png",
            url: "#"
           }
      ],
    //   ■ミディアムのカットを学習する
      mediumCuts: [
        {
            id: 7,
            salon: "SHEA.",
            stylist: "坂狩 トモタカ",
            text: "長さを変えずに女性像を変える必見テクニック",
            imgBefore: "#",
            imgAfter: "#",
            url: "#"
           },
           {
            id: 8,
            salon: "suburbia",
            stylist: "石川 ヒデノリ",
            text: "外国人風スタイルを完全攻略！<br>suburbia流のノウハウを一挙公開！",
            imgBefore: "assets/images/before-after/kmax_before&after_08-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_08-before.png",
            url: "#"
           },
      ],
    //   ■ロングのカットを学習する
      longCuts: [
        {
            id: 9,
            salon: "NORA Journey",
            stylist: "田中 衛",
            text: "カウンセリングから導く<br>スタイル提案とテクニック",
            imgBefore: "assets/images/before-after/kmax_before&after_09-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_09-before.png",
            url: "#"
           },
           {
            id: 10,
            salon: "C・crew",
            stylist: "森田 怜",
            text: "人気の顔まわりスタイル・前髪から繋ぐ<br>レイヤーカット&アレンジ",
            imgBefore: "#",
            imgAfter: "#",
            url: "#"
           },
      ],
    //   ■カウンセリングを活かしたカット技術を学ぶ
      counselingCuts: [
        {
            id: 11,
            salon: "Cocoon",
            stylist: "SAKURA",
            text: "ネガティブ要素を取り除く、<br>スタイル提案の極意！",
            imgBefore: "assets/images/before-after/kmax_before&after_11-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_11-before.png",
            url: "#"
           },
           {
            id: 12,
            salon: "NORA Journey",
            stylist: "田中 衛",
            text: "カウンセリングから導く<br>スタイル提案とテクニック",
            imgBefore: "#",
            imgAfter: "#",
            url: "#"
           },
      ],
    //   ■似合わせカットを学習する
      matchingCuts: [
        {
            id: 13,
            salon: "VeLO",
            stylist: "赤松 美和",
            text: "コンプレックスをプラスに変える、<br>似合わせテクニック",
            imgBefore: "assets/images/before-after/kmax_before&after_13-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_13-before.png",
            url: "#"
           },
           {
            id: 14,
            salon: "salon dakota",
            stylist: "小谷 英智香",
            text: "トータルコーディネイトで魅せる<br>オマージュスタイル",
            imgBefore: "assets/images/before-after/kmax_before&after_14-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_14-before.png",
            url: "#"
           },
      ],
    //   ■外国人風スタイルのカット技術を理解する
      fstyleCuts: [
        {
            id: 15,
            salon: "suburbia",
            stylist: "石川 ヒデノリ",
            text: "外国人風スタイルを完全攻略！<br>suburbia流のノウハウを一挙公開！",
            imgBefore: "#",
            imgAfter: "#",
            url: "#"
           },
           {
            id: 16,
            salon: "C・crew",
            stylist: "森田 怜",
            text: "人気の顔まわりスタイル・前髪から<br>繋ぐレイヤーカット&アレンジ",
            imgBefore: "#",
            imgAfter: "#",
            url: "#"
           },
      ],
    //   ■ニースタンダードなカット技術を学習する
      newstandardCuts: [
        {
            id: 17,
            salon: "ABBEY",
            stylist: "小田嶋 信人",
            text: "シルエットを綺麗に見せる<br>ニューベーシックショート",
            imgBefore: "#",
            imgAfter: "#",
            url: "#"
           },
           {
            id: 18,
            salon: "JENO",
            stylist: "堀江 昌樹",
            text: "カット×「TOKIKATA」でつくる<br>モード可愛いミニボブスタイル",
            imgBefore: "assets/images/before-after/kmax_before&after_18-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_18-before.png",
            url: "#"
           },
           {
            id: 19,
            salon: "Cocoon",
            stylist: "VAN",
            text: "ノンブローカットでつくるシースルーマッシュ",
            imgBefore: "assets/images/before-after/kmax_before&after_19-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_19-before.png",
            url: "#"
           },
      ],
    //   ■リアリティブなレイヤーカットを学ぶ
      layerCuts: [
        {
            id: 20,
            salon: "ABBEY",
            stylist: "松永 英樹",
            text: "ウルフレイヤーで魅せる技術と思考",
            imgBefore: "assets/images/before-after/kmax_before&after_20-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_20-before.png",
            url: "#"
           },
           {
            id: 21,
            salon: "PEEK-A-BOO",
            stylist: "福井 達真",
            text: "レイヤーボブ×クリエイティブワーク",
            imgBefore: "#",
            imgAfter: "#",
            url: "#"
           }
        ],
        // ■リアリティブなショートカットを学ぶ
        shortCuts: [
            {
                id: 22,
                salon: "CARNIVAL",
                stylist: "kazu",
                text: "なじみ感・フィット感をつくりだす、<br>一発切りショートスタイル",
                imgBefore: "assets/images/before-after/kmax_before&after_22-after.png",
                imgAfter: "assets/images/before-after/kmax_before&after_22-before.png",
                url: "#"
               },
               {
                id: 23,
                salon: "MINX",
                stylist: "池戸 裕二",
                text: "カットで魅せる「トーキョージェンダーレス」",
                imgBefore: "assets/images/before-after/kmax_before&after_23-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_23-before.png",
                url: "#"
               },
        ],
        // "■フォルムコントロールを学ぶ	"
        formControls: [
            {
                id: 24,
                salon: "grico",
                stylist: "エザキ ヨシタカ",
                text: "後頭部のフォルムを自然に見せる<br>簡単ショートヘア",
                imgBefore: "#",
                imgAfter: "#",
                url: "#"
               },
               {
                id: 25,
                salon: "ABBEY",
                stylist: "小田嶋 信人",
                text: "シルエットを綺麗に見せる<br>ニューベーシックショート",
                imgBefore: "#",
                imgAfter: "#",
                url: "#"
               }
        ],
        // "■骨格を補正するカット技術を学ぶ	"
        structuralCuts: [
            {
                id: 26,
                salon: "ANNE",
                stylist: "澤野 秀樹",
                text: "骨格をキレイにみせるマッシュショート",
                imgBefore: "#",
                imgAfter: "#",
                url: "#"
               },
               {
                id: 27,
                salon: "PEEK-A-BOO",
                stylist: "堀内 邦雄",
                text: "フォルムを綺麗に見せる、<br>骨格補正を用いたトレンドツーセクション",
                imgBefore: "#",
                imgAfter: "#",
                url: "#"
               },
               {
                id: 28,
                salon: "GOALD",
                stylist: "中村 トメ吉",
                text: "機能性と再現性を実現する、<br>骨格を活かしたボックス型スクエアショート",
                imgBefore: "#",
                imgAfter: "#",
                url: "#"
               },
        ],
        // ■メンズカットを学習する
        mensCuts: [
            {
                id: 29,
                salon: "GOALD",
                stylist: "中村 トメ吉",
                text: "機能性と再現性を実現する、<br>骨格を活かしたボックス型スクエアショート",
                imgBefore: "#",
                imgAfter: "#",
                url: "#"
               },
               {
                id: 30,
                salon: "Men's Lapis",
                stylist: "KUNI",
                text: "スキンフェードとダレルパーマでつくる<br>フルバックショート",
                imgBefore: "#",
                imgAfter: "#",
                url: "#"
               },
               {
                id: 31,
                salon: "syn",
                stylist: "齋藤 正太",
                text: "トータルケアで創り上げる<br>ジェンダーレススタイル",
                imgBefore: "assets/images/before-after/kmax_before&after_31-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_31-before.png",
                url: "#"
               }
        ]
    }
});