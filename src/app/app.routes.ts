import { provideRouter, RouterConfig } from '@angular/router';
import { LoginComponent } from './login/';
import { ChatComponent } from './chat/';


export const Routes: RouterConfig = [
    { path: 'login', component: LoginComponent },
    { path: 'chat', component: ChatComponent },
    { path: '', redirectTo: '/login' }
]

export const APP_ROUTER_PROVIDERS = [
    provideRouter(Routes)
];