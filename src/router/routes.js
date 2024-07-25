const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',
         component: () => import('components/firstpage.vue') 
      },
      {
        path:'/testerboard',
        name:'testerboard',
        component:()=>import('components/TesterBoard.vue')
      },
      {
        path:'/testerdetails',
        name:'testerdetails',
        component:()=>import('components/TesterDetails.vue'),
        props:(route)=>({title:route.query.title,description:route.query.description,priority:route.query.priority,deadline:route.query.deadline,developer:route.query.developer})
      },
      {
        path:'/pendingtasks',
        name:'pendingtasks',
        component:()=>import('components/PendingTasks.vue'),
        props:(route)=>({title:route.query.title,description:route.query.description,priority:route.query.priority,deadline:route.query.deadline})
      },
      {
        path:'/adminboard',
        name:'adminboard',
        component:()=>import('components/Adminboard.vue'),
        props:(route)=>({title:route.query.title,description:route.query.description,priority:route.query.priority,deadline:route.query.deadline})
      },
      {
        path:'/developerboard',
        name:'developerboard',
        component:()=>import('components/developerboard.vue')
      },
      {
        path:'/completedtasks',
        name:'completedtasks',
        component:()=>import('components/CompletedTasks.vue'),
      },
      {
        path:'/developerdetails',
        name:'developerdetails',
        component:()=>import('components/developerDetails.vue'),
        props:(route)=>({developer:route.query.developer}) 
      },
      {
        path:'/testerpage',
        name:'testerpage',
        component:()=>import('components/testerpage.vue')
      },
      {
        path:'/adminpage',
        name:'adminpage',
        component:()=>import('components/adminpage.vue'),
        props:(route)=>({title:route.query.title,description:route.query.description,priority:route.query.priority,deadline:route.query.deadline})
      },
      {
        path:'/startpage',
        name:'startpage',
        component:()=>import('components/firstpage.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
