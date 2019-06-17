import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
	new Vue({
		el: "#app",
		data: {
      todos: [{task:"Shopping", priority:true},
              {task:"MOT", priority:true},
              {task:"CodeClan homework",priority:false}],
      newToDo: ""

		 },
		methods: {
      saveNewToDo: function(){
        this.todos.push({
          task: this.newToDo,
          priority:false});
        this.newToDo = "";},

      makePriority: function(index){
        this.todos[index].priority = true;
      }
      }
	});
});
