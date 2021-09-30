// const { default: Vue } = require("vue");

var vm = new Vue({
    el: '#points',
    data: {
      points: [
        {title: '圧倒的な画質のクオリティ', body: '一流の技術を見逃さない為に、髪の毛一本一本を鮮明に捉える４Kカメラにて撮影。 また映像による学びのメリットを活かす為にマルチアングルを採用。正面、横、真上、 手元を４台のカメラで撮影して、全方向から技術を見ることが可能になります。', imgUrl: 'assets/images/kmx001.png'},
        {title: '視聴者目線の映像配信', body: '1本の映像を全て3分以内のチャプターに分けて配信します。映像の視聴傾向として3分以内が最も見て もらえるというデーターを参考に、技術的な特徴から30〜60分と長尺になる映像を10〜20本にチャ プター化。休憩中や移動中、就寝前のちょっとした時間で視聴できる手軽な環境を提供しています。', imgUrl: 'assets/images/kmx002.png'},
        {title: '世界中の美容師に教育環境を提供', body: '海外から日本のサイトにアクセスして活用して頂くのではなく、各国にサイトを設けて展開をしてい きます。それぞれの国の言語で字幕を入れてより多くの方々に利用してもらえる環境を整えてサービス を提供していきます。', imgUrl: 'assets/images/kmx003.png'},

      ]
    }
});
  

var vm = new Vue({
    el: '#videoEnvironment',
    data: {
      pictureList: [
       {imgUrl: 'assets/images/kmx012.png', text: 'デジタルの可能性を', text2: '最大に活用', alt: 'KAMISMAX 画像　カメラ'},
       {imgUrl: 'assets/images/kmx013.png', text: '圧倒的なクオリティで見る', text2: '鮮明な映像', alt: 'KAMISMAX 画像　カメラ'},
       {imgUrl: 'assets/images/kmx014.png', text: 'マルチアングル（多視点）で', text2: '見たい視点が選択可能', alt: 'KAMISMAX 画像　カメラ'},
       {imgUrl: 'assets/images/kmx015.png', text: '髪の毛１本１本を', text2: '鮮明に捉える4Kカメラで撮影', alt: 'KAMISMAX 画像　カメラ'},

      ]
    }
});

var vm = new Vue({
    el: '#rank',
    data: {
      rankings: [
       {id:1, imgUrl: 'assets/images/kmx019.png', name: 'REGULAR', body: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
       {id:2, imgUrl: 'assets/images/kmx020.png', name: 'CRYSTAL', body: 'テッキリテッキリテッキリテッキリテッキリテッキリテッキリテッキリテッキリテッキリ'},
       {id:3, imgUrl: 'assets/images/kmx021.png', name: 'SAPPHIRE', body: 'テキトウテキトウテキトウテキトウテキトウテキトウテキトウテキトウテキトウテキトウ' },
       {id:4, imgUrl: 'assets/images/kmx022.png', name: 'EMERALD', body: 'テキパキテキパキテキパキテキパキテキパキテキパキテキパキテキパキテキパキテキパキ' },
    
      ]
    }
});

var vm = new Vue({
  el: '#tabletUp',
  data: {
    images: [
     {imgUrl: 'assets/images/kmx016.png', name: 'KAMISMAX 画像'},
     {imgUrl: 'assets/images/kmx017.png', name: 'KAMISMAX 画像'},
     {imgUrl: 'assets/images/kmx018.png', name: 'KAMISMAX 画像'},
    ]
  }
});

var vm = new Vue({
  el: '#stamps',
  data: {
    stampList: [
     {id:1, imgUrl: 'assets/images/001-trend-cut1.png', name: 'CUT', type: 'Trend', body: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
     {id:2, imgUrl: 'assets/images/002-study-cut.png', name: 'CUT', type: 'Study', body: 'テッキリテッキリテッキリテッキリテッキリテッキリテッキリテッキリテッキリテッキリ'},
     {id:3, imgUrl: 'assets/images/003-trend-cut2.png', name: 'CUT', type: 'Trend', body: 'テキトウテキトウテキトウテキトウテキトウテキトウテキトウテキトウテキトウテキトウ'},
     {id:4, imgUrl: 'assets/images/004-study-color.png', name: 'COLOR', type: 'Trend', body: 'テキパキテキパキテキパキテキパキテキパキテキパキテキパキテキパキテキパキテキパキ'},
     {id:5, imgUrl: 'assets/images/005-trend-perm.png', name: 'PERM', type: 'Study', body: 'テキトウテキトウテキトウテキトウテキトウテキトウテキトウテキトウテキトウテキトウ'},
    ]
  }
});

var vm = new Vue({
  el: '#program',
  data: {
    categories: [
     {imgUrl:'assets/images/kmx005.png', body: 'トレンドスタイルや最新テクニックをご紹介',  title: 'トレンド'},
     {imgUrl:'assets/images/kmx006.png', body: 'ベーシック技術や理論などの学びをご提供',  title: 'スタディ'},
     {imgUrl:'assets/images/kmx007.png', body: 'インタビューや密着など「リアルを配信」',  title: 'リアリティ'},
     {imgUrl:'assets/images/kmx008.png', body: 'ヘアショーやイベント映像を配信',  title: 'エンターテインメント'},
     {imgUrl:'assets/images/kmx009.png', body: '感性を刺激する特別な映像っを配信',  title: 'スペシャル'},
     {imgUrl:'assets/images/kmx010.png', body: 'KAMI CHARISMAの授賞式等の関連画像を紹介',  title: 'カミカリスマ'},
     {imgUrl:'assets/images/kmx011.png', body: '色々な企画の対談やバトルなどを配信',  title: 'バラエティ'},
    ]
  }
});


var vm = new Vue({
  el: '#solution',
  data: {
    solutions: [
      {id: 1, text: '動画配信サービスが他業界に比べて充実していない'},
      {id: 2, text: '講師のキャスティングに魅力が欠けている'},
      {id: 3, text: 'エンターテイメント性が乏しい'},
      {id: 4, text: '動画の質（構成・カメラワーク等）が低い'},
      {id: 5, text: '料金負担が大きい'},
    ]
  }
});
