
<template lang="pug">
  .content-wrapper
    section
      .container
        .task-list__header
          h1.ui-title-1 Task
          .buttons-list
            .button.button--round.button-default(
              @click="filter = 'active'"
            ) Active
            .button.button--round.button-default(
              @click="filter = 'complited'"
            ) Complited
            .button.button--round.button-default(
              @click="filter = 'all'"
            ) All
        .task-list
          .task-item(v-for='task in tasksFilter', :key='task.id', :class='{ completed: task.completed }')
            .ui-card.ui-card--shadow
              .task-item__info
                span.ui-label.ui-label--light {{task.whatWatch}}
                span Time
                span.button-close
              .task-item__content
                .ui-checkbox-wrapper
                  input.ui-checkbox(type='checkbox', v-model='task.completed')
                span.ui-title-3 {{task.title}}
              .task-item__body
                p.ui-text-regular {{task.description}}
</template>
<script>
export default {
  /* eslint-disable */
  data(){
    return{
      filter: 'active'
    }
  },
  computed:{
    tasksFilter(){
      if(this.filter === 'active'){
        return this.$store.getters.taskNotCompleted
      }else if(this.filter === 'complited')
      {
        return this.$store.getters.taskCompleted
      }else if (this.filter === 'all'){
        return this.$store.getters.tasks;
      }
    },
    tasks(){
      return this.$store.getters.tasks
    }
  }
}
</script>
<style lang="stylus" scoped>
  .task-item
  margin-bottom 20px
  &:last-child
    margin-bottom 0
.task-item__info
  display flex
  align-items center
  justify-content space-between
  margin-bottom 20px
.task-item__content
  display flex
  align-items center
  span
    margin-left 10px
.option-list
  display flex
</style>
