import { Component, OnInit, AfterViewInit } from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
  text: string;
  imageUrl: string;
}

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  constructor() { }

  images: string[] = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1EFnQs5zQrCeFT_dyDyrpLyLmAAbIMQqVHA&usqp=CAU',
    'https://www.inspiredtaste.net/wp-content/uploads/2020/02/The-Best-Black-Bean-Burger-Recipe-1-1200-1200x800.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/e/ea/Ice_cream_cone_%28cropped%29.jpg',
    'https://static.onecms.io/wp-content/uploads/sites/9/2018/02/foodinstagrams-ft-0218.jpg',
    'https://www.webstaurantstore.com/uploads/buying_guide/2017/7/pairing-guide-inarticle-img1.jpg'

  ];

  tiles: Tile[] = [
   // {text: 'One', cols: 1, rows: 1, imageUrl: 'https://static.onecms.io/wp-content/uploads/sites/9/2018/02/foodinstagrams-ft-0218.jpg'},
   // {text: 'One', cols: 1, rows: 1, imageUrl: 'https://bellecommunication.com/wp-content/uploads/2017/04/court-prather-528633-unsplash-1200x800.jpg'},
   // {text: 'One', cols: 2, rows: 2, imageUrl: 'https://www.inspiredtaste.net/wp-content/uploads/2020/02/The-Best-Black-Bean-Burger-Recipe-1-1200-1200x800.jpg'},
   // {text: 'One', cols: 2, rows: 1, imageUrl: 'https://s23991.pcdn.co/wp-content/uploads/2016/06/pho-recipe.jpg'},
   // {text: 'One', cols: 3, rows: 1, imageUrl: 'https://i8.amplience.net/i/traeger/20190425-Smoked-Brisket_RE_HE_M?w=1200&sm=aspect&aspect=2:1&scaleFit=poi&$poi2$'},
   // {text: 'One', cols: 1, rows: 1, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Ice_cream_cone_%28cropped%29.jpg'},
   // {text: 'One', cols: 4, rows: 2, imageUrl: 'https://www.webstaurantstore.com/uploads/buying_guide/2017/7/pairing-guide-inarticle-img1.jpg'},
  ];

  ngOnInit(): void {

    
    this.images.forEach(image => {
      const img = new Image();
      img.src = image;


      let ratio = img.height / img.width;
      console.log(ratio)



      // 1:1
      if(ratio > 0.74 && ratio < 1.4){
        console.log('made it ')
        this.tiles.push({text: 'One', cols: 4, rows: 2, imageUrl: image})

       // 16:9
      } else if (ratio > 0.4 && ratio < 0.6) {
        console.log('made it5 ')
        this.tiles.push({text: 'One', cols: 3, rows: 1, imageUrl: image})

      // 2:3
      } else if (ratio > 0.6 && ratio < 0.7) {
        console.log('made it2 ')
        this.tiles.push({text: 'One', cols: 5, rows: 2, imageUrl: image})
  
      // 3:2
      } else if (ratio > 1.4 && ratio < 1.6) {
        console.log('made it3 ')
        this.tiles.push({text: 'One', cols: 3, rows: 3, imageUrl: image})

      // 4:3
      } else if (ratio > 1.2 && ratio < 1.4) {
        console.log('made it4 ')
        this.tiles.push({text: 'One', cols: 3, rows: 4, imageUrl: image})

      }
    });

  

  }

}
