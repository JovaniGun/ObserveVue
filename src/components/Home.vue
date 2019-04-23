<template lang="pug">
  .content-wrapper
    section
      .container
        h1.ui-title-1 Home
        input(type="text", placeholder="what we will watch",
        v-model="taskTitle",
        @keyup.enter="newTask")
        textarea(type="text", v-model="taskDescription",
        @keyup.enter="newTask")
        .option-list
          input.what-watch(
            type='radio'
            id="radioFilm"
            value="Film"
            v-model="whatWatch"
          )
          label(
            for="radioFilm"
          ) Film
          input.what-watch(
            type='radio'
            id="radioSerial"
            value="Serial"
            v-model="whatWatch"
          )
          label(
            for="radioSerial"
          ) Serial
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      taskTitle: '',
      taskDescription: '',
      whatWatch: 'Film',
      
    }
  },
  methods:{
    newTask(){
      if(this.taskTitle !== '' && this.taskDescription !== ''){
        const tasks = {
          title: this.taskTitle,
          description: this.taskDescription,
          whatWatch: this.whatWatch,
          completed: false,
          editing: false
        };
        this.$store.dispatch('newTask', tasks)
        //Reset
        this.taskTitle = '';
        this.taskDescription = ''
      } 
    }
  }
}
</script>
<style lang="stylus" scoped>
.ui-label
  margin-right 10px
</style>
