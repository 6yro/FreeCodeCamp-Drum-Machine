import { useState, useEffect } from "react";
import { DrumPad } from "./components/DrumPad";

const drumPadsData = [
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
];

const App = () => {
  const [soundName, setSoundName] = useState("");

  const drumPads = document.querySelectorAll(".drum-pad");

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      for (let i = 0; i < drumPads.length; i++) {
        const audio = drumPads[i].lastElementChild! as HTMLAudioElement;

        if (audio.id === e.key.toUpperCase()) {
          audio.play();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [drumPads]);

  return (
    <div className="App" id="drum-machine">
      <h1>Drum Machine</h1>
      <div id="display">
        <p>{soundName}</p>
      </div>
      <div className="drum-pads-wrapper">
        {drumPadsData.map((drumPad, id) => (
          <DrumPad
            key={id}
            soundKey={drumPad.key}
            soundName={drumPad.soundName}
            setSoundName={setSoundName}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
