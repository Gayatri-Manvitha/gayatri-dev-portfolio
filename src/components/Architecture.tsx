type DiagramNode = {
  id: string
  x: number
  y: number
  title: string
  detail: string
}

type DiagramLink = {
  path: string
  label?: string
  labelX?: number
  labelY?: number
}

type Diagram = {
  title: string
  description: string
  nodes: DiagramNode[]
  links: DiagramLink[]
}

const diagrams: Diagram[] = [
  {
    title: 'Event-driven microservices',
    description: 'A conceptual event flow with separate consumers and persisted service state.',
    nodes: [
      { id: 'client', x: 16, y: 76, title: 'Client', detail: 'request' },
      { id: 'gateway', x: 190, y: 76, title: 'API gateway', detail: 'authentication' },
      { id: 'command', x: 364, y: 76, title: 'Command service', detail: 'validation' },
      { id: 'broker', x: 538, y: 76, title: 'Kafka', detail: 'domain events' },
      { id: 'worker', x: 730, y: 25, title: 'Worker service', detail: 'process events' },
      { id: 'consumer', x: 730, y: 137, title: 'Status consumer', detail: 'publish updates' },
      { id: 'store', x: 538, y: 163, title: 'Service database', detail: 'transaction state' },
    ],
    links: [
      { path: 'M 164 104 H 190' },
      { path: 'M 338 104 H 364' },
      { path: 'M 512 104 H 538' },
      { path: 'M 686 89 C 710 89 706 53 730 53' },
      { path: 'M 686 116 C 710 116 706 165 730 165' },
      { path: 'M 611 132 V 163' },
    ],
  },
  {
    title: 'Digital payments workflow',
    description: 'A demonstration payment lifecycle with validation, processing and status persistence.',
    nodes: [
      { id: 'channel', x: 16, y: 76, title: 'Channel', detail: 'payment request' },
      { id: 'api', x: 190, y: 76, title: 'Payments API', detail: 'idempotency key' },
      { id: 'validate', x: 364, y: 76, title: 'Validation', detail: 'rules & limits' },
      { id: 'process', x: 538, y: 76, title: 'Processor', detail: 'retry policy' },
      { id: 'ledger', x: 730, y: 76, title: 'Ledger / bank', detail: 'payment outcome' },
      { id: 'events', x: 364, y: 163, title: 'Payment events', detail: 'Kafka topic' },
      { id: 'status', x: 538, y: 163, title: 'Status store', detail: 'PostgreSQL' },
    ],
    links: [
      { path: 'M 164 104 H 190' },
      { path: 'M 338 104 H 364' },
      { path: 'M 512 104 H 538' },
      { path: 'M 686 104 H 730' },
      { path: 'M 438 132 V 163' },
      { path: 'M 512 191 H 538' },
      { path: 'M 803 132 C 803 170 710 191 686 191' },
    ],
  },
  {
    title: 'Cloud-native deployment',
    description: 'A high-level container deployment on GCP with managed data and operations tooling.',
    nodes: [
      { id: 'users', x: 16, y: 76, title: 'Users', detail: 'HTTPS' },
      { id: 'edge', x: 190, y: 76, title: 'Load balancer', detail: 'TLS / routing' },
      { id: 'cluster', x: 364, y: 76, title: 'Kubernetes', detail: 'workloads & scaling' },
      { id: 'service', x: 538, y: 25, title: 'Spring Boot', detail: 'container service' },
      { id: 'data', x: 538, y: 137, title: 'Managed data', detail: 'database / storage' },
      { id: 'ops', x: 730, y: 76, title: 'Operations', detail: 'logs & metrics' },
    ],
    links: [
      { path: 'M 164 104 H 190' },
      { path: 'M 338 104 H 364' },
      { path: 'M 512 90 C 524 90 524 53 538 53' },
      { path: 'M 512 118 C 524 118 524 165 538 165' },
      { path: 'M 686 53 C 710 53 706 90 730 90' },
      { path: 'M 686 165 C 710 165 706 118 730 118' },
    ],
  },
  {
    title: 'AI / RAG application',
    description: 'An exploratory architecture for grounding generated answers in retrieved documentation.',
    nodes: [
      { id: 'dev', x: 16, y: 76, title: 'Developer', detail: 'question' },
      { id: 'ui', x: 190, y: 76, title: 'React UI', detail: 'experience' },
      { id: 'api', x: 364, y: 76, title: 'Python API', detail: 'orchestration' },
      { id: 'retrieve', x: 538, y: 76, title: 'Retriever', detail: 'relevant chunks' },
      { id: 'llm', x: 730, y: 76, title: 'LLM API', detail: 'grounded response' },
      { id: 'docs', x: 190, y: 163, title: 'Documentation', detail: 'source content' },
      { id: 'embed', x: 364, y: 163, title: 'Ingestion / embed', detail: 'index pipeline' },
      { id: 'vector', x: 538, y: 163, title: 'Vector index', detail: 'embeddings' },
    ],
    links: [
      { path: 'M 164 104 H 190' },
      { path: 'M 338 104 H 364' },
      { path: 'M 512 104 H 538' },
      { path: 'M 686 104 H 730' },
      { path: 'M 266 132 V 163' },
      { path: 'M 338 191 H 364' },
      { path: 'M 512 191 H 538' },
      { path: 'M 611 163 V 132' },
    ],
  },
]

function DiagramView({ diagram }: { diagram: Diagram }) {
  return (
    <figure className="architecture-card">
      <figcaption>
        <span className="diagram-label">REFERENCE DESIGN</span>
        <h3>{diagram.title}</h3>
        <p>{diagram.description}</p>
      </figcaption>
      <div className="diagram-canvas">
        <svg
          viewBox="0 0 900 238"
          role="img"
          aria-label={`${diagram.title}: ${diagram.description}`}
        >
          <defs>
            <marker
              id="diagram-arrow"
              markerWidth="7"
              markerHeight="7"
              refX="5"
              refY="3.5"
              orient="auto"
            >
              <path d="M 0 0 L 6 3.5 L 0 7 z" className="diagram-arrow-head" />
            </marker>
          </defs>
          {diagram.links.map((link, index) => (
            <path
              className="diagram-link"
              d={link.path}
              key={`${diagram.title}-link-${index}`}
              markerEnd="url(#diagram-arrow)"
            />
          ))}
          {diagram.nodes.map((node) => (
            <g key={node.id}>
              <rect
                className="diagram-node"
                x={node.x}
                y={node.y}
                width="148"
                height="56"
                rx="9"
              />
              <text className="diagram-node-title" x={node.x + 74} y={node.y + 24}>
                {node.title}
              </text>
              <text className="diagram-node-detail" x={node.x + 74} y={node.y + 42}>
                {node.detail}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </figure>
  )
}

function Architecture() {
  return (
    <section className="content-section" id="architecture" aria-labelledby="architecture-title">
      <div className="section-shell">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">05 — System design</p>
            <h2 id="architecture-title">Architecture, made visible.</h2>
          </div>
          <p className="section-side-note">
            Reference diagrams for independent learning projects — not representations of any employer’s proprietary systems.
          </p>
        </div>
        <div className="architecture-grid">
          {diagrams.map((diagram) => (
            <DiagramView diagram={diagram} key={diagram.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Architecture
