export type StacklineItem = {
  title: string;
  technology: string[];
  description: string;
};

export const stacklineData: StacklineItem[] = [
  {
    title: "Frontend",
    technology: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    description:
      "Projektowanie i tworzenie responsywnych interfejsów użytkownika, architektura komponentów, animacje oraz optymalizacja wydajności i SEO.",
  },
  {
    title: "Backend",
    technology: [
      "NestJS",
      "Node.js",
      "REST API",
      "PostgreSQL",
      "Microsoft SQL Server",
      "JWT",
    ],
    description:
      "Tworzenie API, implementacja logiki biznesowej, autoryzacja i uwierzytelnianie użytkowników oraz integracja aplikacji z bazami danych.",
  },
  {
    title: "Runtime & Deployment",
    technology: ["Docker", "Nginx", "Linux", "Git"],
    description:
      "Konfiguracja środowisk uruchomieniowych, konteneryzacja usług, zarządzanie zależnościami oraz wdrażanie i utrzymanie aplikacji.",
  },
  {
    title: "Infrastructure",
    technology: [
      "Proxmox VE",
      "Hyper-V",
      "Windows Server",
      "MikroTik",
      "UniFi",
      "Networking",
    ],
    description:
      "Administracja serwerami i środowiskami wirtualnymi, konfiguracja sieci, routing, VPN oraz zarządzanie infrastrukturą lokalną.",
  },
  {
    title: "IT Operations",
    technology: [
      "Active Directory",
      "Microsoft Entra ID",
      "Microsoft 365",
      "Veeam",
      "ESET PROTECT",
      "Action1",
    ],
    description:
      "Utrzymanie środowisk IT, zarządzanie tożsamością i uprawnieniami, bezpieczeństwo endpointów, kopie zapasowe oraz zapewnianie ciągłości działania usług.",
  },
];
