let lastId = 0;

export function genid() {
  const randInt = Math.random() * 10 ** 15;
  const perfNowInt = (performance.now() % 10 ** 5) * 10 ** 10;
  const p = (randInt + perfNowInt + lastId++).toFixed().toString();

  return `id-${p}`;
}

export function rand(n = 2) {
  return (Math.random() * 10 ** n)
    .toFixed()
    .toString()
    .padStart(2, "0");
}

export function ts(
  {
    hours,
    minutes,
    seconds,
    ms,
  }: {
    hours: boolean;
    minutes: boolean;
    seconds: boolean;
    ms: boolean;
  } = {
    hours: false,
    minutes: false,
    seconds: true,
    ms: true,
  },
) {
  const timestamp = new Date();
  let result = "";
  if (hours) {
    if (result) {
      result += ":";
    }
    result += timestamp.getHours().toString().padStart(2, "0");
  }
  if (minutes) {
    if (result) {
      result += ":";
    }
    result += timestamp.getMinutes().toString().padStart(2, "0");
  }
  if (seconds) {
    if (result) {
      result += ":";
    }
    result += timestamp.getSeconds().toString().padStart(2, "0");
  }
  if (ms) {
    if (result) {
      result += ".";
    }
    result += timestamp.getMilliseconds().toString().padStart(3, "0");
  }
  return result;
}
