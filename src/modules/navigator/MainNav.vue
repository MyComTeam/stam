<template>
    <nav id="main_navigator">
        <router-link to="/">Home</router-link>
        <router-link to="/contact-base/">Client a base</router-link>
    </nav>
</template>

<script>
    export default {
        name: "MainNav.vue"
    }
</script>

<style lang="scss" scoped>
    #main_navigator {
        display        : flex;
        flex-direction : column;

        a {
            text-decoration : none;

        }
    }
</style>