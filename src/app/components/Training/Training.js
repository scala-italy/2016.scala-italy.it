import React from 'react';
import { props } from 'tcomb-react';
import { pure, skinnable } from 'revenge';
import { FlexView, Button } from 'Basic';

import './training.scss';

@pure
@skinnable()
@props({ })
export default class Training extends React.Component {

  getLocals() {
    return {};
  }

  template() {
    return (
      <FlexView className='training' hAlignContent='center'>
        <div className='section-name light left'>Training</div>
        <div className='section-name light right'>Training</div>
        <FlexView style={{ maxWidth: 900 }} >
          <FlexView column>
            <h3>Certified Scala training</h3>
            <p>
              Interested in <strong>certified Scala training</strong>?
            </p>
            <p>This year you can enhance your Scala knowledge with one of these two-day courses, offered by <strong><a href='http://databiz.it/en/academy/' target='_blank'>Databiz Academy</a></strong>:
              <ul>
                <li><a href='https://www.eventbrite.it/e/biglietti-fast-track-to-scala-ticket-scala-italy-2017-32468070874' target='_blank'>Fast Track to Scala</a></li>
      {/*<li><a href='https://www.eventbrite.it/e/biglietti-fast-track-to-akka-with-scala-ticket-scala-italy-2017-32469341675' target='_blank'>Fast Track to Akka with Scala</a></li>*/}
                <li><a href='https://www.eventbrite.it/e/biglietti-apache-spark-ticket-scala-italy-2017-32469771962' target='_blank'>Apache Spark</a></li>
              </ul>
            </p>
            <p>
              All courses come at a discounted price and they include a <strong>conference ticket</strong>!
              <FlexView hAlignContent='center'>
                <Button className='action-button' onClick={() => window.open('http://databiz.it/en/databiz-diamond-sponsor-at-scala-italy-in-rome')}>
                  Info and Tickets
                </Button>
              </FlexView>
            </p>
          </FlexView>
        </FlexView>
      </FlexView>
    );
  }

}
