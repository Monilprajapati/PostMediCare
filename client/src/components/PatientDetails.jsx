import { useState } from "react";
import PatientDashboardComponent from "./PatientDashboardComponent";
import Tabs from "./Tabs";
import DoctorsAdvice from "./MyDoctor/DoctorsAdvice";

const tabs = [{ name: "Patient Data" }, { name: "Advice to Patient" }];





export default function PatientDetails() {
  const [currentTab, setCurrentTab] = useState("Patient Data");
  return (
    <div className="w-full ">
      <Tabs tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />

      <div className="w-full flex justify-center items-center p-4">
        {currentTab === "Patient Data" && <PatientDashboardComponent isDoctor={true} />}
        {currentTab === "Advice to Patient" && <DoctorsAdvice />}
      </div>
    </div>
  );
}
