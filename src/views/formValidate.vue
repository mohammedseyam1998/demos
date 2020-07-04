<template>
  <div class="container">
    <ValidationObserver ref="form">
    <form @submit.prevent="onSubmit">
    <div class="row">
              <div class="col-2 mb-3">
                <label>Name </label>
              </div>
              <div class="col-6">
               <validation-provider rules="required" v-slot="{ errors }">
                  <input  v-model=" form.fname" class="form-control" name="myinput" type="text" placeholder="Please enter your first name" />
                  <span class="alert-danger" style="color:red">{{ errors[0] }}</span>
               </validation-provider>
              </div>
     </div>
      <div class="row">
             <div class="col-2 mb-3">
                <label>last name </label>
              </div>
              <div class="col-6">
              <validation-provider rules="required" v-slot="{ errors }">
                        <input
                          class="form-control"
                          v-model=" form.lname"
                          name="lastname"
                          type="text"
                          placeholder="Please enter your last name"
                        />
                        <span class="alert-danger" style="color:red">{{ errors[0] }}</span>
                      </validation-provider>
             </div>
          </div>
           <div class="row">
             <div class="col-2 mb-3">
                <label>Number phone</label>
              </div>
              <div class="col-6">
               <validation-provider rules="required" v-slot="{ errors }">
                        <input
                          class="form-control"
                          v-model=" form.nphone"
                          name="numberphone"
                          type="text"
                          placeholder="Enter your number"
                        />
                        <span class="alert-danger" style="color:red">{{ errors[0] }}</span>
                      </validation-provider>
             </div>
          </div>
           <div class="row">
            <div class="col-md-10 mt-3">
              <button type="submit" class="btn btn-primary px-4 ">Send</button>
             </div>
          </div>
    </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  data(){
    return{
      form:{
        fname:'',
      lname:'',
      nphone:''
      }
    }
  },
  methods: {
    onSubmit() {
     this.$refs.form.validate().then(done => {
          if (!done) {
            return;
          }
           this.storeUsers()
     })
    },
    storeUsers(){
      this.$axios.post('https://reqres.in/api/users',this.form)
            .then((response) => {

                //this.rows.push(response.data.data)

                console.log(response.data.data)
                

            }).catch(error => console.log(error))
    }
  }
  
}
</script>
