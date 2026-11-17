# google-calendar-sync

A testable conflict-resolution core for two-way calendar synchronization. Google OAuth and API adapter are intentionally not wired.

**Status:** Independent portfolio demonstration; not code from an employer or client. Not production-ready.

## Run

```bash
npm install
npm start
```

Run tests using `npm test`. Copy `.env.example` to `.env` if needed; environment variables must be exported or loaded by your runtime.

## Notes

This repository shows a narrow, working slice of the domain. Security, persistence, error handling, observability, and deployment require further hardening before production use.

## Endpoint
`POST /reconcile` with `{ "local": {"id":"1","updatedAt":"2026-01-01T00:00:00Z"}, "remote": {"id":"1","updatedAt":"2026-01-02T00:00:00Z"}}`.

## Scope
This demonstrates **conflict resolution only**. It does not yet authenticate with Google, sync Google Calendar, refresh tokens, handle deletions, or run scheduled jobs. Those are future milestones.
