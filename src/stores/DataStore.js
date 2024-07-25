import { defineStore } from 'pinia';
export const dataStore=defineStore('data',{
    state:()=>({
        information:[
            {
                title:'Hardware bug',
                description:'Hardware bug was present',
                priority:'High',
                deadline:'12/08/2024',
                developer:'Shayne',
                completed:'Yes'
            },
            {
                title:'Software bug',
                description:'Software bug was present',
                priority:'Medium',
                deadline:'29/07/2024',
                developer:'Shayne',
                completed:'No'
            },
            {
                title:'Performace degradation',
                description:'Slows down the performace',
                priority:'High',
                deadline:'25/07/2024',
                developer:'Vanessa',
                completed:'No'
            },
            {
                title:'Torjan',
                description:'Attacked the hardware',
                priority:'High',
                deadline:'30/07/2024',
                developer:'Gloria',
                completed:'Yes'
            },
            {
                title:'Malware Attack',
                description:'Crashed the system',
                priority:'Low',
                deadline:'30/08/2024',
                developer:'Gloria',
                completed:'No'
            }
        ]
    }),
    actions:{
        addData(info){
            this.information.push(info);
        },

        completeTask(title) {
            const task = this.information.find(t => t.title === title);
            if (task) {
              task.completed = 'Yes';
            }
            }
        
       
    }
})