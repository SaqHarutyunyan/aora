import { useEffect, useState } from "react";
import { Alert } from "react-native";

const useAppwrite = (fn: () => Promise<any>) => {
    const [data, setData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fn();
            setData(response || []);
        } catch (error) {
            if (error instanceof Error) {
                Alert.alert("Error", error.message);
            } else {
                Alert.alert("Error", "An unexpected error occurred");
            }
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        fetchData();
    }, [fn]);

    const refeatch = () => fetchData();

    return { data, isLoading, refeatch };
};

export default useAppwrite;
