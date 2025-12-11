import { DatePipe } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/shared/routes/routes';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { DataService } from 'src/app/shared/services/data/data.service';
import { testimonials, thumbnails1 } from 'src/app/shared/services/model/model';

interface data {
  value: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css'],
})
export class HomeComponent implements AfterViewInit {

  activeTab: string = 'best';

  setTab(tab: string) {
    this.activeTab = tab;
  }

  /* ---------------- VIDEO CONTROL ---------------- */
 @ViewChildren('videoElem') allVideos!: QueryList<ElementRef<HTMLVideoElement>>;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.allVideos.forEach(v => {
        v.nativeElement.muted = true;
        v.nativeElement.play().catch(() => {});
      });
    }, 300);
  }

  toggleMute(video: HTMLVideoElement) {
    video.muted = !video.muted;
    video.play().catch(() => {});
  }



  /* ---------------- FAQ DATA ---------------- */
  hangoverFAQ = [
    { q: "HOME.FAQ_QA.Q1", a: "HOME.FAQ_QA.A1" },
    { q: "HOME.FAQ_QA.Q2", a: "HOME.FAQ_QA.A2" },
    { q: "HOME.FAQ_QA.Q3", a: "HOME.FAQ_QA.A3" },
    { q: "HOME.FAQ_QA.Q4", a: "HOME.FAQ_QA.A4" },
    { q: "HOME.FAQ_QA.Q5", a: "HOME.FAQ_QA.A5" },
    { q: "HOME.FAQ_QA.Q6", a: "HOME.FAQ_QA.A6" },
    { q: "HOME.FAQ_QA.Q7", a: "HOME.FAQ_QA.A7" }
  ];

  sleepFAQ = [
    { q: "HOME.SLEEP_QA.Q1", a: "HOME.SLEEP_QA.A1" },
    { q: "HOME.SLEEP_QA.Q2", a: "HOME.SLEEP_QA.A2" },
    { q: "HOME.SLEEP_QA.Q3", a: "HOME.SLEEP_QA.A3" },
    { q: "HOME.SLEEP_QA.Q4", a: "HOME.SLEEP_QA.A4" },
    { q: "HOME.SLEEP_QA.Q5", a: "HOME.SLEEP_QA.A5" },
    { q: "HOME.SLEEP_QA.Q6", a: "HOME.SLEEP_QA.A6" },
    { q: "HOME.SLEEP_QA.Q7", a: "HOME.SLEEP_QA.A7" }
  ];

  public routes = routes;
  public thumbnails1: thumbnails1[] = [];
  public testimonials: testimonials[] = [];

  constructor(private data: DataService, private datePipe: DatePipe) {
    this.testimonials = this.data.testimonials;
    this.thumbnails1 = this.data.thumbnails1;
  }

  contactNow() {
    alert('Contact form or chat popup triggered!');
  }

  /* ---------------- PRODUCT LIST ---------------- */
  newArrivalProducts = [
    {
      image: 'assets/img/product/fab-you1.webp',
      title: 'Retinol Peptide Youthful Serum',
      brandname: 'febyou',
      price: 1596
    },
    {
      image: 'assets/img/product/product-2.avif',
      title: 'Plum Simply Bright 2% Niacinamide Face Wash With',
      brandname: 'Plum',
      price: 299
    },
    {
      image: 'assets/img/product/fab-you2.webp',
      title: 'Rice Glow Foam Toner',
      brandname: 'febyou',
      price: 1191
    },
    {
      image: 'assets/img/product/fab-you3.webp',
      title: 'KRice Mask Cleanser',
      brandname: 'febyou',
      price: 1407
    },
    {
      image: 'assets/img/product/ratplan-6.jpg',
      title: 'Donghae Deep Moisturizing Cream 1+1',
      brandname: 'Ratiplan',
      price: 2000
    }
  ];

  promotionProducts = [
    { image: 'assets/img/banners/Loche Tox 100Unit.jpg', title: 'HOME.PROMO.LOCHE_TOX_100' },
    { image: 'assets/img/banners/Loche Tox 200Unit.jpg', title: 'HOME.PROMO.LOCHE_TOX_200' },
    { image: 'assets/img/banners/PDRNelle.jpg', title: 'HOME.PROMO.PDRNELLE' },
    { image: 'assets/img/banners/IMG-20251025-WA0033.jpg', title: 'HOME.PROMO.PDRNELLE_SKINBOOSTER' },
    { image: 'assets/img/banners/Loche injector .jpg', title: 'HOME.PROMO.LOCHE_INJECTOR' },
    { image: 'assets/img/banners/Pdrnelle vega shine.jpg', title: 'HOME.PROMO.PDRNELLE_VEGA_SHINE' },
    { image: 'assets/img/banners/pdrnelle V .jpg', title: 'HOME.PROMO.PDRNELLE_V' }
  ];

  /* ---------------- SLIDER OPTIONS ---------------- */
  secondsection: OwlOptions = {
    loop: true,
    margin: 15,
    nav: true,
    dots: false,
    autoplay: false,
    smartSpeed: 1000,
    items: 1,
    navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"],
    responsive: {
      0: { items: 1 },
      550: { items: 2 },
      700: { items: 3 },
      1000: { items: 4 }
    }
  };

  bikefeatureOwlOptions: OwlOptions = {
    loop: true,
    margin: 2,
    nav: true,
    dots: false,
    autoplay: false,
    smartSpeed: 2000,
    items: 1,
    navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"],
    responsive: {
      0: { items: 2 },
      550: { items: 2 },
      700: { items: 3 },
      1000: { items: 4 }
    }
  };
  lineup: OwlOptions = {
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: false,
    smartSpeed: 2000,
    items: 1,
    navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"],
    responsive: {
      0: { items: 2 },
      550: { items: 2 },
      700: { items: 3 },
      1000: { items: 3 }
    }
  };

  /* ---- Other sliders kept same to avoid breaking layout ---- */

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    asNavFor: '.testimonial-thumbnails'
  };

  thumbnailConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.testimonial-slider',
    focusOnSelect: true
  };

  isClassAdded: boolean[] = [false];

  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }

  // last section tabs 
  activeSection = 'mission';

