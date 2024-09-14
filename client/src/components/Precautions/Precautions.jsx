import { useState } from "react"
import Tabs from "../Tabs"
import FoodPrediction from "./FoodPrediction"
import RiskAdmission from "./RiskAdmission"

const tabs = [
    { name: 'Food Prediction' },
    { name: 'Risk Admission' },
]

export default function Precautions() {
    const [currentTab, setCurrentTab] = useState('Food Prediction')
    return (
        <div className="w-full ">
            <Tabs
                tabs={tabs}
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
            />

            <div className="w-full flex justify-center items-center p-4">
                {currentTab === 'Food Prediction' && <FoodPrediction />}
                {currentTab === 'Risk Admission' && <RiskAdmission />}
            </div>
        </div>
    )
}
