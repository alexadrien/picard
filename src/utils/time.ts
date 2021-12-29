import { Food } from "../types";
import { addMinutes, format, parse } from "date-fns";

export const getDefaultTimeValue = (): string => getFormattedCurrentTime();

export const getFormattedCurrentTime = () =>
  getTimeFormatter().format(getCurrentTime());

export const getTimeFormatter = () =>
  new Intl.DateTimeFormat("fr-FR", {
    hour: "numeric",
    minute: "numeric",
  });

export const getCurrentTime = () => new Date();

export const getEndTime = (startTime: string, longerToCookFood: Food): string =>
  formatTime(addMinutes(parseTime(startTime), longerToCookFood.duration));

export const getStartTimeForFood = (endTime: string, food: Food): string =>
  formatTime(addMinutes(parseTime(endTime), -1 * food.duration));

export const parseTime = (time: string) => parse(time, "HH:mm", new Date());

export const formatTime = (time: Date) => format(time, "HH:mm");
