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
      const coordinatesMarker:any = ([coords.latitude,coords.longitude])
        const map = new mapboxgl.Map({
          container: ref.current,
          style: "mapbox://styles/mapbox/streets-v11",
          center: [lng, lat],
          zoom: zoom
        });

        new mapboxgl.Marker().setLngLat(coordinatesMarker).addTo(map)

    //         // Add navigation control (the +/- zoom buttons)
    //     map.addControl(new mapboxgl.NavigationControl(), 'top-left')

    //   map.on('move', () => {
    //   setLng(map.getCenter().lng.toFixed(4));
    //   setLat(map.getCenter().lat.toFixed(4));
    //   setZoom(map.getZoom().toFixed(2));
    // });

        // Clean up on unmount
        return () => map.remove();
      }, [lat,lng, zoom,coords]);


//     const userLocation = new mapboxgl.GeolocateControl({
//       positionOptions: {
//           enableHighAccuracy: true
//       },
//       trackUserLocation: true,
//       showUserHeading: true
//   });

//   userLocation.on('geolocate', (e:any) => {
//     const lng = e.coords.longitude;
//     const lat = e.coords.latitude
//     const position = [lng, lat];
//     setLat(lat);
//     setLng(lng);
// });
//     map.addControl(userLocation,"top-right");

    

    return (
      <div className="h-full w-full">
        <div className='inline-block absolute top-0 left-0 m-[12px] bg-[#404040] text-white p-2 font-[600] z-10'>
          <div>
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          </div>
        </div>
        <div className="h-full w-full" ref={ref} />
      </div>);
  }

  export default MapRender;