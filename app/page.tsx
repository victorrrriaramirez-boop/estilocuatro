import type { Metadata } from "next";
import { ScrollyHome } from "@/components/scrolly-home";

export const metadata: Metadata = {
  title: "Dentista en Chamberí | Clínica Dental Almagro",
  description: "Clínica dental en Chamberí con ortodoncia invisible, estética dental, diagnóstico digital y una atención cercana.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return <ScrollyHome />;
}
