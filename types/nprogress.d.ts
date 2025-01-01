declare module 'nprogress' {
  interface NProgressOptions {
    minimum?: number;
    easing?: string;
    speed?: number;
    trickle?: boolean;
    trickleSpeed?: number;
    showSpinner?: boolean;
    parent?: string;
  }

  interface NProgress {
    start(): NProgress;
    done(force?: boolean): NProgress;
    inc(amount?: number): NProgress;
    configure(options: NProgressOptions): NProgress;
    status: null | number;
    set(n: number): NProgress;
    isStarted(): boolean;
    remove(): void;
  }

  const nprogress: NProgress;
  export default nprogress;
}
