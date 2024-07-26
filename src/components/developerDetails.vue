<!-- <template>
  
    <q-page padding>
      <div class="main">
        <q-card class="developer-card">
          <q-card-section>
            <div style="display: flex; gap: 10px; justify-content: center; margin-bottom: 20px;">
              <q-btn label="All" @click="filterPriority('')" outlined dense />
              <q-btn label="High" @click="filterPriority('High')" outlined dense />
              <q-btn label="Medium" @click="filterPriority('Medium')" outlined dense />
              <q-btn label="Low" @click="filterPriority('Low')" outlined dense />
            </div>
          </q-card-section>
          <q-card-section v-if="filteredBugs.length">
            <h4 class="bugs-title">Bugs assigned to {{ developerName }}:</h4>
            <q-list bordered separator>
              <q-item
                v-for="bug in filteredBugs"
                :key="bug.title"
                clickable
                class="bug-item"
              >
                <q-item-section>
                  <div class="container">
                    <q-item-label class="bug-title">{{ bug.title }}</q-item-label>
                    <q-item-label caption class="bug-description">{{ bug.description }}</q-item-label>
                    <q-item-label caption class="bug-priority">Priority: {{ bug.priority }}</q-item-label>
                    <q-item-label caption class="bug-deadline">Deadline: {{ bug.deadline }}</q-item-label>
                    <q-item-label caption class="bug-completed">Completed: {{ bug.completed }}</q-item-label>
                  </div>
                </q-item-section>
  
                <div v-if="bug.completed === 'No'">
                  <q-item-section side>
                    <q-btn label="Task Complete" type="submit" class="buttons" @click="completeBug(bug.title)" />
                  </q-item-section>
                </div>
              </q-item>
            </q-list>
          </q-card-section>
  
          <q-card-section v-else>
            <p>No bugs assigned to {{ developerName }}</p>
          </q-card-section>
        </q-card>
      </div>
    </q-page>
  </template>
  
  <script>
  import { defineComponent, computed, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { dataStore } from '../stores/DataStore';
  
  export default defineComponent({
    setup() {
      const route = useRoute();
      const store = dataStore();
      const developerName = route.query.developer;
      const selectedPriority = ref('');
  
      const developerBugs = computed(() => {
        return store.information.filter(
          (bug) => bug.developer === developerName
        );
      });
  
      const filteredBugs = computed(() => {
        if (!selectedPriority.value) {
          return developerBugs.value;
        }
        return developerBugs.value.filter(
          (bug) => bug.priority === selectedPriority.value
        );
      });
  
      function filterPriority(priority) {
        selectedPriority.value = priority;
      }
  
      function completeBug(title) {
        for (const bug of store.information) {
          if (bug.title === title && bug.developer === developerName) {
            bug.completed = 'Yes';
          }
        }
      }
  
      function completeTasks() {
        
      }
  
      return {
        developerName,
        selectedPriority,
        filteredBugs,
        filterPriority,
        completeBug,
        completeTasks
      };
    }
  });
  </script> -->

  <template>
    <q-page padding>
      <div class="main">
        <q-card class="developer-card">
          <q-card-section>
            <div style="display: flex; gap: 10px; justify-content: center; margin-bottom: 20px;">
              <q-btn label="All" @click="filterPriority('')" outlined dense />
              <q-btn label="High" @click="filterPriority('High')" outlined dense />
              <q-btn label="Medium" @click="filterPriority('Medium')" outlined dense />
              <q-btn label="Low" @click="filterPriority('Low')" outlined dense />
            </div>
          </q-card-section>
          <q-card-section v-if="filteredBugs.length">
            <h4 class="bugs-title">Bugs assigned to {{ developerName }}:</h4>
            <q-list bordered separator>
              <q-item
                v-for="bug in filteredBugs"
                :key="bug.title"
                clickable
                class="bug-item"
              >
                <q-item-section>
                  <div class="container">
                    <q-item-label class="bug-title">{{ bug.title }}</q-item-label>
                    <q-item-label caption class="bug-description">{{ bug.description }}</q-item-label>
                    <q-item-label caption class="bug-priority">Priority: {{ bug.priority }}</q-item-label>
                    <q-item-label caption class="bug-deadline">Deadline: {{ bug.deadline }}</q-item-label>
                    <q-item-label caption class="bug-completed">Completed: {{ bug.completed }}</q-item-label>
                  </div>
                </q-item-section>
  
                <div v-if="bug.completed === 'No'">
                  <q-item-section side>
                    <q-btn label="Task Complete" type="submit" class="buttons" @click="completeBug(bug.title)" />
                  </q-item-section>
                </div>
              </q-item>
            </q-list>
          </q-card-section>
  
          <q-card-section v-else>
            <p>No bugs assigned to {{ developerName }}</p>
          </q-card-section>
        </q-card>
      </div>
    </q-page>
  </template>
  
  <script>
  import { defineComponent, computed, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { dataStore } from '../stores/DataStore';
  
  export default defineComponent({
    setup() {
      const route = useRoute();
      const store = dataStore();
      const developerName = ref(route.query.developer);
      const selectedPriority = ref('');
  
      const developerBugs = computed(() => {
        return store.information.filter(
          (bug) => bug.developer === developerName.value
        );
      });
  
      const filteredBugs = computed(() => {
        if (!selectedPriority.value) {
          return developerBugs.value;
        }
        return developerBugs.value.filter(
          (bug) => bug.priority === selectedPriority.value
        );
      });
  
      function filterPriority(priority) {
        selectedPriority.value = priority;
      }
  
      function completeBug(title) {
        store.completeTask(title);
      }
  
      return {
        developerName,
        selectedPriority,
        filteredBugs,
        filterPriority,
        completeBug,
      };
    }
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
  .buttons {
    margin-top: 10px;
    padding: 5px 10px;
    font-size: 1em;
    border-radius: 4px;
    color: cadetblue;
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
@media only screen and (max-width: 768px) {
  .developer-card {
    padding: 10px;
  }
  .container {
    font-size: 1.4em;
  }
  .filter-buttons {
    flex-direction: column;
    align-items: center;
  }
}
  </style>
  