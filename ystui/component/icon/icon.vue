<template>
    <i :class="classes" :style="styles"></i>
</template>
<script>
    export default {
        props: {
            name: String,
            size: [Number, String],
            color: String
        },
        computed: {
            classes () {
                return `${this.name}`;
            },
            styles () {
                let style = {};

                if (this.size) {
                    style['font-size'] = `${this.size}px`;
                }

                if (this.color) {
                    style.color = this.color;
                }

                return style;
            }
        }
    };
</script>
