import React, { useEffect, useState } from "react";
import classes from "./Weather.module.css";
import axios from "axios";
import Spinner from "../../../Spinner/Spinner";
import Paper from "@material-ui/core/Paper";

const Weather = (props) => {
  const [icon, setIcon] = useState(null);
  const [isIconLoading, setIsIconLoading] = useState(true);

  useEffect(() => {
    setIsIconLoading(true);
    let source = axios.CancelToken.source();
    axios
      .get(`https://openweathermap.org/img/wn/${props.icon}@2x.png`, {
        responseType: "blob",
        cancelToken: source.token,
      })
      .then((res) => {
        const blob = new Blob([res.data], {
          type: res.headers["content-type"],
        });
        const image = URL.createObjectURL(blob);
        setIcon(image);
        setIsIconLoading(false);
      });
    return function cleanup() {
      source.cancel("Cancelled");
    };
  }, [props.icon]);

  return (
    <Paper>
      <li className={classes.Weather}>
        <p>{props.day.toString().split(" ")[0]}</p>
        {isIconLoading ? <Spinner /> : <img src={icon} alt="weatherIcon" />}
        <p>
          {props.temp.day}° / {props.temp.night}°
        </p>
      </li>
    </Paper>
  );
};

export default Weather;
