<template>
    <div class="hello">
        <transition name="fade">
            <div class="alert alert-success" v-if="seeMessage">{{ message }} {{ name }}</div>
        </transition>

    </div>
    
</template>

<script>
export default {
    name: 'PlayerMessage',
    data() {
        return {
            seeMessage: false
        }
    },
    props: {
        message: String,
        name: String
    },
    watch: {
        message() {
            this.seeMessage = true
            setTimeout( () => {
                this.seeMessage = false
            }, 3500)
        }
    }
}

</script>

<style>

.fade-enter-active, .fade-leave-active {
    transition: opacity .6s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}

</style>