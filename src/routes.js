import VueRouter from 'vue-router'

const Home = () => import('./pages/home/Home');
const Demo = () => import('./pages/demo/Demo');

export default new VueRouter({
    routes: [
        {
            path: '',
            component: Home
        },
        {
            path: '/demo',
            component: Demo
        }
    ]
})
