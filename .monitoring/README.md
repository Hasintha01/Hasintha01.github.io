# Monitoring Data

This directory stores monitoring data collected by GitHub Actions workflows.

## Files

- `uptime.log` - Site uptime and response time history (updated every 6 hours)
- `performance.log` - Weekly Lighthouse performance scores
- `weekly-report.md` - Latest weekly performance report

## Format

### uptime.log
```
timestamp,status,http_code,response_time_ms
2025-12-04 12:00:00 UTC,up,200,245
```

### performance.log
```
date,performance,accessibility,best_practices,seo
2025-12-04,84,95,88,92
```

These files are automatically maintained by the monitoring workflows.
