import { Bar, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
);

function PatientDashboardComponent() {
    const bmiData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'BMI',
            data: [22, 23, 21, 24, 22],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        }]
    };

    const bpData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Blood Pressure',
            data: [120, 122, 118, 124, 120],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
        }]
    };

    const sugarData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Blood Sugar',
            data: [90, 88, 94, 90, 92],
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1,
        }]
    };

    const hba1cData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'HbA1c',
            data: [5.5, 5.7, 5.4, 5.8, 5.5],
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        }]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className="p-4 w-full h-screen">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold mb-4">Patient Dashboard</h1>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add Sample Data
                </button>
            </div>
            <div className="grid grid-cols-2 gap-4 h-[calc(100%-2rem)]">
                <div className="h-full">
                    <Bar data={bmiData} options={options} />
                </div>
                <div className="h-full">
                    <Line data={bpData} options={options} />
                </div>
                <div className="h-full">
                    <Line data={sugarData} options={options} />
                </div>
                <div className="h-full">
                    <Line data={hba1cData} options={options} />
                </div>
            </div>
        </div>
    );
}

export default PatientDashboardComponent;