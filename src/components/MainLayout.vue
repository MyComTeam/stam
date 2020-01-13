<template>
    <div class="main-page">
        <Header-Element/>
        <div class="nav-and-content--wrapper">
            <div id="content">
                <router-view/>
            </div>
        </div>
        <FooterElement/>
    </div>
</template>

<script>
    import HeaderElement from "./LayoutElements/HeaderElement";
    import FooterElement from "./LayoutElements/FooterElement";

    export default {
        name: "MainLayout",
        components:{
            HeaderElement,
            FooterElement,
        },
    }
</script>

<style lang="scss" scoped>
    .main-page{
        .nav-and-content{
            &--wrapper{
                display: flex;
                align-items : flex-start;
                flex-wrap: nowrap;
            }
        }
    }
</style>