tabs = [
  { key: 'mission', label: 'Our Mission' },
  { key: 'story', label: 'Reedle Shot Story' },
  { key: 'cica', label: 'Cica Reedle™' }
];

contentData: any = {
  mission: {
    title: 'Our Mission',
    text: [
      'Skincare must go deeper than the surface – that is our belief at Loche Cosmetics.',
      'We deliver an advanced skin-absorption experience powered by Korean innovation.',
      'Our micro-needling essence uses ultra-safe spicules for gentle yet effective skin renewal.',
      'With nano-liposome technology, ingredients break into micro-molecules for deeper delivery.',
      'Our exosome extraction method ensures only the most potent actives reach your skin.'
    ]
  },

  story: {
    title: 'Reedle Shot Story',
    text: [
      'Loche Reedle Shot is inspired by premium Korean dermatology treatments.',
      'Using natural micro-spicules, the formula awakens your skin’s regeneration cycle.',
      'Each shot boosts absorption while stimulating fresh, healthy skin turnover.'
    ]
  },

  cica: {
    title: 'Cica Reedle™',
    text: [
      'Cica Reedle™ combines Centella Asiatica with micro-spicule delivery technology.',
      'It calms irritation, repairs skin barriers, and penetrates deeper for long-lasting results.',
      'Perfect for sensitive, acne-prone, and dull skin.'
    ]
  }
};

get activeContent() {
  return this.contentData[this.activeSection]; // FIXED ✔
}

changeTab(tab: string) {
  this.activeSection = tab;
}


}
