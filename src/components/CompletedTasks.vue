

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
      <q-btn label="Go back" color="negative" class="q-mt-md" @click="logout" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { dataStore } from 'src/stores/DataStore';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const store = dataStore();

    const doneTasks = computed(() =>
      store.information.filter((task) => task.completed === 'Yes')
    );
    const router=useRouter();
    function logout() {
      router.push({ name: 'adminboard' }); // Adjust this based on your route configuration
    }

    return {
      doneTasks,
      logout
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
@media (max-width: 480px) {
  .container {
    font-size: 0.9em;
  }

  .bug-item {
    padding: 8px;
  }

  .bugs-title {
    font-size: 1em;
  }

  .bug-title {
    font-size: 0.9em;
  }
}
</style>
