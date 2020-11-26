import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import scene0 from '../components/scene0'
import scene1 from '../components/scene1'
import scene2 from '../components/scene2'
import scene3 from '../components/scene3'
import scene4 from '../components/scene4'
import scene5 from '../components/scene5'

const routes = [
  {
    path: '/', redirect: '/preload',
  },
  {
    path: '/preload', component: scene0,
  },
  {
    path: '/scene1', component: scene1,
  },
  {
    path: '/scene2', component: scene2,
  },
  {
    path: '/scene3', component: scene3,
  },
  {
    path: '/scene4', component: scene4,
  },
  {
    path: '/scene5', component: scene5,
  },
]

const router = new VueRouter({mode: 'history', routes});
const _push = router.push;
router.push = (option, onComplete, onAbort) => {
    // TODO 自动加上query
    if(typeof option !== 'string')
        option.query = Object.assign({}, router.currentRoute.query, option.query)
    _push.apply(router, [option, onComplete, onAbort]);
};
const _replace = router.replace;
router.replace = (option, onComplete, onAbort) => {
    // TODO 自动加上query
    option.query = Object.assign({}, router.currentRoute.query, option.query)
    _replace.apply(router, [option, onComplete, onAbort]);
};
export default router;

