<template>
  <v-card>
    <v-list subheader>
      <!-- {{list.title}} -->
      <v-card-title>
        <v-text-field
          v-model="list.title"
          hide-details
          :disabled="!list.editing"
          single-line
          flat
          :solo="!list.editing"
          v-on:keyup.13.native="list.editing = false"
          class="text-xs-center"
        ></v-text-field>

        <v-spacer></v-spacer>

        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn icon @click="list.editing = !list.editing" v-on="on">
              <v-icon>edit</v-icon>
            </v-btn>
          </template>
          <span>Editar Titulo</span>
        </v-tooltip>

      </v-card-title>
      <v-divider></v-divider>
      <v-list-tile v-for="(item,idx) in filteredList" v-bind:key="idx" class="list-item">
        <v-list-tile-action @click="item.completed = !item.completed ">
          <v-checkbox v-model="item.completed" color="primary" disabled></v-checkbox>
        </v-list-tile-action>
        <v-list-tile-content @click="item.completed = !item.completed ">
          <v-list-tile-title v-bind:class="{completed : item.completed}">{{item.task}}</v-list-tile-title>
        </v-list-tile-content>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on" @click="deleteTask(item,idx)">
              <v-icon color="red">delete</v-icon>
            </v-btn>
          </template>
          <span>Excluir item</span>
        </v-tooltip>
      </v-list-tile>
    </v-list>
    <v-list subheader>
      <!-- {{list.title}} -->

      <v-divider></v-divider>
      <v-list-tile
        v-for="(item,idx) in list.tasks.filter(itm=>{return itm.completed})"
        v-bind:key="idx"
        class="list-item"
      >
        <v-list-tile-action>
          <v-checkbox v-model="item.completed" disabled color="primary"></v-checkbox>
        </v-list-tile-action>
        <v-list-tile-content @click="item.completed = !item.completed">
          <v-list-tile-title v-bind:class="{completed : item.completed}">{{item.task}}</v-list-tile-title>
        </v-list-tile-content>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on" @click="deleteTask(item,idx)">
              <v-icon color="red">delete</v-icon>
            </v-btn>
          </template>
          <span>Excluir item</span>
        </v-tooltip>
      </v-list-tile>
    </v-list>
    <v-card-actions>
      <v-text-field
        v-model="newTask.task"
        single-line
        label="Nova tarefa"
        prepend-icon="add"
        v-on:keyup.13.native="addItem()"
      ></v-text-field>
    </v-card-actions>
    <v-card-actions >
      <v-btn @click="$emit('cancel')" color="error">Cancelar</v-btn>
      <v-btn @click="addList()" color="success">Concluído</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      newTask: {task:'',completed:false},
       list: { title:'Nova Lista', 
          editing:true,
          tasks:[
          //  { task:'Nova tarefa', order:1 ,completed:false},
        ]},
       
    };
  },
  methods: {
    addList(){
        this.$emit('addList',this.list)
        this.list = { title:'Nova Lista', 
          editing:true,
          tasks:[
            // { task:'Não foi possivel carregar as tarefas do banco', order:1 ,completed:false},
        ]}
    },
    addItem() {
      if (this.newTask.task.trim() != "")
        this.list.tasks.push(this.newTask );
        this.newTask = {task:'',completed:false};
    },


  },
  computed: {
    filteredList() {
      return this.list.tasks.filter(item => {
        return !item.completed;
      });
    }
  },
};
</script>

<style>
.completed {
  text-decoration: line-through;
  color: gray;
}
.list-item {
  cursor: pointer;
}
.list-item:hover {
  background-color: rgba(182, 182, 182, 0.39);
}
</style>
