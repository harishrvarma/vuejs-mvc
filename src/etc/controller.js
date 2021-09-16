// make sure key will be the controller key passed in url
export default {
    list:{
        admin: () => import('./../controllers/admin'),
        customer: () => import('./../controllers/customer'),    
        dashboard: () => import('./../controllers/dashboard'),    
    },
    defaultController:'dashboard',
    defaultAction:'index'
}