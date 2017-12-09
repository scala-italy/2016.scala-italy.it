import React from 'react';
import { t, props } from 'tcomb-react';
import { pure } from 'revenge';
import Cover from 'Cover/Cover';
// import Cfp from 'CFP/CFP';
import Training from 'Training/Training';
import Speakers from 'Speakers/Speakers';
import Footer from 'Footer/Footer';
// import Conference from 'Conference/Conference';
import Schedule from 'Schedule/Schedule';
import Sponsors from 'Sponsors/Sponsors';
import Map from 'Map/Map';
import { FlexView } from 'Basic';

@pure
@props({
  app: t.Object,
  params: t.Object,
  query: t.maybe(t.Object)
})
export default class LandingContainer extends React.Component {

  static contextTypes = {
    router: t.Object
  };

  onArrowClick = () => {
    window.bringIntoView(document.querySelector('.speakers'), 1000);
  };

  onSpeakerClick = name => this.context.router.push(`/speakers/${name}`);

  onSpeakerModalClose = () => this.context.router.push('/');

  render() {
    return (
      <FlexView column>
        <Cover onArrowClick={this.onArrowClick} />
        {/*<Cfp />*/}
        <Speakers
          speakerId={this.props.params.speakerName}
          onSpeakerClick={this.onSpeakerClick}
          onSpeakerModalClose={this.onSpeakerModalClose}
        />
        <Schedule />
        <Training />
        <Sponsors />
        <Map />
        <Footer />
        {/*
        <Conference />
        */}
      </FlexView>
    );
  }

}

window.bringIntoView_started = 0;
window.bringIntoView_ends = 0;
window.bringIntoView_y = 0;
window.bringIntoView_tick = function() {
  let distanceLeft, dt, duration, travel;
  const t = Date.now();
  if (t < window.bringIntoView_ends) {
    dt = t - window.bringIntoView_started;
    duration = window.bringIntoView_ends - window.bringIntoView_started;
    distanceLeft = window.bringIntoView_y - document.body.scrollTop;
    travel = distanceLeft * (dt / duration);
    document.body.scrollTop += travel; // eslint-disable-line
    window.requestAnimationFrame(window.bringIntoView_tick);
  } else {
    document.body.scrollTop = window.bringIntoView_y;
  }
};
window.bringIntoView = function(e, duration) {
  window.bringIntoView_started = Date.now();
  window.bringIntoView_ends = window.bringIntoView_started + duration;
  window.bringIntoView_y = Math.min(document.body.scrollTop + e.getBoundingClientRect().top, document.body.scrollHeight - window.innerHeight);
  window.requestAnimationFrame(window.bringIntoView_tick);
};
