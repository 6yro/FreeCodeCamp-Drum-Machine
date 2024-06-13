import { useState, useEffect } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import { DrumPad } from "./components/DrumPad";

const drumPadsData = [
  [
    {
      key: "Q",
      soundName: "Heater-1",
    },
    {
      key: "W",
      soundName: "Heater-2",
    },
    {
      key: "E",
      soundName: "Heater-3",
    },
  ],
  [
    {
      key: "A",
      soundName: "Heater-4",
    },
    {
      key: "S",
      soundName: "Clap",
    },
    {
      key: "D",
      soundName: "Open-HH",
    },
  ],
  [
    {
      key: "Z",
      soundName: "Kick-n-Hat",
    },
    {
      key: "X",
      soundName: "Kick",
    },
    {
      key: "C",
      soundName: "Closed-HH",
    },
  ],
];

const App = () => {
  const [soundName, setSoundName] = useState("");

  const drumPads = document.querySelectorAll(".drum-pad");

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const audio = document.querySelector(
        `#${e.key}`
      ) as HTMLAudioElement | null;

      if (audio) {
        audio.play();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [drumPads]);

  return (
    <div className="App" id="drum-machine">
      <Typography variant="h1">Drum Machine</Typography>
      <div id="display">
        <Typography fontSize={24} mb={3}>
          {soundName || "Здесь будет название воспроизведенного звука"}
        </Typography>
      </div>

      <Grid container spacing={2} justifyContent="center">
        {drumPadsData.map((stack, id) => (
          <Grid item xs={7}>
            <Stack key={id} direction="row" gap={1} justifyContent="center">
              {stack.map((drumPad, id) => (
                <DrumPad
                  key={id}
                  soundKey={drumPad.key}
                  soundName={drumPad.soundName}
                  setSoundName={setSoundName}
                />
              ))}
            </Stack>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default App;
