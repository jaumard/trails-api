declare module "trails-api" {
  export class Controller {
    app: TrailsApp;
    log: any;
    id: any;
    __: any;
    config: any;
    new(app: TrailsApp): Controller
  }

  export class Service {
    app: TrailsApp;
    log: any;
    id: any;
    __: any;
    config: any;
    new(app: TrailsApp): Service
  }

  export class Policy {
    app: TrailsApp;
    log: any;
    id: any;
    __: any;
    config: any;
    new(app: TrailsApp): Policy
  }

  export class Model {
    app: TrailsApp;
    new(app: TrailsApp): Model
  }

  export class TrailsApp {
    routes: { path: string, config: {app?: any} }[];
    services: any;
    sitemap: any;

    pkg: any;
    config: any;
    api: any;
    env: any;
    versions: any;
    _trails: any;
    packs: any;
    loadedPacks: any;
    loadedModules: any;
    bound: any;
    started: any;
    stopped: any;
    timers: any;
    constructor(app: any);

    start(app?): any;
    stop(err?): any;
    emit(event?): any;
    onceAny(events, handler?): any;
    after(events): any;
  }

}
