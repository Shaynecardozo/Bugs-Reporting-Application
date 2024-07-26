
  <template>
    <q-page padding>
      <div class="main">
        <q-card class="card">
          <q-card-section>
            <div style="text-align: center;">
              <h3>Tester Login</h3>
            </div>
            <q-form @submit.prevent="gotoTesterBoard">
              <q-input label="Name" v-model="fields.name" dense outlined class="input-field" />
              <q-input label="Password" type="password" v-model="fields.password" dense outlined class="input-field" />
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
  import { defineComponent, reactive } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    setup() {
      const router = useRouter();
  
      const fields = reactive({
        name: '',
        password: '',
      });
  
      function gotoTesterBoard() {
        if (fields.name === 'Tester1' && fields.password === 'tester') {
          router.push({ name: 'testerboard' });
        } else {
          alert('Invalid Credentials');
        }
      }
  
      return {
        fields,
        gotoTesterBoard,
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
  
  