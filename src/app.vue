<template>
    <div>
        <navigator></navigator>
        <router-view></router-view>
    </div>
</template>

<script type="text/javascript">
    import Navigator from "./components/navigator.vue";
    import "./css/style.css";

    module.exports = {
        components: { Navigator }
    }
</script>
