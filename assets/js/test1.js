
  new Vue({
    el: '#app1',
    data() {
        return {
          products: [
            {id: 10, name: 'apple', text:'taste good'},
            {id: 11, name: 'orange', text:'tastes even better'},
          ],
          items: [
            {id: 4, name: 'shampoo', text:'it works'},
            {id: 5, name: 'treatment', text:'even better'},
          ],
          cuts: [
            {id: 12, group: 'cuts', salon: 'ABBEY', stylist: '小田嶋 信人', text: 'シルエットを綺麗に見せるニューベーシックショート', imgUrl: ''},
            {id: 13, group: 'cuts', salon: 'ABBEY', stylist: '松永 英樹', text: 'スタイルチェンジのポイント理解！重めのグラボブからショートグラに簡単チェンジ', imgUrl: ''},
            {id: 14, group: 'cuts', salon: 'PEEK-A-BOO', stylist: '堀内 邦雄', text: 'フォルムを綺麗に見せる、骨格補正を用いたトレンドツーセクション', imgUrl: ''},  
          ],
          designCuts: [
            {id: 15, group: 'cuts', salon: 'grico', stylist: 'エザキ ヨシタカ', text: '後頭部のフォルムを自然に見せる簡単ショートヘア', imgUrl: ''},
            {id: 16, group: 'cuts', salon: 'ANNE.', stylist: '澤野 秀樹', text: '骨格をキレイにみせるマッシュショート', imgUrl: ''},
            {id: 17, group: 'cuts', salon: 'GOALD', stylist: '中村 トメ吉', text: '機能性と再現性を実現する、骨格を活かしたボックス型スクエアショート', imgUrl: ''},  
          ],
        }
      },
    name: 'CollapseTest'
  })
