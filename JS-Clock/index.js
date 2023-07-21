setInterval(() => {
  date = new Date();
  htime = date.getHours();
  mtime = date.getMinutes();
  stime = date.getSeconds();
  console.log(htime, mtime, stime);

  hourRotation = 30 * htime + mtime/2;
  minuteRotation = 6 * mtime;
  secondRotation = 6 * stime;
  console.log(hourRotation, minuteRotation, secondRotation);

  hour.style.transform = `rotate(${hourRotation}deg)`;
  minute.style.transform = `rotate(${minuteRotation}deg)`;
  second.style.transform = `rotate(${secondRotation}deg)`;
}, 1000);
