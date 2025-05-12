import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
    
    // {
    //     path: '',
    //     loadComponent: () => import('./hello/hello.component').then(m => m.HelloComponent)
    // },
    // {
    //     path: 'toto',
    //     loadComponent: () => import('./pages/toto/toto.component').then(m => m.TotoComponent) 
    // {
    //   path: 'about',
    //   loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
    // }

    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./hello/hello.component').then(m => m.HelloComponent) 
            },
            {
                path: 'toto',
                loadComponent: () => import('./pages/toto/toto.component').then(m => m.TotoComponent) 
            },
            {
            path: 'about',
            loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
            }
        ]
      }
  ];
