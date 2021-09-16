import Axios from 'axios';

const Admin = {
	params : {},
	component : null,

	setComponent(component){
		this.component = component;
		return this;
	},

	setParams(params){
		let f = new FormData();
		for (const [k1, v1] of Object.entries(params)) {
				if(typeof v1 === 'object'){
					for (const [k2, v2] of Object.entries(v1)) {
						if(typeof v2 === 'object'){
							for (const [k3, v3] of Object.entries(v2)) {
									f.append(`${k1}[${k2}][${k3}]`,v3);    
							}
						}
					else{
						f.append(`${k1}[${k2}]`,v2);
					}
				}
			}
			else{
				f.append(k1,v1);
			}
		}
		this.params = f;
		return this;
	},

	setAdmins(){
		Axios
		.get('http://localhost/sandeep/index.php?c=api&a=index')
		.then(response => {
			this.component.admins = response.data;
		})
		.catch(error => {
			console.error(error.message);
		})
		.finally(response => {
			console.log('admin listed');
		})
	},

	setAdmin(){
		Axios
		.post('http://localhost/sandeep/index.php?c=api&a=edit', this.params)
		.then(response => {
			this.component.admin = response.data;
		})
		.catch(error => {
			console.error(error.message);
		})
		.finally(response => {
			console.log('admin listed');
		})
	},

	saveAdmin(){
		Axios
		.post('http://localhost/sandeep/index.php?c=api&a=save', this.params)
		.then(response => {
			this.component.admin = response.data;
		})
		.catch(error => {
			console.error(error.message);
		})
		.finally(response => {
			console.log('admin listed');
		})
	}
}

export default Admin;