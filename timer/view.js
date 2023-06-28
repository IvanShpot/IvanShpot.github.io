class TimerView {
    constructor() {
        this.hoursElement = document.getElementById("hours")
        this.minutesElement = document.getElementById("minutes");
        this.secondsElement = document.getElementById("seconds");

        this.startButton = document.getElementById("start");
        this.pauseButton = document.getElementById("pause");
        this.resetButton = document.getElementById("reset");

        this.startButton.addEventListener("click", () => this.buttonClick("start"));
        this.pauseButton.addEventListener("click", () => this.buttonClick("pause"));
        this.resetButton.addEventListener("click", () => this.buttonClick("reset"));
    }

    setHours(hours) {
        this.hoursElement.textContent = String(hours).padStart(2, "0");
    }

    setMinutes(minutes) {
        this.minutesElement.textContent = String(minutes).padStart(2, "0");
    }

    setSeconds(seconds) {
        this.secondsElement.textContent = String(seconds).padStart(2, "0");
    }

    setButtonClickListener(listener) {
        this.buttonClickListener = listener;
    }

    buttonClick(buttonId) {
        if (this.buttonClickListener) {
            this.buttonClickListener(buttonId);
        }
    }


    getButtonElement(buttonId) {
        switch (buttonId) {
            case "start":
                return this.startButton;
            case "pause":
                return this.pauseButton;
            case "reset":
                return this.resetButton;
        }
    }

    updateTime(hours, minutes, seconds) {
        this.hoursElement.textContent = hours.toString().padStart(2,"0");
        this.minutesElement.textContent = minutes.toString().padStart(2, "0");
        this.secondsElement.textContent = seconds.toString().padStart(2, "0");
    }
}