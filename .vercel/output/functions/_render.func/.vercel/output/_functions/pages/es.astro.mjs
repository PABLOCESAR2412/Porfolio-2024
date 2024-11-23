/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BCn1jvSO.mjs';
import 'kleur/colors';
import { $ as $$Navbar, a as $$About, b as $$Project, c as $$Skills, d as $$Experience, e as $$Studies, f as $$Courses, g as $$Contact, h as $$Footer, i as $$Layout } from '../chunks/Footer_Bh1uiJeR.mjs';
export { renderers } from '../renderers.mjs';

const navbar = {
	about: "Sobre mi",
	proyect: "Proyectos",
	skill: "Habilidades",
	experience: "Experiencia",
	contact: "Contacto"
};
const about = {
	i: "SOY",
	name: "PABLO TORRES",
	tittle: "DESARROLLADOR FULL-STACK",
	descript: "TECNÓLOGO EN DESARROLLO DE SOFTWARE ESPECIALIZADO EN FRONTEND Y BACKEND",
	status: "Abierto a trabajo"
};
const project = {
	pro: "Proyectos",
	firtProject: {
		tittle: "Lading Page",
		subtittle: "Para la empresa Anuncia-T",
		description: "Pagina para informar de los servicios de la empresa que se dedica a la publicidad."
	},
	secondProject: {
		tittle: "Sistema de Registros",
		subtittle: "Para la empresa Anuncia-T",
		description: "Sistema web que registra los datos de los vehiculos con la finalidad de tener todo mas seguro y ordenado."
	}
};
const skills = {
	skills: "Habilidades",
	language: "Lenguajes",
	bd: "Base de Datos",
	version: "Versionamiento"
};
const experience = {
	grandtittle: "Experiencia",
	first: {
		tittle: "Soporte Técnico",
		subtittle: "Académia Militar General Miguel Iturralde: AMMI",
		date: "01-09-2023 - 01-10-2023",
		paragraph: {
			one: "Realizar diagnósticos, reparaciones e instalaciones de software y hardware en computadoras de escritorio laptops y equipos de uso general.",
			two: "Instalar y configurar sistemas operativos, aplicaciones y controladores de dispositivos.",
			three: "Realizar limpieza y mantenimiento preventivo de equipos informáticos para prevenir fallas y garantizar su óptimo funcionamiento.",
			four: "Brindar soporte técnico a usuarios en la resolución de problemas relacionados con el uso de computadoras."
		}
	},
	second: {
		tittle: "Desarrollador Full-Stack",
		subtittle: "Freelancer",
		date: "01-10-2024 - Presente",
		paragraph: {
			one: "Desarrollo de una landing page informativa para la empresa Anuncia - T",
			two: "Desarrollo de un sistema de resgistro para la empresa Anuncia - T"
		},
		tech: "Técnologias"
	}
};
const studies = {
	grandtittle: "Estudios",
	first: {
		tittle: "Técnico en Servicios Infomáticos",
		subtittle: "Unidad Educativa Primicias de la Cultura de Quito",
		date: "10-2017 - 7-2020"
	},
	second: {
		tittle: "Técnologo Superior en Desarrollo de Software",
		subtittle: "Instituto Superior Tecnológico Mayor Pedro Traversari",
		date: "10-2021 - 10-2024"
	}
};
const course = {
	grandtittle: "Cursos y Certificados",
	first: {
		tittle: "Introducción a la seguridad Cibernética",
		sutittle: "Cisco Networking Academy",
		date: "24-02-2023",
		paragraph: {
			one: "Conceptos e importancia de la ciberseguridad.",
			two: "Características de impacto de varios tipos de ataques cibernéticos.",
			three: "Cómo protegerse contra ataques cibérneticos."
		}
	},
	second: {
		tittle: "CCNAv7: Conceptos  básicos de conmutación, enrutamiento conectividad inalámbrica",
		sutittle: "Cisco Networking Academy",
		date: "07-02-2023",
		paragraph: {
			one: "Configurar las VLAN y el enrutamiento entre VLAN aplicando las mejores prácticas de seguridad.",
			two: "Configurar la asignación de direcciones en redes IPV6."
		}
	},
	third: {
		tittle: "CCNAv7: Redes empresariales, Seguridad y Automatizacíon",
		sutittle: "Cisco Networking Academy",
		date: "07-03-2023",
		paragraph: {
			one: "Explicar cómo mitigar las amenazas y mejorar la seguridad de la red utilizando listas de acceso y mejores prácticas de seguridad.",
			two: "Implementar protocolos para administrar la red."
		}
	},
	fourth: {
		tittle: "Ingles Pre A1, A1, A2",
		sutittle: "Instituto Superior Tecnológico Mayor Pedro Traversari",
		date: "08-11-2021 - 07-11-2022"
	}
};
const contact = {
	grandtittle: "Contacto",
	name: "Nombre",
	lastname: "Apellido",
	email: "Correo",
	topic: "Tema",
	message: "Mensaje",
	button: "Enviar"
};
const link = "Enlace";
const certificate = "Certificado";
const languageSwitch = "English";
const es = {
	navbar: navbar,
	about: about,
	project: project,
	skills: skills,
	experience: experience,
	studies: studies,
	course: course,
	contact: contact,
	link: link,
	certificate: certificate,
	languageSwitch: languageSwitch
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const locale = "es";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Porfolio Pablo Torres" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Navbar", $$Navbar, { "translations": es, "locale": locale })} ${renderComponent($$result2, "About", $$About, { "translations": es, "locale": locale })} ${renderComponent($$result2, "Project", $$Project, { "translations": es, "locale": locale })} ${renderComponent($$result2, "Skills", $$Skills, { "translations": es, "locale": locale })} ${renderComponent($$result2, "Experience", $$Experience, { "translations": es, "locale": locale })} ${renderComponent($$result2, "Studies", $$Studies, { "translations": es, "locale": locale })} ${renderComponent($$result2, "Courses", $$Courses, { "translations": es, "locale": locale })} ${renderComponent($$result2, "Contact", $$Contact, { "translations": es, "locale": locale })} ${renderComponent($$result2, "Footer", $$Footer, { "translations": es, "locale": locale })} </main> ` })} `;
}, "C:/Proyectos/Astro/Porfolio_2024_v1/src/pages/es/index.astro", void 0);

const $$file = "C:/Proyectos/Astro/Porfolio_2024_v1/src/pages/es/index.astro";
const $$url = "/es";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
