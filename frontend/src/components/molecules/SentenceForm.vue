<template>
    <v-form ref="form" class="mb-3">
        <v-textarea
            counter
            label="分析したい文章を入れてください"
            :rules="rules.sentence"
            v-model="form.sentence"
        ></v-textarea>
        <Button @click="handleClick">分析</Button>
    </v-form>
</template>
<script>
import Button from "@/components/atoms/Button";

export default {
    name: "SentenceForm",
    components: {
        Button,
    },
    data() {
        return {
            form: {
                sentence: "",
            },
            rules: {
                sentence: [
                    v => v.length <= 1000 || '一度に分析できるのは，1000文字までです'
                ],
            }
        }
    },
    methods: {
        handleClick() {
            if (!this.$refs.form.validate()) return;
            console.log(this.form.sentence);
        }
    }
}
</script>