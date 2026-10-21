"use client";
import { useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import { MdSend, MdErrorOutline } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const PRIMARY = "#94c045";
const PRIMARY_DARK = "#7aa336";

interface FormState {
  nom: string;
  description: string;
}

interface Errors {
  nom?: string;
  description?: string;
}

function validate(form: FormState): Errors {
  const errors: Errors = {};
  if (!form.nom.trim()) errors.nom = "Le nom complet est requis.";
  if (!form.description.trim()) {
    errors.description = "Veuillez décrire votre projet.";
  } else if (form.description.trim().length < 10) {
    errors.description = "Description trop courte (min. 10 caractères).";
  }
  return errors;
}

export default function WhatsAppButton() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState<FormState>({ nom: "", description: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handler = () => setShow(true);
    window.addEventListener("open-contact-modal", handler);
    return () => window.removeEventListener("open-contact-modal", handler);
  }, []);

  const handleClose = () => {
    setShow(false);
    setErrors({});
    setSubmitted(false);
    setForm({ nom: "", description: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (submitted) {
      const updated = { ...form, [name]: value };
      setErrors(validate(updated));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const message =
      `Bonjour Noova Technology\n\n` +
      `Nom: ${form.nom}\n\n` +
      `Description du projet:\n${form.description}`;
    window.open(`https://wa.me/212655407529?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    handleClose();
  };

  const inputStyle = { borderRadius: "8px", padding: "10px 14px", fontSize: "14px" };

  return (
    <>
      <a className="whatsapp-float" onClick={(e) => { e.preventDefault(); setShow(true); }} href="#" aria-label="Contactez-nous">
        <FaWhatsapp size={28} />
        <span className="whatsapp-ripple" />
      </a>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton style={{ background: PRIMARY, color: "#fff", borderBottom: "none" }}>
          <Modal.Title style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "18px" }}>
            <FaWhatsapp size={22} color="#fff" />
            Discutons de votre projet
          </Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ padding: "28px 32px" }}>
          <p style={{ color: "#646c55", marginBottom: "24px", fontSize: "14px" }}>
            Remplissez ce formulaire et nous vous contacterons via WhatsApp.
          </p>
          <Form noValidate onSubmit={handleSubmit}>
            <div className="d-flex flex-column gap-3">

              <Form.Group>
                <Form.Label style={{ fontWeight: 600, fontSize: "13px", color: "#3c4133" }}>
                  Nom complet <span style={{ color: PRIMARY }}>*</span>
                </Form.Label>
                <Form.Control
                  type="text" name="nom" value={form.nom} onChange={handleChange}
                  placeholder="Votre nom complet" isInvalid={!!errors.nom}
                  style={{ ...inputStyle, border: `1.5px solid ${errors.nom ? "#d9534f" : "#dce4cc"}` }}
                />
                {errors.nom && (
                  <Form.Control.Feedback type="invalid">
                    <MdErrorOutline size={14} /> {errors.nom}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              <Form.Group>
                <Form.Label style={{ fontWeight: 600, fontSize: "13px", color: "#3c4133" }}>
                  Description du projet <span style={{ color: PRIMARY }}>*</span>
                </Form.Label>
                <Form.Control
                  as="textarea" rows={4} name="description" value={form.description} onChange={handleChange}
                  placeholder="Décrivez votre projet, vos besoins, vos objectifs..." isInvalid={!!errors.description}
                  style={{ ...inputStyle, border: `1.5px solid ${errors.description ? "#d9534f" : "#dce4cc"}`, resize: "none" }}
                />
                {errors.description && (
                  <Form.Control.Feedback type="invalid">
                    <MdErrorOutline size={14} /> {errors.description}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

            </div>

            <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
              <Button
                type="submit"
                style={{
                  background: `linear-gradient(135deg, ${PRIMARY}, ${PRIMARY_DARK})`,
                  border: "none", borderRadius: "50px", padding: "13px 32px",
                  fontWeight: 700, fontSize: "15px", flex: 1,
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                }}
              >
                <MdSend size={18} />
                Envoyer via WhatsApp
              </Button>
              <Button
                type="button" onClick={handleClose}
                style={{
                  borderRadius: "50px", padding: "13px 24px", fontSize: "15px",
                  background: "transparent", border: `1.5px solid #dce4cc`, color: "#646c55",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                }}
              >
                <IoClose size={18} />
                Annuler
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
