import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NavComponent } from './components/nav/nav.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CreateComponent } from './post/create/create.component';
import { EditComponent } from './post/edit/edit.component';
import { IndexComponent } from './post/index/index.component';
import { ViewComponent } from './post/view/view.component';

export const routes: Routes = [

  { title: "Home", path: '', component: HeaderComponent },
  { title: "Home", path: 'home', component: HeaderComponent },
  { title: "About Page", path: 'about', component: AboutComponent },
  { title: "Gallery Page", path: 'gallery', component: GalleryComponent },
  { title: "Services Page", path: 'services', component: ServicesComponent },
  { title: "Testimonials Page", path: 'testimonials', component: TestimonialsComponent },
  { path: 'post/index', component: IndexComponent },
  { path: 'post/create', component: CreateComponent },
  { path: 'post/:postId/edit', component: EditComponent },
  { path: 'post/:postId/view', component: ViewComponent },
  { title: "404 | Not Found", path: '**', component: NotfoundComponent },

];
