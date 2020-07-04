<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :pagination-options="{
        enabled: true,
        mode: 'pages'
                 }"/>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'my-component',
  data(){
    return {
      columns: [
        {
          label: 'Id',
          field: 'id',
        },
        {
          label: 'Email',
          field: 'email',
        },
        {
          label: 'First_name',
          field: 'first_name',
        },
        {
          label: 'Last_name',
          field: 'last_name',
          
        },
      ],
      rows: [],
    };
  },
    mounted () {
    this.$axios.get('https://reqres.in/api/users')
            .then((response) => {

                //this.rows.push(response.data.data)

                this.rows = response.data.data

                console.log(response.data.data)
                

            }).catch(error => console.log(error))
  }
};
</script>