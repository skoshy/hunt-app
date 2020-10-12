import React from 'react';
import { IonHeader, IonTitle, IonToolbar } from '@ionic/react';

export const SmallHeader = ({ title }) => (
  <IonHeader>
    <IonToolbar style={{ backgroundColor: 'var(--ion-color-primary)' }} color="primary">
      <IonTitle size="large">{title}</IonTitle>
    </IonToolbar>
  </IonHeader>
);
