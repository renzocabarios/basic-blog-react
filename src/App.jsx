import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

// pages
import { Home, Post } from "./pages";

// layouts
import { RootLayout } from "./layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" index element={<Home />} />
      <Route path="/:id" element={<Post />} />
    </Route>
  )
);

export default function () {
  const theme = createTheme({});

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
