import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './Pages/RootLayout.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import Features from './Pages/Features.jsx';
import Pricing from './Pages/Pricing.jsx';
import Faq from './Pages/Faq.jsx';
import Blog from './Pages/Blog.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: AboutUs },
      { path: "Features", Component: Features },
      { path: "Pricing", Component: Pricing },
      { path: "FAQ", Component: Faq },
      { path: "Blog", Component: Blog },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
