<template>
    <div class="tutorial">
        <vue-markdown
            :source="contents"
        ></vue-markdown>
    </div>
</template>

<script>
export default {
    props: [
        'contents'
    ]
}
</script>
