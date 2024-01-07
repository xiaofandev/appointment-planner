export const getCurrentTimeString = () => {
    const [hour, minute] = new Date().toLocaleTimeString().split(':');
    return `${hour}:${minute}`;
}