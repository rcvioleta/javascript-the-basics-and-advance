function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    Object.defineProperties(this, {
        'duration': {
            get: function () { return duration; },
            set: function (value) { duration = value; }
        },
        'startTime': {
            get: function () { return startTime; },
            set: function (value) { startTime = value; }
        },
        'endTime': {
            get: function () { return endTime; },
            set: function (value) { endTime = value; }
        },
        'running': {
            get: function () { return running; },
            set: function (value) { running = value; }
        }
    });
}

Stopwatch.prototype.start = function () {
    if (this.running) {
        throw new Error('Stopwatch has already started');
    }
    this.running = true;
    this.startTime = new Date();
}

Stopwatch.prototype.stop = function () {
    if (!this.running) {
        throw new Error('Stopwatch was not started yet');
    }
    this.running = false;
    this.endTime = new Date();
    const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    this.duration += seconds;
}

Stopwatch.prototype.reset = function () {
    this.running = false;
    this.startTime, this.endTime, this.duration = 0;
}