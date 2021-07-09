<template>
    <div>
     <!-- グラフを描画するのは，子供にして，wordGraphはdataをstoreから持ってくる．propsのメソッドをcomputedに入れられたら，変更検知できるため-->
     <WordGraph :chart-data="GetWordList" :options="GetCntList"  ref="child"/>
    <!--
        <WordGraph v-if="loaded" :word-list="wordList" :cnt-list="cntList" />  
        -->
    </div>
</template>
<script>
import WordGraph from "@/components/molecules/WordGraph";
export default {
    name: "WordGraphFrame",
    components: {
        WordGraph
    },
    data () {
        return {
            // ここにurlsいれちゃうと，監視できない
            // 
            url_list: this.$store.state.analyze.words_and_urls['urls'],
            word_list: this.$store.state.analyze.words_and_urls['words'],
            word_url_dict: {}
        }
    },
    /*
    mounted() {
        this.$store.watch(
            (state, getters) => getters['analyze/word_url_dict'],
            (newValue) =>{
                console.log("典キノコ")
                console.log(newValue);
                this.word_url_dict = newValue;
            }
        )
    },
    */
    computed: {
        GetWordList: function() {
            const word_url_dict2 = this.$store.state.analyze.word_url_dict;
            //this.word_url_dict = word_url_dict2;
            if (word_url_dict2 != null) {
                console.log("debug")
                console.log(Object.keys(word_url_dict2));
            }
            const chartDataObject = {
                //labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                //labels: this.$store.state.analyze.words,
                //labels: this.$store.state.analyze.words_and_urls['words'],
                //labels: this.$store.state.analyze.words_and_urls['words'],
                labels: Object.keys(word_url_dict2),
                datasets: [
                    {
                        label: 'Bar Dataset',
                        //data: [10, 20, 30, 40, 50, 30],
                        data: this.$store.state.analyze.cnt,
                        backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    },
                    
                ]
            }
            return chartDataObject;
        },
        GetCntList: function() {
            const optionObject = {
                scales: {
                    xAxes: [{
                        scaleLabel: {
                        display: true,
                        labelString: '出現回数'
                        }
                    }],
                    yAxes: [{
                        ticks: {
                        beginAtZero: true,
                        stepSize: 10,
                        }
                    }]
                },
                onClick: this.clickHandler,
            }
            return optionObject
        },
    },
    methods: {
        go: function() {
            //console.log("猫になりたいYo");
            console.log(this.$store.state.analyze.words_and_urls);
        },
        clickHandler: function(event) {
            const elements = this.$refs.child._data._chart.getElementAtEvent(event);
            if (elements.length) {
                //console.log(this.$store.state.analyze.words_and_urls['words']);
                //const label_name = this.$store.state.analyze.words_and_urls['words'];
                //console.log(this.$store.dispatch("analyze/searhIndex", {'word': elements[0]._model.label}));
                console.log(elements[0]._model.label); // これで，ラベルを取り出せる
                console.log("aaaaaaaaaaaa");
                console.log(this.url_list);
            }
        }
    },
}
</script>