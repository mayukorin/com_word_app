<template>
    <div>
        aa
        {{ wordList }}
        {{ cntList }}
    </div>
</template>
<script>
export default {
    name: 'WordGraph',
    props: {
        wordList: {
            type: Array,
            required: false
        },
        cntList: {
            type: Array,
            required: false
        }
    }
}
</script>