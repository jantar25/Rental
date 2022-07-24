import React,{useState,useRef,useEffect} from 'react'
import mapboxgl from 'mapbox-gl'


mapboxgl.accessToken  = process.env.REACT_APP_MAPBOX_TOKEN as string

const MapRender = ({residence}:any) => {
    const coords:any = residence.coordinates[0]
    const ref = useRef<any>(null);
    const [lng, setLng] = useState<any>(30.0619);
    const [lat, setLat] = useState<any>(-1.9441);
    const [zoom, setZoom] = useState<any>(10);
    

    useEffect(() => {
      const coordinatesMarker:any = ([coords.longitude,coords.latitude])
        const map = new mapboxgl.Map({
          container: ref.current,
          style: "mapbox://styles/mapbox/streets-v11",
          center: [lng, lat],
          zoom: zoom
        });

        // Add target location
        new mapboxgl.Marker().setLngLat(coordinatesMarker).addTo(map)
        

        // Add navigation control (the +/- zoom buttons)
        map.addControl(new mapboxgl.NavigationControl(), 'top-left')


        // Clean up on unmount
        return () => map.remove();
      }, [lat,lng, zoom,coords]);
    

    return (
      <div className="h-full w-full">
        <div className='inline-block absolute bottom-0 left-0 m-[5px] bg-[#404040] text-white p-2 font-[600] z-10 text-sm'>
          <p>Long: {lng} | Lat: {lat}</p>
        </div>
        <div className="h-full w-full" ref={ref} />
      </div>);
  }

  export default MapRender;