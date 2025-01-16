<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand">
                <router-link to="/">
                    VueLog
                </router-link>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page">
                        <router-link to="/home">
                            Home
                        </router-link>
                    </a>
                    <a class="nav-link" href="#">Features</a>
                    <a class="nav-link" href="#">Pricing</a>
                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                </div>
            </div>
        </div>
    </nav>
    <router-link to="/list">리스트 페이지</router-link>
    <div class="mt-4">
        <router-view :blogList="blogList"></router-view>
    </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import blog from './assets/blog';

export default {
    name: 'App',
    data() {
        return {
            blogList: blog,
        }
    },
    components: {}
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
