// -----------------------------------------------------------------------------
// ScrollToTop.jsx — Reset scroll position on route change
//
// React Router preserves the window scroll position when navigating between
// routes, so following a link from halfway down one page lands you halfway down
// the next. This component listens for pathname changes and scrolls back to the
// top. If the destination URL includes a hash (e.g. /guide#section), it scrolls
// to that element instead so in-page anchors keep working.
//
// Rendered once inside <BrowserRouter> in App.jsx. Renders nothing.
// -----------------------------------------------------------------------------
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
