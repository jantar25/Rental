import React,{useState,useRef,useEffect} from 'react'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken  = process.env.REACT_APP_MAPBOX_TOKEN as string

const MapRender = () => {
    const ref = useRef<any>(null);
    const [map, setMap] = useState<any>(null);
    const [lng, setLng] = useState(-73.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(19);
    useEffect(() => {
      if (ref.current && !map) {
        const map = new mapboxgl.Map({
          container: ref.current,
          style: "mapbox://styles/mapbox/streets-v11",
          center: [lng, lat],
          zoom: zoom
        });
        setMap(map);
      }

    }, [ref, map]);

    
    return <div className="w-full h-full" ref={ref} />;
  }

  export default MapRender;