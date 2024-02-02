const API: string = "https://jsonplaceholder.typicode.com/comments";

export const fetchData = async () => {
    try {
        const result = await fetch(API,{ next: { revalidate: 1 } });
        const data = await result.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};