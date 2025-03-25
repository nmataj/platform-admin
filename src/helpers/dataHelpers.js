export function generateData() {
  const companies = [
    "TechCorp", "Innovatech", "FutureSoft", "Alpha Solutions", "Beta Systems",
    "Gamma Enterprises", "Delta Dynamics", "Epsilon Tech", "Zeta Innovations",
    "Omicron Labs", "Lambda Works", "Sigma Solutions", "Theta Technologies",
    "Kappa Systems", "Iota Enterprises", "NuTech", "PiSoft", "Rho Dynamics",
    "Tau Innovations", "Chi Labs", "Psi Works", "Omega Solutions",
    "Vega Enterprises", "Lyra Tech", "Orion Systems", "Phoenix Dynamics",
    "Nova Innovations", "Pioneer Labs", "Horizon Works", "Apex Solutions",
    "Summit Enterprises", "Vertex Tech", "Nexus Systems", "Quantum Dynamics",
    "Infinity Innovations", "Eclipse Labs", "Stellar Works", "Cosmos Solutions",
    "Nebula Enterprises", "Galaxy Tech", "Astro Systems", "Lunar Dynamics",
    "Solar Innovations", "Meteor Labs", "Comet Works", "Orbit Solutions",
    "Pulsar Enterprises", "Supernova Tech", "Blackhole Systems", "EventHorizon Dynamics"
  ];

  const data = companies.map((company, index) => ({
    id: index + 1,
    companyName: company,
    ownerEmail: `owner${index + 1}@${company.toLowerCase().replace(/\s+/g, '')}.com`
  }));

  return data;
};