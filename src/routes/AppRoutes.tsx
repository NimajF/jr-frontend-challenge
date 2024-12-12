import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropertiesList from "../pages/PropertiesList";
import PropertyDetails from "../pages/PropertyDetails";
import PropertyForm from "../pages/PropertyForm";
import Layout from "../components/Layout";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PropertiesList />} />
          <Route path="properties/:id" element={<PropertyDetails />} />
          <Route path="properties/new" element={<PropertyForm />} />
          <Route path="properties/edit/:id" element={<PropertyForm />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
