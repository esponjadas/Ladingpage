"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Info } from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

type ToastTone = "success" | "error" | "info";

type ToastItem = {
  id: number;
  title: string;
  description?: string;
  tone: ToastTone;
};

type ToastContextValue = {
  pushToast: (toast: Omit<ToastItem, "id">) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const idRef = useRef(0);

  const pushToast = useCallback((toast: Omit<ToastItem, "id">) => {
    const id = ++idRef.current;
    setToasts((current) => [...current, { ...toast, id }]);
    window.setTimeout(() => {
      setToasts((current) => current.filter((item) => item.id !== id));
    }, 4200);
  }, []);

  const value = useMemo(() => ({ pushToast }), [pushToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed inset-x-0 top-4 z-[120] flex justify-center px-4">
        <div className="flex w-full max-w-md flex-col gap-3">
          <AnimatePresence>
            {toasts.map((toast) => (
              <motion.div
                key={toast.id}
                initial={{ opacity: 0, y: -14, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="glass-panel pointer-events-auto rounded-[1.2rem] px-4 py-4"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-signal">
                    {toast.tone === "success" ? (
                      <CheckCircle2 size={18} />
                    ) : toast.tone === "error" ? (
                      <AlertCircle size={18} className="text-[#ff7777]" />
                    ) : (
                      <Info size={18} />
                    )}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{toast.title}</p>
                    {toast.description ? (
                      <p className="mt-1 text-sm leading-6 text-white/62">
                        {toast.description}
                      </p>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast deve ser usado dentro de ToastProvider.");
  }

  return context;
}
