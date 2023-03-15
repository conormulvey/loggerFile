export class Logger {
  constructor() {
    this.log = console.log.bind(console);
    this.warn = console.warn.bind(console);
    this.error = console.error.bind(console);
    this.info = console.info.bind(console);
    this.debug = console.debug.bind(console);
  }
  log(...args) {
    if (process.env.NODE_ENV === "development") {
      console.log(...args);
    }
  }
  error(...args) {
    if (process.env.NODE_ENV === "development") {
      console.error(...args);
    }
  }
  warn(...args) {
    if (process.env.NODE_ENV === "development") {
      console.warn(...args);
    }
  }
  info(...args) {
    if (process.env.NODE_ENV === "development") {
      console.info(...args);
    }
  }
  debug(...args) {
    if (process.env.NODE_ENV === "development") {
      console.debug(...args);
    }
  }
}

export default new Logger();
