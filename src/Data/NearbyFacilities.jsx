import { useState, useEffect } from 'react';
import axios from 'axios';
import { calculateDistance } from '../Utils/calculateLocation';
import { facility } from './facility'; // Import the facility array

export const useNearbyFacilities = () => {
  const [nearbyFacilities, setNearbyFacilities] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await axios.get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=pk.eyJ1Ijoic2h1ZW5jZSIsImEiOiJjbG9wcmt3czMwYnZsMmtvNnpmNTRqdnl6In0.vLBhYMBZBl2kaOh1Fh44Bw`
          );
          setCurrentLocation({ latitude, longitude });
        } catch (error) {
          console.error("Error getting address:", error);
        }
      }, (error) => {
        console.error("Error getting location:", error);
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    handleGetCurrentLocation();
  }, []);

  useEffect(() => {
    if (currentLocation) {
      const { latitude, longitude } = currentLocation;
      const filteredFacilities = facility.filter(facility => {
        const distance = calculateDistance(latitude, longitude, facility.lat, facility.lon);
        return distance < 100; // Filter facilities within 100 km
      }).map(facility => facility.name);

      setNearbyFacilities(filteredFacilities);
    }
  }, [currentLocation]);

  return nearbyFacilities;
};
