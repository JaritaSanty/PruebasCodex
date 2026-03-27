const experience = [
  {
    role: 'Profesor Titular - Auxiliar 1',
    company: 'Universidad Técnica de Ambato',
    period: '2021 - Actualmente',
    highlights: [
      'Docente en Algoritmos y Lógica de Programación (PSeInt, Java, Python), Manejo y Configuración de Software (Git y GitHub), Desarrollo Asistido por Software e Ingeniería Económica para Software.',
      'Responsable del departamento de administración de redes de la FISEI, con planes de mantenimiento preventivo y correctivo para laboratorios.',
      'Supervisión de personal técnico y soporte a estudiantes, docentes y personal administrativo.',
    ],
  },
  {
    role: 'CEO - Propietario',
    company: 'SanTIC Education',
    period: '2022 - Actualmente',
    highlights: [
      'Fundador y líder de una empresa enfocada en capacitaciones de Tecnologías de Información.',
      'Instructor en fundamentos de programación para niños y adolescentes en instituciones educativas.',
      'Implementación y administración de plataformas Moodle para empresas y centros de formación, incluyendo servicios activos para una institución educativa en España.',
    ],
  },
  {
    role: 'Asistente de Tecnologías de Información y Comunicación',
    company: 'Universidad Técnica de Ambato',
    period: '2016 - 2021',
    highlights: [
      'Desarrollo de software según requerimientos institucionales y administración de plataformas Moodle y Joomla.',
      'Soporte técnico para programas de educación continua y tutoría virtual en herramientas TIC.',
      'Diseño instruccional de cursos de educación continua y MOOC.',
    ],
  },
  {
    role: 'Agente de Soporte Técnico',
    company: 'Plasticaucho Industrial',
    period: '2015 - 2016',
    highlights: [
      'Soporte técnico en sistemas operativos Windows y herramientas Office 365.',
      'Administración de usuarios y recursos mediante Active Directory.',
      'Mantenimiento preventivo y correctivo de equipos informáticos.',
    ],
  },
];

const education = [
  {
    institution: 'Universidad Autónoma de Madrid',
    degree:
      'Máster Universitario en Investigación e Innovación en Tecnologías de Información y las Comunicaciones',
    period: '2018 - 2019',
  },
  {
    institution: 'Universidad Técnica de Ambato',
    degree: 'Ingeniería en Sistemas Computacionales e Informáticos',
    period: '2010 - 2016',
  },
];

const skills = [
  'Docencia universitaria en programación',
  'Gestión de redes y laboratorios',
  'Moodle y plataformas educativas',
  'Git, GitHub y buenas prácticas de desarrollo',
  'Diseño instruccional y formación TIC',
  'Liderazgo y dirección de proyectos educativos',
];

export default function HomePage() {
  return (
    <main>
      <header className="hero" id="inicio">
        <div className="hero__content container">
          <p className="eyebrow">Portafolio Profesional</p>
          <h1>Santiago Jaramo</h1>
          <p className="subtitle">
            Docente universitario, especialista en tecnologías de información y fundador de SanTIC Education.
          </p>
          <div className="hero__actions">
            <a href="#experiencia" className="button button--primary">
              Ver experiencia
            </a>
            <a href="#contacto" className="button button--secondary">
              Contactar
            </a>
          </div>
        </div>
      </header>

      <section className="section container" id="perfil">
        <h2>Perfil profesional</h2>
        <p>
          Profesional en Sistemas Computacionales con sólida experiencia en docencia universitaria, liderazgo
          educativo y administración de infraestructura tecnológica. Mi enfoque combina formación técnica aplicada,
          innovación pedagógica y ejecución de soluciones TIC para instituciones educativas y organizaciones.
        </p>
      </section>

      <section className="section container" id="habilidades">
        <h2>Habilidades clave</h2>
        <div className="chip-grid">
          {skills.map((skill) => (
            <span key={skill} className="chip">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="section container" id="experiencia">
        <h2>Experiencia</h2>
        <div className="timeline">
          {experience.map((job) => (
            <article className="card" key={`${job.role}-${job.company}`}>
              <div className="card__heading">
                <h3>{job.role}</h3>
                <p className="company">{job.company}</p>
                <p className="period">{job.period}</p>
              </div>
              <ul>
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section container" id="educacion">
        <h2>Educación</h2>
        <div className="education-grid">
          {education.map((item) => (
            <article className="card" key={`${item.institution}-${item.degree}`}>
              <h3>{item.institution}</h3>
              <p>{item.degree}</p>
              <p className="period">{item.period}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section container" id="contacto">
        <h2>Contacto</h2>
        <p>
          ¿Te interesa colaborar en formación tecnológica, consultoría educativa o proyectos de transformación
          digital? Estoy disponible para alianzas académicas y empresariales.
        </p>
        <p className="contact-links">
          <a href="https://santiagojaramoya.com" target="_blank" rel="noreferrer">
            Sitio actual
          </a>
          <span>•</span>
          <a href="mailto:contacto@santiagojaramoya.com">contacto@santiagojaramoya.com</a>
        </p>
      </section>
    </main>
  );
}
