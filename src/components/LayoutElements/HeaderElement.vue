<template>
    <header id="header">
        <div class="header__top-line">
            <div class="header__top-line--box">
                <button id="hamburger">
                    <span/>
                    <span/>
                    <span/>
                </button>
                <div class="headline--small">Page Title</div>
            </div>

            <div class="header__top-line--box j-flex-end">
                <form action="#" id="mainSearch">
                    <label>
                        <input placeholder="Search" type="text" class="form-control">
                    </label>
                </form>
                <div class="user-info--panel">
                    <div class="user__picture">
                        <img src="https://www.berkshireeagle.com/uploads/original/20190807-104829-PEOPLESMULDERS-T5_28987.jpg"
                             alt="User name">
                    </div>
                    <div class="user__info-group">
                        <div class="user__name">
                            <router-link to="#">Marina Ivanova</router-link>
                        </div>
                        <div class="user__group">
                            <router-link to="#">Manager</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "HeaderElement.vue"
    }
</script>

<style lang="scss" scoped>
    .header {
        &__top-line {
            display         : flex;
            justify-content : space-between;
            background      : #484848;
            color           : #fff;
            padding-left : 17px;
            &--box {
                display     : flex;
                align-items : center;
                flex-grow   : 1;

                &.a-flex {
                    &-end {
                        align-items : flex-end;
                    }
                }

                &.j-flex {
                    &-end {
                        justify-content : flex-end;
                    }
                }
            }
        }
    }

    #hamburger {
        display          : flex;
        background-color : transparent;
        border           : none;
        flex-direction   : column;
        margin-right     : 45px;
        cursor           : pointer;

        span {
            display       : block;
            height        : 3px;
            width         : 20px;
            background    : #ffffff;
            margin-bottom : 5px;

            &:last-child {
                margin-bottom : 0;
            }
        }
    }

    .user {
        &__picture {
            display       : block;
            width         : 40px;
            height        : 40px;
            border-radius : 10em;
            overflow      : hidden;
            border        : 1px solid white;
            margin-right  : 13px;

            img {
                display    : block;
                width      : 100%;
                height     : 100%;
                object-fit : cover;
            }
        }

        &-info {
            &--panel {
                display     : flex;
                align-items : center;
                padding     : 15px 24px;
                background  : #5D5D5D;
                min-width   : 200px;
                margin-left : 48px;

            }

        }

        &__group,
        &__name {
            a {
                font-size       : 0.875rem;
                color           : #ffffff;
                text-decoration : none;
                line-height     : 1rem;
            }
        }

        &__group {
            a {
                color           : #BBBBBB;
                text-decoration : underline;
            }
        }

        &__name {
            margin-bottom : 6px;
        }
    }

    #mainSearch{
        max-width: 200px;
        width : 100%;
        display: block;
        input{
            display: block;
            width : 100%;
            height : 30px;
            border-radius: 3px;
            border : none;
        }
    }
</style>