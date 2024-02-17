import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

export const AutoplayPlugin = (delay, stopOnInteraction) => {
    const pluginConfig = React.useMemo(() => ({
        delay: delay || 5000,
        stopOnInteraction: stopOnInteraction !== undefined ? stopOnInteraction : false
    }), [delay, stopOnInteraction]);

    return React.useRef(Autoplay(pluginConfig));
}
