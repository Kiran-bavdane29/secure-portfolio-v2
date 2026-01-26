export const portfolioData = {
  personal: {
    name: "Kiran Prakash Bavdane",
    role: "Certified Ethical Hacker | Software Security Engineer",
    //email: "kiranBavdane578@gmail.com",
    location: "Mumbai, Maharashtra",
    summary: "Security Engineer bridging the gap between rapid development and security. With 4 years of experience, I architect Secure SDLC pipelines, perform advanced Vulnerability Remediation, and build resilient web systems using the MEAN Stack."
  },
  stats: [
    { label: "Vulnerabilities Patched", value: "20+" },
    { label: "Risk Reduction", value: "40%" },
    { label: "Encryption", value: "100%" },
    { label: "Experience", value: "3.9 Yrs" }
  ],
  skills: {
    development: [
      "JavaScript (ES6+)",
      "React.js",
      "Angular",
      "Node.js",
      "Secure SDLC",
      "Java",
      "REST API Security"
    ],
    security: [
      "Burp Suite",
      "OWASP ZAP",
      "SonarQube",
      "Metasploit",
      "Wireshark",
      "SQLMap",
      "Nmap"
    ]
  },
  projects: [
    {
      title: "OPERATION: DEEP SCAN",
      type: "Penetration Testing",
      desc: "Conducted black-box testing on enterprise web apps using Burp Suite & OWASP ZAP. Identified and patched critical SQL Injection and XSS vulnerabilities.",
      tech: ["Burp Suite", "OWASP ZAP", "SQLi Remediation"],
      status: "MISSION COMPLETE"
    },
    {
      title: "PROTOCOL: SECURE SDLC",
      type: "Architecture Design",
      desc: "Integrated automated security checkpoints into the Agile workflow. Reduced vulnerability escape rate by 40% through pre-commit hooks and SAST tools.",
      tech: ["DevSecOps", "Git Hooks", "SAST"],
      status: "ACTIVE"
    },
    {
      title: "LOGIC AUDIT: 3RD PARTY",
      type: "Security Audit",
      desc: "Performed end-to-end security testing on external integrations (Wix). Uncovered logical flaws in database permissions and API access controls.",
      tech: ["API Security", "Logic Flaw Analysis", "Wix Velo"],
      status: "VERIFIED"
    }
  ]
};