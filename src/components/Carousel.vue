<script>
export default {
    methods: {
        nextPage() {
            const routes = this.$router.getRoutes();
            const currentIndex = routes.findIndex(route => route.path === this.$route.path);
            const nextIndex = (currentIndex + 1) % routes.length;
            this.$router.push(routes[nextIndex].path);
        },
        prevPage() {
            const routes = this.$router.getRoutes();
            const currentIndex = routes.findIndex(route => route.path === this.$route.path);
            const prevIndex = (currentIndex - 1 + routes.length) % routes.length;
            this.$router.push(routes[prevIndex].path);
        },
    },
};
</script>

<template>
    <div class="carousel">
        <router-view></router-view>
        <span id="carousel-controls">
            <button id="prev-button" @click="prevPage">Previous</button>
            <button id="next-button" @click="nextPage">Next</button>
        </span>
    </div>
</template>

<style>
.carousel {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>