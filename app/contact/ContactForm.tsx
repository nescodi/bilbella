"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Button from "@/components/Button/Button";
import { company } from "@/components/config";
import styles from "./ContactForm.module.scss";

const serviceOptions = [...company.taglinePillars, "Other"];

type FormValues = {
  name: string;
  phone: string;
  service: string;
  message: string;
};

function buildWhatsAppMessage({ name, phone, service, message }: FormValues) {
  const lines = [`Hello ${company.name}, my name is ${name}.`, `Phone: ${phone}`];

  if (service) {
    lines.push(`Service of interest: ${service}`);
  }

  if (message) {
    lines.push(`Message: ${message}`);
  }

  return lines.join("\n");
}

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    phone: "",
    service: serviceOptions[0],
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [redirecting, setRedirecting] = useState(false);

  const handleChange = (field: keyof FormValues) => (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const value = e.currentTarget.value;
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nextErrors: Partial<FormValues> = {};
    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!values.phone.trim()) nextErrors.phone = "Please enter your phone number.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setRedirecting(true);
    const text = encodeURIComponent(buildWhatsAppMessage(values));
    const href = `https://wa.me/${company.whatsappNumber}?text=${text}`;

    setTimeout(() => {
      window.location.href = href;
    }, 700);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <p className={styles.formIntro}>
        Fill in the form below and we&apos;ll open WhatsApp with your message
        ready to send.
      </p>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="name">
          Name
        </label>
        <input
          id="name"
          className={styles.input}
          value={values.name}
          onChange={handleChange("name")}
          placeholder="Your full name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className={styles.error}>
            {errors.name}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="phone">
          Phone Number
        </label>
        <input
          id="phone"
          className={styles.input}
          value={values.phone}
          onChange={handleChange("phone")}
          placeholder="Your phone number"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className={styles.error}>
            {errors.phone}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="service">
          Service of Interest
        </label>
        <select
          id="service"
          className={styles.input}
          value={values.service}
          onChange={handleChange("service")}
        >
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          className={styles.input}
          rows={4}
          value={values.message}
          onChange={handleChange("message")}
          placeholder="Tell us a bit about what you need"
        />
      </div>

      <Button type="submit" size="lg" disabled={redirecting}>
        {redirecting ? "Redirecting to WhatsApp…" : "Send via WhatsApp"}
      </Button>
    </form>
  );
}
