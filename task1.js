document.addEventListener("DOMContentLoaded", function () {
  function getCurrentDayOfTheWeek() {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDate = new Date();
    return days[currentDate.getUTCDay()];
  }

  function getCurrentUTCTime() {
    return Date.now();
  }

  document.querySelector("[data-testid='currentDayOfTheWeek']").textContent =
    getCurrentDayOfTheWeek();
  document.querySelector("[data-testid='currentUTCTime']").textContent =
    getCurrentUTCTime();
});
