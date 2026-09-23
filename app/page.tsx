import Image from "next/image";

interface SkillGroup {
  title: string;
  items: string[];
}

interface SkillCategory {
  title: string;
  icon: string;
  groups: SkillGroup[];
}

interface EducationItem {
  school: string;
  period: string;
  status: "COMPLETADO" | "EN CURSO";
  note?: string;
}

type AchievementType = "Certificado" | "Diploma de participación";

interface Achievement {
  type: AchievementType;
  title: string;
  issuer?: string;
  date: string;
  link?: string;
  preview?: string;
}

interface AchievementGroup {
  type: AchievementType;
  title: string;
  icon: string;
}

interface Artwork {
  title: string;
  image: string;
  year?: string;
  technique?: string;
}

interface ContactItem {
  icon: string;
  label: string;
  value: string;
  href: string;
  external: boolean;
}

const NAME = "Adriana Michelle Bonilla Zelada";
const SHORT_NAME = "Adriana Bonilla";
const INITIALS = "AB";

const ROLE =
  "Desarrollo de Software · Videojuegos · Diseño de Interfaces";

const EMAIL = "adrmi.arc@gmail.com";
const GITHUB = "https://github.com/adrmiA";
const GITHUB_LABEL = "github.com/adrmiA";

const PHONE_DISPLAY = "+503 6963-7401";
const PHONE_LINK = "tel:+50369637401";

const LOCATION = "El Salvador";
const WORK_MODE = "Presencial | Remoto";

const BANNER = "/FelixxCopa.png";
const PHOTO: string | null = "/FotoPerfil.png";

const navLinks = [
  { href: "#jugadora", label: "Jugadora" },
  { href: "#progreso", label: "Progreso" },
  { href: "#inventario", label: "Inventario" },
  { href: "#galeria", label: "Galería" },
  { href: "#logros", label: "Logros" },
  { href: "#contacto", label: "Contacto" },
];

const stats = [
  { label: "Especialidad", value: "Desarrollo de Software" },
  { label: "Área", value: "Videojuegos / UI" },
  { label: "Modalidad", value: WORK_MODE },
  { label: "Graduación", value: "Dic. 2026" },
];

const education: EducationItem[] = [
  {
    school: "Colegio Don Bosco",
    period: "2012 – 2016",
    status: "COMPLETADO",
  },
  {
    school: "Colegio Profesor José Ernesto Payés",
    period: "2017 – 2020",
    status: "COMPLETADO",
  },
  {
    school: "Colegio Español Padre Arrupe",
    period: "2021 – Actualidad",
    status: "EN CURSO",
    note: "Graduación prevista: diciembre de 2026",
  },
];

const skillCategories: SkillCategory[] = [
  {
    title: "Desarrollo",
    icon: "</>",
    groups: [
      { title: "Lenguajes", items: ["Python", "Java", "Kotlin", "C#"] },
      {
        title: "Desarrollo de aplicaciones",
        items: ["Flet", "JavaFX", "Flutter", "React Native"],
      },
      { title: "Bases de datos", items: ["SQL", "MariaDB", "MySQL"] },
      { title: "Integración", items: ["APIs REST", "JSON"] },
    ],
  },
  {
    title: "Creatividad",
    icon: "✦",
    groups: [
      {
        title: "Videojuegos",
        items: [
          "Diseño de sistemas de juego",
          "Prototipado",
          "Interfaces de usuario",
          "Experiencias interactivas",
        ],
      },
      {
        title: "Diseño",
        items: [
          "Figma",
          "Diseño de interfaces",
          "Prototipado UI/UX",
          "Diseño visual",
        ],
      },
    ],
  },
  {
    title: "Herramientas",
    icon: "⚙",
    groups: [
      {
        title: "Desarrollo",
        items: [
          "Git / GitHub",
          "Visual Studio Code",
          "IntelliJ IDEA",
          "NetBeans",
        ],
      },
      { title: "Diseño y prototipado", items: ["Figma"] },
      { title: "Metodologías", items: ["SCRUM", "KANBAN"] },
    ],
  },
];

