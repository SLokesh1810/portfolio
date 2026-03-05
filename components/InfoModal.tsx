"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface InfoModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
}

export default function InfoModal({
    isOpen,
    onClose,
    title = "Info",
    children,
}: InfoModalProps) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!isOpen || !mounted) return null;

    const content = (
        <div
            className="fixed inset-0 flex items-center justify-center"
            style={{ zIndex: 9999 }}
        >
            {/* Backdrop */}
            <div
                className="
          absolute inset-0
          bg-black/40
          backdrop-blur-sm
        "
                onClick={onClose}
            />

            {/* Modal Box */}
            <div
                className="
          relative z-10
          w-[90%] max-w-lg
          rounded-2xl
          bg-card
          border border-border
          p-6
          shadow-xl
          animate-in fade-in zoom-in duration-200
        "
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-text">{title}</h3>
                    <button
                        onClick={onClose}
                        className="
              text-muted
              hover:text-text
              transition
              text-xl
              leading-none
            "
                        aria-label="Close"
                    >
                        ×
                    </button>
                </div>

                {/* Content */}
                <div className="text-muted">
                    {children}
                </div>
            </div>
        </div>
    );

    return createPortal(content, document.body);
}