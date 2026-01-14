# Hasintha Pasindu — Portfolio

[![Deploy Status](https://github.com/Hasintha01/Hasintha01.github.io/workflows/Deploy%20Astro%20site%20to%20Pages/badge.svg)](https://github.com/Hasintha01/Hasintha01.github.io/actions/workflows/deploy.yml)
[![Tests](https://github.com/Hasintha01/Hasintha01.github.io/workflows/Run%20Tests/badge.svg)](https://github.com/Hasintha01/Hasintha01.github.io/actions/workflows/test.yml)
[![Lighthouse CI](https://github.com/Hasintha01/Hasintha01.github.io/workflows/Lighthouse%20CI/badge.svg)](https://github.com/Hasintha01/Hasintha01.github.io/actions/workflows/lighthouse.yml)
[![Link Check](https://github.com/Hasintha01/Hasintha01.github.io/workflows/Link%20Checker/badge.svg)](https://github.com/Hasintha01/Hasintha01.github.io/actions/workflows/link-checker.yml)

> **Infrastructure & Automation Portfolio** — Building reliable systems through automation, monitoring, and cloud technologies.

**Live Site:** [hasinthapasindu.me](https://hasinthapasindu.me)

**Notable Feature:** This portfolio practices what it preaches—it includes [enterprise-grade monitoring infrastructure](MONITORING.md) as a working demonstration of DevOps principles.

---

## Features

- **Blazing Fast** - Built with Astro for optimal performance
- **Neo-Brutalist Design** - Bold, modern, and eye-catching
- **Fully Responsive** - Optimized for all devices
- **Accessible** - WCAG compliant with semantic HTML
- **SEO Optimized** - Meta tags, sitemap, and schema markup
- **Type-Safe** - TypeScript for reliability
- **Well Tested** - 51 unit tests with Vitest
- **Monitored** - Comprehensive uptime and performance tracking

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | [Astro](https://astro.build) + React |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) |
| **Language** | TypeScript |
| **Testing** | Vitest + Testing Library |
| **Deployment** | GitHub Pages |
| **CI/CD** | GitHub Actions |
| **Monitoring** | Lighthouse CI, Web Vitals, Custom Uptime Monitor |
| **Analytics** | Plausible Analytics (Privacy-friendly) |

---

## Monitoring

This portfolio includes automated monitoring with uptime tracking, performance audits, and real user metrics. See [MONITORING.md](MONITORING.md) for details.

---

## Getting Started

### Prerequisites
- Node.js 20+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Hasintha01/Hasintha01.github.io.git
cd Hasintha01.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run test` | Run unit tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run check` | TypeScript type checking |

---

## Project Structure

```
.
├── .github/
│   └── workflows/         # CI/CD pipelines
│       ├── deploy.yml     # Production deployment
│       ├── test.yml       # Test suite
│       ├── lighthouse.yml # Performance audits
│       ├── link-checker.yml # Link validation
│       ├── uptime-monitor.yml # Uptime tracking
│       └── performance-report.yml # Weekly reports
├── .monitoring/           # Monitoring data storage
├── public/                # Static assets
│   ├── web-vitals.js     # Performance tracking
│   └── images/           # Images
├── src/
│   ├── components/       # React components
│   ├── data/            # Portfolio content (JSON)
│   ├── pages/           # Astro pages
│   ├── styles/          # Global CSS
│   ├── test/            # Test files
│   └── types/           # TypeScript types
├── MONITORING.md         # Monitoring setup guide
└── package.json
```

---

## Testing

The project includes comprehensive test coverage:

```bash
# Run all tests
npm run test

# Watch mode for development
npm run test:watch
```

**Test Coverage:**
- 51 unit tests
- Component rendering
- Data validation
- Link integrity
- Type safety

---

## Deployment

The site automatically deploys to GitHub Pages on every push to `main`:

1. **Build** - Astro builds static site
2. **Test** - Runs test suite
3. **Audit** - Lighthouse performance check
4. **Deploy** - Publishes to GitHub Pages

**Deployment URL:** [hasinthapasindu.me](https://hasinthapasindu.me)

---

## Performance

| Metric | Score | Target |
|--------|-------|--------|
| Performance | 84% | ≥75% |
| Accessibility | 95% | ≥85% |
| Best Practices | 88% | ≥75% |
| SEO | 92% | ≥85% |

View detailed reports: [Performance Report](.monitoring/performance-report.md) | [Uptime Report](.monitoring/uptime-report.md)

---

## License

This project is open source and available under the MIT License.

---

## Contact

**Hasintha Pasindu**
- Website: [hasinthapasindu.me](https://hasinthapasindu.me/)
- Email: Hasinthapasindu20@gmail.com
- LinkedIn: [linkedin.com/in/hasintha-pasindu](https://www.linkedin.com/in/hasintha-pasindu/)
- GitHub: [@Hasintha01](https://github.com/Hasintha01)

---

**Built by Hasintha Pasindu**

*Last Updated: January 14, 2026*
