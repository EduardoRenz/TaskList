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
  export default {
    components:{TaskList },
    data: () => ({
      dialog:false,
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
      ],
      newList:{ title:'Nova Lista',editing:true,items:[] }
    }),
    methods:{
      addTask(){
        this.lists.push(this.newList )
        this.newList = { title:'Nova Lista',editing:true,items:[] }
      },
      deleteList(idx){
        this.lists.splice(idx,1)
      },
      dragged(evt){

        console.log('dragou')
        console.log(evt.target)
    }
    },

    beforeMount(){
      // document.addEventListener('mousemove',ev=>{
      //   console.log(ev)
      //   this.mouse.x = ev.clientX
      //   this.mouse.y = ev.clientY

      // })
    }
  }
</script>

<style>
  .dragged{position: absolute}
</style>
