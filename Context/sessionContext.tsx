import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type KickSession = {
  id: string;
  date: string;
  timeTaken: string;
};

type SessionContextType = {
  sessions: KickSession[];
  addSession: (date: string, timeTaken: string) => Promise<void>;
  reloadSessions: () => Promise<void>;
};

const STORAGE_KEY = "@sessions";

export const SessionContext = createContext<SessionContextType | undefined>(
  undefined
);

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [sessions, setSessions] = useState<KickSession[]>([]);

  useEffect(() => {
    reloadSessions();
  }, []);

  const reloadSessions = async () => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      if (data) {
        setSessions(JSON.parse(data));
      } else {
        setSessions([]);
      }
    } catch (e) {
      console.error("Failed to load sessions", e);
    }
  };

  const addSession = async (date: string, timeTaken: string) => {
    try {
      const newSession: KickSession = {
        id: Date.now().toString(),
        date,
        timeTaken,
      };

      const updated = [newSession, ...sessions];

      setSessions(updated);

      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error("Failed to save session", e);
    }
  };

  return (
    <SessionContext.Provider value={{ sessions, addSession, reloadSessions }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used inside SessionProvider");
  }
  return context;
};
