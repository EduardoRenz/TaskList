<template>
  <v-container grid-list-xl>
      <div>
        <h1 class="display-2 font-weight-bold mb-3 text-xs-center ">
          Task List
        </h1>
      </div>
        <p class="subheading font-weight-regular text-xs-center ">
          Adicione itens em sua lista de tarefas
        </p>
        <v-layout  text-xs-center wrap  >
          <v-flex v-for="(list,idx) in lists" v-bind:key="idx">
            <TaskList :list="list" />
          </v-flex>
        </v-layout>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn  color="primary" darklarge  fixed bottom right   fab   big  v-on="on" @click="addTask()">
                <v-icon>add</v-icon>
              </v-btn>
            </template>
            <span>Nova lista</span>
          </v-tooltip >
  </v-container>
</template>

<script>
  import TaskList from '@/components/TaskList'
  export default {
    components:{TaskList },
    data: () => ({
      lists:[
        { title:'Tafefas de casa', 
          editing:false,
          items:[
            { task:'Tarefa de casa', order:1 ,completed:false},
            { task:'Limpar o quarto', order:1, completed:false}
        ]},
        { title:'Viagem', 
          editing:false,
          items:[
            { task:'Comprar passagens', order:1 ,completed:false},
            { task:'Agendar Hotel', order:1, completed:false}
        ]}
      ]
    }),
    methods:{
      addTask(){
        this.lists.push(        
          { title:'Nova lista', 
            editing:true,
            items:[

          ]})
      }
    }
  }
</script>

<style>

</style>
