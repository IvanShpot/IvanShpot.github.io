class TimerModel {
    constructor() {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;

        this.intervalId = null;
        this.listeners = [];
        this.completeListeners = [];
    }

    start() {
        this.intervalId = setInterval(() => {
            this.tick();
        }, 1000);
    }

    pause() {
        clearInterval(this.intervalId);
    }

    reset() {
        clearInterval(this.intervalId);
        this.hours =  0;
        this.minutes = 0;
        this.seconds = 0;
        this.notifyListeners();

        for (let listener of this.completeListeners) {
            listener();
        }
        this.completeListeners = [];
    }

    tick() {
        if (this.seconds < 59) {
            this.seconds++;
        }
        else if (this.minutes < 59) {
            this.seconds = 0;
            this.minutes++;
        }
        else {
            this.seconds = 0;
            this.minutes == 0;
            this.hours++
        }
        this.notifyListeners();
    }

    addListener(listener) {
        this.listeners.push(listener);
    }

    addCompleteListener(listener) {
        this.completeListeners.push(listener);
    }

    notifyListeners() {
        for (let listener of this.listeners) {
            listener(this.hours, this.minutes, this.seconds);
        }
    }
}