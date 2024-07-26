<!-- <template>
    <div class="main-class">
    <h3>Tester board</h3>
    <q-form @submit.prevent="testerform()">
        <q-input label="title" v-model="testerfields.title"></q-input>
        <q-input label="description" v-model="testerfields.description"></q-input>
        <q-select label="Priority" v-model="testerfields.priority" :options="['High','Medium','Low']"></q-select>
        <q-date v-model="testerfields.deadline"  label="deadline" landscape /><br>
        <q-btn label="submit" type="submit"></q-btn>
    </q-form>
</div>
</template>
<script>
import { reactive,defineComponent} from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
    setup(){
        const testerfields=reactive({
            title:'',
            description:'',
            priority:'',
            deadline:'',
            
        })
        const router=useRouter();
        

        function testerform(){
            router.push({path:'/testerdetails',query:{title:testerfields.title,description:testerfields.description,priority:testerfields.priority,deadline:testerfields.deadline}})

        }
        return{
            testerfields,
            router,
            testerform
        }
    }
})
</script>
<style>
.main-class{
    text-align: center;
  border:1px solid black;
  max-width:500px;
  max-height: 1000px;
        margin:30px auto;
        background:#fff;
        text-align:center;
        padding:40px;
        border-radius:10px;
        border:8px solid black;
        align-items: center;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
     text-decoration: dotted
}

</style> -->

<!-- <template>
    <q-page padding>
      <div class="main">
        <q-card class="card">
          <q-card-section>
            <div style="text-align: center;">
              <h3>Tester Board</h3>
            </div>
            <q-form @submit.prevent="testerform">
              <q-input label="Title" v-model="testerfields.title" dense outlined />
              <q-input label="Description" v-model="testerfields.description" dense outlined />
              <q-select
                label="Priority"
                v-model="testerfields.priority"
                :options="['High', 'Medium', 'Low']"
                dense
                outlined
              />
              <q-date v-model="testerfields.deadline" label="Deadline" landscape dense outlined /><br>
              <div style="text-align: center;">
                <q-btn label="Submit" type="submit" color="primary" class="q-mt-md" />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </q-page>
  </template>
  
  <script>
  import { reactive, defineComponent } from "vue";
  import { useRouter } from "vue-router";
  
  export default defineComponent({
    setup() {
      const testerfields = reactive({
        title: '',
        description: '',
        priority: '',
        deadline: '',
      });
      
      const router = useRouter();
  
      function testerform() {
        router.push({
          path: '/testerdetails',
          query: {
            title: testerfields.title,
            description: testerfields.description,
            priority: testerfields.priority,
            deadline: testerfields.deadline,
          },
        });
      }
  
      return {
        testerfields,
        router,
        testerform,
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
  
  .q-mt-md {
    margin-top: 16px;
  }
  </style> -->


  <template>
    <q-page padding>
      <div class="main">
        <q-card class="card">
          <q-card-section>
            <div style="text-align: center;">
              <h3>Tester Board</h3>
            </div>
            <q-form @submit.prevent="testerform">
              <q-input label="Title" v-model="testerfields.title" dense outlined class="input-field" />
              <q-input label="Description" v-model="testerfields.description" dense outlined class="input-field" />
              <q-select
                label="Priority"
                v-model="testerfields.priority"
                :options="['High', 'Medium', 'Low']"
                dense
                outlined
                class="input-field"
              />
              <q-date v-model="testerfields.deadline" label="Deadline" landscape dense outlined class="input-field" /><br>
              <div style="text-align: center;">
                <q-btn label="Submit" type="submit" color="primary" class="submit-btn q-mt-md" />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </q-page>
  </template>
  
  <script>
  import { reactive, defineComponent } from "vue";
  import { useRouter } from "vue-router";
  
  export default defineComponent({
    setup() {
      const testerfields = reactive({
        title: '',
        description: '',
        priority: '',
        deadline: '',
      });
      
      const router = useRouter();
  
      function testerform() {
        router.push({
          path: '/testerdetails',
          query: {
            title: testerfields.title,
            description: testerfields.description,
            priority: testerfields.priority,
            deadline: testerfields.deadline,
          },
        });
      }
  
      return {
        testerfields,
        router,
        testerform,
      };
    },
  });
  </script>
  
  <style scoped>
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
    max-width: 600px;
    padding: 20px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.9);
  }
  
  .input-field {
    margin-bottom: 15px;
  }
  
  .submit-btn {
    margin-top: 10px;
    width: 100%;
  }
  
  .q-mt-md {
    margin-top: 16px;
  }
  @media (max-width: 768px) {
  .main {
    padding: 10px;
  }

  .card {
    padding: 15px;
  }

  .title-container h3 {
    font-size: 1.5em;
  }

  .input-field {
    margin-bottom: 10px;
  }
}

@media (max-width: 480px) {
  .main {
    padding: 5px;
  }

  .card {
    padding: 10px;
  }

  .title-container h3 {
    font-size: 1.2em;
  }

  .input-field {
    margin-bottom: 8px;
  }
}
  </style>
  
  