import { Dispatch, useRef } from "react";

type DrumPadProps = {
  soundKey: string;
  soundName: string;
  setSoundName: Dispatch<React.SetStateAction<string>>;
};

export const DrumPad: React.FC<DrumPadProps> = ({
  soundKey,
  soundName,
  setSoundName,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    audioRef.current?.play();
    setSoundName(soundName);
  };

  return (
    <button className="drum-pad" id={soundName} onClick={handleClick}>
      {soundKey}
      <audio
        ref={audioRef}
        className="clip"
        id={soundKey}
        src={`sounds/${soundName}.mp3`}
      ></audio>
    </button>
  );
};
