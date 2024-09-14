import { useState } from "react"
import Tabs from "../Tabs"
import RiskAdmission from "./RiskAdmission"

const tabs = [
    { name: 'Risk Admission' },
]

export default function Precautions() {
    const [currentTab, setCurrentTab] = useState('Risk Admission')
    return (
        <div className="w-full ">
            <Tabs
                tabs={tabs}
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
            />

            <div className="w-full flex justify-center items-center p-4">
                {currentTab === 'Risk Admission' && <RiskAdmission />}
            </div>
        </div>
    )
}
