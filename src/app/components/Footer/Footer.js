import React from 'react';
import { props } from 'tcomb-react';
import { pure, skinnable } from 'revenge';
import { FlexView, Button }  from 'Basic';

import './footer.scss';

import buildo from 'assets/images/buildo.png';
import databiz from 'assets/images/databiz_white.png';
import sugMilano from 'assets/images/sug-milano.png';
import sugTreviso from 'assets/images/sug-lagoon.jpg';
import sugTorino from 'assets/images/sug-torino.jpg';
// import jugRoma from 'assets/images/jug-roma.jpg';
// import jugPadova from 'assets/images/jug-padova.jpg';
import jugMilano from 'assets/images/jug-milano.png';
import scalac from 'assets/images/scalac.png';
import devday from 'assets/images/devday.png';
import programmersPadua from 'assets/images/pip.png';
import clubSviluppatori from 'assets/images/clubSviluppatori.png';
import codegarden from 'assets/images/codegarden.png';
import scalatimes from 'assets/images/scalatimes.png';
import manning from 'assets/images/manning.jpg';
import askanews from 'assets/images/askanews.png';

@pure
@skinnable()
@props({ })
export default class Footer extends React.Component {

  onTwitterClick = () => window.open('https://twitter.com/scalaitaly', '_blank');

  onGPlusClick = () => window.open('https://plus.google.com/communities/107201018445276034960', '_blank');

  onGetTicketsClick = () => window.open('https://ti.to/scala-italy/2017', '_blank');

  getLocals() {
    const {
      onTwitterClick,
      onGPlusClick
    } = this;

    return {
      onTwitterClick,
      onGPlusClick
    };
  }

  template({ onTwitterClick, onGPlusClick }) {
    return (
      <FlexView hAlignContent='center' column className='footer' width='100%'>
        <FlexView row width='100%'>
          <FlexView column grow className='footer-section social'>
            <FlexView>
              Have something to ask, some suggestion or just want to say hello?
            </FlexView>
            <FlexView auto vAlignContent='center' grow row className='second-row' wrap>
              <FlexView grow={5} auto>
                <span className='email'><a href='mailto:info@scala-italy.it' target='_blank'>info@scala-italy.it</a></span>
              </FlexView>
              <FlexView grow={1} auto>
                <Button icon='twitter' buttonState='ready' className='social-button' onClick={onTwitterClick}>
                  twitter
                </Button>
              </FlexView>
              <FlexView grow={1} auto>
                <Button icon='google-plus' className='social-button' onClick={onGPlusClick}>
                  google+
                </Button>
              </FlexView>
            </FlexView>
          </FlexView>
          <FlexView column grow className='footer-section tickets' hAlignContent='center' vAlignContent='center'>
            <h3>TICKETS</h3>
            <Button buttonState='ready' className='action-button ticket-button' label='get your tickets' onClick={this.onGetTicketsClick} />
          </FlexView>
        </FlexView>
        <FlexView row width='100%'>
          <FlexView column grow className='footer-section partners' hAlignContent='center'>
            <h3>PARTNERS</h3>
            <FlexView row shrink wrap className='partners-logos' hAlignContent='center' vAlignContent='center'>
              <a href='http://databiz.it' target='_blank'><img src={databiz} style={{ maxWidth: 210 }}/></a>
              <a href='http://buildo.io' target='_blank'><img src={buildo} /></a>
              <a href='http://www.scalac.io/' target='_blank'><img src={scalac} /></a>
              <a href='http://www.meetup.com/milano-scala-group/' target='_blank'><img src={sugMilano} /></a>
              <a href='http://www.meetup.com/it-IT/Scala-by-the-Lagoon/' target='_blank'><img src={sugTreviso} /></a>
              <a href='http://www.meetup.com/it-IT/Torino-Scala-Programming-Big-Data-Meetup/' target='_blank'><img src={sugTorino} /></a>
              <a href='http://www.jugmilano.it/' target='_blank'><img src={jugMilano} /></a>
              <a href='http://www.programmersinpadua.it' target='_blank'><img src={programmersPadua} /></a>
              <a href='http://www.devday.it/' target='_blank'><img src={devday} /></a>
              <a href='https://www.facebook.com/groups/cdspuglia/' target='_blank'><img src={clubSviluppatori} /></a>
              <a href='https://www.facebook.com/groups/codegardenroma/' target='_blank'><img src={codegarden} /></a>
              <a href='http://scalatimes.com/' target='_blank'><img src={scalatimes} /></a>
              <a href='http://manning.com/' target='_blank'><img src={manning} style={{ maxWidth: 250 }} /></a>
              <a href='http://www.askanews.it' target='_blank'><img src={askanews} style={{ maxWidth: 250 }} /></a>
              {/*
              <a href='https://groups.yahoo.com/neo/groups/jug-roma/info' target='_blank'><img src={jugRoma} /></a>
              <a href='http://www.jugpadova.it/' target='_blank'><img src={jugPadova} /></a>
              */}
            </FlexView>
          </FlexView>
        </FlexView>
        <FlexView className='bottom-line' width='100%' hAlignContent='center' vAlignContent='center'>
          @ 2017 Implicitaly srlsu
        </FlexView>
      </FlexView>
    );
  }

}
