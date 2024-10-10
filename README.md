# PostMediCare

PostMediCare is a comprehensive solution designed to tackle the problem of diabetes patient readmission. Utilizing advanced AI models, PostMediCare provides users with insightful analysis and a suite of features to manage their health effectively.

Dorahack link : https://dorahacks.io/buidl/16282/

## Features

- **Personalized Dashboard**: Track critical health metrics such as blood sugar, blood pressure, HbA1c levels, and more in an easy-to-understand visual format.
- **Health Data Logging**: Log daily health indicators to monitor your condition.
- **Medication Reminders**: Set reminders for your medication and receive alerts to ensure timely adherence.
- **Doctor Integration**: Share your health data directly with your doctor for personalized medical advice.
- **Nutrition and Exercise Tracking**: Track your daily caloric intake and physical activity.
- **Progress Monitoring**: Monitor long-term progress with quarterly HbA1c readings and identify trends in your health.

## Installation

### Prerequisites

- Node.js
- Python 3.x
- MongoDB

### Backend Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/postmedicare.git
    cd postmedicare/server
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the `server` directory and add the following:
    ```env
    PORT=8000
    FRONTEND_URL=http://localhost:3000
    MONGODB_URI=your_mongodb_uri
    ```

4. Start the backend server:
    ```sh
    npm start
    ```

### Frontend Setup

1. Navigate to the client directory:
    ```sh
    cd ../client
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the `client` directory and add the following:
    ```env
    VITE_SERVER_URL=http://localhost:8000
    ```

4. Start the frontend server:
    ```sh
    npm run dev
    ```

### Python Setup

1. Navigate to the python directory:
    ```sh
    cd ../python
    ```

2. Create a virtual environment and activate it:
    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. Install dependencies:
    ```sh
    pip install -r requirements.txt
    ```

4. Start the Flask server:
    ```sh
    python Readmission_Predictor.py
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Register or log in to your account.
3. Use the dashboard to log your health data, set medication reminders, and track your progress.
4. Share your health data with your doctor for personalized advice.

## Project Structure

- **client**: Contains the frontend code built with React.
- **server**: Contains the backend code built with Express and MongoDB.
- **python**: Contains the AI model and prediction logic using Flask.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Flask](https://flask.palletsprojects.com/)
- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Google Generative AI](https://developers.google.com/generative-ai)
