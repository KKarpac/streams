const url = 'https://raw.githubusercontent.com/KKarpac/streams/master/streams.json';
const data = [];

async function loadStreams() {
    const response = await fetch(url, { method: 'GET' })
    const result = await response.json()
    data.push(result)
}

const getAllStreams = () => {
    loadStreams();
    return data;
}

export default getAllStreams