import { Component } from '@angular/core';

interface CarData {
  make: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  owner: string;
  image: string;
}

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {

carData: CarData[] = [
  {
      make: "Ford",
      model: "Focus",
      year: 2018,
      color: "Blue",
      mileage: 10000,
      owner: "John Doe",
      image: "https://cdn.pixabay.com/photo/2015/08/03/00/32/car-872717_1280.png"
  },
  {
      make: "Chevrolet",
      model: "Camaro",
      year: 2020,
      color: "Red",
      mileage: 2000,
      owner: "Jane Doe",
      image: "https://cdn.pixabay.com/photo/2015/08/03/00/32/car-872717_1280.png"

  },
  {
      make: "Toyota",
      model: "Prius",
      year: 2015,
      color: "White",
      mileage: 15000,
      owner: "Dave Smith",
      image: "https://cdn.pixabay.com/photo/2015/08/03/00/32/car-872717_1280.png"

  }
]


}