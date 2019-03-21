import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

    countries: { name: string, population: string, imageSrc: string }[] = [
        { name: "Australia", population: "24.1M", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
        { name: "Belgium", population: "11.4M", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/be.png" },
        { name: "Bulgaria", population: "7.1M", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/bg.png" },
        { name: "Canada", population: "36.3M", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ca.png" },
        { name: "Switzerland", population: "8.4M", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ch.png" },
        { name: "China", population: "1.4B", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cn.png" },
        { name: "Czech Republic", population: "10.6M", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cz.png" },
        { name: "Germany", population: "82.7M", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/de.png" },
        { name: "Spain", population: "46.6M", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/es.png" },
        { name: "Ethiopia", population: "102.4M", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/et.png" },
        { name: "Croatia", population: "4.2M", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hr.png" },
        { name: "Hungary", population: "9.8M", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hu.png" },
        { name: "Italy", population: "60.6M", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/it.png" },
        { name: "Jamaica", population: "2.9M", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/jm.png" },
        { name: "Romania", population: "19.7M", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ro.png" },
        { name: "Russia", population: "144.3M", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ru.png" },
        { name: "United States", population: "325.7M", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/us.png" },
    ];
    
    constructor() {
    }

    ngOnInit(): void {
    }
}
