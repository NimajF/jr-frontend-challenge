import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropertiesList from "../pages/PropertiesList";
import PropertyDetails from "../pages/PropertyDetails";
import PropertyForm from "../pages/PropertyForm";
import EditProperty from "../components/EditPropertyForm";
import Layout from "../components/Layout";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PropertiesList />} />
          <Route path="properties/:id" element={<PropertyDetails />} />
          <Route path="properties/new" element={<PropertyForm />} />
          <Route path="properties/edit/:id" element={<EditProperty />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/properties/*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
