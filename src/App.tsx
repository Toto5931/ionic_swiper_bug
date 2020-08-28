import React from 'react';
import { IonApp } from '@ionic/react';
import { IonContent, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonPage>
      <IonContent>

        <Swiper>
          <SwiperSlide>Slide1</SwiperSlide>
          <SwiperSlide>Slide2</SwiperSlide>
          <SwiperSlide>Slide3</SwiperSlide>
        </Swiper>

      </IonContent>
    </IonPage>
  </IonApp>
);

export default App;
