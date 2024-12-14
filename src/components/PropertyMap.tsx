import React from "react";
import Map, { Marker, NavigationControl } from "react-map-gl";

interface PropertyMapProps {
  latitude: number;
  longitude: number;
}

const PropertyMap: React.FC<PropertyMapProps> = ({ latitude, longitude }) => {
  return (
    <div className="w-full h-96 mt-5">
      <Map
        initialViewState={{
          latitude,
          longitude,
          zoom: 14,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
      >
        <Marker latitude={latitude} longitude={longitude}>
          <div className="bg-red-300 px-2 py-1 rounded-full">
            <span role="img" aria-label="marker">
              📍
            </span>
          </div>
        </Marker>

        <NavigationControl position="top-left" />
      </Map>
    </div>
  );
};

export default PropertyMap;
