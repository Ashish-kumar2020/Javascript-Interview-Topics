class EventEmitter {
  constructor() {
    this.event = {};
  }

  on(event, callback) {
    // Subscribe to event

    if (!this.event[event]) {
      this.event[event] = [];
    }
    this.event[event].push(callback);
  }

  emit(event, ...args) {
    // Trigger event

    if(!this.event[event]){
        return;
    }
    this.event[event].forEach(callback => {
        callback(...args);
    });
    // console.log(event,...args)

  }
  off(event, callback) {
    // Unsubscribe from event
    if(!this.event[event]){
      return;
    }
    this.event[event] = this.event[event].filter((fn) => fn !== callback)   
  }
}
const emitter = new EventEmitter();
const handler = (data) => console.log(data);
const handler2 = (data) => console.log("This is second callback");
emitter.on("message", handler);
emitter.on("message",handler2)
emitter.emit('message', 'Hello!');
emitter.off('message',handler)
// console.log(emitter.emit())
console.log(emitter)
