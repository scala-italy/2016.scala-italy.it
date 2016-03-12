import React from 'react';
import { t, props, pure } from 'revenge';
import Cover from 'Cover/Cover';
import Footer from 'Footer/Footer';
import Conference from 'Conference/Conference';
import Cfp from 'CFP/CFP';
import Speakers from 'Speakers/Speakers';
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

  render() {
    return (
      <FlexView column>
        <Cover />
        <Conference />
        <Speakers />
        <Cfp />
        <Map />
        <Sponsors />
        <Footer />
      </FlexView>
    );
  }

}
