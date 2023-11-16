import { Route, Routes, useLocation } from "react-router-dom";
import { BasicMuscles } from "../BasicMuscles/BasicMuscles.js";
import { Catalog } from "../Catalog/Catalog.js";
import { Create } from "../Create/Create.js";
import { Home } from "../Home/Home.js";
import { Login } from "../Login/Login.js";
import { Register } from "../Register/Register.js";
import { Details } from "../Details/Details.js";
import { Edit } from "../Edit/Edit.js";
import { Trapezius } from "../BasicMuscles/Trapezius/Trapezius.js";
import { DeltoidMuscle } from "../BasicMuscles/Deltoid/Deltoid.js";
import { Back } from "../BasicMuscles/Back/Back.js";
import { Biceps } from "../BasicMuscles/Arms/Biceps/Biceps.js";
import { Triceps } from "../BasicMuscles/Arms/Triceps/Triceps.js";
import { Forearms } from "../BasicMuscles/Arms/Forearms/Forearms.js";
import { Chest } from "../BasicMuscles/Chest/Chest.js";
import { Abs } from "../BasicMuscles/Abs/Abs.js";
import { Legs } from "../BasicMuscles/Legs/Legs.js";
import { Calves } from "../BasicMuscles/Legs/Calves.js";
import { IncreaseIntensity } from "../IncreaseIntensity/IncreaseIntensity.js";
import { PublicationOwner } from "../../common/PublicationOwner.js";

import { AnimatePresence } from "framer-motion";

export const AnimatedRoutes = () => {
  const location = useLocation();
  console.log(AnimatePresence);
  return (
    //
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />;
        <Route path="/home" element={<Home />} />;
        <Route path="/login" element={<Login />} />;
        <Route path="/register" element={<Register />} />;
        <Route path="/create" element={<Create />} />;
        <Route path="/basicMuscles" element={<BasicMuscles />} />;
        <Route path="/catalog" element={<Catalog />} />;
        <Route path="/catalog/:publicationId" element={<Details />} />;
        <Route
          path="/catalog/:publicationId/edit"
          element={
            <PublicationOwner>
              <Edit />
            </PublicationOwner>
          }
        />
        <Route path="/trapezius" element={<Trapezius />} />;
        <Route path="/deltoid" element={<DeltoidMuscle />} />;
        <Route path="/back" element={<Back />} />;
        <Route path="/biceps" element={<Biceps />} />;
        <Route path="/triceps" element={<Triceps />} />;
        <Route path="/forearms" element={<Forearms />} />;
        <Route path="/chest" element={<Chest />} />;
        <Route path="/abs" element={<Abs />} />;
        <Route path="/legs" element={<Legs />} />;
        <Route path="/calves" element={<Calves />} />;
        <Route path="/intensity" element={<IncreaseIntensity />} />;
      </Routes>
    </AnimatePresence>
  );
};
