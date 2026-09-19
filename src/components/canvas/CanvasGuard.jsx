import { Component, useCallback, useEffect, useRef, useState } from "react";

// Probe WebGL once and free the probe context right away: browsers cap the
// number of live WebGL contexts and this page already uses many of them.
let webglSupport;
const isWebGLAvailable = () => {
  if (webglSupport !== undefined) return webglSupport;
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    webglSupport = !!gl;
    gl?.getExtension("WEBGL_lose_context")?.loseContext();
  } catch {
    webglSupport = false;
  }
  return webglSupport;
};

// Call from <Canvas onCreated> so a lost WebGL context swaps in the fallback.
export const watchContextLoss = ({ gl }, onLost) => {
  gl.domElement.addEventListener("webglcontextlost", (event) => {
    event.preventDefault();
    onLost();
  });
};

// Errors thrown while loading assets (useGLTF, useTexture) inside a r3f
// <Canvas> are re-thrown to the nearest React error boundary outside of it.
class ErrorBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error) {
    console.warn("[3D] Canvas failed, showing fallback:", error);
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

/**
 * Renders `fallback` instead of a 3D canvas when it cannot work:
 * WebGL unavailable, asset loading error, lost WebGL context, or the scene
 * not being ready after `timeout` ms.
 *
 * `children` is a render function receiving `{ ready, fail }`. Call `ready`
 * once the scene has mounted and `fail` if the context is lost. They are
 * passed as props because React context does not cross the r3f <Canvas>.
 */
const CanvasGuard = ({ fallback, timeout = 30000, children }) => {
  const [failed, setFailed] = useState(false);
  const isReady = useRef(false);

  const ready = useCallback(() => {
    isReady.current = true;
  }, []);
  const fail = useCallback(() => setFailed(true), []);

  useEffect(() => {
    const id = setTimeout(() => {
      if (!isReady.current) setFailed(true);
    }, timeout);
    return () => clearTimeout(id);
  }, [timeout]);

  if (failed || !isWebGLAvailable()) return fallback;

  return (
    <ErrorBoundary fallback={fallback}>{children({ ready, fail })}</ErrorBoundary>
  );
};

export default CanvasGuard;
