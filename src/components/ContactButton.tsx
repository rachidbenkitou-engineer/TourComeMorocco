"use client";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function ContactButton({ className, children }: Props) {
  const open = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-contact-modal"));
  };
  return (
    <a href="#" className={className} onClick={open}>
      {children}
    </a>
  );
}
