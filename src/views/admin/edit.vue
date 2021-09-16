<template>
    <div>
      <div class="container py-1 mb-3">
        <h4>Manage Admin : New 
          <router-link to="/admin/list" class="btn btn-secondary btn-sm float-right" role="button" aria-pressed="true">Back</router-link> 
        </h4>
      </div>
      <div class="container border py-1 mb-3">
      <form>
        <div class="form-group w-25">
          <label>Name</label>
          <input type="text" v-model="admin.name" class="form-control">
        </div>
        <div class="form-group w-25">
          <label>Email </label>
          <input type="text" v-model="admin.email" class="form-control">
        </div>
        <div class="form-group w-25">
          <label>Password</label>
          <input type="text" v-model="admin.password" class="form-control">
        </div>
        <div class="form-group w-25">
          <label>Status</label>
          <select v-model="admin.status" class="form-control">
            <option value="1">Active</option>
            <option value="2">InActive</option>
          </select>
        </div>
        <div class="form-group">
          <a class="btn btn-secondary btn-sm mr-2" @click="saveAdmin()">Save</a>
          <router-link to="/admin/list" class="btn btn-secondary btn-sm">Cancel</router-link> 
        </div>
      </form>
    </div>
    </div>
</template>

<script>
import Template from './../core/template';
import store from "./../../store/admin";
import Admin from "./../../models/admin";
export default {
  name : 'ViewAdminEdit',
  extends : Template,
  data() {
    return {
      admin : {}
    }
  },
  mounted() {
		this.setAdmin();
	},
  methods:{
    setAdmin(){
      let params = {
        id: this.getLayout().getParams('id')
      }
      Admin.setComponent(this).setParams(params).setAdmin();  
    },
    saveAdmin(){
      
      let params = {
        id: this.getLayout().getParams('id'),
        admin : this.admin
      }
      Admin.setComponent(this).setParams(params).saveAdmin();
      this.$router.push('/admin/list');
      this.getLayout().getAction().key = Math.Random();
    }
  }
}
</script>