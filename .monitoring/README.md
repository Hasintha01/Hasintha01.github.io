# Monitoring Data

This directory stores monitoring data and reports collected by GitHub Actions workflows.

## Files

### Reports
- **[performance-report.md](performance-report.md)** - Latest weekly performance report with visualizations
- **[uptime-report.md](uptime-report.md)** - Current uptime status and statistics

### Raw Data
- **uptime.log** - Site uptime and response time history (updated every 6 hours)
- **performance.log** - Weekly Lighthouse performance scores (CSV format)

## Quick View

### Latest Performance Scores

| Category | Score | Status |
|----------|-------|--------|
| Performance | 84% | PASS |
| Accessibility | 95% | PASS |
| Best Practices | 88% | PASS |
| SEO | 92% | PASS |

### Current Uptime
- **Status:** UP
- **Last Check:** Auto-updated every 6 hours
- **Historical Uptime:** See uptime-report.md

## Data Formats

### uptime.log (CSV)
```
timestamp,status,http_code,response_time_ms
2025-12-04 12:00:00 UTC,up,200,245
```

### performance.log (CSV)
```
date,performance,accessibility,best_practices,seo
2025-12-04,84,95,88,92
```

These files are automatically maintained by the monitoring workflows.

For detailed visualizations and insights, see:
- [Performance Report](performance-report.md)
- [Uptime Report](uptime-report.md)
