class TimerController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.taskList = [];
        this.taskName = null;

        this.wasPaused = false;
        this.isShown = true;

        this.view.setButtonClickListener((buttonId) => this.onButtonClick(buttonId));
        this.model.addListener((hours, minutes, seconds) => this.onTimeChange(hours, minutes, seconds));
        this.model.addCompleteListener(() => this.onTimerComplete());

        this.view.setHours(model.hours);
        this.view.setMinutes(model.minutes);
        this.view.setSeconds(model.seconds);
    }

    onButtonClick(buttonId) {
        switch (buttonId) {
            case "start":
                this.model.start();

                this.isShown = true;

                break;
            case "pause":
                this.wasPaused = true;
                this.model.pause();
                break;
            case "reset":
                this.wasPaused = false;

                if (this.isShown) {
                    this.taskName = prompt('Enter the name of the session:');

                    if (this.taskName !== null && this.taskName !== '') {
                        var taskItem = document.createElement('li');
                        taskItem.innerText = this.taskName + " >> " + this.model.hours.toString().padStart(2,"0") + 
                        ':' + this.model.minutes.toString().padStart(2,"0") + ':' + this.model.seconds.toString().padStart(2,"0");
                        document.getElementById('logList').appendChild(taskItem);
                    }
                    this.isShown = false;
                }
                this.model.reset();
                break;
        }
    }

    onTimeChange(hours, minutes, seconds) {
        this.view.updateTime(hours, minutes, seconds);
    }

    onTimerComplete() {
        this.onButtonClick("reset");
    }
}