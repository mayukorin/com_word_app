<template>
    <div>
     <!-- グラフを描画するのは，子供にして，wordGraphはdataをstoreから持ってくる．propsのメソッドをcomputedに入れられたら，変更検知できるため-->
     <WordGraph :chart-data="GetWordList" :options="GetCntList"/>
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
    /*
    computed: {
        chartData: function() {

        }
    }
    */
    computed: {
        GetWordList: function() {
            //console.log(this.$store.state.analyze.words);
            //return this.$store.state.analyze.words;
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
            //console.log(this.$store.state.analyze.cnt);
            //return this.$store.state.analyze.cnt;
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
                }
            }
            return optionObject
        }
    }
}
</script>