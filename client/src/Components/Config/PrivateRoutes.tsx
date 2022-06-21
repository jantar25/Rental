
import { useSelector } from 'react-redux';
import { Route,Navigate } from "react-router-dom";

const PrivateRoutes = ({element:Component,...rest}:any) => {
    const landLord= useSelector((state:any)=>state.landLord.currentLandLord);
    return <Route {...rest} exact element={(props:any)=>landLord? {...props} : <Navigate to='/'/> } />
  
}

export default PrivateRoutes