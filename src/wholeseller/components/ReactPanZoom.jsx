import React, { useEffect, useRef } from "react";

import "@fancyapps/ui/dist/panzoom.css";
import { Panzoom as NativePanzoom } from "@fancyapps/ui/dist/panzoom.esm";

// Add `Controls` plugin
import { Controls } from "@fancyapps/ui/dist/panzoom.controls.esm";

NativePanzoom.Plugins = {
    Controls,
};

import "@fancyapps/ui/dist/panzoom.controls.css";

function ReactPanzoom(props) {
    const wrapper = useRef(null);

    useEffect(() => {
        const instance = new NativePanzoom(wrapper.current, props.options || {});

        return () => {
            instance.destroy();
        };
    }, []);

    return (
        <div className="panzoom" ref={wrapper}>
            <img className="panzoom__content" src={props.src} />
        </div>
    );
}

export default ReactPanzoom;