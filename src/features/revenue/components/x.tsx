// src/components/VectorMap.tsx
import { useEffect, useRef } from "react";

const VectorMap = () => {
    const mapContainer = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<any>(null);

    useEffect(() => {
        if (typeof window !== "undefined" && mapContainer.current) {
            // Initialize map after CDN scripts load
            mapInstance.current = new window.jsVectorMap({
                selector: mapContainer.current,
                map: "world",
                zoomOnScroll: true,
                regionStyle: {
                    initial: {
                        fill: "#e4e4e4",
                        stroke: "none",
                        "stroke-width": 0,
                        "stroke-opacity": 0
                    },
                    hover: {
                        fill: "#007bff",
                        cursor: "pointer"
                    }
                },
                markers: [
                    { coords: [ 51.5072, -0.1276 ], name: "London" },
                    { coords: [ 40.7128, -74.0060 ], name: "New York" }
                ],
                onRegionClick: (event: any, code: string) => {
                    console.log("Region clicked:", code);
                },
                onMarkerClick: (event: any, index: number) => {
                    console.log("Marker clicked:", index);
                }
            });
        }

        // Cleanup
        return () => {
            if (mapInstance.current) {
                mapInstance.current.destroy();
            }
        };
    }, []);

    return (
        <div
            ref={ mapContainer }
            style={ {
                width: "100%",
                height: "600px",
                border: "1px solid #ddd",
                borderRadius: "8px"
            } }
        />
    );
};

export default VectorMap;
