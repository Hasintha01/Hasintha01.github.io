# Portfolio Monitoring

> Demonstrates production observability practices using GitHub Actions and open-source tools.

## What's Monitored

| Metric | Frequency | Storage |
|--------|-----------|---------|
| Site Availability | Every 6 hours | `.monitoring/uptime.log` |
| Response Time | Every 6 hours | `.monitoring/uptime.log` |
| Lighthouse Scores | Weekly | `.monitoring/performance.log` |
| Web Vitals (LCP/FID/CLS) | Real-time | Browser only |
| Broken Links | Weekly | Workflow logs |
| Test Coverage | Every PR | Workflow artifacts |

## Implementation

### Uptime Monitoring
**Location:** `.github/workflows/uptime-monitor.yml`  
**Tracks:** HTTP status, response time, uptime percentage  
**Alerts:** Creates GitHub Issue if site is down

### Performance Monitoring
**Location:** `.github/workflows/performance-report.yml`  
**Tracks:** Lighthouse scores (Performance, Accessibility, Best Practices, SEO)  
**Reports:** `.monitoring/performance.log` and `.monitoring/weekly-report.md`

### Web Vitals (RUM)
**Location:** `public/web-vitals.js`  
**Tracks:** LCP, FID, CLS, FCP  
**Privacy:** No personal data collected

### CI/CD Quality Gates
- Tests run on every PR
- Lighthouse audits on PRs
- Weekly link validation

## View Data

```powershell
# Uptime history (timestamp,status,http_code,response_time)
Get-Content .monitoring/uptime.log

# Performance history (date,performance,accessibility,best_practices,seo)
Get-Content .monitoring/performance.log

# Weekly report
Get-Content .monitoring/weekly-report.md
```

## Skills Demonstrated

- GitHub Actions automation
- Observability implementation (uptime, performance, RUM)
- CI/CD quality gates
- Automated alerting
- Infrastructure as Code
- Cost optimization (100% free tooling)
