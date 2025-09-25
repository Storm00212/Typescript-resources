//Fetch requests using async await and trycatch.
const asyncawait = async () => {
    try {
        const response = await fetch('https://dummyjson.com/posts');
        const data = response.json();
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
};
export default asyncawait;
//# sourceMappingURL=asyncawait.js.map