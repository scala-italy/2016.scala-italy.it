import React from 'react';
import { props } from 'tcomb-react';
import { pure, skinnable } from 'revenge';
import { Button, FlexView as View } from 'Basic';

import './cfp.scss';

@pure
@skinnable()
@props({ })
export default class CFP extends React.Component {

  onBecomeSpeakerClick = () => window.open('https://scalaitaly.typeform.com/to/iJyXpo', '_blank');

  getLocals() {
    const {
      onBecomeSpeakerClick
    } = this;

    return { onBecomeSpeakerClick };
  }

  template({ onBecomeSpeakerClick }) {
    return (
      <View grow auto className='cfp' hAlignContent='center'>
        <div className='section-name left'>Become a speaker</div>
        <div className='section-name right'>Become a speaker</div>
        <View style={{ maxWidth: 900 }} className='wrapper'>
          <View column grow width='30%' hAlignContent='center'>
            <span className='code-title' />
            <Button className='action-button' buttonState='ready' onClick={onBecomeSpeakerClick}>Become a Speaker</Button>
          </View>
          <View column grow width='70%' className='cfp-description' marginLeft='30px'>
            <h3>Come give a talk at Scala Italy!</h3>
            <p>
              Submit your proposal and come share your knowledge with the community!
            </p>
          </View>
        </View>
      </View>
    );
  }

}
