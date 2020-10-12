import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { createOutline, listCircleOutline, personCircleOutline, searchOutline, trendingUpOutline } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import { HomePage } from './pages/Home';
import { TrendingPage } from './pages/Trending';
import { ProfilePage } from './pages/Profile';
import { SearchPage } from './pages/Search';
import { SubmitPage } from './pages/Submit';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const pages = [
  {
    name: 'home',
    title: 'Hunt',
    href: '/home',
    component: HomePage,
    icon: listCircleOutline,
  },
  {
    name: 'trending',
    title: 'Trending',
    href: '/trending',
    component: TrendingPage,
    icon: trendingUpOutline,
  },
  {
    name: 'submit',
    title: 'Submit',
    href: '/submit',
    component: SubmitPage,
    icon: createOutline,
  },
  {
    name: 'search',
    title: 'Search',
    href: '/search',
    component: SearchPage,
    icon: searchOutline,
  },
  {
    name: 'profile',
    title: 'Profile',
    href: '/profile',
    component: ProfilePage,
    icon: personCircleOutline,
  },
];

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
          {pages.map(page => (
            <Route path={page.href} component={page.component} />
          ))}
          <Route render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          {pages.map(page => (
            <IonTabButton tab={page.name} href={page.href}>
              <IonIcon icon={page.icon}></IonIcon>
              <IonLabel>{page.title}</IonLabel>
            </IonTabButton>
          ))}
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
