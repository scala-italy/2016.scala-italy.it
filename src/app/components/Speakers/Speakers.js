import React from 'react';
import { t, props } from 'tcomb-react';
import { pure, skinnable } from 'revenge';
import { FlexView } from 'Basic';
import Speaker from './Speaker';
import Modal from 'react-modal';
import { Link } from 'react-router';

import { speakers, keynotes } from 'speakers';
import './speakers.scss';

@pure
@skinnable()
@props({
  onSpeakerClick: t.Function,
  speakerId: t.maybe(t.String),
  onSpeakerModalClose: t.Function
})
export default class Speakers extends React.Component {

  getLocals() {
    const {
      props: { onSpeakerClick, speakerId, onSpeakerModalClose }
    } = this;

    const modalProps = {
      isOpen: !!speakerId,
      onRequestClose: onSpeakerModalClose,
      style: { zIndex: 100 }
    };

    const speaker = speakers[speakerId] || keynotes[speakerId];

    return { onSpeakerClick, speakerId, modalProps, speaker };
  }

  template({ onSpeakerClick, speakerId, modalProps, speaker }) {
    return (
      <FlexView column className='speakers' hAlignContent='center'>
        <div className='section-name left'>Speakers</div>
        <div className='section-name right'>Speakers</div>
        <FlexView column hAlignContent='center'>
          <h3>KEYNOTES</h3>
          <FlexView hAlignContent='center' wrap>
            {Object.keys(keynotes).map(id => ({ ...keynotes[id], id })).map(s => (
              <Speaker src={s.pictureUrl} color={s.color} id={s.id} name={s.name} company={s.company} twitter={s.twitter} onClick={onSpeakerClick} />
            ))}
          </FlexView>
        </FlexView>
        <FlexView column hAlignContent='center'>
          <h3>SPEAKERS</h3>
          <FlexView hAlignContent='center' wrap>
            {Object.keys(speakers).map(id => ({ ...speakers[id], id })).map(s => (
              <Speaker src={s.pictureUrl} color={s.color} id={s.id} name={s.name} company={s.company} twitter={s.twitter} onClick={onSpeakerClick} />
            ))}
          </FlexView>
        </FlexView>
        <Modal {...modalProps}>
          <FlexView column hAlignContent='center'>
            {speaker && <Speaker src={speaker.pictureUrl} id={speakerId} color={speaker.color} name={speaker.name} company={speaker.company} twitter={speaker.twitter}/>}
            <FlexView className='speaker-bio'>
              {speaker && speaker.bio}
            </FlexView>
            <h3>THE TALK</h3>
            <FlexView className='title'>
              {speaker && speaker.title}
            </FlexView>
            {speaker && speaker.cospeaker && (
              <FlexView className='co-speaker'>
                Co-presented with&nbsp;<Link to={`speakers/${speaker.cospeaker.id}`}>{speaker.cospeaker.name}</Link>
              </FlexView>
            )}
            <FlexView className='abstract'>
              {speaker && speaker.abstract}
            </FlexView>
          </FlexView>
        </Modal>
      </FlexView>
    );
  }

}
