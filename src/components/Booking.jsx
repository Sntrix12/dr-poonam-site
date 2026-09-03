import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { contact, doctor, whatsappLink } from "../data/practice.js";

/**
 * One booking modal for the whole site.
 *
 * Previously every page had its own "Appointment" button, and on three of the five
 * pages that button did nothing at all — no onClick handler. Now any component can
 * call openBooking() and get the same working modal.
 */

const BookingContext = createContext({ openBooking: () => {} });

export const useBooking = () => useContext(BookingContext);

export const openWhatsApp = (message) => {
  if (typeof window === "undefined") return;
  window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
};

function AppointmentModal({ isOpen, onClose, title, context }) {
  const [form, setForm] = useState({ name: "", phone: "", issue: "" });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    openWhatsApp(
      `Hello ${doctor.name},\n\nI would like to book an appointment.\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Concern/Service:* ${form.issue}${
        context ? `\n*Enquiring about:* ${context}` : ""
      }\n\nPlease let me know the available slots.`,
    );
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 id="booking-title" className="font-serif text-2xl font-bold text-[#9771e3] mb-2">
          {title}
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Leave your details and we will confirm your slot on WhatsApp. You can also call{" "}
          <a href={contact.phoneHref} className="font-semibold text-[#9771e3]">
            {contact.phoneDisplay}
          </a>
          .
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            aria-label="Your full name"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#9771e3] focus:ring-1 focus:ring-[#9771e3] outline-none text-sm sm:text-base"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            required
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="Phone number"
            aria-label="Phone number"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#9771e3] focus:ring-1 focus:ring-[#9771e3] outline-none text-sm sm:text-base"
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <textarea
            required
            rows="3"
            placeholder="Briefly describe your concern or the service you need"
            aria-label="Your concern"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#9771e3] focus:ring-1 focus:ring-[#9771e3] outline-none resize-none text-sm sm:text-base"
            onChange={(e) => setForm({ ...form, issue: e.target.value })}
          />
          <button
            type="submit"
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm sm:text-base"
          >
            Send details &amp; chat on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}

export function BookingProvider({ children }) {
  const [state, setState] = useState({ open: false, title: "Book an appointment", context: "" });

  const openBooking = useCallback(
    (opts = {}) =>
      setState({
        open: true,
        title: opts.title || "Book an appointment",
        context: opts.context || "",
      }),
    [],
  );

  const closeBooking = useCallback(() => setState((s) => ({ ...s, open: false })), []);
  const value = useMemo(() => ({ openBooking }), [openBooking]);

  return (
    <BookingContext.Provider value={value}>
      {children}
      <AppointmentModal
        isOpen={state.open}
        onClose={closeBooking}
        title={state.title}
        context={state.context}
      />
    </BookingContext.Provider>
  );
}
