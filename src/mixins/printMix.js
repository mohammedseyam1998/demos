export default {
    data(){
        return{
             title:'mohammed',
             content:'hello mohammed this is content from mixins'
        }
    },
    methods: {
      clicked(v) {
        alert(v);
      },
      mohamemd(){
          console.log("mohammed seyam")
      }
    }
  };