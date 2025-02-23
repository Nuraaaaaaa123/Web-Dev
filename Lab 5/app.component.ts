import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'kaspi-app';
  categories = ['Electronics', 'Clothing', 'Books', 'Furniture'];
  selectedCategory: string | null = null;
  products: Product[] = [];

  allProducts: { [key: string]: Product[] } = {
    Electronics: [
      { id: 1, name: 'iPhone 14 Pro 128GB', likes: 20, description: 'Смартфон Apple iPhone 14 Pro 128GB фиолетовый', categoryId: 1, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h70/h13/64434418745374.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-128gb-fioletovyi-106363283/?m=12071010&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_500k&gad_source=1&gclid=Cj0KCQiA_NC9BhCkARIsABSnSTYQzA-4clv4Iflf1wOc6kgDO5Qhd0RzM3YF615cBrnx3OuGxZ8bUGQaAsaZEALw_wcB' },
      { id: 2, name: 'MacBook Pro 14', likes: 9, description: 'MacBook Pro 14 2024 / 24 Гб / SSD 1000 Гб / macOS / MX2J3', categoryId: 1, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p68/p25/15673696.png?format=gallery-medium', link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-24-gb-ssd-1000-gb-macos-mx2j3-132140673/?m=3233010&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_500k&gad_source=1&gclid=Cj0KCQiA_NC9BhCkARIsABSnSTZOpn5P3XcedHrp8uOt5xjdsTJw4uwAE7LdvoOFmiOymxS42YACkDgaAl5lEALw_wcB' },
      { id: 3, name: 'MacBook Air 13', likes: 11, description: 'MacBook Air 13 2024 13.6" / 8 Гб / SSD 256 Гб / macOS / MRXV3', categoryId: 1, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h53/hab/85673253928990.png?format=gallery-medium', link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-6-8-gb-ssd-256-gb-macos-mrxv3-118189620/?m=3233010&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_500k&gad_source=1&gclid=Cj0KCQiA_NC9BhCkARIsABSnSTYFLo4jVtI3Zu-U04fRw_tOxMZ2k_A3L02ZW6FljLm9pgqYdL4e7zUaAge-EALw_wcB' },
      { id: 4, name: 'Samsung Galaxy Z Flip5', likes: 18, description: 'Смартфон Samsung Galaxy Z Flip5 512GB зеленый', categoryId: 1, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/heb/hbf/83172191535134.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/samsung-galaxy-z-flip5-8-gb-512-gb-zelenyi-112861663/?m=842064&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gad_source=1&gclid=Cj0KCQiA_NC9BhCkARIsABSnSTYa30A8rp60gsVyW6SCgFO4oxjyfr7b1PlTbxsxZgU8xXRf4GYgtlEaAi_3EALw_wcB' },
    ],
    Clothing:[
      { id: 1, name: 'Пиджак', likes: 10, description: 'Пиджак свободного кроя коричневый', categoryId: 1, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hb4/h96/85812013531166.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/pidzhak-978513-korichnevyi-46-118644284/?c=750000000' },
      { id: 2, name: 'Кардиганы и джемперы', likes: 8, description: 'Белая кофта', categoryId: 1, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h90/h0b/87342326611998.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/kofta-30052753-596516664-belyi-42-124475836/?c=750000000' },
      { id: 3, name: 'Пижамы', likes: 3, description: 'Бежовая пижама', categoryId: 1, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hd1/h94/86500397023262.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/pizhama-853939492-bezhevyi-50-121254461/?c=750000000' },
      { id: 4, name: 'Бомбер', likes: 4, description: 'Бомбер DD BREND серый', categoryId: 1, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h79/h1e/86750438195230.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/bomber-dd-brend-4-69000-seryi-l-122249529/?c=750000000' },
    ],
    Books:[
      { id:1 , name: 'Убийства по алфавиту', likes:99 , description: 'Книга Кристи А.: Убийства по алфавиту', categoryId:1 , imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h48/hc7/86173136551966.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/kristi-a-ubiistva-po-alfavitu-101516844/?c=750000000' },
      { id:2 , name: 'Дневник памяти', likes: 77, description: 'Книга Спаркс Н.: Дневник памяти', categoryId: 1, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h1f/he7/63886250180638.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/sparks-n-dnevnik-pamjati-100259727/?c=750000000' },
      { id:3 , name: 'Игра престолов', likes: 88, description: 'Книга Мартин Дж. Р. Р.: Игра престолов', categoryId:1 , imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hce/h95/63803748286494.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/martin-dzh-r-r-igra-prestolov-26023843/?c=750000000' },
      { id:4 , name: 'Солнце полуночи', likes:66 , description: 'Книга Майер С.: Солнце полуночи', categoryId: 1, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h09/h17/64158792843294.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/maier-s-solntse-polunochi-102037361/?c=750000000' }
    ],
    Furniture:[
      { id: 1, name: 'Диван', likes: 12 , description: 'Диван прямой Nasip Raiana, обивка ткань, 85х230х70 см, светло-коричневый', categoryId: 1, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p70/pdb/6045250.jpeg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/divan-prjamoi-nasip-raiana-obivka-tkan-85h230h70-sm-svetlo-korichnevyi-115023255/?c=750000000' },
      { id: 2, name: 'Стол письменный', likes: 14, description: 'Стол письменный с надстройкой 40x114x140 см, stolpis002', categoryId: 2, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h82/h95/85993320710174.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/stol-pis-mennyi-s-nadstroikoi-40x114x140-sm-stolpis002-106541589/?c=750000000' },
      { id: 3, name: 'Стол письменный', likes: 15, description: 'Стол письменный ZETA Токио, 50x86x75 см, белый', categoryId: 3, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p32/pc1/26548527.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/stol-pis-mennyi-zeta-tokio-50x86x75-sm-belyi-115222548/?c=750000000' },
      { id: 4, name: 'Комлект, стол 200х80 см + 8 стульев', likes: 19, description: 'Комплект на 8 персон Лиза темно-серый, стол 200х80 см + 8 стульев', categoryId: 1, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h87/hed/80948212400158.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/komplekt-na-8-person-liza-temno-seryi-stol-200h80-sm-8-stul-ev-110568062/?c=750000000' }
    ]
  };
  selectCategory(category: string) {
    this.selectedCategory = category;
    this.products = this.allProducts[category] || [];
  }

  handleLike(productId: number) {
    const product = this.products.find((p) => p.id === productId);
    if (product) product.likes++;
  }

  handleRemove(productId: number) {
    this.products = this.products.filter((p) => p.id !== productId);
  }
}