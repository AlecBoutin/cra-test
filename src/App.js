import "./App.css";
import { RouterProvider, createBrowserRouter, Link } from "react-router-dom";
import Page1 from "./page1";
import { useEffect } from "react";
import { track, init } from "@amplitude/analytics-browser";

function App1() {
  return (
    <div className="App">
      <Link to="/page1">Page1</Link>

      <button
        onClick={() => {
          track("sign_up", { plan: "free" });
        }}
      >
        Sign up
      </button>
      <button
        onClick={() => {
          track("add_to_cart", { product_id: "1234" });
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App1 />,
  },
  {
    path: "/page1",
    element: <Page1 />,
  },
]);

function App() {
  useEffect(() => {
    init("f6b112eb749ccce87a5a26ea5fe89fee", undefined, {
      defaultTracking: {
        pageViews: true,
        sessions: true,
        formInteractions: true,
        fileDownloads: true,
      },
    });
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