const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "B2 · Intermedio alto" },
];

const artworks: Artwork[] = [];

const achievements: Achievement[] = [
  {
    type: "Certificado",
    title: "Ciberseguridad Preventiva",
    issuer: "Platzi",
    date: "2026",
    link: "/certificados/diploma-ciberseguridad.pdf",
  },
  {
    type: "Certificado",
    title: "Computación básica",
    issuer: "Platzi",
    date: "2026",
    link: "/certificados/diploma-computacion-basica.pdf",
  },
  {
    type: "Diploma de participación",
    title: "Competencia Bachiller Emprendedor",
    date: "2026",
    link: "/certificados/Diploma-CBE-ESEN.pdf",
  },
  {
    type: "Diploma de participación",
    title: "Copa Salvadoreña de Programación",
    date: "2025",
  },
];

const achievementGroups: AchievementGroup[] = [
  { type: "Certificado", title: "Certificados", icon: "🏆" },
  {
    type: "Diploma de participación",
    title: "Diplomas de participación",
    icon: "🎖",
  },
];

const contacts: ContactItem[] = [
  {
    icon: "✉",
    label: "Correo",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    external: false,
  },
  {
    icon: "☎",
    label: "Teléfono",
    value: PHONE_DISPLAY,
    href: PHONE_LINK,
    external: false,
  },
  {
    icon: "⌥",
    label: "GitHub",
    value: GITHUB_LABEL,
    href: GITHUB,
    external: true,
  },
];

const section = "w-full scroll-mt-24 px-4 py-20 md:px-8 lg:px-12";

const panel =
  "border-4 border-black bg-[#23232e] shadow-[6px_6px_0_0_#000]";

const panelHover =
  "transition hover:-translate-y-1 hover:shadow-[10px_10px_0_0_#000]";

const slot =
  "border-2 border-black bg-[#14141b] px-3 py-1.5 text-sm text-white transition hover:bg-[#c6f432] hover:text-black";

interface SectionHeaderProps {
  tag: string;
  title: string;
  subtitle: string;
}

