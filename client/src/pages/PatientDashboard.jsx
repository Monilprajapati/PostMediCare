import UserLayout from "../components/UserLayout";
import { Outlet } from 'react-router-dom';

const PatientDashboard = () => {
  return (
    <UserLayout>
      <Outlet />
    </UserLayout >
  );
};

export default PatientDashboard;
