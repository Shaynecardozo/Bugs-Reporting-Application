<!-- <template>
  <div class="outer-class">
    <h2>Confirm Details</h2>
    <q-form @submit.prevent="submitinfo()" >
        <div class="info-class">
        <div class="flex row">
        <p style="width: 30%">TITLE:</p>
        <p style="width: fit-content">: {{ newInfo.title }}</p>
      </div>
      <div class="flex row">
        <p style="width: 30%">DESCRIPTION:</p>
        <p style="width: fit-content">: {{ newInfo.description }}</p>
      </div>
      <div class="flex row">
        <p style="width: 30%">PRIORITY:</p>
        <p style="width: fit-content">: {{ newInfo.priority }}</p>
      </div>
      <div class="flex row">
        <p style="width: 30%">DEADLINE</p>
        <p style="width: fit-content">: {{ newInfo.deadline }}</p>
      </div>
        </div>
        <q-btn
      class="glossy"
      rounded
      label="Confirm details"
      @click="addData()"
    />
    <q-btn type="submit" class="glossy" rounded label="Logout"/>
</q-form>
</div>
</template>
<script>
import { dataStore } from "src/stores/DataStore";
import { reactive,defineComponent } from "vue";
import { useRouter } from "vue-router";
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

        const newInfo=reactive({
            title:props.title,
            description:props.description,
            priority:props.priority,
            deadline:props.deadline,
            developer:props.developer
        })
        const testerstore=dataStore();
        const router=useRouter();
        function addData(){
            testerstore.addData(this.newInfo);
            for(const info of testerstore.information){
                console.log(info)
            }
            alert("New data entered");
        }
        const store=dataStore();
        function submitinfo(){
           
             router.push({path:'/adminpage',query:{title:newInfo.title,description:newInfo.description,priority:newInfo.priority,deadline:newInfo.deadline}})
            

        }
        return{
            newInfo,
            addData,
            submitinfo
        }
    }
})
</script>
<style>
.outer-class{
  
  max-width:500px;
  max-height: 1000px;
        margin:30px auto;
        background:beige;
        text-align:center;
        padding:40px;
        border-radius:10px;
        border:2px dashed black;
        align-items: center;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
     text-decoration: dotted
}
</style> -->

<template>
  <q-page padding>
    <div class="main">
      <q-card class="card">
        <q-card-section>
          <div class="outer-class">
            <h2>Confirm Details</h2>
            <q-form @submit.prevent="submitinfo()">
              <div class="info-class">
                <div class="flex row">
                  <p style="width: 30%">TITLE:</p>
                  <p style="width: fit-content">: {{ newInfo.title }}</p>
                </div>
                <div class="flex row">
                  <p style="width: 30%">DESCRIPTION:</p>
                  <p style="width: fit-content">: {{ newInfo.description }}</p>
                </div>
                <div class="flex row">
                  <p style="width: 30%">PRIORITY:</p>
                  <p style="width: fit-content">: {{ newInfo.priority }}</p>
                </div>
                <div class="flex row">
                  <p style="width: 30%">DEADLINE:</p>
                  <p style="width: fit-content">: {{ newInfo.deadline }}</p>
                </div>
              </div>
              <q-btn class="glossy" rounded label="Confirm details" @click="addData()" />
              <q-btn type="submit" class="glossy" rounded label="Logout" />
            </q-form>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { dataStore } from "src/stores/DataStore";
import { reactive, defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  props: {
    title: String,
    description: String,
    priority: String,
    deadline: String
  },
  setup(props) {
    const newInfo = reactive({
      title: props.title,
      description: props.description,
      priority: props.priority,
      deadline: props.deadline,
      developer: props.developer
    });

    const testerstore = dataStore();
    const router = useRouter();

    function addData() {
      testerstore.addData(newInfo);
      for (const info of testerstore.information) {
        console.log(info);
      }
      alert("New data entered");
    }

    function submitinfo() {
      router.push({
        path: '/adminpage',
        query: {
          title: newInfo.title,
          description: newInfo.description,
          priority: newInfo.priority,
          deadline: newInfo.deadline
        }
      });
    }

    return {
      newInfo,
      addData,
      submitinfo
    };
  }
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

.outer-class {
  max-width: 500px;
  max-height: 1000px;
  margin: 30px auto;
  background: beige;
  text-align: center;
  padding: 40px;
  border-radius: 10px;
  border: 2px dashed black;
  align-items: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.row {
  margin-bottom: 15px;
}

.q-mt-md {
  margin-top: 16px;
}

.glossy {
  margin-top: 10px;
}
@media (max-width: 768px) {
  .outer-class {
    padding: 20px;
  }

  .label, .value {
    width: 45%;
  }
}

@media (max-width: 480px) {
  .outer-class {
    padding: 15px;
  }

  .label, .value {
    width: 100%;
  }

  .flex {
    flex-direction: column;
    align-items: flex-start;
  }

  .row {
    margin-bottom: 10px;
  }
}
</style>
