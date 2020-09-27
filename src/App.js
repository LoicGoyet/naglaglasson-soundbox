import React from 'react';
import styled, {keyframes} from 'styled-components';

import sounds from './data';
import SoundButton from './Components/SoundButton';

function App() {


  return (
    <Container>
      <Title>La boîte à son de Naglaglasson</Title>
      
      <Grid>
        {sounds.allIds.map(soundId => {
          const sound = sounds.byId[soundId];

          return (
            <div key={sound.id}>
              <SoundButton source={sound.source} color={sound.color}>{sound.label}</SoundButton>
            </div>
          )
        })}
      </Grid>

      <Credit>
        Réalisé par <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/stucklogo">@stuckLogo</a> (désolé)<br/>
        <small><a target="_blank" rel="noopener noreferrer" href="https://github.com/LoicGoyet/naglaglasson-soundbox">Le code source est disponible ici</a></small>
      </Credit>
    </Container>
  );
}

export default App;

const titleColor = keyframes`
  0% { color: aqua; }
  20% { color: brown; }
  40% { color: tomato; }
  60% { color: springgreen; }
  80% { color: salmon; }
  100% { color: darkgreen; }

`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  color: rgb(255 0 255);
  animation: ${titleColor} 2s;
  animation-iteration-count: infinite;
  transition: color 100ms linear;
  margin: 2rem 0;
`;

const Container = styled.main`
  max-width: 50rem;
  width: 100%;
  margin: auto;
  padding: 0 1rem;
  box-sizing: border-box;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
  grid-gap: 1rem;
`;

const Credit = styled.p`
  text-shadow: none;
  margin-top: 3rem;
`