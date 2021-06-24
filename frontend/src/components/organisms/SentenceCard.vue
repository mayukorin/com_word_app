<template>
    <v-card class="sentence-card px-3">
        <v-card-title>
            <span class="headline">論文分析</span>
        </v-card-title>
        <v-card-text>
            <SentenceForm />
        </v-card-text>
    </v-card>
</template>

<script>
import SentenceForm from "@/components/molecules/SentenceForm";

export default {
    name: "SentenceCard",
    components: {
        SentenceForm
    }
}
</script>