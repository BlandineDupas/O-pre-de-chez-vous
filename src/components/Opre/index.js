// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as opencage from 'opencage-api-client';

// Routes
import CustomRoute from 'src/containers/CustomRoute';
import RedirectRoute from 'src/containers/RedirectRoute';
import NavRoute from 'src/containers/NavRoute';
// == Import
import Footer from 'src/components/Footer';
import Nav from 'src/containers/Nav';
import Home from 'src/containers/Home';
import PublicProfile from 'src/containers/PublicProfile';
import PrivateProfile from 'src/containers/PrivateProfile';
import PublicProducer from 'src/containers/PublicProducer';
import PrivateProducer from 'src/containers/PrivateProducer';
import Register from 'src/containers/Register';
import ProducerRegister from 'src/containers/ProducerRegister';
import Messaging from 'src/containers/Messaging';
import Chatroom from 'src/containers/Chatroom';
import LoginForm from 'src/containers/LoginForm';
import Itineraries from 'src/containers/Itineraries';
import Producers from 'src/containers/Producers';
import ItineraryDetails from 'src/containers/ItineraryDetails';
import ItineraryAdd from 'src/containers/ItineraryAdd';
import Us from 'src/components/Us';
import LegalMentions from 'src/components/LegalMentions';
import Contact from 'src/components/Contact';


// STYLES
import './styles.scss';

// == Composant
const Opre = () => (
  <div className="Opre">
    <Nav />
    <Switch>
      <CustomRoute exact path="/" component={Home} />
      <CustomRoute exact path="/register" component={Register} />
      <CustomRoute exact path="/login" component={LoginForm} />
      <CustomRoute exact path="/user/profile/:id" render={({ match }) => <PublicProfile id={match.params.id} />} />
      <CustomRoute exact path="/itineraries/list" component={Itineraries} />
      <CustomRoute exact path="/producers/list" component={Producers} />
      <CustomRoute exact path="/itinerary/add" needLogged component={ItineraryAdd} />
      <CustomRoute exact path="/itinerary/:id" render={({ match }) => <ItineraryDetails id={match.params.id} />} />
      <CustomRoute exact path="/producer/profile/:id" render={({ match }) => <PublicProducer id={match.params.id} />} />
      <CustomRoute exact path="/contact" component={Contact} />
      <CustomRoute exact path="/us" component={Us} />
      <CustomRoute exact path="/legal-mentions" component={LegalMentions} />

      {/* Authentification needed */}
      <CustomRoute exact path="/register/producer" needLogged component={ProducerRegister} />
      <CustomRoute exact path="/messages/list" needLogged component={Messaging} />
      <CustomRoute exact path="/messages/:slug" needLogged render={({ match }) => <Chatroom slug={match.params.slug} />} />
      <CustomRoute exact path="/user/overview/:id" needLogged render={({ match }) => <PrivateProfile id={match.params.id} />} />

      {/* Needs to be a producer */}
      <CustomRoute exact path="/producer/overview/:id" needLogged render={({ match }) => <PrivateProducer id={match.params.id} />} />

    </Switch>
    <Footer />
  </div>
);

// == Export
export default Opre;
