<template>
	<div>
		<div class="container py-1 mb-3">
			<h4>Manage Admins 
				<router-link to="/admin/new" class="btn btn-secondary btn-sm float-right" role="button" aria-pressed="true">ADD NEW</router-link> 
				<router-link to="/admin/wrong" class="btn btn-secondary btn-sm float-right mr-1" role="button" aria-pressed="true">WRONG</router-link> 
			</h4>
		</div>
		<div class="container p-0 m-0">
		<table class="table table-bordered table-fixed">
		<thead>
			<tr>
				<th class="w-auto">Admin Id</th>
				<th class="w-25">Name</th>
				<th class="w-25">Email</th>
				<th class="w-25">Status</th>
				<th class="w-auto">Action</th>
			</tr>
		</thead>
		<tbody>
			<tr :key="admin.adminId" v-for="admin in admins">
				<td>{{admin.adminId}}</td>
				<td>{{admin.name}}</td>
				<td>{{admin.email}}</td>
				<td>{{admin.status}}</td>
				<td>
					<router-link :to="`/admin/edit/id/` + admin.adminId" class="btn btn-secondary btn-sm mr-1">EDIT</router-link>
					<router-link :to="`/admin/delete/id/` + admin.adminId" class="btn btn-secondary btn-sm">DELETE</router-link>
				</td>
			</tr>
		</tbody>
		</table>
		</div>
	</div>
</template>

<script>
import Template from './../core/template';
import store from "./../../store/admin";	
import Admin from "./../../models/admin";

export default {
  name : 'adminList',
  extends : Template,
  data(){
    return {
      admins : []
    }
  },
  computed:{
  },
	created() {
		this.setAdmins();
	},
  methods: {
		setAdmins(){
			Admin.setComponent(this).setAdmins();
			this.$nextTick(() => {
				
			})
		}
  }
}
</script>