function SectionHeader({
  tag,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3">
        <span className="border-2 border-black bg-[#c6f432] px-2 py-1 font-mono text-xs font-bold text-black shadow-[3px_3px_0_0_#000]">
          {tag}
        </span>

        <h2 className="text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
          {title}
        </h2>

        <span className="h-1 flex-1 bg-[repeating-linear-gradient(90deg,#3a3a48_0_8px,transparent_8px_14px)]" />
      </div>

      <p className="mt-3 font-mono text-sm text-emerald-300/70">
        &gt; {subtitle}
      </p>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-black bg-[#14141b]/95 backdrop-blur">
      <nav className="flex w-full items-center justify-between px-4 py-3 md:px-8 lg:px-12">
        <a
          href="#"
          className="border-2 border-black bg-[#c6f432] px-3 py-1 font-mono text-lg font-black text-black shadow-[3px_3px_0_0_#000]"
        >
          {INITIALS}
        </a>

        <ul className="hidden gap-6 font-mono text-xs uppercase md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-[#c6f432]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <span className="font-mono text-xs text-emerald-300">
          ● P1 EN LÍNEA
        </span>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-[85vh] w-full flex-col items-center justify-center overflow-hidden px-4 text-center md:px-8 lg:px-12">
      <Image
        src={BANNER}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />

      <div className="absolute inset-0 -z-10 bg-[#14141b]/50" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-b from-transparent via-[#14141b]/80 to-[#14141b]" />

      <p className="font-mono text-sm tracking-[0.3em] text-emerald-300">
        NUEVA PARTIDA
      </p>

      <h1 className="mt-4 max-w-5xl text-4xl font-black uppercase leading-tight text-white drop-shadow-[5px_5px_0_#000] md:text-6xl lg:text-7xl">
        {NAME}
      </h1>

      <p className="mt-6 border-2 border-black bg-[#c6f432] px-4 py-1 font-mono text-xs font-bold uppercase text-black shadow-[4px_4px_0_0_#000] md:text-sm">
        {ROLE}
      </p>

      <p className="mt-4 font-mono text-xs uppercase tracking-widest text-slate-400">
        📍 {LOCATION} · {WORK_MODE}
      </p>

      <a
        href="#jugadora"
        className="mt-14 animate-pulse font-mono text-lg tracking-[0.3em] text-white hover:text-[#c6f432]"
      >
        ▶ PRESIONA START
      </a>
    </section>
  );
}

function About() {
  return (
    <section id="jugadora" className={section}>
      <SectionHeader tag="01" title="Jugadora" subtitle="Sobre mí" />

      <div className={`${panel} grid gap-8 p-6 md:grid-cols-[240px_1fr] md:p-8`}>
        <div className="flex flex-col items-center gap-4">
          <div className="relative flex aspect-square w-full max-w-[240px] items-center justify-center overflow-hidden border-4 border-black bg-gradient-to-br from-[#c6f432] to-emerald-500 text-7xl font-black text-black shadow-[6px_6px_0_0_#000]">
            {PHOTO ? (
              <Image
                src={PHOTO}
                alt={`Foto de ${SHORT_NAME}`}
                fill
                sizes="240px"
                className="object-cover"
              />
            ) : (
              INITIALS
            )}

            <span className="absolute bottom-2 left-2 border-2 border-black bg-[#c6f432] px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-black">
              P1
            </span>
          </div>

          <dl className="w-full divide-y-2 divide-black border-2 border-black bg-[#14141b] font-mono text-xs">
            {stats.map((s) => (
              <div key={s.label} className="flex justify-between gap-2 px-3 py-2">
                <dt className="uppercase text-slate-500">{s.label}</dt>
                <dd className="text-right font-bold text-[#c6f432]">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative border-4 border-black bg-[#14141b] p-6 pt-8 md:p-8 md:pt-10">
          <span className="absolute -top-4 left-4 border-2 border-black bg-[#c6f432] px-3 py-0.5 font-mono text-xs font-bold uppercase text-black">
            {SHORT_NAME}
          </span>

          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Estudiante de último año de Bachillerato Técnico Vocacional en{" "}
              <span className="font-bold text-white">Desarrollo de Software</span>
              , con conocimientos en programación, desarrollo de aplicaciones,
              bases de datos y diseño de interfaces de usuario.
            </p>

            <p>
              He trabajado en proyectos utilizando{" "}
              <span className="font-bold text-[#c6f432]">
                Java, JavaFX, Python, Flet, SQL, MariaDB/MySQL, APIs REST y JSON
              </span>
              , además de herramientas como{" "}
              <span className="font-bold text-[#c6f432]">Figma y Git/GitHub</span>{" "}
              para diseñar y desarrollar soluciones de software.
            </p>

            <p>
              Me apasiona el{" "}
              <span className="font-bold text-emerald-300">
                desarrollo de videojuegos y las experiencias interactivas
              </span>
              , donde busco combinar programación, creatividad y diseño. Me
              interesa seguir explorando nuevas tecnologías y desarrollar
              proyectos que conviertan ideas en experiencias funcionales.
            </p>
          </div>

          <span className="absolute bottom-2 right-4 animate-bounce font-mono text-[#c6f432]">
            ▼
          </span>
        </div>
      </div>
    </section>
  );
}

function Progress() {
  return (
    <section id="progreso" className={section}>
      <SectionHeader tag="02" title="Progreso" subtitle="Formación académica" />

      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item, i) => (
          <div key={item.school} className={`${panel} p-6`}>
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-emerald-300">PUNTO DE GUARDADO {i + 1}</span>

              <span
                className={`border-2 border-black px-2 py-0.5 font-bold ${
                  item.status === "EN CURSO"
                    ? "bg-[#c6f432] text-black"
                    : "bg-[#14141b] text-emerald-300"
                }`}
              >
                {item.status}
              </span>
            </div>

            <h3 className="mt-4 text-xl font-bold text-white">{item.school}</h3>
            <p className="mt-1 font-mono text-sm text-slate-400">{item.period}</p>

            {item.note && (
              <p className="mt-2 text-sm text-[#c6f432]">{item.note}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="inventario" className={section}>
      <SectionHeader
        tag="03"
        title="Inventario"
        subtitle="Habilidades y herramientas"
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <div key={category.title} className={`${panel} flex flex-col p-5`}>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center border-2 border-black bg-[#c6f432] font-mono text-sm font-bold text-black">
                {category.icon}
              </span>

              <h3 className="text-xl font-black uppercase text-white">
                {category.title}
              </h3>
            </div>

            <div className="space-y-5">
              {category.groups.map((group) => (
                <div key={group.title}>
                  <p className="mb-2 font-mono text-xs font-bold uppercase text-emerald-300">
                    ▸ {group.title}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span key={skill} className={slot}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={`${panel} mt-6 p-5`}>
        <h3 className="mb-4 font-mono text-sm font-bold uppercase text-emerald-300">
          Opciones de diálogo · Idiomas
        </h3>

        <div className="grid gap-3 sm:grid-cols-2">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="flex items-center justify-between border-2 border-black bg-[#14141b] px-4 py-3"
            >
              <span className="font-bold text-white">▸ {lang.name}</span>
              <span className="font-mono text-xs text-[#c6f432]">
                {lang.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const hasArt = artworks.length > 0;

  return (
    <section id="galeria" className={section}>
      <SectionHeader
        tag="04"
        title="Galería"
        subtitle="Mis dibujos e ilustraciones"
      />

      {hasArt ? (
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4">
          {artworks.map((art, i) => (
            <a
              key={`${art.image}-${i}`}
              href={art.image}
              target="_blank"
              rel="noopener noreferrer"
              className={`${panel} ${panelHover} group relative mb-6 block break-inside-avoid overflow-hidden`}
            >
              <Image
                src={art.image}
                alt={art.title}
                width={0}
                height={0}
                sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full transition duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-x-0 bottom-0 translate-y-full border-t-4 border-black bg-[#14141b]/95 p-4 transition duration-300 group-hover:translate-y-0">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-300">
                  {[art.technique, art.year].filter(Boolean).join(" · ") ||
                    "Dibujo"}
                </p>

                <h3 className="mt-1 font-bold text-white">{art.title}</h3>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className={`${panel} flex flex-col items-center justify-center gap-3 p-12 text-center`}>
          <span className="text-5xl">🎨</span>

          <p className="font-mono text-sm uppercase tracking-widest text-emerald-300">
            Galería en construcción
          </p>

          <p className="text-sm text-slate-400">Pronto habrá dibujos aquí.</p>
        </div>
      )}
    </section>
  );
}

const SIZES =
  "(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

const imageClass =
  "object-cover object-top transition duration-300 group-hover:scale-105";

function AchievementPreview({
  item,
  icon,
}: {
  item: Achievement;
  icon: string;
}) {
  const link = item.link ?? "";

  const isLocal = link.startsWith("/");
  const isPdf = /\.pdf$/i.test(link);
  const isImage = /\.(png|jpe?g|webp|gif)$/i.test(link);

  const imageSrc = item.preview ?? (isLocal && isImage ? link : null);

  if (imageSrc) {
    return (
      <Image
        src={imageSrc}
        alt={`Vista previa: ${item.title}`}
        fill
        sizes={SIZES}
        className={imageClass}
      />
    );
  }

  if (isLocal && isPdf) {
    return (
      <iframe
        src={`${link}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
        title={`Vista previa: ${item.title}`}
        loading="lazy"
        tabIndex={-1}
        className="pointer-events-none h-full w-full bg-white"
      />
    );
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[repeating-linear-gradient(45deg,#1b1b24_0_10px,#14141b_10px_20px)]">
      <span className="text-5xl opacity-60">{icon}</span>

      <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
        Sin vista previa
      </span>
    </div>
  );
}

function AchievementCard({
  item,
  icon,
}: {
  item: Achievement;
  icon: string;
}) {
  return (
    <article className={`${panel} ${panelHover} group flex flex-col`}>
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b-4 border-black bg-[#14141b]">
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir ${item.title}`}
            className="absolute inset-0 z-10"
          />
        )}

        <AchievementPreview item={item} icon={icon} />

        <span className="absolute left-3 top-3 z-20 flex h-10 w-10 items-center justify-center border-2 border-black bg-[#c6f432] text-xl shadow-[3px_3px_0_0_#000]">
          {icon}
        </span>

        <span className="absolute right-3 top-3 z-20 border-2 border-black bg-[#14141b] px-2 py-0.5 font-mono text-xs text-slate-300">
          {item.date}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-300">
          Logro desbloqueado
        </p>

        <h4 className="mt-1 text-lg font-bold text-white">{item.title}</h4>

        <p className="mt-1 flex-1 text-sm text-slate-400">{item.issuer ?? ""}</p>

        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 border-2 border-black bg-[#c6f432] py-2 text-center font-mono text-xs font-bold uppercase text-black shadow-[3px_3px_0_0_#000]"
          >
            Ver {item.type === "Certificado" ? "certificado" : "diploma"} ▶
          </a>
        )}
      </div>
    </article>
  );
}

function Achievements() {
  return (
    <section id="logros" className={section}>
      <SectionHeader
        tag="05"
        title="Logros"
        subtitle="Certificados y diplomas de participación"
      />

      <div className="space-y-12">
        {achievementGroups.map((group) => {
          const items = achievements.filter((a) => a.type === group.type);

          return (
            <div key={group.type}>
              <div className="mb-5 flex items-center justify-between gap-3">
                <h3 className="flex items-center gap-2 text-xl font-black uppercase text-white">
                  <span aria-hidden>{group.icon}</span>
                  {group.title}
                </h3>

                <span className="font-mono text-xs text-emerald-300">
                  {items.length} desbloqueado{items.length === 1 ? "" : "s"}
                </span>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {items.map((item, i) => (
                  <AchievementCard
                    key={`${item.title}-${i}`}
                    item={item}
                    icon={group.icon}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className={section}>
      <div className="mb-12 text-center">
        <p className="font-mono text-sm tracking-[0.3em] text-emerald-300">
          06 · CONTACTO
        </p>

        <h2 className="mt-2 text-5xl font-black uppercase text-white drop-shadow-[4px_4px_0_#000]">
          ¿Continuar?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-lg">
          Estoy abierta a nuevas oportunidades, colaboraciones y proyectos de
          videojuegos.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            {...(c.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className={`${panel} ${panelHover} group flex flex-col items-center gap-2 p-6 text-center`}
          >
            <span className="flex h-12 w-12 items-center justify-center border-2 border-black bg-[#14141b] text-xl text-[#c6f432] transition group-hover:bg-[#c6f432] group-hover:text-black">
              {c.icon}
            </span>

            <span className="font-mono text-xs uppercase text-slate-500">
              {c.label}
            </span>

            <span className="break-all font-bold text-white">{c.value}</span>
          </a>
        ))}
      </div>

      <p className="mt-8 text-center font-mono text-xs uppercase tracking-widest text-slate-500">
        {LOCATION} · {WORK_MODE}
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full border-t-4 border-black px-4 py-8 text-center font-mono text-xs text-slate-500">
      © {new Date().getFullYear()} {NAME} · Hecho con Next.js y Tailwind CSS
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#14141b] bg-[radial-gradient(#26263a_1px,transparent_1px)] bg-[size:22px_22px] text-slate-300">
      <Header />
      <Hero />
      <About />
      <Progress />
      <Skills />
      <Gallery />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}