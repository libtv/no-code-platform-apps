class AsyncProcess {
  private funcs: Function[];
  private data: any = {};

  constructor() {
    this.funcs = [];
  }

  add(func: any) {
    let self = this;
    if (this.funcs !== null) {
      this.funcs.push((cb: any) => {
        func(self.data, cb);
      });
    }
  }

  waterfall(arr: any[], callback: any) {
    if (arr.length > 1) {
      let slice_func = arr.shift();
      slice_func((err: any, res: any) => {
        if (err) {
          return callback(err);
        }

        return this.waterfall(arr, callback);
      });
    } else {
      let slice_func = arr.shift();

      slice_func((err: any, res: any) => {
        return callback(err, res);
      });
    }
  }

  run() {
    let self = this;
    self.waterfall(this.funcs, function(err: any, res: any) {
      self.gc(); // garbage collection

      if (err) {
        return alert(err);
      }

      if (res) res();
    });
  }

  gc() {
    this.funcs = [];
    this.data = {};
  }
}

export const asnycProcess = new AsyncProcess();
