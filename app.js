const courseData = [
  {
    "day": 1,
    "week": 1,
    "topic": "Exam setup + CIA/DAD triads",
    "reading": "Study Guide Section 1.1 + CompTIA objectives domains overview",
    "video": "Professor Messer 1.1 security controls + CIA triad",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Create notebook sections; write CIA/DAD examples from banking, hospital, e-commerce.",
    "flashcards": "CIA, DAD, confidentiality, integrity, availability, non-repudiation",
    "practice": "15",
    "outcome": "Explain CIA vs DAD without notes.",
    "checkpoint": "Can you choose the right control for C/I/A?"
  },
  {
    "day": 2,
    "week": 1,
    "topic": "NIST CSF, gap analysis, control objectives",
    "reading": "Study Guide 1.2\u20131.4",
    "video": "Professor Messer NIST/gap analysis/control objectives",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Take one fake company and write 5 gaps and 5 controls.",
    "flashcards": "Identify, Protect, Detect, Respond, Recover, baseline, compensating",
    "practice": "20",
    "outcome": "Understand framework language used in scenario questions.",
    "checkpoint": "Can you distinguish control objective vs control?"
  },
  {
    "day": 3,
    "week": 1,
    "topic": "Control categories and functional types",
    "reading": "Study Guide 1.5\u20131.6",
    "video": "Professor Messer security controls",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Build a matrix: technical/managerial/operational vs preventive/detective/corrective.",
    "flashcards": "preventive, detective, corrective, deterrent, compensating, physical",
    "practice": "25",
    "outcome": "Pick correct control type under pressure.",
    "checkpoint": "Can you classify 20 controls?"
  },
  {
    "day": 4,
    "week": 1,
    "topic": "Governance basics and security roles",
    "reading": "Study Guide 1.7 + skim Section 14 headings",
    "video": "Professor Messer governance overview",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Draft mini org chart: CISO, SOC, CSIRT, system owner, data owner.",
    "flashcards": "CISO, SOC, CSIRT, policy, standard, procedure",
    "practice": "20",
    "outcome": "Know who is responsible for what.",
    "checkpoint": "Can you identify role/responsibility in a scenario?"
  },
  {
    "day": 5,
    "week": 1,
    "topic": "Risk basics and measurement",
    "reading": "Study Guide Section 2.1 + Section 15 overview",
    "video": "Professor Messer risk concepts",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Create risk table: asset, threat, vulnerability, likelihood, impact, control.",
    "flashcards": "risk, threat, vulnerability, likelihood, impact, residual risk",
    "practice": "25",
    "outcome": "Stop confusing threat/vulnerability/risk.",
    "checkpoint": "Can you explain risk in one sentence?"
  },
  {
    "day": 6,
    "week": 1,
    "topic": "Week 1 review and quiz",
    "reading": "Review Sections 1, 2.1, 14 overview",
    "video": "Professor Messer study group sample questions",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Take 60-question mixed quiz; log every miss.",
    "flashcards": "CIA, controls, NIST, risk, governance",
    "practice": "60",
    "outcome": "Baseline score established.",
    "checkpoint": "Score 65%+ or repeat weak sections."
  },
  {
    "day": 7,
    "week": 1,
    "topic": "Week 1 weekend lab and cleanup",
    "reading": "Review all flashcards",
    "video": "PowerCert security fundamentals videos",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Build one-page cheat sheet: control types + risk terms.",
    "flashcards": "all Week 1 terms",
    "practice": "40",
    "outcome": "Core vocabulary locked.",
    "checkpoint": "Can you teach Week 1 to a beginner?"
  },
  {
    "day": 8,
    "week": 2,
    "topic": "Threat actor attributes",
    "reading": "Study Guide 2.2\u20132.4",
    "video": "Professor Messer threat actors/common threat vectors",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Map threat actor to motivation/capability: script kiddie, insider, nation-state.",
    "flashcards": "APT, insider, hacktivist, script kiddie, vector, attack surface",
    "practice": "25",
    "outcome": "Identify attacker type from clues.",
    "checkpoint": "Can you separate motivation from capability?"
  },
  {
    "day": 9,
    "week": 2,
    "topic": "Attack vectors and vulnerable software",
    "reading": "Study Guide 2.4\u20132.6",
    "video": "Professor Messer threat vectors",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Draw attack surface for your home laptop and phone.",
    "flashcards": "remote, local, removable media, cloud, default credentials",
    "practice": "30",
    "outcome": "Know how attackers enter systems.",
    "checkpoint": "Can you identify initial access vector?"
  },
  {
    "day": 10,
    "week": 2,
    "topic": "Social engineering",
    "reading": "Study Guide 2.8",
    "video": "Professor Messer phishing/social engineering videos",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Analyze 5 phishing emails/screenshots; mark sender, urgency, link, attachment, spoofing.",
    "flashcards": "phishing, spear phishing, whaling, vishing, smishing, baiting",
    "practice": "35",
    "outcome": "Spot human-based attack patterns.",
    "checkpoint": "Can you classify each social engineering type?"
  },
  {
    "day": 11,
    "week": 2,
    "topic": "Malware fundamentals",
    "reading": "Study Guide 13.1\u201313.4",
    "video": "Professor Messer malware videos",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Create malware comparison table: virus, worm, Trojan, RAT, ransomware, rootkit.",
    "flashcards": "virus, worm, Trojan, RAT, rootkit, ransomware, fileless",
    "practice": "30",
    "outcome": "Distinguish malware by vector/payload.",
    "checkpoint": "Can you identify malware from behavior?"
  },
  {
    "day": 12,
    "week": 2,
    "topic": "Indicators and password attacks",
    "reading": "Study Guide 13.5\u201313.7",
    "video": "Professor Messer password attack videos",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Safe lab: calculate hash of a test file; do not crack real passwords.",
    "flashcards": "IOC, IOA, brute force, spraying, rainbow table, hashcat",
    "practice": "35",
    "outcome": "Understand attack indicators and credential attacks.",
    "checkpoint": "Can you separate spraying vs brute force?"
  },
  {
    "day": 13,
    "week": 2,
    "topic": "Week 2 review and quiz",
    "reading": "Review Sections 2 and 13 malware/password parts",
    "video": "Study group questions",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Take 75-question quiz; target 70%+.",
    "flashcards": "Week 2 terms",
    "practice": "75",
    "outcome": "Threat and attack foundation ready.",
    "checkpoint": "If below 70%, repeat Days 8\u201312."
  },
  {
    "day": 14,
    "week": 2,
    "topic": "Weekend scenario drills",
    "reading": "Review missed questions",
    "video": "TryHackMe Cyber Security 101 optional rooms",
    "videoLink": "https://tryhackme.com/module/network-security",
    "lab": "Do phishing tabletop: user clicks malicious link, list response steps.",
    "flashcards": "social engineering + malware",
    "practice": "50",
    "outcome": "Connect attacks to response.",
    "checkpoint": "Can you explain why each wrong answer was wrong?"
  },
  {
    "day": 15,
    "week": 3,
    "topic": "Cryptography basics",
    "reading": "Study Guide 3.1\u20133.2",
    "video": "Professor Messer cryptography/hash videos",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Use browser or terminal to hash a sample text/file; compare changed hash.",
    "flashcards": "plaintext, ciphertext, cipher, hash, SHA-256, collision",
    "practice": "30",
    "outcome": "Understand hash vs encryption.",
    "checkpoint": "Can you state when to use hashing?"
  },
  {
    "day": 16,
    "week": 3,
    "topic": "Symmetric vs asymmetric encryption",
    "reading": "Study Guide 3.2\u20133.4",
    "video": "Professor Messer encryption technologies/key exchange",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Draw TLS handshake simplified: cert, key exchange, session key.",
    "flashcards": "symmetric, asymmetric, public key, private key, key exchange",
    "practice": "35",
    "outcome": "Know speed/use-case differences.",
    "checkpoint": "Can you pick correct crypto for a scenario?"
  },
  {
    "day": 17,
    "week": 3,
    "topic": "PKI and certificates",
    "reading": "Study Guide 3.6\u20133.9",
    "video": "Professor Messer PKI/certificates videos",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Open a website certificate in browser; identify issuer, SAN, dates, public key.",
    "flashcards": "PKI, CA, RA, CSR, SAN, wildcard, revocation",
    "practice": "35",
    "outcome": "Read certificate fields confidently.",
    "checkpoint": "Can you troubleshoot cert trust errors?"
  },
  {
    "day": 18,
    "week": 3,
    "topic": "Salting, stretching, blockchain, steganography",
    "reading": "Study Guide 3.5",
    "video": "Professor Messer hashing/digital signatures/obfuscation",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Write plain-English explanation: salt vs key stretching.",
    "flashcards": "salt, PBKDF2, steganography, blockchain, homomorphic",
    "practice": "25",
    "outcome": "Understand advanced crypto terms.",
    "checkpoint": "Can you explain why salt slows attackers?"
  },
  {
    "day": 19,
    "week": 3,
    "topic": "Secure protocols",
    "reading": "Study Guide 5.6 + 11.2\u201311.4",
    "video": "Professor Messer secure protocols",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Build protocol table: SSH, SFTP, FTPS, HTTPS, LDAPS, IMAPS, SMTPS.",
    "flashcards": "TLS, SSH, SFTP, FTPS, LDAPS, SPF, DKIM, DMARC",
    "practice": "40",
    "outcome": "Know secure replacement protocols and ports.",
    "checkpoint": "Can you choose secure protocol by use case?"
  },
  {
    "day": 20,
    "week": 3,
    "topic": "Week 3 review and quiz",
    "reading": "Review Sections 3, 5.6, 11.2\u201311.4",
    "video": "Practice crypto and protocol questions",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Take 80-question quiz.",
    "flashcards": "crypto + secure protocols",
    "practice": "80",
    "outcome": "Crypto no longer feels like magic.",
    "checkpoint": "Target 72%+ minimum."
  },
  {
    "day": 21,
    "week": 3,
    "topic": "Weekend lab: certs and email security",
    "reading": "Review certificate notes",
    "video": "Microsoft/CISA email security explainers optional",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Check DMARC/SPF records for your own domain or example domains using public lookup tools.",
    "flashcards": "SPF, DKIM, DMARC, MX, TXT",
    "practice": "50",
    "outcome": "Email security concepts stick.",
    "checkpoint": "Can you explain SPF vs DKIM vs DMARC?"
  },
  {
    "day": 22,
    "week": 4,
    "topic": "IAM lifecycle and AAA",
    "reading": "Study Guide 4.1\u20134.2",
    "video": "Professor Messer AAA/IAM videos",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Draw identity \u2192 authenticate \u2192 authorize \u2192 audit.",
    "flashcards": "IAM, AAA, identification, authentication, authorization, accounting",
    "practice": "30",
    "outcome": "Know IAM flow cold.",
    "checkpoint": "Can you identify the phase from a scenario?"
  },
  {
    "day": 23,
    "week": 4,
    "topic": "MFA and biometrics",
    "reading": "Study Guide 4.2\u20134.4",
    "video": "Professor Messer MFA/biometrics/passwords",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Create table: something you know/have/are/do/where.",
    "flashcards": "MFA, FAR, FRR, CER, biometric, password manager",
    "practice": "35",
    "outcome": "Avoid MFA trick answers.",
    "checkpoint": "Can you spot fake MFA using same factor twice?"
  },
  {
    "day": 24,
    "week": 4,
    "topic": "Access control models",
    "reading": "Study Guide 4.5\u20134.7",
    "video": "Professor Messer authorization/access control videos",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Make comparison chart: DAC, MAC, RBAC, ABAC, rule-based.",
    "flashcards": "DAC, MAC, RBAC, ABAC, ACL, GPO, federation",
    "practice": "40",
    "outcome": "Pick the right access model.",
    "checkpoint": "Can you explain RBAC vs ABAC?"
  },
  {
    "day": 25,
    "week": 4,
    "topic": "PAM and privileged accounts",
    "reading": "Study Guide 4.8",
    "video": "Professor Messer privileged access videos",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Write PAM policy: JIT, vaulting, SAW, logging, least privilege.",
    "flashcards": "PAM, JIT, ZSP, vaulting, SAW, sudo",
    "practice": "30",
    "outcome": "Privileged access controls clear.",
    "checkpoint": "Can you recommend PAM control?"
  },
  {
    "day": 26,
    "week": 4,
    "topic": "Kerberos, local, network, remote auth",
    "reading": "Study Guide 4.9\u20134.10",
    "video": "Professor Messer Kerberos/SSO videos",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Diagram KDC, principal, application server; explain ticket idea.",
    "flashcards": "Kerberos, KDC, SSO, NTLM, SAM, PAM Linux",
    "practice": "35",
    "outcome": "Understand Kerberos enough for exam.",
    "checkpoint": "Can you identify Kerberos components?"
  },
  {
    "day": 27,
    "week": 4,
    "topic": "Week 4 review and quiz",
    "reading": "Review Section 4",
    "video": "IAM practice set",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Take 90-question quiz; target 75%+.",
    "flashcards": "IAM terms",
    "practice": "90",
    "outcome": "Week 4 benchmark reached.",
    "checkpoint": "If under 75%, do not move fast."
  },
  {
    "day": 28,
    "week": 4,
    "topic": "Weekend access control lab",
    "reading": "Linux permissions section + IAM notes",
    "video": "TryHackMe Linux Fundamentals optional",
    "videoLink": "https://tryhackme.com/module/network-security",
    "lab": "Linux lab: chmod 755/644, users/groups, file permission interpretation.",
    "flashcards": "chmod, rwx, owner, group, others",
    "practice": "50",
    "outcome": "Permissions become practical.",
    "checkpoint": "Can you decode rwxr-xr-x?"
  },
  {
    "day": 29,
    "week": 5,
    "topic": "Network devices and zones",
    "reading": "Study Guide 5.1\u20135.3",
    "video": "Professor Messer network appliances/segmentation",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Draw LAN, DMZ, firewall, router, switch, DNS, load balancer.",
    "flashcards": "switch, router, firewall, DNS, DMZ, VLAN, zone",
    "practice": "35",
    "outcome": "Network architecture vocabulary strong.",
    "checkpoint": "Can you place a server in the correct zone?"
  },
  {
    "day": 30,
    "week": 5,
    "topic": "Switching/routing attacks and secure routing",
    "reading": "Study Guide 5.4\u20135.7",
    "video": "Professor Messer network attacks videos",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Create table: ARP poisoning, MAC flooding, DHCP snooping, port security.",
    "flashcards": "ARP, DHCP snooping, MAC spoofing, BGP, OSPF",
    "practice": "35",
    "outcome": "Know Layer 2/3 risks and controls.",
    "checkpoint": "Can you choose DHCP snooping vs port security?"
  },
  {
    "day": 31,
    "week": 5,
    "topic": "Firewalls and proxies",
    "reading": "Study Guide 5.8\u20135.9",
    "video": "Professor Messer firewall/proxy videos",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Write 5 firewall rules from business cases; identify ingress/egress.",
    "flashcards": "stateless, stateful, NGFW, WAF, proxy, reverse proxy",
    "practice": "40",
    "outcome": "Firewall questions become easier.",
    "checkpoint": "Can you tell WAF vs NGFW?"
  },
  {
    "day": 32,
    "week": 5,
    "topic": "VPNs and remote access",
    "reading": "Study Guide 5.10",
    "video": "Professor Messer VPN/IPsec videos",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Compare full tunnel vs split tunnel; AH vs ESP; transport vs tunnel.",
    "flashcards": "VPN, IPsec, AH, ESP, IKE, split tunnel, full tunnel",
    "practice": "35",
    "outcome": "Remote access architecture clear.",
    "checkpoint": "Can you pick AH vs ESP?"
  },
  {
    "day": 33,
    "week": 5,
    "topic": "Wireless and NAC",
    "reading": "Study Guide 9.3\u20139.4",
    "video": "Professor Messer wireless/NAC videos",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Lab/simulation: map WPA2, WPA3, 802.1X, RADIUS, captive portal.",
    "flashcards": "WPA2, WPA3, SAE, 802.1X, EAP, RADIUS, NAC",
    "practice": "40",
    "outcome": "Wireless authentication ready.",
    "checkpoint": "Can you identify evil twin vs rogue AP?"
  },
  {
    "day": 34,
    "week": 5,
    "topic": "Zero trust and segmentation",
    "reading": "Study Guide 6.5 + 10.2",
    "video": "Professor Messer zero trust videos",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Draw protect surface and PEP/PDP/PE/PA components.",
    "flashcards": "zero trust, microsegmentation, PDP, PEP, PE, PA",
    "practice": "35",
    "outcome": "Zero trust architecture makes sense.",
    "checkpoint": "Can you explain no implicit trust?"
  },
  {
    "day": 35,
    "week": 5,
    "topic": "Week 5 review/lab",
    "reading": "Review Sections 5, 6.5, 9.3\u20139.4, 10.2",
    "video": "TryHackMe Network Security module optional",
    "videoLink": "https://tryhackme.com/module/network-security",
    "lab": "Nmap only on your own device/router/lab IP; record open ports and explain risk.",
    "flashcards": "Nmap, ports, firewall, segmentation",
    "practice": "70",
    "outcome": "Network security practical base.",
    "checkpoint": "Can you explain results without scanning others?"
  },
  {
    "day": 36,
    "week": 6,
    "topic": "Cloud deployment and service models",
    "reading": "Study Guide 6.1\u20136.2",
    "video": "Professor Messer cloud videos",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Create shared responsibility table for IaaS/PaaS/SaaS.",
    "flashcards": "IaaS, PaaS, SaaS, public, private, community, responsibility matrix",
    "practice": "35",
    "outcome": "Cloud responsibility questions ready.",
    "checkpoint": "Can you say who patches OS in each model?"
  },
  {
    "day": 37,
    "week": 6,
    "topic": "Cloud security controls",
    "reading": "Study Guide 6.3\u20136.4",
    "video": "Professor Messer cloud security/CASB/IaC videos",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Map CASB modes: forward proxy, reverse proxy, API.",
    "flashcards": "CASB, VPC, replication, IaC, serverless, orchestration",
    "practice": "40",
    "outcome": "Cloud controls understood.",
    "checkpoint": "Can you choose CASB for SaaS visibility?"
  },
  {
    "day": 38,
    "week": 6,
    "topic": "Endpoint security and MDM",
    "reading": "Study Guide Section 10",
    "video": "Professor Messer endpoint/mobile videos",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Review Windows Security settings; identify firewall, BitLocker, updates, Defender.",
    "flashcards": "EPP, EDR, HIDS, HIPS, MDM, MAM, BYOD, COPE",
    "practice": "40",
    "outcome": "Endpoint controls and mobile models clear.",
    "checkpoint": "Can you choose MDM vs MAM?"
  },
  {
    "day": 39,
    "week": 6,
    "topic": "Application security and OWASP",
    "reading": "Study Guide Section 11",
    "video": "Professor Messer app security videos + OWASP Top 10",
    "videoLink": "https://owasp.org/www-project-top-ten/",
    "lab": "Review OWASP Top 10; map SQLi/XSS/CSRF/SSRF to controls.",
    "flashcards": "input validation, output encoding, XSS, SQLi, CSRF, SSRF",
    "practice": "45",
    "outcome": "AppSec scenarios improve.",
    "checkpoint": "Can you choose input validation vs encoding?"
  },
  {
    "day": 40,
    "week": 6,
    "topic": "Vulnerability management",
    "reading": "Study Guide Section 8",
    "video": "Professor Messer vulnerability management videos",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Build vulnerability lifecycle: discover, prioritize, remediate, verify.",
    "flashcards": "CVE, CVSS, NVD, false positive, false negative, patching",
    "practice": "45",
    "outcome": "Know scan vs assessment vs pentest.",
    "checkpoint": "Can you prioritize critical vuln?"
  },
  {
    "day": 41,
    "week": 6,
    "topic": "Hardening and benchmarks",
    "reading": "Study Guide Section 9.1\u20139.2",
    "video": "Professor Messer hardening videos",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Create hardening checklist: disable defaults/services, patches, logs, secure protocols.",
    "flashcards": "CIS, STIG, benchmark, hardening, least functionality",
    "practice": "35",
    "outcome": "Secure configuration language ready.",
    "checkpoint": "Can you identify benchmark source?"
  },
  {
    "day": 42,
    "week": 6,
    "topic": "Week 6 review and quiz",
    "reading": "Review Sections 6, 8, 9, 10, 11",
    "video": "Mixed practice exam",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Take 100-question timed test; target 80%+.",
    "flashcards": "cloud endpoint app vuln hardening",
    "practice": "100",
    "outcome": "Exam score should be improving.",
    "checkpoint": "Below 80% = repair before Week 7."
  },
  {
    "day": 43,
    "week": 7,
    "topic": "Incident response lifecycle",
    "reading": "Study Guide 12.1\u201312.4",
    "video": "Professor Messer IR videos",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Build IR flow: preparation\u2192identification\u2192containment\u2192eradication\u2192recovery\u2192lessons learned.",
    "flashcards": "preparation, identification, containment, eradication, recovery",
    "practice": "40",
    "outcome": "IR sequence memorized.",
    "checkpoint": "Can you pick next best step?"
  },
  {
    "day": 44,
    "week": 7,
    "topic": "IR team, playbooks, exercises",
    "reading": "Study Guide 12.2\u201312.4",
    "video": "Professor Messer CIRT/playbook videos",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Tabletop: ransomware detected on workstation; list first 10 actions.",
    "flashcards": "CIRT, CSIRT, CERT, tabletop, walkthrough, simulation, playbook",
    "practice": "35",
    "outcome": "Know exercise types and team roles.",
    "checkpoint": "Can you distinguish tabletop vs simulation?"
  },
  {
    "day": 45,
    "week": 7,
    "topic": "Logging, SIEM, SOAR, UEBA, TIP",
    "reading": "Study Guide 12.5 + 12.8",
    "video": "Professor Messer SIEM/log videos",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Open Windows Event Viewer; identify Security/System/Application logs.",
    "flashcards": "SIEM, SOAR, UEBA, TIP, syslog, correlation, journald",
    "practice": "45",
    "outcome": "Log-source selection ready.",
    "checkpoint": "Can you choose SIEM vs SOAR?"
  },
  {
    "day": 46,
    "week": 7,
    "topic": "Digital forensics",
    "reading": "Study Guide 12.6\u201312.7",
    "video": "Professor Messer forensics videos",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Create chain-of-custody form and order-of-volatility list.",
    "flashcards": "chain of custody, legal hold, write blocker, volatility, image",
    "practice": "40",
    "outcome": "Forensics process clear.",
    "checkpoint": "Can you preserve evidence correctly?"
  },
  {
    "day": 47,
    "week": 7,
    "topic": "Network monitoring and packet capture",
    "reading": "Study Guide 9.5\u20139.6 + 12.8",
    "video": "Wireshark sample captures + Professor Messer IDS/IPS videos",
    "videoLink": "https://wiki.wireshark.org/SampleCaptures",
    "lab": "Open Wireshark sample capture; identify source/destination/protocol/port.",
    "flashcards": "IDS, IPS, TAP, SPAN, packet capture, NetFlow, WAF",
    "practice": "45",
    "outcome": "Monitoring tools understood.",
    "checkpoint": "Can you pick TAP vs SPAN?"
  },
  {
    "day": 48,
    "week": 7,
    "topic": "Malicious activity and web attacks",
    "reading": "Study Guide Section 13",
    "video": "Professor Messer attack indicator videos",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Make attack/control map: CSRF-token, HSTS-SSL strip, WAF-injection.",
    "flashcards": "CSRF, SSRF, clickjacking, SSL strip, injection, directory traversal",
    "practice": "50",
    "outcome": "Attack recognition stronger.",
    "checkpoint": "Can you classify web attacks from URL/log clues?"
  },
  {
    "day": 49,
    "week": 7,
    "topic": "Week 7 review and quiz",
    "reading": "Review Sections 12\u201313",
    "video": "Mixed incident/security operations quiz",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Take 110-question timed test.",
    "flashcards": "IR, forensics, SIEM, malware, attacks",
    "practice": "110",
    "outcome": "Security operations exam domain ready.",
    "checkpoint": "Target 82%+."
  },
  {
    "day": 50,
    "week": 8,
    "topic": "Governance and frameworks",
    "reading": "Study Guide Section 14",
    "video": "Professor Messer governance/risk videos",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Create table: NIST, ISO 27001, CIS, CSA, SOC 2/3, GDPR, HIPAA.",
    "flashcards": "NIST, ISO, CIS, CSA, SOC2, GDPR, HIPAA, GLBA",
    "practice": "40",
    "outcome": "Framework questions become manageable.",
    "checkpoint": "Can you match framework to use case?"
  },
  {
    "day": 51,
    "week": 8,
    "topic": "Risk management and BIA",
    "reading": "Study Guide Section 15",
    "video": "Professor Messer risk/BIA videos",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Practice SLE/ALE/ARO and RTO/RPO/MTD examples.",
    "flashcards": "SLE, ALE, ARO, RTO, RPO, MTD, BIA",
    "practice": "50",
    "outcome": "Risk math and BIA terms locked.",
    "checkpoint": "Can you distinguish RTO/RPO/MTD?"
  },
  {
    "day": 52,
    "week": 8,
    "topic": "Third-party risk and agreements",
    "reading": "Study Guide 15.4\u201315.5",
    "video": "Professor Messer third-party risk videos",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Table: SLA, MOU, MOA, BPA, ISA, NDA, vendor assessment.",
    "flashcards": "SLA, MOU, MOA, BPA, ISA, NDA, due diligence",
    "practice": "40",
    "outcome": "Contract/agreement terms memorized.",
    "checkpoint": "Can you pick correct agreement?"
  },
  {
    "day": 53,
    "week": 8,
    "topic": "Data protection and compliance",
    "reading": "Study Guide Section 16",
    "video": "Professor Messer data protection/privacy videos",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Create data lifecycle: create, classify, use, store, archive, destroy.",
    "flashcards": "DLP, data classification, sovereignty, retention, privacy, PII",
    "practice": "45",
    "outcome": "Data protection domain ready.",
    "checkpoint": "Can you choose control by data state?"
  },
  {
    "day": 54,
    "week": 8,
    "topic": "Full review exam 1",
    "reading": "Review all notes + wrong-answer log",
    "video": "No new videos unless repairing weak spot",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Take full 90-question timed exam + PBQs.",
    "flashcards": "all domains",
    "practice": "90",
    "outcome": "Establish final readiness baseline.",
    "checkpoint": "Score 80%+ or delay booking."
  },
  {
    "day": 55,
    "week": 8,
    "topic": "Weak-area repair day",
    "reading": "Only missed topics",
    "video": "Targeted videos only",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Redo every missed question and write why correct answer wins.",
    "flashcards": "missed terms only",
    "practice": "60",
    "outcome": "Fix leaks. No ego.",
    "checkpoint": "Can you explain every prior miss?"
  },
  {
    "day": 56,
    "week": 8,
    "topic": "Full review exam 2",
    "reading": "Review flashcards + comparison list",
    "video": "Study group replay optional",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Take full exam 2; target 85%+.",
    "flashcards": "all domains",
    "practice": "90",
    "outcome": "First possible exam-ready score.",
    "checkpoint": "If below 85%, continue repair."
  },
  {
    "day": 57,
    "week": 8,
    "topic": "PBQ bootcamp",
    "reading": "Review firewall, logs, matching, drag/drop architecture",
    "video": "PBQ practice source / Messer study groups",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Do PBQ drills: firewall rules, attack matching, IR order, network placement.",
    "flashcards": "PBQ, firewall rules, logs, architecture",
    "practice": "50",
    "outcome": "PBQ panic reduced.",
    "checkpoint": "Can you solve without overthinking?"
  },
  {
    "day": 58,
    "week": 8,
    "topic": "Final 10-day Day 1: Domains 1\u20132",
    "reading": "Exam objectives + Study Guide Sections 1\u20132",
    "video": "Professor Messer weak videos only",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Timed 50 questions on fundamentals/threats.",
    "flashcards": "controls, threats, attacks",
    "practice": "50",
    "outcome": "Patch foundation gaps.",
    "checkpoint": "Score 85% on these domains?"
  },
  {
    "day": 59,
    "week": 8,
    "topic": "Final 10-day Day 2: Crypto/IAM",
    "reading": "Study Guide Sections 3\u20134",
    "video": "Professor Messer crypto/IAM weak videos",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Timed 60 questions + PKI/IAM comparison drills.",
    "flashcards": "PKI, MFA, access models",
    "practice": "60",
    "outcome": "Crypto/IAM repair done.",
    "checkpoint": "Can you answer scenario questions fast?"
  },
  {
    "day": 60,
    "week": 8,
    "topic": "Final 10-day Day 3: Network/cloud",
    "reading": "Study Guide Sections 5\u20136",
    "video": "Professor Messer network/cloud weak videos",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Timed 60 questions + architecture PBQs.",
    "flashcards": "firewall, VPN, cloud, zero trust",
    "practice": "60",
    "outcome": "Architecture gaps fixed.",
    "checkpoint": "Can you draw secure design?"
  },
  {
    "day": 61,
    "week": 8,
    "topic": "Final 10-day Day 4: Vuln/app/endpoint",
    "reading": "Study Guide Sections 8\u201311",
    "video": "OWASP + endpoint notes",
    "videoLink": "https://owasp.org/www-project-top-ten/",
    "lab": "Timed 70 questions.",
    "flashcards": "CVSS, OWASP, EDR, MDM",
    "practice": "70",
    "outcome": "Tools and controls clear.",
    "checkpoint": "Can you choose correct tool?"
  },
  {
    "day": 62,
    "week": 8,
    "topic": "Final 10-day Day 5: IR/malicious activity",
    "reading": "Study Guide Sections 12\u201313",
    "video": "IR/SIEM videos if needed",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Timed 70 questions + log/attack PBQs.",
    "flashcards": "IR, SIEM, malware, injection",
    "practice": "70",
    "outcome": "Ops questions ready.",
    "checkpoint": "Can you pick next step in IR?"
  },
  {
    "day": 63,
    "week": 8,
    "topic": "Final 10-day Day 6: GRC/risk/data",
    "reading": "Study Guide Sections 14\u201316",
    "video": "Risk/GRC videos if needed",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Timed 70 questions + risk calculation drill.",
    "flashcards": "GRC, BIA, compliance, data",
    "practice": "70",
    "outcome": "GRC no longer weak.",
    "checkpoint": "Can you define all agreements?"
  },
  {
    "day": 64,
    "week": 8,
    "topic": "Final 10-day Day 7: Full exam 3",
    "reading": "Entire guide + objectives skim",
    "video": "No binge watching",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Full 90-question exam under time.",
    "flashcards": "all domains",
    "practice": "90",
    "outcome": "Second readiness measurement.",
    "checkpoint": "Need 85%+."
  },
  {
    "day": 65,
    "week": 8,
    "topic": "Final 10-day Day 8: Repair final misses",
    "reading": "Wrong-answer log only",
    "video": "Only videos for misses",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Rewrite top 25 missed concepts into flashcards.",
    "flashcards": "weak terms",
    "practice": "50",
    "outcome": "Final leaks sealed.",
    "checkpoint": "Can you explain misses from memory?"
  },
  {
    "day": 66,
    "week": 8,
    "topic": "Final 10-day Day 9: Full exam 4",
    "reading": "Light objective review",
    "video": "No new resources",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Full exam; target 85%+ again.",
    "flashcards": "all domains",
    "practice": "90",
    "outcome": "Booking-level readiness.",
    "checkpoint": "Two 85%+ scores?"
  },
  {
    "day": 67,
    "week": 8,
    "topic": "Final 10-day Day 10: Pre-exam day",
    "reading": "Cheat sheets, ports, acronyms, comparisons",
    "video": "No heavy videos",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Light 30 questions only, sleep, ID/check-in prep.",
    "flashcards": "ports, acronyms, comparisons",
    "practice": "30",
    "outcome": "Calm and ready.",
    "checkpoint": "If panic or <80%, reschedule."
  },
  {
    "day": 68,
    "week": 8,
    "topic": "Exam day execution",
    "reading": "No new content",
    "video": "None",
    "videoLink": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "lab": "Arrive/check-in early; PBQs first glance, flag hard, manage time.",
    "flashcards": "confidence, time management",
    "practice": "0",
    "outcome": "Pass attempt with discipline.",
    "checkpoint": "Do not change answers without reason."
  }
];
const weeks = [
  {
    "week": 1,
    "title": "Security fundamentals, CIA, controls, risk, governance basics",
    "focus": [
      "CIA/DAD triads",
      "Security controls",
      "NIST CSF",
      "Gap analysis",
      "Governance basics"
    ]
  },
  {
    "week": 2,
    "title": "Threat actors, attacks, social engineering, malware",
    "focus": [
      "Threat actors",
      "Attack vectors",
      "Social engineering",
      "Malware classes",
      "Indicators"
    ]
  },
  {
    "week": 3,
    "title": "Cryptography, PKI, certificates, secure protocols",
    "focus": [
      "Hashing",
      "Symmetric/asymmetric",
      "PKI",
      "TLS",
      "Secure protocols"
    ]
  },
  {
    "week": 4,
    "title": "IAM, authentication, authorization, access control, PAM",
    "focus": [
      "AAA",
      "MFA",
      "Biometrics",
      "RBAC/ABAC/MAC/DAC",
      "PAM/Kerberos"
    ]
  },
  {
    "week": 5,
    "title": "Network security, firewalls, VPNs, wireless, segmentation, zero trust",
    "focus": [
      "Firewalls",
      "VPN/IPsec",
      "Wireless",
      "Segmentation",
      "Zero trust"
    ]
  },
  {
    "week": 6,
    "title": "Cloud, endpoint, app security, vulnerability management",
    "focus": [
      "Cloud models",
      "Endpoint controls",
      "OWASP",
      "Vulnerability mgmt",
      "Hardening"
    ]
  },
  {
    "week": 7,
    "title": "Incident response, forensics, logging, SIEM, malicious activity",
    "focus": [
      "IR lifecycle",
      "Forensics",
      "Logs/SIEM",
      "Malware IOCs",
      "Web attacks"
    ]
  },
  {
    "week": 8,
    "title": "Risk, compliance, data protection, full review, weak-area repair",
    "focus": [
      "Risk/BIA",
      "Compliance",
      "Data protection",
      "Practice exams",
      "Final review"
    ]
  }
];
const resources = [
  {
    "type": "Official",
    "title": "CompTIA SY0-701 Exam Objectives",
    "url": "https://www.comptia.org/training/resources/exam-objectives",
    "why": "Use this as the exam contract. If it is not in the objectives, it is lower priority.",
    "week": "All weeks"
  },
  {
    "type": "Video",
    "title": "Professor Messer SY0-701 Course",
    "url": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus-course/",
    "why": "Free complete SY0-701 video course indexed by exam objective.",
    "week": "All weeks"
  },
  {
    "type": "Video",
    "title": "Professor Messer YouTube Playlist",
    "url": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    "why": "Fast daily video assignment source.",
    "week": "All weeks"
  },
  {
    "type": "Video",
    "title": "CertMike YouTube",
    "url": "https://www.youtube.com/@CertMike",
    "why": "Useful second explanation source when Messer is not enough.",
    "week": "Repair days"
  },
  {
    "type": "Video",
    "title": "PowerCert Animated Videos",
    "url": "https://www.youtube.com/@PowerCertAnimatedVideos",
    "why": "Good for visual networking and security fundamentals.",
    "week": "Weeks 1, 5"
  },
  {
    "type": "Labs",
    "title": "TryHackMe Cyber Security 101",
    "url": "https://tryhackme.com/path/outline/cybersecurity101",
    "why": "Beginner-friendly Linux, networking, Wireshark, Nmap, SOC, logs, DFIR practice.",
    "week": "Weeks 2, 5, 7"
  },
  {
    "type": "Labs",
    "title": "TryHackMe Network Security Module",
    "url": "https://tryhackme.com/module/network-security",
    "why": "Safe Nmap/network practice in a controlled environment.",
    "week": "Week 5"
  },
  {
    "type": "Labs",
    "title": "Wireshark Sample Captures",
    "url": "https://wiki.wireshark.org/SampleCaptures",
    "why": "Legal packet captures for packet analysis practice.",
    "week": "Week 7"
  },
  {
    "type": "AppSec",
    "title": "OWASP Top 10",
    "url": "https://owasp.org/www-project-top-ten/",
    "why": "Reference standard for common web application security risks.",
    "week": "Week 6"
  },
  {
    "type": "GitHub",
    "title": "V-Le SY0-701 Notes",
    "url": "https://github.com/V-Le/SY0-701_Notes",
    "why": "Security+ notes organized around Professor Messer/course objectives. Use for review, not as your only source.",
    "week": "All weeks"
  },
  {
    "type": "GitHub",
    "title": "WilsonVS CompTIA Security SY0-701",
    "url": "https://github.com/wilsonvs/CompTIA-Security-SY0-701",
    "why": "Exam-prep notes with Security Operations, IAM, GRC, risk, IR, vulnerability management.",
    "week": "All weeks"
  },
  {
    "type": "GitHub",
    "title": "HTLin Security+ Notes",
    "url": "https://github.com/htlin222/CompTIA-security-plus-notes",
    "why": "Large digital garden with concepts and practice-style explanations.",
    "week": "Review weeks"
  },
  {
    "type": "GitHub",
    "title": "OWASP Top10 Repo",
    "url": "https://github.com/OWASP/Top10",
    "why": "Official OWASP document repository; use for app security review.",
    "week": "Week 6"
  },
  {
    "type": "GitHub",
    "title": "Skrypnikau SOC IR Playbooks",
    "url": "https://github.com/skrypnikau/soc-ir-playbooks",
    "why": "Tier-1 SOC incident response playbooks. Good for IR thinking.",
    "week": "Week 7"
  },
  {
    "type": "GitHub",
    "title": "Codedilton TryHackMe Free Rooms",
    "url": "https://github.com/codedilton/tryhackme-free-rooms",
    "why": "Find free THM rooms; verify availability before spending time.",
    "week": "Labs"
  },
  {
    "type": "Practice",
    "title": "Professor Messer Study Groups",
    "url": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-study-group/",
    "why": "Free Q&A style practice; useful for PBQ/scenario thinking.",
    "week": "Weekly"
  },
  {
    "type": "Practice",
    "title": "Dion Training Practice Exams",
    "url": "https://www.diontraining.com/",
    "why": "Paid option for timed exam practice. Use only after learning the material.",
    "week": "Weeks 6\u20138"
  }
];
const memoryItems = [
  "Daily: 15 flashcards minimum; missed cards repeat next day.",
  "Daily: 5 acronyms from CompTIA objective list; define without looking.",
  "Daily: 5 port/protocol pairs until automatic: DNS 53, HTTP 80, HTTPS 443, SSH/SFTP 22, SMTP 25/587/465, IMAP 143/993, POP3 110/995, RDP 3389, LDAP 389/636, SNMP 161/162, NTP 123, Kerberos 88.",
  "Attack/control matching: write attack \u2192 best control every day. Example: SSL stripping \u2192 HSTS; injection \u2192 input validation/WAF; phishing \u2192 awareness/email gateway/MFA.",
  "Wrong answers: never just mark correct answer. Write why the other choices are weaker.",
  "Weekly: one-page cheat sheet only from memory, then correct it in another color."
];
const comparisons = [
  [
    "IDS vs IPS",
    "IDS alerts only; IPS can block/prevent traffic inline."
  ],
  [
    "EDR vs XDR vs SIEM vs SOAR",
    "EDR endpoint detection; XDR correlates across tools; SIEM centralizes logs/correlation; SOAR automates response."
  ],
  [
    "RBAC vs ABAC vs MAC vs DAC",
    "RBAC uses roles; ABAC uses attributes; MAC uses labels/clearance; DAC lets owner decide."
  ],
  [
    "Symmetric vs asymmetric",
    "Symmetric is fast same-key bulk encryption; asymmetric uses key pair for identity/key exchange."
  ],
  [
    "Hashing vs encryption",
    "Hashing is one-way integrity; encryption is reversible confidentiality with a key."
  ],
  [
    "Vulnerability scan vs penetration test",
    "Scan identifies known issues; pentest exploits to prove impact."
  ],
  [
    "Risk responses",
    "Accept keeps risk; mitigate reduces; transfer shifts; avoid stops activity."
  ],
  [
    "RTO vs RPO vs MTD",
    "RTO restore time; RPO acceptable data loss; MTD maximum tolerable downtime."
  ],
  [
    "Hot vs warm vs cold site",
    "Hot is near-immediate; warm needs data/config updates; cold is facility only/slow."
  ],
  [
    "WAF vs firewall vs NGFW",
    "WAF protects web apps; firewall filters network traffic; NGFW adds app/user/IPS features."
  ],
  [
    "SAST vs DAST",
    "SAST scans code before runtime; DAST tests running app behavior."
  ],
  [
    "False positive vs false negative",
    "False positive alerts on normal activity; false negative misses real abnormal activity."
  ]
];
const finalItems = [
  [
    "Readiness rule",
    "Book exam only after two separate 85%+ timed practice exams and PBQs are not scary."
  ],
  [
    "Reschedule rule",
    "Reschedule if final week full exams are below 80%, or if you cannot explain your wrong answers."
  ],
  [
    "Night before",
    "No heavy learning. Review ports, acronyms, comparison list, ID/check-in requirements, then sleep."
  ],
  [
    "Exam day",
    "Read PBQs, flag hard items, answer easy MCQs fast, return to flagged. Do not panic-submit."
  ],
  [
    "Wrong answer review",
    "For every miss: topic, why missed, correct explanation, review date, confidence score."
  ],
  [
    "PBQ focus",
    "Firewall rules, logs, architecture placement, matching attacks to controls, IR order, access control decisions."
  ]
];


