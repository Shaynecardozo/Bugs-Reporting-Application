<!-- <template>
    <h2>Developer board</h2>
    <q-form  @submit.prevent="showDetails()">
        <q-input label="Your name" v-model="developer"></q-input>
        <q-btn type="submit" label="Submit"></q-btn>

    </q-form>
</template>
<script>
import { defineComponent,ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    setup()
    {
        const developer=ref('');

        const router=useRouter();

        function showDetails(){
            router.push({ name: 'developerdetails', query:{developer:developer.value} });
      } 
        return{
            developer,
            router,
            showDetails
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
              <h2>Developer Board</h2>
            </div>
            <q-form @submit.prevent="showDetails">
              <q-input label="Your name" v-model="developer" outlined dense />
              <q-input label="Your password" type="password" v-model="pass" outlined dense />
              <q-btn type="submit" label="Submit" color="primary" class="submit-btn" />
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </q-page>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    setup() {
      const developer = ref('');
      const pass=ref('');
  
      const router = useRouter();
  
      function showDetails() {
        router.push({ name: 'developerdetails', query: { developer: developer.value } });
      }
  
      return {
        developer,
        router,
        showDetails,
        pass
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
  
  .submit-btn {
    margin-top: 10px;
  }
  </style>
   -->

   <template>
    <q-page padding>
      <div class="main">
        <q-card class="card">
          <q-card-section>
            <div style="text-align: center;">
              <h2>Developer Board</h2>
            </div>
            <q-form @submit.prevent="showDetails">
              <q-input label="Your name" v-model="developer" outlined dense />
              <q-input label="Your password" type="password" v-model="pass" outlined dense />
              <q-btn type="submit" label="Submit" color="primary" class="submit-btn" />
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </q-page>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    setup() {
      const developer = ref('');
      const pass = ref('');
  
      const router = useRouter();
  
      function showDetails() {
        router.push({ name: 'developerdetails', query: { developer: developer.value } });
      }
  
      return {
        developer,
        pass,
        router,
        showDetails
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
    max-width: 500px;
    padding: 20px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.9);
  }
  
  .submit-btn {
    margin-top: 16px;
  }
  @media only screen and (max-width: 768px) {
  .card {
    width: 95%;
  }
  .submit-btn {
    width: 100%;
  }
}
  </style>
  