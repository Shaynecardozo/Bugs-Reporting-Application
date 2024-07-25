<!-- <template>
    <q-form @submit.prevent="gototesterBoard()">
        <q-input label="name" v-model="field.name"></q-input>
        <q-input label="password" type="password" v-model="field.password"></q-input>
        <q-btn label="submit" type="submit"></q-btn>
    </q-form>
</template>
<script>
import {defineComponent,reactive} from 'vue';
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
        const newinfo=reactive({
            title:props.title,
            description:props.description,
            priority:props.priority,
            deadline:props.deadline,
            developer:props.developer
        })
        const field=reactive({
            name:'',
            password:''
            
        })

        function gototesterBoard(){
            if(field.name=='freethink' && field.password=='admin'){
            this.$router.push({path:'/adminboard',query:{title:newinfo.title,description:newinfo.description,priority:newinfo.priority,deadline:newinfo.deadline}})
            }
            else{
                alert('Invalid Credentials')
            }
        }

        return{
            field,
            gototesterBoard,
            newinfo
        }
    }
})

</script> -->

<!-- <template>
    <q-page padding>
      <div class="main">
        <q-card class="card">
          <q-card-section>
            <div style="text-align: center;">
              <h3>Admin Page</h3>
            </div>
            <q-form @submit.prevent="gototesterBoard">
              <q-input label="Name" v-model="field.name" dense outlined />
              <q-input label="Password" type="password" v-model="field.password" dense outlined />
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
  import { defineComponent, reactive } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    props: {
      title: String,
      description: String,
      priority: String,
      deadline: String,
      developer: String,
    },
    
    setup(props) {
      const newinfo = reactive({
        title: props.title,
        description: props.description,
        priority: props.priority,
        deadline: props.deadline,
        developer: props.developer,
      });
  
      const field = reactive({
        name: '',
        password: '',
      });
  
      const router = useRouter();
  
      function gototesterBoard() {
        if (field.name === 'freethink' && field.password === 'admin') {
          router.push({
            path: '/adminboard',
            query: {
              title: newinfo.title,
              description: newinfo.description,
              priority: newinfo.priority,
              deadline: newinfo.deadline,
            },
          });
        } else {
          alert('Invalid Credentials');
        }
      }
  
      return {
        field,
        gototesterBoard,
        newinfo,
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
  </style>
   -->

   <template>
    <q-page padding>
      <div class="main">
        <q-card class="card">
          <q-card-section>
            <div class="header">
              <h3>Admin Page</h3>
            </div>
            <q-form @submit.prevent="gototesterBoard">
              <q-input label="Name" v-model="field.name" dense outlined class="input-field" />
              <q-input label="Password" type="password" v-model="field.password" dense outlined class="input-field" />
              <div style="text-align: center;">
                <q-btn label="Submit" type="submit" color="primary" class="submit-btn" />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </q-page>
  </template>
  
  <script>
  import { defineComponent, reactive } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    props: {
      title: String,
      description: String,
      priority: String,
      deadline: String,
      developer: String,
    },
    
    setup(props) {
      const newinfo = reactive({
        title: props.title,
        description: props.description,
        priority: props.priority,
        deadline: props.deadline,
        developer: props.developer,
      });
  
      const field = reactive({
        name: '',
        password: '',
      });
  
      const router = useRouter();
  
      function gototesterBoard() {
        if (field.name === 'freethink' && field.password === 'admin') {
          router.push({
            path: '/adminboard',
            query: {
              title: newinfo.title,
              description: newinfo.description,
              priority: newinfo.priority,
              deadline: newinfo.deadline,
            },
          });
        } else {
          alert('Invalid Credentials');
        }
      }
  
      return {
        field,
        gototesterBoard,
        newinfo,
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
    max-width: 400px;
    padding: 20px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.9);
  }
  
  .header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .input-field {
    margin-bottom: 15px;
  }
  
  .submit-btn {
    margin-top: 10px;
    width: 100%;
  }
  </style>
  