const domainData = [
  {name:'Domain 1 — General Security Concepts', weeks:[1,2], keywords:['CIA','controls','risk','threat actors','social engineering'], resources:['CompTIA Objectives','Professor Messer','PowerCert']},
  {name:'Domain 2 — Threats, Vulnerabilities & Mitigations', weeks:[2,6,7], keywords:['malware','vulnerability','CVE/CVSS','hardening','Wireshark'], resources:['TryHackMe','Wireshark captures','GitHub notes']},
  {name:'Domain 3 — Security Architecture', weeks:[3,5,6], keywords:['crypto','PKI','network','cloud','zero trust','segmentation'], resources:['Messer videos','NIST Zero Trust','OWASP']},
  {name:'Domain 4 — Security Operations', weeks:[4,5,7], keywords:['IAM','logs','SIEM','IR','forensics','monitoring'], resources:['SOC playbooks','Windows Event Viewer','TryHackMe SOC']},
  {name:'Domain 5 — Security Program Management', weeks:[1,8], keywords:['governance','risk','compliance','data protection','BIA'], resources:['CompTIA objectives','study guide','practice exams']}
];
let activeResourceType = 'All';

const STORE_KEY = 'secplus701ProgressV1';
let state = loadState();
function loadState(){try{return JSON.parse(localStorage.getItem(STORE_KEY)) || {days:{}, weaknesses:[], scores:[]};}catch(e){return {days:{}, weaknesses:[], scores:[]};}}
function saveState(){localStorage.setItem(STORE_KEY, JSON.stringify(state));}
function dayState(day){return state.days[day] || {read:false,video:false,lab:false,quiz:false,confidence:1};}
function pct(n,d){return d?Math.round((n/d)*100):0;}
function render(){renderFilters();renderWeeks();renderDays();renderDashboard();renderHome();renderDomains();renderWeaknesses();renderScores();renderResourceFilters();renderResources();renderMemory();renderFinal();}
function renderFilters(){const wf=document.getElementById('weekFilter'); if(wf.options.length===1){weeks.forEach(w=>{let o=document.createElement('option');o.value=w.week;o.textContent=`Week ${w.week}`;wf.appendChild(o);});}}
function renderWeeks(){const grid=document.getElementById('weekGrid');grid.innerHTML='';weeks.forEach(w=>{const days=courseData.filter(d=>d.week===w.week);const done=days.filter(d=>isDayDone(d.day)).length;const card=document.createElement('div');card.className='week-card';card.innerHTML=`<span class="pill">Week ${w.week}</span><h3>${w.title}</h3><p>${w.focus.join(' • ')}</p><div class="progress-mini"><div style="width:${pct(done,days.length)}%"></div></div><small>${done}/${days.length} days complete</small>`;card.onclick=()=>{document.getElementById('weekFilter').value=w.week;renderDays();};grid.appendChild(card);});}
function isDayDone(day){const s=dayState(day);return s.read&&s.video&&s.lab&&s.quiz;}
function renderDays(){const list=document.getElementById('dayList');const week=document.getElementById('weekFilter').value;const status=document.getElementById('statusFilter').value;const q=document.getElementById('searchBox').value.toLowerCase();list.innerHTML='';courseData.filter(d=>week==='all'||String(d.week)===String(week)).filter(d=>status==='all'||(status==='done'?isDayDone(d.day):!isDayDone(d.day))).filter(d=>JSON.stringify(d).toLowerCase().includes(q)).forEach(d=>{const s=dayState(d.day);const card=document.createElement('article');card.className='day-card '+(isDayDone(d.day)?'done':'');card.innerHTML=`
  <div class="day-head"><div><span class="pill">Day ${d.day} • Week ${d.week}</span><h3>${d.topic}</h3></div><span class="pill">${d.practice} Q</span></div>
  <div class="task-grid">
    <div class="task"><strong>Reading</strong><span>${d.reading}</span></div>
    <div class="task"><strong>Video</strong><span>${d.video} <a href="${d.videoLink}" target="_blank" rel="noopener">Open</a></span></div>
    <div class="task"><strong>Lab / hands-on</strong><span>${d.lab}</span></div>
    <div class="task"><strong>Flashcards</strong><span>${d.flashcards}</span></div>
    <div class="task"><strong>Expected outcome</strong><span>${d.outcome}</span></div>
    <div class="task"><strong>Confidence checkpoint</strong><span>${d.checkpoint}</span></div>
  </div>
  <div class="check-row">
    ${['read','video','lab','quiz'].map(k=>`<label><input type="checkbox" data-day="${d.day}" data-k="${k}" ${s[k]?'checked':''}> ${k}</label>`).join('')}
  </div>
  <div class="confidence"><label>Confidence: <strong>${s.confidence}/5</strong></label><input type="range" min="1" max="5" value="${s.confidence}" data-conf="${d.day}"></div>`;list.appendChild(card);});
  list.querySelectorAll('input[type="checkbox"]').forEach(cb=>cb.onchange=e=>{const day=e.target.dataset.day,k=e.target.dataset.k;state.days[day]=dayState(day);state.days[day][k]=e.target.checked;saveState();render();});
  list.querySelectorAll('input[type="range"]').forEach(r=>r.oninput=e=>{const day=e.target.dataset.conf;state.days[day]=dayState(day);state.days[day].confidence=Number(e.target.value);saveState();render();});
}
function renderDashboard(){const total=courseData.length;const done=courseData.filter(d=>isDayDone(d.day)).length;const labs=courseData.filter(d=>dayState(d.day).lab).length;const qdone=courseData.reduce((sum,d)=>sum+(dayState(d.day).quiz?Number(d.practice):0),0);const avg=state.scores.length?Math.round(state.scores.reduce((a,b)=>a+Number(b.score),0)/state.scores.length):0;document.getElementById('daysDone').textContent=`${done}/${total}`;document.getElementById('labsDone').textContent=`${labs}/${total}`;document.getElementById('questionsDone').textContent=qdone;document.getElementById('avgScore').textContent=avg+'%';let ready='Not ready';if(avg>=85&&done>=50)ready='Book exam';else if(avg>=80)ready='Close';else if(avg>=70)ready='Building';document.getElementById('readinessStatus').textContent=ready;const overall=pct(done,total);document.getElementById('overallPct').textContent=overall+'%';document.getElementById('scoreRing').style.background=`conic-gradient(var(--accent) ${overall*3.6}deg,#23324a 0deg)`;}
function getNextDay(){return courseData.find(d=>!isDayDone(d.day)) || courseData[courseData.length-1];}
function scrollToId(id){document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});}
function renderHome(){const next=getNextDay();const box=document.getElementById('nextCard');if(!box)return;const s=dayState(next.day);box.innerHTML=`<div class="next-main"><span class="pill">Day ${next.day} • Week ${next.week}</span><h3>${esc(next.topic)}</h3><p><strong>Read:</strong> ${esc(next.reading)}</p><p><strong>Lab:</strong> ${esc(next.lab)}</p><p><strong>Target:</strong> ${next.practice} practice questions • confidence ${s.confidence}/5</p><button onclick="document.getElementById('weekFilter').value='${next.week}';renderDays();scrollToId('daily');">Open today’s plan</button></div><div class="next-actions"><div class="mini-task"><strong>Video</strong><span>${esc(next.video)}</span></div><div class="mini-task"><strong>Flashcards</strong><span>${esc(next.flashcards)}</span></div><div class="mini-task"><strong>Checkpoint</strong><span>${esc(next.checkpoint)}</span></div></div>`;const q=document.getElementById('quickJumpGrid');if(q){q.innerHTML=`<a class="quick-card" href="#weekly"><strong>Weekly roadmap</strong><small>Pick a week fast</small></a><a class="quick-card" href="#domains"><strong>Domain repair</strong><small>Target weak exam areas</small></a><a class="quick-card" href="#practice"><strong>Log wrong answer</strong><small>Fix mistakes, not ego</small></a><a class="quick-card" href="#resources"><strong>Resource library</strong><small>Videos, labs, GitHub</small></a>`;}}
function renderDomains(){const grid=document.getElementById('domainGrid');if(!grid)return;grid.innerHTML='';domainData.forEach(d=>{const daySet=courseData.filter(x=>d.weeks.includes(x.week));const done=daySet.filter(x=>isDayDone(x.day)).length;const card=document.createElement('article');card.className='domain-card';card.innerHTML=`<h3>${d.name}</h3><p><strong>Weeks:</strong> ${d.weeks.join(', ')}</p><p><strong>Focus:</strong> ${d.keywords.join(' • ')}</p><p><strong>Resources:</strong> ${d.resources.join(' • ')}</p><div class="progress-mini"><div style="width:${pct(done,daySet.length)}%"></div></div><small>${done}/${daySet.length} related days complete</small><div class="domain-actions">${d.weeks.map(w=>`<button data-weekjump="${w}">Week ${w}</button>`).join('')}<button data-domainsearch="${d.keywords[0]}">Search topic</button></div>`;grid.appendChild(card);});grid.querySelectorAll('[data-weekjump]').forEach(b=>b.onclick=e=>{document.getElementById('weekFilter').value=e.target.dataset.weekjump;renderDays();scrollToId('daily');});grid.querySelectorAll('[data-domainsearch]').forEach(b=>b.onclick=e=>{document.getElementById('searchBox').value=e.target.dataset.domainsearch;document.getElementById('weekFilter').value='all';renderDays();scrollToId('daily');});}
function renderWeaknesses(){const tb=document.getElementById('weaknessTable');tb.innerHTML='';state.weaknesses.forEach((w,i)=>{const tr=document.createElement('tr');tr.innerHTML=`<td>${esc(w.wrong)}</td><td>${esc(w.topic)}</td><td>${esc(w.why)}</td><td>${esc(w.fix)}</td><td>${esc(w.date)}</td><td>${w.conf}/5</td><td><button class="danger" data-delw="${i}">X</button></td>`;tb.appendChild(tr);});tb.querySelectorAll('[data-delw]').forEach(b=>b.onclick=e=>{state.weaknesses.splice(Number(e.target.dataset.delw),1);saveState();renderWeaknesses();});}
function renderScores(){const box=document.getElementById('scoreBars');box.innerHTML='';state.scores.forEach((s,i)=>{const div=document.createElement('div');div.className='bar';div.innerHTML=`<div class="bar-meta"><strong>${esc(s.label)}</strong><span>${s.score}% • ${esc(s.date)} <button class="danger" data-dels="${i}">X</button></span></div><div class="bar-fill" style="width:${Math.min(100,Number(s.score))}%"></div>`;box.appendChild(div);});box.querySelectorAll('[data-dels]').forEach(b=>b.onclick=e=>{state.scores.splice(Number(e.target.dataset.dels),1);saveState();render();});}
function renderResourceFilters(){const wrap=document.getElementById('resourceTypeFilter');if(!wrap)return;const types=['All',...Array.from(new Set(resources.map(r=>r.type)))];wrap.innerHTML=types.map(t=>`<button class="chip ${t===activeResourceType?'active':''}" data-rtype="${t}">${t}</button>`).join('');wrap.querySelectorAll('[data-rtype]').forEach(b=>b.onclick=e=>{activeResourceType=e.target.dataset.rtype;renderResourceFilters();renderResources();});const search=document.getElementById('resourceSearch');if(search&&!search.dataset.bound){search.dataset.bound='1';search.oninput=renderResources;}}
function renderResources(){const grid=document.getElementById('resourceGrid');if(!grid)return;const q=(document.getElementById('resourceSearch')?.value||'').toLowerCase();grid.innerHTML='';resources.filter(r=>activeResourceType==='All'||r.type===activeResourceType).filter(r=>JSON.stringify(r).toLowerCase().includes(q)).forEach(r=>{const div=document.createElement('div');div.className='resource';div.innerHTML=`<h3>${r.title}</h3><p>${r.why}</p><span class="tag">${r.type}</span><span class="tag">${r.week}</span><p><a href="${r.url}" target="_blank" rel="noopener">Open resource</a></p>`;grid.appendChild(div);});if(!grid.children.length){grid.innerHTML='<p class="muted">No resources match this filter.</p>';}}
function renderMemory(){const ul=document.getElementById('memoryChecklist');ul.innerHTML='';memoryItems.forEach((m,i)=>{const checked=localStorage.getItem('mem'+i)==='1';const li=document.createElement('li');li.innerHTML=`<label><input type="checkbox" ${checked?'checked':''} data-mem="${i}"> ${m}</label>`;ul.appendChild(li);});ul.querySelectorAll('[data-mem]').forEach(cb=>cb.onchange=e=>localStorage.setItem('mem'+e.target.dataset.mem,e.target.checked?'1':'0'));const cl=document.getElementById('compareList');cl.innerHTML='';comparisons.forEach(c=>{const div=document.createElement('div');div.className='compare-item';div.innerHTML=`<strong>${c[0]}</strong><p>${c[1]}</p>`;cl.appendChild(div);});}
function renderFinal(){const grid=document.getElementById('finalChecklist');grid.innerHTML='';finalItems.forEach((f,i)=>{const checked=localStorage.getItem('final'+i)==='1';const div=document.createElement('div');div.className='final-card';div.innerHTML=`<label><input type="checkbox" ${checked?'checked':''} data-final="${i}"> <strong>${f[0]}</strong></label><p>${f[1]}</p>`;grid.appendChild(div);});grid.querySelectorAll('[data-final]').forEach(cb=>cb.onchange=e=>localStorage.setItem('final'+e.target.dataset.final,e.target.checked?'1':'0'));}
function esc(str){return String(str).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));}
document.getElementById('weekFilter').onchange=renderDays;document.getElementById('statusFilter').onchange=renderDays;document.getElementById('searchBox').oninput=renderDays;
document.getElementById('weaknessForm').onsubmit=e=>{e.preventDefault();state.weaknesses.push({wrong:wrongAnswer.value,topic:missedTopic.value,why:whyMissed.value,fix:correctExplanation.value,date:reviewDate.value,conf:confidenceScore.value});e.target.reset();saveState();renderWeaknesses();};
document.getElementById('scoreForm').onsubmit=e=>{e.preventDefault();state.scores.push({label:scoreLabel.value,score:Number(scoreValue.value),date:scoreDate.value});e.target.reset();saveState();render();};
document.getElementById('resetBtn').onclick=()=>{if(confirm('Delete all saved progress?')){localStorage.removeItem(STORE_KEY);Object.keys(localStorage).filter(k=>k.startsWith('mem')||k.startsWith('final')).forEach(k=>localStorage.removeItem(k));state=loadState();render();}};
document.getElementById('exportBtn').onclick=()=>{const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='secplus-701-progress.json';a.click();};
document.getElementById('importInput').onchange=e=>{const file=e.target.files[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{try{state=JSON.parse(reader.result);saveState();render();alert('Progress imported.');}catch(err){alert('Invalid JSON.');}};reader.readAsText(file);};
render();
