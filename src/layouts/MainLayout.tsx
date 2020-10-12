import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { SmallHeader } from 'src/components/Header/SmallHeader';
import { LargeHeader } from 'src/components/Header/LargeHeader';

export const MainLayout = ({ title = '', children }) => (
  <IonPage>
    <SmallHeader title={title} />
    <IonContent fullscreen>
      <LargeHeader title={title} />
      {children}
    </IonContent>
  </IonPage>
);
