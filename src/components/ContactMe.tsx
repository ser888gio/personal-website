"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function ContactMe() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, subject, message } = formData;
    const mailtoLink = `mailto:novotnyjan40@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`Email: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">{t("contact")}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t("yourEmail")}
            className="w-full px-3 py-2 border rounded-md text-black"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={t("subject")}
            className="w-full px-3 py-2 border rounded-md text-black"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("message")}
            className="w-full px-3 py-2 border rounded-md text-black"
            rows={4}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-[#0C3095] text-white py-2 px-4 rounded-md"
        >
          {t("contact")}
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
