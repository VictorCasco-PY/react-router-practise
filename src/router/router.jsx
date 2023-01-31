import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Data from "../pages/Data";
import ColoredWords from "../pages/ColoredWords";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Inicio</div>
    },
    {
        path: "/home",
        element: <Welcome />,
    },
    {
        path: "/:data",
        element: <Data />
    },
    {
        path: "/:word/:txtColor/:bgColor",
        element: <ColoredWords />
    },
]);