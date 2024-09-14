import { useState } from "react"
import Tabs from "../Tabs"
import DoctorsProfile from "./DoctorsProfile"
import DoctorsAdvice from "./DoctorsAdvice"
import DoctorsResource from "./DoctorsResource"
import Connect from "./Connect"


const tabs = [
    { name: "Doctor's Profile" },
    { name: "Doctor's Advice" },
    { name: "Doctor's Resource" },
    { name: "Connect" },
]

export default function MyDoctor() {
    const [currentTab, setCurrentTab] = useState("Doctor's Profile")
    return (
        <div className="w-full ">
            <Tabs
                tabs={tabs}
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
            />

            <div className="w-full flex justify-center items-center p-4">
                {currentTab === "Doctor's Profile" && <DoctorsProfile />}
                {currentTab === "Doctor's Advice" && <DoctorsAdvice />}
                {currentTab === "Doctor's Resource" && <DoctorsResource />}
                {currentTab === "Connect" && <Connect />}
            </div>
        </div>
    )
}
