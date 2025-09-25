// Step 1:  
const genericTypes = () => {
    //in this case data will be of type any
    // but we can use generics to make it more specific
    const response = {
        data: {
            name: 'John Doe',
            age: 30,
        },
        isError: false,
    };
    const response1 = {
        data: {
            name: 'John Doe',
            age: 30,
        },
        isError: false,
    };
    const response2 = {
        data: {
            title: 'My first blog',
            content: 'This is my first blog post',
        },
        isError: false,
    };
};
export default genericTypes;
//# sourceMappingURL=13.%20genericTypes.js.map