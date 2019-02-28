import { Module } from 'src/core/shopware';
import './page/index';
import './view/sw-login-login';
import './view/sw-login-recovery';
import './view/sw-login-recovery-info';
import './view/sw-login-recovery-recovery';

Module.register('sw-login', {
    type: 'core',
    name: 'moduleNames.login',
    description: 'Enter description here...',
    version: '1.0.0',
    targetVersion: '1.0.0',
    color: '#F19D12',

    routes: {
        index: {
            component: 'sw-login',
            path: '/login',
            alias: '/signin',
            coreRoute: true,
            redirect: {
                name: 'sw.login.index.login'
            },
            props: {
                default: (route) => {
                    return {
                        hash: route.params.hash
                    };
                }
            },
            children: {
                login: {
                    component: 'sw-login-login',
                    path: ''
                },
                recovery: {
                    component: 'sw-login-recovery',
                    path: 'recovery'
                },
                recoveryInfo: {
                    component: 'sw-login-recovery-info',
                    path: 'info'
                },
                userRecovery: {
                    component: 'sw-login-recovery-recovery',
                    path: 'user-recovery/:hash'
                }
            }
        }
    }
});
