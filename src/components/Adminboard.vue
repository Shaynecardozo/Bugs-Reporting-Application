<!-- <template>
  <q-header elevated style="max-height: 50px;">
    <q-toolbar-title style="color: black; display: flex; justify-content: flex-end;">
      <div style="display: flex; gap: 10px;"> <q-form @submit.prevent="submitform()">
          <q-btn label="Pending tasks" type="submit"></q-btn>
        </q-form>
        <q-form>
          <q-btn label="Completed tasks"  @click="completeTasks()" type="submit"></q-btn>
        </q-form>
      </div>
    </q-toolbar-title>
  </q-header>
    <h1 style="text-align: center; color:black ">Admin board</h1>
</template>
<script>
import { defineComponent,reactive } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  props:{
            title:{
                String,
            },
            description:{
                String,
            },
            priority:{
                String,
            },
            deadline:{
                String,
            }
        },
  setup(props){
    const newIn=reactive({
            title:props.title,
            description:props.description,
            priority:props.priority,
            deadline:props.deadline,
            developer:props.developer
        })
        /* const testerstore=dataStore(); */
        const routerr=useRouter();
        function submitform(){
          routerr.push({path:'/pendingtasks',query:{title:newIn.title,description:newIn.description,priority:newIn.priority,deadline:newIn.deadline}})
        }
        const rout=useRouter();
        function completeTasks(){
          rout.push({path:'/completedtasks'});
        }
        return{
          routerr,
          newIn,
          submitform,
          completeTasks
        }

  }
})
</script> -->

<!-- <template>
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
      <q-card class="card">
        <q-card-section>
          <q-header elevated class="header">
            <q-toolbar-title class="toolbar-title">
              <div class="toolbar-buttons">
                <q-form @submit.prevent="submitform">
                  <q-btn label="Pending tasks" type="submit" color="primary" />
                </q-form>
                <q-form>
                  <q-btn label="Completed tasks" @click="completeTasks" type="submit" color="primary" />
                </q-form>
              </div>
            </q-toolbar-title>
          </q-header>
          <div style="text-align: center;">
            <h1>Admin Board</h1>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, reactive,computed } from 'vue';
import { useRouter } from 'vue-router';
import { dataStore } from 'src/stores/DataStore';

export default defineComponent({
  props: {
    title: String,
    description: String,
    priority: String,
    deadline: String,
  },
  setup(props) {
    const newIn = reactive({
      title: props.title,
      description: props.description,
      priority: props.priority,
      deadline: props.deadline,
      developer: props.developer,
    });

    const routerr = useRouter();
    const store=dataStore();
    const pendingCount = computed(() => store.information.filter(task => task.completed === "No").length);
    const completedCount = computed(() => store.information.filter(task => task.completed === "Yes").length);


    function submitform() {
      routerr.push({
        path: '/pendingtasks',
        query: {
          title: newIn.title,
          description: newIn.description,
          priority: newIn.priority,
          deadline: newIn.deadline,
        },
      });
    }

    function completeTasks() {
      routerr.push({ path: '/completedtasks' });
    }

    return {
      routerr,
      newIn,
      submitform,
      completeTasks,
      pendingCount,
      completedCount
    };
  },
});
</script>

<style scoped>
.card {
  margin: 10px auto;
  max-width: 500px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  background: linear-gradient(135deg, beige, beige);
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.header {
  max-height: 50px;
}

.toolbar-title {
  color: black;
  display: flex;
  justify-content: flex-end;
}

.toolbar-buttons {
  display: flex;
  gap: 10px;
}
</style> -->

<template>
  <div class="knob-container q-pa-md flex flex-center">
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
      <q-card class="card">
        <q-card-section>
          <q-header elevated class="header">
            <q-toolbar-title class="toolbar-title">
              <div class="toolbar-buttons">
                <q-form @submit.prevent="submitform">
                  <q-btn label="Pending tasks" type="submit" color="primary" />
                </q-form>
                <q-form>
                  <q-btn label="Completed tasks" @click="completeTasks" type="submit" color="primary" />
                </q-form>
              </div>
            </q-toolbar-title>
          </q-header>
          <div style="text-align: center;">
            <h1>Admin Board</h1>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import { dataStore } from 'src/stores/DataStore';

export default defineComponent({
  props: {
    title: String,
    description: String,
    priority: String,
    deadline: String,
  },
  setup(props) {
    const newIn = reactive({
      title: props.title,
      description: props.description,
      priority: props.priority,
      deadline: props.deadline,
      developer: props.developer,
    });

    const routerr = useRouter();
    const store = dataStore();
    const pendingCount = computed(() => store.information.filter(task => task.completed === "No").length);
    const completedCount = computed(() => store.information.filter(task => task.completed === "Yes").length);

    function submitform() {
      routerr.push({
        path: '/pendingtasks',
        query: {
          title: newIn.title,
          description: newIn.description,
          priority: newIn.priority,
          deadline: newIn.deadline,
        },
      });
    }

    function completeTasks() {
      routerr.push({ path: '/completedtasks' });
    }

    return {
      routerr,
      newIn,
      submitform,
      completeTasks,
      pendingCount,
      completedCount
    };
  },
});
</script>

<style scoped>
.knob-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.main {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.main::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://th.bing.com/th/id/OIP.GKwp80-Go3dItrG3xye9pQHaE8?w=1920&h=1280&rs=1&pid=ImgDetMain') no-repeat center center;
  background-size: cover;
  filter: blur(10px); /* Blurs only the background image */
  z-index: -1; /* Ensures the background stays behind the content */
}

.card {
  margin: 20px auto;
  max-width: 500px;
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.9);
}

.header {
  max-height: 50px;
}

.toolbar-title {
  color: black;
  display: flex;
  justify-content: flex-end;
}

.toolbar-buttons {
  display: flex;
  gap: 10px;
}

.knob-label {
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
}
</style>

