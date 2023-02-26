import { Navigate, Route, Routes } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainNavigation />}>
        <Route index element={<Users />} />
        <Route path="/:userId/places" element={<UserPlaces />} />
        <Route path="/places/new" element={<NewPlace />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
