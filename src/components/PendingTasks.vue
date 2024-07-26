
 <template>
  <div class="q-pa-md flex flex-center">
    <div class="knob-label">
      Pending Tasks
    </div>
    <q-knob 
      disable
      v-model="pendingCount"
      show-value
      size="90px"
      :thickness="0.22"
      color="red"
      track-color="grey-3"
      class="text-primary q-ma-md"
      label="Completed"
    />
    <q-knob
      disable
      v-model="completedCount"
      show-value
      size="90px"
      :thickness="0.22"
      color="green"
      track-color="grey-3"
      class="text-secondary q-ma-md"
    />
    <div class="knob-label">
      Completed Tasks
    </div>
  </div>

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
        <q-card-section v-if="filteredTasks.length || hasProps">
          <h4 class="bugs-title">Pending tasks:</h4>
          <q-list bordered separator>
            <q-item
              v-for="task in filteredTasks"
              :key="task.title"
              clickable
              class="bug-item"
              @click="selectTask(task)"
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
              <div v-if="task.completed === 'No'">
                <q-item-section side>
                  <q-btn label="Task Complete" type="submit" class="buttons" @click.stop="completeTask(task.title)" />
                </q-item-section>
              </div>
            </q-item>
            <q-item
              v-if="hasProps"
              clickable
              class="bug-item"
              @click="selectTask(propsTask)"
            >
              <q-item-section>
                <div class="container">
                  <q-item-label class="bug-title">{{ propsTask.title }}</q-item-label>
                  <q-item-label caption class="bug-description">{{ propsTask.description }}</q-item-label>
                  <q-item-label caption class="bug-priority">Priority: {{ propsTask.priority }}</q-item-label>
                  <q-item-label caption class="bug-deadline">Deadline: {{ propsTask.deadline }}</q-item-label>
                  <q-item-label caption class="bug-developer">Assigned to: {{ propsTask.developer }}</q-item-label>
                  <q-item-label caption class="bug-completed">Completed: {{ propsTask.completed }}</q-item-label>
                </div>
              </q-item-section>
              <div v-if="propsTask.completed === 'No'">
                <q-item-section side>
                  <q-btn label="Task Complete" type="submit" class="buttons" @click.stop="completePropsTask" />
                </q-item-section>
              </div>
            </q-item>
          </q-list>
        </q-card-section>
        <q-card-section v-else>
          <p>No pending tasks available</p>
        </q-card-section>
      </q-card>
    </div>
    <q-dialog v-model="isDialogOpen">
      <q-card>
        <q-card-section>
          <div class="text-h6">Task Details</div>
        </q-card-section>
        <q-card-section>
          <q-input v-model="selectedTask.title" label="Title" />
          <q-input v-model="selectedTask.description" label="Description" />
          <q-input v-model="selectedTask.priority" label="Priority" />
          <q-input v-model="selectedTask.deadline" label="Deadline" />
          <q-input v-model="selectedTask.developer" label="Developer" />
          <q-input v-model="selectedTask.completed" label="Completed" />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Save" color="primary" @click="saveTask" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <div class="button-container">
      <q-btn label="Logout" color="negative" class="q-mt-md" @click="logout" />
      <q-btn label="Go back" color="negative" class="q-mt-md" @click="goback" />
    </div>
  </q-page>
</template>

<script>
import { dataStore } from 'src/stores/DataStore';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  props: {
    title: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    priority: {
      type: String,
      required: false,
    },
    deadline: {
      type: String,
      required: false,
    },
    developer: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const store = dataStore();
    const router = useRouter();
    const selectedPriority = ref('');
    const propsCompleted = ref('No');
    const isDialogOpen = ref(false);
    const selectedTask = ref(null);
    const pendingCount = computed(() => store.information.filter(task => task.completed === 'No').length);
    const completedCount = computed(() => store.information.filter(task => task.completed === 'Yes').length);

    const filteredTasks = computed(() => {
      if (!selectedPriority.value) {
        return store.information.filter(task => task.completed === 'No');
      }
      return store.information.filter(task => task.completed === 'No' && task.priority === selectedPriority.value);
    });

    const hasProps = computed(() => props.title || props.description || props.priority || props.deadline || props.developer);

    const propsTask = computed(() => ({
      title: props.title,
      description: props.description,
      priority: props.priority,
      deadline: props.deadline,
      developer: props.developer,
      completed: propsCompleted.value,
    }));

    function filterPriority(priority) {
      selectedPriority.value = priority;
    }

    function completeTask(title) {
      const task = store.information.find(task => task.title === title);
      if (task) {
        task.completed = 'Yes';
      }
    }

    function completePropsTask() {
      const task = store.information.find(task => task.title === propsTask.value.title);
      if (task) {
        task.completed = 'Yes';
      }
      propsCompleted.value = 'Yes';
    }

    function selectTask(task) {
      selectedTask.value = { ...task };
      isDialogOpen.value = true;
    }

    function saveTask() {
      const taskIndex = store.information.findIndex(task => task.title === selectedTask.value.title);
      if (taskIndex !== -1) {
        store.information[taskIndex] = { ...selectedTask.value };
      } else if (hasProps.value && selectedTask.value.title === props.title) {
        propsTask.value.title = selectedTask.value.title;
        propsTask.value.description = selectedTask.value.description;
        propsTask.value.priority = selectedTask.value.priority;
        propsTask.value.deadline = selectedTask.value.deadline;
        propsTask.value.developer = selectedTask.value.developer;
        propsCompleted.value = selectedTask.value.completed;
      }
      isDialogOpen.value = false;
    }

    function logout() {
      router.push({ name: 'startpage' }); // Adjust this based on your route configuration
    }

    function goback(){
      router.push({name:'adminboard'})
    }

    return {
      selectedPriority,
      filteredTasks,
      filterPriority,
      completeTask,
      completePropsTask,
      selectTask,
      saveTask,
      isDialogOpen,
      selectedTask,
      propsCompleted,
      hasProps,
      propsTask,
      pendingCount,
      completedCount,
      logout,
      goback
    };
  },
};
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
.knob-label {
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
}
.bug-description,
.bug-description,
.bug-priority,
.bug-deadline,
.bug-completed,
.bug-developer {
  color: black;
}
/* Responsive styles */
@media only screen and (max-width: 768px) {
  .developer-card {
    padding: 10px;
  }
  .bug-item {
    padding: 10px;
  }
  .container {
    font-size: 1.2em;
  }
  .buttons {
    font-size: 0.9em;
    padding: 4px 8px;
  }
  .knob-label {
    font-size: 14px;
  }
}
.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>
