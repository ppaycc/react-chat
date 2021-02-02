import React, { useState, useEffect, useRef } from "react";
import voiceImg from "../../voice.png";

const MessageAudio = ({ audio }) => {
  const [playStatus, setPlayStatus] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [allTime, setAllTime] = useState(0);
  const [time, seTime] = useState("00:00");
  const audioRef = useRef(null);
  //   console.log(currentTime, duration);
  const togglePlay = () => {
    if (!playStatus) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      // когда все данные появились получаем продолжительность
      audioRef.current.addEventListener("loadedmetadata", () => {
        setAllTime(audioRef.current.duration.toFixed(0));
      });
      // меняем иконку когда играет музыка
      audioRef.current.addEventListener("playing", () => {
        setPlayStatus(true);
      });
      // когда закончилась музыка (сама) сбрасываем все настройки
      audioRef.current.addEventListener("ended", () => {
        setPlayStatus(false);
        setDuration(0);
        setCurrentTime(0);
      });
      //когда пауза меняем иконку
      audioRef.current.addEventListener("pause", () => {
        setPlayStatus(false);
      });
      //дрочь для статусбара
      audioRef.current.addEventListener("timeupdate", () => {
        setCurrentTime(audioRef.current.currentTime);
        console.log(audioRef.current.currentTime);
        setDuration(
          (100 / audioRef.current.duration) * audioRef.current.currentTime
        );
      });
    }
  }, []);
  useEffect(() => {
    const makeNormalTime = (time) => {
      let seconds = time % 60,
        minutes = Math.floor(time / 60);
      seconds = seconds < 10 ? "0" + seconds : seconds;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      return `${minutes}:${seconds}`;
    };
    seTime(
      currentTime > 0
        ? makeNormalTime(currentTime.toFixed(0))
        : makeNormalTime(allTime)
    );
  }, [currentTime, allTime]);

  return (
    <div className="message__audio-voice">
      <audio ref={audioRef} src={audio} preload="auto"></audio>
      <div
        className="message__audio-voice-progress"
        style={{
          width: `${duration}%`,
        }}
      ></div>
      <div className="message__audio-voice-content">
        <button onClick={togglePlay}>
          <i className="tiny material-icons">
            {playStatus ? "pause" : "play_arrow"}
          </i>
        </button>
        <div className="voice">
          <img src={voiceImg} alt="voice sms" />
        </div>
        <span className="timeToEnd">{time}</span>
      </div>
    </div>
  );
};

export default MessageAudio;
