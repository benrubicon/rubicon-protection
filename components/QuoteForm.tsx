"use client";

import { FormEvent, useMemo, useState } from "react";
import { serviceOptions, site } from "@/lib/site";

type Status = "idle" | "ready" | "error";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [mailtoHref, setMailtoHref] = useState("");

  const fields = useMemo(
    () => [
      { id: "name", label: "Name", type: "text", required: true, autoComplete: "name" },
      { id: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
      { id: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel" },
      {
        id: "company",
        label: "Company",
        type: "text",
        required: true,
        autoComplete: "organization",
      },
    ],
    [],
  );

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !phone || !company || !service || !message) {
      setStatus("error");
      return;
    }

    const subject = `Quote request — ${service} — ${company}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Company: ${company}`,
      `Service needed: ${service}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setMailtoHref(href);
    setStatus("ready");
    window.location.href = href;
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-4 border border-line bg-charcoal p-5 sm:p-8"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field.id} className="grid gap-2 text-sm" htmlFor={field.id}>
            <span>{field.label}</span>
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              required={field.required}
              autoComplete={field.autoComplete}
              className="border border-line bg-background px-3 py-2.5 text-white"
            />
          </label>
        ))}
      </div>

      <label className="grid gap-2 text-sm" htmlFor="service">
        <span>Service needed</span>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="border border-line bg-background px-3 py-2.5 text-white"
        >
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-2 text-sm" htmlFor="message">
        <span>Message</span>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="border border-line bg-background px-3 py-2.5 text-white"
          placeholder="Site type, dates, headcount, armed or unarmed, and any travel needs."
        />
      </label>

      {status === "error" ? (
        <p className="text-sm text-white" role="alert">
          Please complete every field so we can route the request.
        </p>
      ) : null}

      {status === "ready" ? (
        <p className="text-sm text-muted" role="status">
          Your email app should open a message to {site.email}. If it does not,{" "}
          <a className="text-white underline" href={mailtoHref}>
            open the quote email
          </a>{" "}
          or call{" "}
          <a className="text-white underline" href={`tel:${site.phoneTel}`}>
            {site.phoneDisplay}
          </a>
          .
        </p>
      ) : null}

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-black hover:bg-zinc-200 sm:w-auto"
      >
        Send quote request
      </button>
      <p className="text-xs leading-5 text-muted">
        This form opens a message to {site.email} on this device. No data is stored
        on the website.
      </p>
    </form>
  );
}
