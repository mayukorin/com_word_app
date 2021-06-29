<template>
    <div>
     <!-- グラフを描画するのは，子供にして，wordGraphはdataをstoreから持ってくる．propsのメソッドをcomputedに入れられたら，変更検知できるため-->
     <WordGraph :word-list="GetWordList" :cnt-list="GetCntList"/>
    </div>
</template>
<script>
import WordGraph from "@/components/molecules/WordGraph";
export default {
    name: "WordGraphFrame",
    components: {
        WordGraph
    },
    computed: {
        GetWordList: function() {
            console.log(this.$store.state.analyze.words);
            return this.$store.state.analyze.words;
        },
        GetCntList: function() {
            console.log(this.$store.state.analyze.cnt);
            return this.$store.state.analyze.cnt;
        }
    }
}
</script>