import axios from "axios";
const SERVER_DOMAIN = import.meta.env.VITE_SERVER_URL;

const addMessage = async (message, patientId) => {
    const response = await axios.post(
        `${SERVER_DOMAIN}/advice/add-message`,
        { message, patientId },
        { withCredentials: true }
    );
    return response.data;
};

const getMessages = async (patientId) => {
    const response = await axios.post(
        `${SERVER_DOMAIN}/advice/get-messages`,
        { patientId },
        { withCredentials: true }
    );
    return response.data;
};

export { addMessage, getMessages };
