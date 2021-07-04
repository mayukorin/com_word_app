<template>
    <div id="sentence-view">
        <v-container class="my-5">
            <v-row>
                <v-col cols="12" md="6" @click="go">
                    <SentenceCard/>
                </v-col>
                <v-col cols="12" md="6">
                    <WordGraphFrame />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import SentenceCard from "@/components/organisms/SentenceCard";
import WordGraphFrame from "@/components/organisms/WordGraphFrame";
export default {
    name: "SentenceView",
    components: {
        SentenceCard,
        WordGraphFrame
    },
    methods: {
        go: function() {
            console.log("猫になりたい");
        }
    },
}
</script>