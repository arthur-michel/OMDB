import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-rechercher',
    templateUrl: './rechercher.component.html',
    styleUrls: ['./rechercher.component.scss']
})
export class RechercherComponent implements OnInit {
    public title = '';
    public year: number;
    public type = '';
    public error = '';
    public films = [];

    constructor() {}

    ngOnInit() {}

    public rechercher() {
        this.error = '';
        if (!this.title || this.title.length <= 3) {
            this.error = 'Veuillez saisir un titre de plus de 3 caractères';
            return;
        }
        if (this.year && (this.year < 1900 || this.year > 2050)) {
            this.error = 'Veuillez saisir une année entre 1900 et 2050';
            return;
        }
        if (this.type === undefined) {
            this.error = 'Veuillez saisir une type de média';
            return;
        }

        this.lancerRecherche();
    }

    private lancerRecherche() {
        this.films = [
            { Title: 'Film 1', Poster: 'assets/icon/favicon.png', Year: 1998 },
            { Title: 'Film 2', Poster: 'assets/icon/favicon.png', Year: 2012 },
            { Title: 'Film 3', Poster: 'assets/icon/favicon.png', Year: 1958 },
        ];
    }
}
