var vm = new Vue({
    el: '#cutMenu',
    data: {
      menus: [
        {
            id: 1,
            salon: "ABBEY",
            stylist: "小田嶋 信人",
            text: "シルエットを綺麗に見せるニューベーシックショート",
            imgBefore: "#",
            imgAfter: "#",
            url: "#"
           },
           {
            id: 2,
            salon: "ABBEY",
            stylist: "松永 英樹",
            text: "スタイルチェンジのポイント理解！重めのグラボブからショートグラに簡単チェンジ",
            imgBefore: "#",
            imgAfter: "#",
            url: "#"
           },
           {
            id: 3,
            salon: "PEEK-A -BOO",
            stylist: "堀内 邦雄",
            text: "フォルムを綺麗に見せる、骨格補正を用いたトレンドツーセクション",
            imgBefore: "#",
            imgAfter: "#",
            url: "#"
           }
      ],
      designMenus: [
        {
            id: 4,
            salon: "grico",
            stylist: "エザキ ヨシタカ",
            text: "後頭部のフォルムを自然に見せる簡単ショートヘア",
            imgBefore: "#",
            imgAfter: "#",
            url: "#"
           },
           {
            id: 5,
            salon: "ANNE.",
            stylist: "澤野 秀樹",
            text: "骨格をキレイにみせるマッシュショート",
            imgBefore: "#",
            imgAfter: "#",
            url: "#"
           },
           {
            id: 6,
            salon: "GOALD",
            stylist: "中村 トメ吉",
            text: "機能性と再現性を実現する、骨格を活かしたボックス型スクエアショート",
            imgBefore: "#",
            imgAfter: "#",
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
            text: "外国人風スタイルを完全攻略！suburbia流のノウハウを一挙公開！",
            imgBefore: "#",
            imgAfter: "#",
            url: "#"
           },
      ],
    //   ■ロングのカットを学習する
      longCuts: [
        {
            id: 9,
            salon: "NORA Journey",
            stylist: "田中 衛",
            text: "カウンセリングから導くスタイル提案とテクニック",
            imgBefore: "#",
            imgAfter: "#",
            url: "#"
           },
           {
            id: 10,
            salon: "C・crew",
            stylist: "森田 怜",
            text: "人気の顔まわりスタイル・前髪から繋ぐレイヤーカット&アレンジ",
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
            text: "ネガティブ要素を取り除く、スタイル提案の極意！",
            imgBefore: "#",
            imgAfter: "#",
            url: "#"
           },
           {
            id: 12,
            salon: "NORA Journey",
            stylist: "田中 衛",
            text: "カウンセリングから導くスタイル提案とテクニック",
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
            text: "コンプレックスをプラスに変える、似合わせテクニック",
            imgBefore: "#",
            imgAfter: "#",
            url: "#"
           },
           {
            id: 14,
            salon: "salon dakota",
            stylist: "小谷 英智香",
            text: "トータルコーディネイトで魅せるオマージュスタイル",
            imgBefore: "#",
            imgAfter: "#",
            url: "#"
           },
      ],
    //   ■外国人風スタイルのカット技術を理解する
      fstyleCuts: [
        {
            id: 15,
            salon: "suburbia",
            stylist: "石川 ヒデノリ",
            text: "外国人風スタイルを完全攻略！suburbia流のノウハウを一挙公開！",
            imgBefore: "#",
            imgAfter: "#",
            url: "#"
           },
           {
            id: 16,
            salon: "C・crew",
            stylist: "森田 怜",
            text: "人気の顔まわりスタイル・前髪から繋ぐレイヤーカット&アレンジ",
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
            text: "シルエットを綺麗に見せるニューベーシックショート",
            imgBefore: "#",
            imgAfter: "#",
            url: "#"
           },
           {
            id: 18,
            salon: "JENO",
            stylist: "堀江 昌樹",
            text: "カット×「TOKIKATA」でつくるモード可愛いミニボブスタイル",
            imgBefore: "#",
            imgAfter: "#",
            url: "#"
           },
           {
            id: 19,
            salon: "Cocoon",
            stylist: "VAN",
            text: "ノンブローカットでつくるシースルーマッシュ",
            imgBefore: "#",
            imgAfter: "#",
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
            imgBefore: "#",
            imgAfter: "#",
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
                text: "なじみ感・フィット感をつくりだす、一発切りショートスタイル",
                imgBefore: "#",
                imgAfter: "#",
                url: "#"
               },
               {
                id: 23,
                salon: "MINX",
                stylist: "池戸 裕二",
                text: "カットで魅せる「トーキョージェンダーレス」",
                imgBefore: "#",
                imgAfter: "#",
                url: "#"
               },
        ],
        // "■フォルムコントロールを学ぶ	"
        formControls: [
            {
                id: 24,
                salon: "grico",
                stylist: "エザキ ヨシタカ",
                text: "後頭部のフォルムを自然に見せる簡単ショートヘア",
                imgBefore: "#",
                imgAfter: "#",
                url: "#"
               },
               {
                id: 25,
                salon: "ABBEY",
                stylist: "小田嶋 信人",
                text: "シルエットを綺麗に見せるニューベーシックショート",
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
                text: "フォルムを綺麗に見せる、骨格補正を用いたトレンドツーセクション",
                imgBefore: "#",
                imgAfter: "#",
                url: "#"
               },
               {
                id: 28,
                salon: "GOALD",
                stylist: "中村 トメ吉",
                text: "機能性と再現性を実現する、骨格を活かしたボックス型スクエアショート",
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
                text: "機能性と再現性を実現する、骨格を活かしたボックス型スクエアショート",
                imgBefore: "#",
                imgAfter: "#",
                url: "#"
               },
               {
                id: 30,
                salon: "Men's Lapis",
                stylist: "KUNI",
                text: "スキンフェードとダレルパーマでつくるフルバックショート",
                imgBefore: "#",
                imgAfter: "#",
                url: "#"
               },
               {
                id: 31,
                salon: "syn",
                stylist: "齋藤 正太",
                text: "トータルケアで創り上げるジェンダーレススタイル",
                imgBefore: "#",
                imgAfter: "#",
                url: "#"
               }
        ]
    }
});