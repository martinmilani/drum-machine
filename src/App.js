import React from 'react';
import { Paper, Box, Typography, Grid, Button } from '@material-ui/core';


const data = [
  {
    keyCode: 81,
    letter: "Q",
    id: "Heater-1",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    letter: "W",
    id: "Heater-2",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    letter: "E",
    id: "Heater-3",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    letter: "A",
    id: "Heater-4",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    letter: "S",
    id: "Clap",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    letter: "D",
    id: "Open-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    letter: "Z",
    id: "Kick-n'-Hat",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    letter: "X",
    id: "Kick",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    letter: "C",
    id: "Closed-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];


class DrumPad extends React.Component {

  componentWillMount() {
    console.log(this.audio);
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id);

    }
  };

  handleClick = () => {
    this.audio.play();
    this.audio.currentTime = 0;
    this.props.handleDisplay(this.props.id);
  };

  render() {
    return (
      <Button
        id={this.props.id}
        onClick={this.handleClick}
        variant="contained"
        style={{ width: '90%', height: '90%' }}
      >
        <Typography variant="h4" style={{ color: "black", fontWeight: "bold" }}>{this.props.letter}</Typography>
        <audio
          id={this.props.letter}
          className="clip"
          src={this.props.src}
          ref={ref => (this.audio = ref)}
        />
      </Button>
    );
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Click or Press a Key"
    };
  }

  handleDisplay = display => this.setState({ display });

  render() {
    return (


      <Box height='100vh' width='100%' display="flex" justifyContent="center" alignItems="center" bgcolor="background.paper">

        <Box width={600} style={{ backgroundColor: '#616161' }}>
          <Box m={3}>
            <Paper elevation={1}>
              <Typography variant="h3" align="center" style={{ backgroundColor: "black", color: "#4caf50", padding: "0.75em" }}>
                {this.state.display}
              </Typography>
            </Paper>
          </Box>
          <Box m={3}>
            <Paper elevation={0}>
              <Typography variant="h4" align="center" style={{ backgroundColor: "#ffb74d", color: "black" }}>
                Drum Machine
                  </Typography>
            </Paper>
          </Box>

          <Box mt={1} m={3}>
            <Grid container
              spacing={2}
              justify="center"
              alignItems="center"
            >
              {data.map(elem => (
                <Grid item xs={4}>
                  <Box display='flex' justifyContent="center" style={{ margin: '0 auto', height: '90px' }}>
                    <DrumPad
                      key={elem.id}
                      id={elem.id}
                      letter={elem.letter}
                      keyCode={elem.keyCode}
                      src={elem.src}
                      handleDisplay={this.handleDisplay}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>

    );
  }
}



export default App;
