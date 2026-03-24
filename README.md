# clawhub-scorer

Web app for simulating [ClawHub](https://clawhub.com) search ranking for your skill.

**Live:** https://clawhub-scorer.wulong.dev

## Features

- **Score** — Upload a skill ZIP (or download from ClawHub by slug), enter a search query, get full scoring breakdown: vector similarity + lexical boost + popularity boost + optimization suggestions
- **Search** — Search ClawHub and see ranked results with scores

## API

Powered by [api.wulong.dev](https://api.wulong.dev):

| Endpoint | Description |
|----------|-------------|
| `GET /clawhub-skill-score/v1/search?q=xxx` | Search ClawHub skills |
| `GET /clawhub-skill-score/v1/detail?slug=xxx` | Skill detail (displayName, downloads, etc.) |
| `GET /clawhub-skill-score/v1/download?slug=xxx` | Download skill as ZIP |
| `POST /clawhub-skill-score/v1/score` | Score a skill against a search query |

## License

MIT
