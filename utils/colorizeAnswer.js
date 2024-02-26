const colorizeBool = (answer) => {
  return answer ? answer.toString().bgGreen : answer.toString().bgRed;
};

export const colorize = ({
  str,
  answer = "",
  isBool = false,
  color = "blue",
}) => {
  return `${str} ${isBool ? colorizeBool(answer) : answer.toString().cyan}\n\n`[
    color
  ];
};
