<template>
  <div id="app">
    <Search v-show = "false"></Search>
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Search from '@/components/search'
import Navbar from '@/components/navbar'
export default {
  name: 'app',
  components: {
    Search,
    Navbar
  }
}
</script>

<style>
body, div, span, header, footer, nav, section, aside, article, ul, dl, dt, dd, li, a, p, h1, h2, h3, h4,h5, h6, i, b, textarea, button, input, select, figure, figcaption {
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    border: none;
    color: #333;
    box-sizing: border-box;
    font-family: "Microsoft Yahei",sans-serif;
    -webkit-tap-highlight-color:transparent;
    -webkit-font-smoothing: antialiased;
    &:focus {
        outline: none;
    }
}
a:hover {
  text-decoration: none;
}
</style>
