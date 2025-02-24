import {
    ReactNode,
    createContext,
    useState,
    useContext,
    useEffect,
} from "react";
import { getCurrentUser } from "@/lib/appwrite";

interface GlobalContextType {
    isLoggedIn: boolean;
    setisLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    user: Record<string, any> | null;
    isLoading: boolean;
    setUser: React.Dispatch<React.SetStateAction<Record<string, any> | null>>;
}

const GlobalContext = createContext<GlobalContextType | null>(null);

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error(
            "useGlobalContext must be used within a GlobalProvider"
        );
    }
    return context;
};

interface GlobalProviderProps {
    children: ReactNode;
}

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [user, setUser] = useState<null | Record<string, any>>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCurrentUser()
            .then((res) => {
                if (res) {
                    setisLoggedIn(true);
                    setUser(res);
                } else {
                    setisLoggedIn(false);
                    setUser(null);
                }
            })
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <GlobalContext.Provider
            value={{ isLoggedIn, setisLoggedIn, user, setUser, isLoading }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
