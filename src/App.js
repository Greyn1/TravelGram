import { useContext } from "react";
import Auth from "./user/pages/Auth";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "./shared/context/AuthContext";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  const {isLoggedIn} = useContext(AuthContext);

  let routes;
  if(isLoggedIn){
    routes = (
      <>
        <Route path="/:userId/places" element={<UserPlaces />} />
        <Route path="/places/new" element={<NewPlace />} />
        <Route path="/places/:placeId" element={<UpdatePlace />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </>
    )
  }
  else{
    routes = (
      <>
        <Route path="/:userId/places" element={<UserPlaces />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/*" element={<Navigate to="/auth" replace />} />
      </>
    )
  }

  return (
      <Routes>
        <Route path="/" element={<MainNavigation />}>
          <Route index element={<Users />} /> 
          {routes}
        </Route>
      </Routes>
  );
}

export default App;

/* 
        <Route path="/" element={<MainNavigation />}>
          <Route index element={<Users />} />
          <Route path="/:userId/places" element={<UserPlaces />} />
          <Route path="/places/new" element={<NewPlace />} />
          <Route path="/places/:placeId" element={<UpdatePlace />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Route>
*/