<template>
  <v-card>
    <v-list subheader>
      <!-- {{list.title}} -->
        <v-card-title>
          <v-text-field v-model="list.title" hide-details :disabled="!list.editing" single-line flat  :solo="!list.editing" 
          v-on:keyup.13.native="list.editing = false" class="text-xs-center" ></v-text-field>
    
          <v-spacer></v-spacer>
      
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn icon @click="list.editing = !list.editing" v-on="on">
                <v-icon>edit</v-icon>
              </v-btn>
            </template>
            <span>Editar Titulo</span>
          </v-tooltip>
          <v-tooltip bottom v-if="!modal">
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on" @click="deleteList()" >
                <v-icon color="red">delete</v-icon>
              </v-btn>
            </template>
            <span>Excluir lista</span>
          </v-tooltip>
         </v-card-title>
         <v-divider></v-divider>
      <v-list-tile v-for="(item,idx) in filteredList" v-bind:key="idx" class="list-item">
        <v-list-tile-action   @click="item.completed = !item.completed ">
          <v-checkbox v-model="item.completed" color="primary" disabled> </v-checkbox>
        </v-list-tile-action>
        <v-list-tile-content @click="item.completed = !item.completed ">
          <v-list-tile-title v-bind:class="{completed : item.completed}">{{item.task}}</v-list-tile-title>
        </v-list-tile-content>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on" @click="list.items.splice(idx,1)" >
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
      <v-list-tile v-for="(item,idx) in list.items.filter(itm=>{return itm.completed})" v-bind:key="idx" class="list-item">
        <v-list-tile-action>
          <v-checkbox v-model="item.completed" color="primary"></v-checkbox>
        </v-list-tile-action>
        <v-list-tile-content @click="item.completed = !item.completed">
          <v-list-tile-title v-bind:class="{completed : item.completed}">{{item.task}}</v-list-tile-title>
        </v-list-tile-content>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on" @click="list.items.splice(idx,1)" >
                <v-icon color="red">delete</v-icon>
              </v-btn>
            </template>
            <span>Excluir item</span>
          </v-tooltip>
      </v-list-tile>
    </v-list>





    <v-card-actions>
        <v-text-field v-model="newTask"  single-line  label="Nova tarefa"  prepend-icon="add" v-on:keyup.13.native="addItem()"></v-text-field>
    </v-card-actions>
    <v-card-actions v-if="modal" >
        <v-btn @click="$emit('cancel')" color="error">Cancelar</v-btn>
        <v-btn  @click="$emit('addTask')" color="success">Concluído</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["list","modal"],
    data(){
        return {
            newTask:''
        }
    },
    methods:{
      deleteList(){
        this.$emit('deleted',this.list)
      },
      addItem(){
        if(this.newTask.trim() != '')
          this.list.items.push({completed:false,task:this.newTask})
          this.newTask = ''
      }
    },
    computed:{
      filteredList(){
        return this.list.items.filter(item=>{return !item.completed})
      }
    }
};
</script>

<style>
.completed {
  text-decoration: line-through;
  color: gray;
}
.list-item { cursor: pointer;  }
.list-item:hover { background-color: rgba(182, 182, 182, 0.39)}
</style>
