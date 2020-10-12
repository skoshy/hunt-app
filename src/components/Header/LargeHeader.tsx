import React from 'react';
import { IonHeader, IonTitle, IonToolbar } from '@ionic/react';

export const LargeHeader = ({ title }) => (
  <IonHeader collapse="condense">
    <IonToolbar color="primary">
      <IonTitle size="large">{title}</IonTitle>
    </IonToolbar>
  </IonHeader>
);
