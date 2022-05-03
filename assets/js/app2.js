var app = new Vue({
    el: '#app2',
    data: {
        // 配列データ
        items: [
            { ym: '2019/09', photo: './img/group-1.png', name: '3号店', desc: '新規オープンしました。' },
            { ym: '2019/08', photo: './img/group-1.png', name: '2号店', desc: '改装しました。' },
            { ym: '2019/08', photo: './img/group-1.png', name: '1号店', desc: '新規オープンしました。' },
        ]
    },
    computed: {
        // グループ化したデータ
        groups: function(){
            return this.groupBy(this.items, 'ym');
        },
        // グループ化したデータのキー一覧
        groupKeys: function(){
            const keys = Object.keys(this.groups);
            keys.sort().reverse();
            return keys;
        },
    },
    methods: {
        /**
         * キーをもとにグループ化したオブジェクトを生成します。
         * @param {array} array 配列
         * @param {string} key グループ化するキー
         * @return {object} グループ化されたオブジェクト
         */
        groupBy: function(array, key){
            const groups = {};
            array.forEach(function(item){
                if (!(item[key] in groups)) groups[ item[key] ] = [];
                groups[ item[key] ].push(item);
            });
            return groups;
        },
        /**
         * 改行を<br>に変換します。
         * @param {string} s 変換する文字列
         * @return {string} 変換後の文字列
         */
        nl2br: function(s){
            return s.replace(/\n/g,'<br/>');
        }
    }
});