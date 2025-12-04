# Monitoring Setup Guide

This portfolio includes comprehensive free monitoring tools to track uptime, performance, and user experience.

## Built-in Monitoring

### 1. **Uptime Monitoring**
- **Location:** `.github/workflows/uptime-monitor.yml`
- **Frequency:** Every 6 hours
- **What it tracks:**
  - Site availability (HTTP status codes)
  - Response time
  - Uptime percentage
- **Data stored:** `.monitoring/uptime.log`
- **Alerts:** Creates GitHub Issue if site is down

### 2. **Performance Monitoring**
- **Location:** `.github/workflows/performance-report.yml`
- **Frequency:** Weekly (Mondays at 9 AM UTC)
- **What it tracks:**
  - Lighthouse scores (Performance, Accessibility, Best Practices, SEO)
  - Performance trends over time
- **Data stored:** `.monitoring/performance.log`
- **Reports:** `.monitoring/weekly-report.md`

### 3. **Web Vitals (Real User Monitoring)**
- **Location:** `public/web-vitals.js`
- **What it tracks:**
  - LCP (Largest Contentful Paint)
  - FID (First Input Delay)
  - CLS (Cumulative Layout Shift)
  - FCP (First Contentful Paint)
- **Privacy:** No personal data collected
- **Integration:** Ready for Google Analytics

### 4. **CI/CD Quality Checks**
- **Test Workflow:** Runs on every PR
- **Lighthouse CI:** Performance audits on PRs
- **Link Checker:** Weekly link validation

---

## Free External Monitoring (Optional)

### Google Analytics 4 (Recommended)

**Why:** Free forever, comprehensive analytics, Web Vitals integration

**Setup:**
1. Go to [analytics.google.com](https://analytics.google.com/)
2. Create account → Add property
3. Get Measurement ID (G-XXXXXXXXXX)
4. Add to `index.astro` in `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Features:**
- Page views, visitors, sessions
- Geographic data
- Traffic sources
- Real-time monitoring
- Web Vitals tracking (works with our web-vitals.js)

---

### UptimeRobot (External Uptime Monitoring)

**Why:** More frequent checks (1-min interval), email/SMS alerts

**Setup:**
1. Go to [uptimerobot.com](https://uptimerobot.com/)
2. Sign up (free: 50 monitors)
3. Add Monitor:
   - **Type:** HTTP(s)
   - **URL:** `https://hasintha01.github.io`
   - **Interval:** 5 minutes
4. Configure alerts (Email/Webhook)

**Features:**
- 99.99% uptime SLA monitoring
- Email alerts
- Public status page
- Response time tracking
- SSL certificate monitoring

---

### Plausible Analytics (Privacy-Focused Alternative)

**Why:** GDPR compliant, no cookies, lightweight

**Setup:**
1. Go to [plausible.io](https://plausible.io/)
2. Free for personal use / $9/month for commercial
3. Add script to `index.astro`:

```html
<script defer data-domain="hasintha01.github.io" src="https://plausible.io/js/script.js"></script>
```

**Features:**
- Simple, beautiful dashboard
- No cookies (no consent banner needed)
- Lightweight (< 1KB)
- Privacy-friendly

---

## View Monitoring Data

### Uptime History
```bash
cat .monitoring/uptime.log
```

**Format:** `timestamp,status,http_code,response_time`

### Performance History
```bash
cat .monitoring/performance.log
```

**Format:** `date,performance,accessibility,best_practices,seo`

### Weekly Report
```bash
cat .monitoring/weekly-report.md
```

---

## Alerts & Notifications

### GitHub Issues (Built-in)
- Created automatically when site is down
- Labels: `bug`, `monitoring`, `urgent`

### Email Alerts (External)
- Setup UptimeRobot for email alerts
- Connect GitHub Actions to email via secrets

### Slack/Discord Webhooks
Add to workflow files:
```yaml
- name: Send alert to Slack
  if: failure()
  run: |
    curl -X POST -H 'Content-type: application/json' \
    --data '{"text":"Site monitoring alert!"}' \
    ${{ secrets.SLACK_WEBHOOK_URL }}
```

---

## Status Badges

Add to your README:

```markdown
![Uptime](https://img.shields.io/badge/uptime-99.9%25-brightgreen)
![Performance](https://img.shields.io/badge/performance-84%25-yellow)
![Build](https://github.com/Hasintha01/Hasintha01.github.io/workflows/Deploy%20Astro%20site%20to%20Pages/badge.svg)
```

---

## Monitoring Dashboard (Future Enhancement)

You can create a simple monitoring dashboard page:
- Display uptime graph
- Show performance trends
- Real-time Web Vitals
- Build with Chart.js or D3.js

---

## Troubleshooting

### Uptime monitor not running?
Check `.github/workflows/uptime-monitor.yml` is enabled in repository settings.

### Performance report missing?
Run manually: Actions → Performance Report → Run workflow

### Web Vitals not logging?
Open browser console (F12) to see metrics in development.

---

## Resources

- [Web Vitals Documentation](https://web.dev/vitals/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [GitHub Actions Monitoring](https://docs.github.com/en/actions)
- [UptimeRobot Docs](https://uptimerobot.com/api/)

---

**Last Updated:** December 4, 2025
