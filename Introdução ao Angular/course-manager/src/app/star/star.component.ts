import { Component, Input, OnChanges } from "@angular/core";

@Component ({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ["./star.component.css"]
})

export class StarComponent implements OnChanges {
    //O @input é para a variável poder receber valor de um componente externo, que neste caso será a nota do curso, da variável 'rating'.
    @Input()
    rating!: number = 0;
    //Esta variável starWidth é para poder manipular o tamanho da div que irá conter as imagens das estrelinhas.
    starWidth!: number;    

    ngOnChange!: void {
        this.starWidth = this.rating * 94 / 5;
    }
}