document.addEventListener(
  "DOMContentLoaded",
  function () {
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
      return new Date(Date.now());
    }

    document.querySelector("[data-testid='currentDayOfTheWeek']").textContent =
      getCurrentDayOfTheWeek();

    setInterval(() => {
      const [hours, mins, secs] = [
        getCurrentUTCTime().getHours(),
        getCurrentUTCTime().getMinutes(),
        getCurrentUTCTime().getSeconds(),
      ];
      document.querySelector(
        "[data-testid='currentUTCTime']"
      ).textContent = `${hours}:${String(mins).padStart(2, "0")}:${String(
        secs
      ).padStart(2, "0")}`;
    });
  },
  1000
)
