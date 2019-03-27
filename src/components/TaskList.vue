<template>
  <v-card>
    <v-list subheader>
      <!-- {{list.title}} -->
      <v-layout >
        <v-flex xs6 sm6 md9 class="mx-2">
          <v-text-field
            v-model="list.title"
            hide-details
            :disabled="!list.editing"
            single-line
            flat
            :solo="!list.editing"
            v-on:keyup.13.native ="list.editing = false"
            class="text-xs-center"
          ></v-text-field>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs6 sm6 md3>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn icon @click="list.editing = !list.editing" v-on="on">
                <v-icon>edit</v-icon>
              </v-btn>
            </template>
            <span>Editar Titulo</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn icon @click="list.editing = !list.editing" v-on="on">
                <v-icon color="red">delete</v-icon>
              </v-btn>
            </template>
            <span>Excluir lista</span>
          </v-tooltip>
        </v-flex>
      </v-layout>
      <v-list-tile v-for="(item,idx) in list.items" v-bind:key="idx" class="list-item">
        <v-list-tile-action>
          <v-checkbox v-model="item.completed" color="primary"></v-checkbox>
        </v-list-tile-action>
        <v-list-tile-content @click="item.completed = !item.completed">
          <v-list-tile-title v-bind:class="{completed : item.completed}">{{item.task}}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-card-actions>
        <v-text-field
            v-model="newTask"
            single-line
            label="Nova tarefa"
            prepend-icon="add"
        ></v-text-field>
    </v-card-actions>
    
  </v-card>
</template>

<script>
export default {
  props: ["list"],
    data(){
        return {
            newTask:''
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
