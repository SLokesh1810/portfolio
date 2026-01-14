"use client";

import Snowfall from "react-snowfall";

export default function BackgroundSnowfall() {
    return (
        <div
            className="
        fixed inset-0
        pointer-events-none
        z-0
      "
        >
            <Snowfall
                color="#ffffffc2"
                snowflakeCount={30}
                speed={[0.2, 0.6]}
                wind={[-0.1, 0.1]}
                radius={[1, 4.5]}
            />
        </div>
    );
}
