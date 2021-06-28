<template>
    <div id="sentence-view">
        <v-container class="my-5">
            <v-row>
                <v-col cols="12" md="6">
                    <SentenceCard />
                </v-col>
                <v-col cols="12" md="6">
                    <WordGraph />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import SentenceCard from "@/components/organisms/SentenceCard";
import WordGraph from "@/components/organisms/WordGraph";
export default {
    name: "SentenceView",
    components: {
        SentenceCard,
        WordGraph
    }
}
</script>