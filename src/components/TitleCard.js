import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import MiniCard from './MiniCard';
import Timer from './Timer';

const TitleCard = () => (
  <Card centered={true}>
    <Card.Content>
      <Card.Header textAlign={'center'}>Programming</Card.Header>
    </Card.Content>
    {/*<Image src="/playButton.png" wrapped ui={false} />*/}
    <Card.Content>
      <Timer />
    </Card.Content>
    <Card.Content>
      <MiniCard />
      <MiniCard />
    </Card.Content>
  </Card>
);

export default TitleCard;
