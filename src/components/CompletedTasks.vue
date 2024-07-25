<!-- <template>
    <div class="main">
    <q-page padding class="main">
    <h4>Completed tasks</h4>
    <q-item-label header style="color:black;">Solved:</q-item-label>
    <q-item 
      v-for="task in doneTasks"
      :key="task.title"
      class="bug-card"
      v-ripple>
      <q-item-section>
        <q-item-label>{{ task.title }}</q-item-label>
        <q-item-label caption>
          {{ task.description }}
        </q-item-label>
      </q-item-section>
      <q-item-section side style="align-items: center;">
        <q-select
          v-model="task.developer" label="Assigned to"
          :options="['Shayne', 'Vanessa', 'Glor']"
          dense
          outlined/>
      </q-item-section>
      <q-item-section side >
          <div class="row">
          <q-icon name="event"/>
          <div class="column">
        <q-item-label caption>{{ task.deadline }}</q-item-label>
        
        <q-item-label caption>
          <medium>{{ task.priority }}</medium>
        </q-item-label>
      </div>
      </div>
        </q-item-section>

      </q-item>
      </q-page>
    </div>

</template>
<script>
import { defineComponent,computed } from 'vue';
import { dataStore } from 'src/stores/DataStore';
export default defineComponent({
    setup(){
        const store=dataStore();

        const doneTasks=computed(()=>
    store.information.filter((task=>task.completed==='Yes')))

    return{
        doneTasks
    }


    }

})
</script>
<style>
.bug-card {
  display: flex;
  background-color: lavender;
  padding: 20px;
  margin: 10px 0;
  border-radius: 10px;
}
.main{
    background-color: gray;
}
</style> -->

<template>
  <q-page padding>
    <div class="main">
      <q-card class="developer-card">
        <q-card-section v-if="doneTasks.length">
          <h4 class="bugs-title">Completed tasks:</h4>
          <q-list bordered separator>
            <q-item
              v-for="task in doneTasks"
              :key="task.title"
              clickable
              class="bug-item"
            >
              <q-item-section>
                <div class="container">
                  <q-item-label class="bug-title">{{ task.title }}</q-item-label>
                  <q-item-label caption class="bug-description">{{ task.description }}</q-item-label>
                  <q-item-label caption class="bug-priority">Priority: {{ task.priority }}</q-item-label>
                  <q-item-label caption class="bug-deadline">Deadline: {{ task.deadline }}</q-item-label>
                  <q-item-label caption class="bug-developer">Assigned to: {{ task.developer }}</q-item-label>
                  <q-item-label caption class="bug-completed">Completed: {{ task.completed }}</q-item-label>
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
  
        <q-card-section v-else>
          <p>No completed tasks available</p>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { dataStore } from 'src/stores/DataStore';

export default defineComponent({
  setup() {
    const store = dataStore();

    const doneTasks = computed(() =>
      store.information.filter((task) => task.completed === 'Yes')
    );

    return {
      doneTasks,
    };
  },
});
</script>

<style>
.developer-card {
  margin: 10px;
  color: black;
}
.container {
  margin: 10px;
  font-size: 1.7em;
  color: #7f8c8d;
}
.bug-title {
  font-weight: bold;
  font-size: 1.1em;
  color: #2c3e50;
}
.bug-item {
  margin-bottom: 15px;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.developer-card {
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  background: linear-gradient(135deg, beige, beige);
}
.bugs-title {
  font-size: 1.2em;
  margin-bottom: 10px;
  color: #2980b9;
}
.bug-description,
.bug-description,
.bug-priority,
.bug-deadline,
.bug-completed,
.bug-developer
{
  color:black
}
</style>
