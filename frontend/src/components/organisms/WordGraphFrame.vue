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
        }
    },
    computed: {
        GetWordList: function() {
            const chartDataObject = {
                //labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                labels: this.$store.state.analyze.words,
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
            console.log("猫になりたい");
        },
        clickHandler: function(event) {
            const elements = this.$refs.child._data._chart.getElementAtEvent(event);
            if (elements.length) {
                console.log(elements[0]._model.label); // これで，ラベルを取り出せる
            }
        }
    },
}
</script>