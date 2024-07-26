

  <template>
    <q-page padding>
      <div class="main">
        <q-card class="card">
          <q-card-section>
            <div class="header">
              <h2>Bug Reporting Application</h2>
            </div>
            <q-form @submit.prevent="senddata">
              <q-input label="Designation" v-model="desig" outlined dense class="input-field" />
              <q-input label="Password" type="password" v-model="pass" outlined dense class="input-field" />
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
      const desig = ref('');
      const pass = ref('');
      const router = useRouter();
  
      function senddata() {
        if (desig.value === 'admin' && pass.value === 'admin') {
          router.push({ path: '/adminpage' });
        } else if (desig.value === 'tester' && pass.value === 'tester') {
          router.push({ path: '/testerpage' });
        } else {
          router.push({ path: '/developerboard' });
        }
      }
  
      return {
        desig,
        pass,
        router,
        senddata,
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
    padding: 10px; /* Add padding for better mobile view */
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
    width: 100%; /* Ensure it takes full width on small screens */
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
    width: 100%; /* Make the button full width */
  }
  
  /* Media queries for responsiveness */
  @media (max-width: 600px) {
    .main {
      height: auto;
      padding: 20px;
    }
  
    .card {
      padding: 15px;
    }
  }
  </style>
  
  