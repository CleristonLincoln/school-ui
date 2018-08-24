import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-toggle',
    templateUrl: './toggle.component.html',
    styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {
    private items: MenuItem[];
    constructor() { }

    ngOnInit() {

        this.items = [{
            label: 'Cadastro',
            items: [
                { label: 'Insumo-form', icon: 'pi pi-fw pi-plus', routerLink: ['/supplies/form'] },
                { label: 'Insumo-list', icon: 'pi pi-trash', routerLink: ['/supplies/list'] },
                { label: 'Unidade', icon: 'pi pi-trash', routerLink: ['/unity'] },
                { label: 'Classificação', icon: 'pi pi-trash', routerLink: ['/classification'] },
                { label: 'Empresa-form', icon: 'pi pi-trash', routerLink: ['/company/form'] },
                { label: 'Empresa-list', icon: 'pi pi-trash', routerLink: ['/company/list'] }
            ]
        },
        {
            label: 'Solicitação',
            items: [
                {label: 'Nova Solicitação', routerLink: ['/solicitation']}
            ]
        }];
    }

}
