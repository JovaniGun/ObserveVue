
<template lang='pug'>
  .wrapper
    header
      .navbar
        .container
          .navbar-content
            router-link.header-logo(
              to="/"
            ) FilmLibrary
            .button-burger(
              @click="menuShow = !menuShow"
            )
            .navbar-list__wrapper(
              :class="{ active: menuShow }"
            )
              ul.navbar-list
                li.navbar-item(
                  v-for="link in linkMenu" :key="link.title"
                )
                  router-link.navbar-link(
                      v-bind:to='link.url'
                    ) {{link.title}}
    .content
      router-view
</template>

<script >
export default {
  data () {
    return {
      menuShow: false,
      linkMenu: [
        {title: 'Home', url: '/'},
        {title: 'Task', url: '/tasks'},
        {title: 'Login', url: '/login'},
        {title: 'Registration', url: '/registration'}
      ]
    }
  }
}
</script>

<style lang="stylus">
@import "./assets/stylus/main.styl"
</style>
