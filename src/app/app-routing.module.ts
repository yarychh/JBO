import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './main/home-page/home-page.component';
import { BlogArticleComponent } from './main/blog-article/blog-article.component';
import { AffiliateComponent } from './main/affiliate/affiliate.component';
import { AboutComponent } from './main/about/about.component';
import { ContactComponent } from './main/contact/contact.component';
import { FuckYouComponent } from './main/fuck-you/fuck-you.component';
import { PrivacyDocComponent } from './main/privacy-doc/privacy-doc.component';
import { CareersComponent } from './main/careers/careers.component';
import { BlogComponent } from './main/blog/blog.component';
import { AdvertiserComponent } from './main/advertiser/advertiser.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        component: HomePageComponent,
    },
    {
        path: 'advertiser',
        component: AdvertiserComponent,
    },
    {
        path: 'affiliate',
        component: AffiliateComponent,
    },
    {
        path: 'about-us',
        component: AboutComponent,
    },
    {
        path: 'contacts',
        component: ContactComponent,
    },
    {
        path: 'faq',
        component: FuckYouComponent,
    },
    {
        path: 'privacy',
        component: PrivacyDocComponent,
    },
    {
        path: 'careers',
        component: CareersComponent,
    },
    {
        path: 'blog',
        component: BlogComponent,
    },
    {
        path: 'article/:id',
        component: BlogArticleComponent,
    },
    {
        path: '**',
        redirectTo: '/home',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            anchorScrolling: 'enabled',
            onSameUrlNavigation: 'reload',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
