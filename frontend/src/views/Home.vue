<template>
  <v-container grid-list-xl>
      <v-dialog v-model="dialog" persistent  max-width="600px" >
      <TaskList :list="newList" :modal="true" v-on:cancel="dialog=false" v-on:addTask="addTask(), dialog=false" />
    </v-dialog>
      <div>
        <h1 class="display-2 font-weight-bold mb-3 text-xs-center ">
          Task List
        </h1>
      </div>
        <p class="subheading font-weight-regular text-xs-center ">
          Adicione itens em sua lista de tarefas
        </p>
        <v-layout  text-xs-center wrap   >
          <v-flex v-for="(list,idx) in lists" v-bind:key="idx" md4 >
            <TaskList :list="list" v-on:deleted="(e)=>{ deleteList(idx)}"/>
          </v-flex>
        </v-layout>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn  color="primary" darklarge  fixed bottom right   fab   big  v-on="on" @click="dialog = true">
                <v-icon>add</v-icon>
              </v-btn>
            </template>
            <span>Nova lista</span>
          </v-tooltip >
  </v-container>
</template>

<script>
  import TaskList from '@/components/TaskList'
  import Api from '@/services/api'
  export default {
    components:{TaskList },
    data: () => ({
      dialog:false,
      lists:[
        // { title:'Tarefa Offline de exemplo', 
        //   editing:false,
        //   tasks:[
        //     { task:'Não foi possivel carregar as tarefas do banco', order:1 ,completed:false},
        // ]},
       
      ],
      newList:{ title:'Nova Lista',editing:true,tasks:[] }
    }),
    methods:{
      addTask(){
        this.lists.push(this.newList )
        this.newList = { title:'Nova Lista',editing:true,tasks:[] }
      },
      deleteList(idx){
        this.lists.splice(idx,1)
      }
    },

    async beforeMount(){
      try {
         let result = await Api().get('')

         //Configuração de editing para o front-end
         for (const item of result.data) {
            item.editing = false
            for (const task of item.tasks) {
              task.completed = task.completed = "0" ? false : true
            }

         }


         this.lists = result.data

      } catch (error) {
        console.log(error)
        alert('Erro ao obter listas',error.message)
      }

    }
  }
</script>

<style>
  .dragged{position: absolute}
</style>
