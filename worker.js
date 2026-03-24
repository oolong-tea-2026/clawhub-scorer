const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>ClawHub Skill Scorer</title>
<style>
:root {
  --bg: #0d1117;
  --surface: #161b22;
  --border: #30363d;
  --text: #e6edf3;
  --text-muted: #8b949e;
  --accent: #58a6ff;
  --accent-hover: #79c0ff;
  --green: #3fb950;
  --yellow: #d29922;
  --orange: #db6d28;
  --red: #f85149;
  --purple: #bc8cff;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  min-height: 100vh;
}

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

header {
  text-align: center;
  margin-bottom: 2.5rem;
}

header h1 {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

header h1 span { color: var(--accent); }

header p {
  color: var(--text-muted);
  font-size: 0.95rem;
}

/* Tabs */
.tabs {
  display: flex;
  gap: 0;
  border-bottom: 1px solid var(--border);
  margin-bottom: 2rem;
}

.tab {
  padding: 0.75rem 1.5rem;
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 0.95rem;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all 0.15s;
}

.tab:hover { color: var(--text); }
.tab.active { color: var(--accent); border-bottom-color: var(--accent); }

.tab-panel { display: none; }
.tab-panel.active { display: block; }

/* Form elements */
.form-group { margin-bottom: 1.25rem; }

label {
  display: block;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-muted);
  margin-bottom: 0.4rem;
}

input[type="text"],
input[type="number"] {
  width: 100%;
  padding: 0.6rem 0.8rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text);
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.15s;
}

input:focus { border-color: var(--accent); }

input[type="file"] {
  width: 100%;
  padding: 0.6rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text);
  font-size: 0.9rem;
  cursor: pointer;
}

input[type="file"]::file-selector-button {
  background: var(--border);
  border: none;
  color: var(--text);
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  margin-right: 0.8rem;
  cursor: pointer;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.row-3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.5rem;
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s;
}

.btn:hover { background: var(--accent-hover); }
.btn:disabled { opacity: 0.5; cursor: not-allowed; }

.btn-secondary {
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text);
}

.btn-secondary:hover { border-color: var(--text-muted); }

/* Results */
.result-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 1.5rem;
}

.score-hero {
  text-align: center;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--border);
  margin-bottom: 1.25rem;
}

.score-hero .score {
  font-size: 3rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

.score-hero .verdict {
  font-size: 1rem;
  margin-top: 0.3rem;
}

.breakdown {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.breakdown-item {
  text-align: center;
  padding: 1rem;
  background: var(--bg);
  border-radius: 6px;
}

.breakdown-item .value {
  font-size: 1.5rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}

.breakdown-item .label {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 0.25rem;
}

.detail-section {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
}

.detail-section h3 {
  font-size: 0.85rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.75rem;
}

.detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0;
  font-size: 0.9rem;
}

.detail-row .key { color: var(--text-muted); }

.badge {
  display: inline-block;
  padding: 0.15rem 0.5rem;
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: 500;
}

.badge-green { background: rgba(63,185,80,0.15); color: var(--green); }
.badge-yellow { background: rgba(210,153,34,0.15); color: var(--yellow); }
.badge-orange { background: rgba(219,109,40,0.15); color: var(--orange); }
.badge-red { background: rgba(248,81,73,0.15); color: var(--red); }

.suggestions {
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(210,153,34,0.08);
  border: 1px solid rgba(210,153,34,0.2);
  border-radius: 6px;
}

.suggestions h4 {
  font-size: 0.85rem;
  color: var(--yellow);
  margin-bottom: 0.5rem;
}

.suggestions ul {
  list-style: none;
  font-size: 0.9rem;
}

.suggestions li::before {
  content: "💡 ";
}

.suggestions li + li { margin-top: 0.3rem; }

/* Search results */
.search-results { margin-top: 1.5rem; }

.search-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  margin-bottom: 0.75rem;
  transition: border-color 0.15s;
}

.search-item:hover { border-color: var(--text-muted); }

.search-rank {
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  background: var(--bg);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.search-info { flex: 1; min-width: 0; }
.search-info h4 { font-size: 0.95rem; font-weight: 600; }
.search-info .slug { font-size: 0.8rem; color: var(--accent); font-family: monospace; }
.search-info .summary { font-size: 0.85rem; color: var(--text-muted); margin-top: 0.3rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.search-score { flex-shrink: 0; font-size: 1.1rem; font-weight: 600; font-variant-numeric: tabular-nums; color: var(--purple); }

/* Loading */
.spinner {
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

.error-msg {
  padding: 1rem;
  background: rgba(248,81,73,0.1);
  border: 1px solid rgba(248,81,73,0.3);
  border-radius: 6px;
  color: var(--red);
  margin-top: 1rem;
}

footer {
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
  color: var(--text-muted);
  font-size: 0.8rem;
}

footer a { color: var(--accent); text-decoration: none; }
footer a:hover { text-decoration: underline; }

/* Or divider */
.or-divider {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--text-muted);
  font-size: 0.85rem;
  margin: 0.75rem 0;
}
.or-divider::before, .or-divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background: var(--border);
}

@media (max-width: 640px) {
  .row, .row-3, .breakdown, .detail-grid { grid-template-columns: 1fr; }
  .container { padding: 1rem; }
}
</style>
</head>
<body>
<div class="container">
  <header>
    <h1>🐾 <span>ClawHub</span> Skill Scorer</h1>
    <p>Simulate ClawHub's search ranking for your skill — vector similarity + lexical boost + popularity</p>
  </header>

  <div class="tabs">
    <button class="tab active" data-tab="score">Score</button>
    <button class="tab" data-tab="search">Search</button>
  </div>

  <!-- Score Tab -->
  <div id="tab-score" class="tab-panel active">
    <form id="score-form">
      <div class="form-group">
        <label for="query">Search Query *</label>
        <input type="text" id="query" placeholder='e.g. "ai video generation"' required>
      </div>

      <div class="form-group">
        <label for="skill-zip">Skill ZIP *</label>
        <input type="file" id="skill-zip" accept=".zip" required>
        <div class="or-divider">or download from ClawHub</div>
        <div class="row">
          <input type="text" id="skill-slug-download" placeholder="ClawHub slug (e.g. weather)">
          <button type="button" class="btn btn-secondary" id="download-btn">Download &amp; Load</button>
        </div>
      </div>

      <div class="row-3">
        <div class="form-group">
          <label for="slug">Slug (optional)</label>
          <input type="text" id="slug" placeholder="Auto-detected from ZIP">
        </div>
        <div class="form-group">
          <label for="display-name">Display Name (optional)</label>
          <input type="text" id="display-name" placeholder="Auto-detected">
        </div>
        <div class="form-group">
          <label for="downloads">Downloads</label>
          <input type="number" id="downloads" value="0" min="0">
        </div>
      </div>

      <button type="submit" class="btn" id="score-btn">
        Score Skill
      </button>
    </form>

    <div id="score-result"></div>
  </div>

  <!-- Search Tab -->
  <div id="tab-search" class="tab-panel">
    <form id="search-form">
      <div class="row">
        <div class="form-group">
          <label for="search-query">Search Query *</label>
          <input type="text" id="search-query" placeholder='e.g. "video generation"' required>
        </div>
        <div class="form-group">
          <label for="search-limit">Limit</label>
          <input type="number" id="search-limit" value="25" min="1" max="50">
        </div>
      </div>
      <div style="display:flex;gap:1.5rem;align-items:center;margin-bottom:1.25rem">
        <label style="display:flex;align-items:center;gap:0.4rem;margin:0;cursor:pointer">
          <input type="checkbox" id="search-highlighted"> Highlighted only
        </label>
        <label style="display:flex;align-items:center;gap:0.4rem;margin:0;cursor:pointer">
          <input type="checkbox" id="search-nonsuspicious"> Non-suspicious only
        </label>
      </div>
      <button type="submit" class="btn" id="search-btn">Search</button>
    </form>

    <div id="search-result"></div>
  </div>

  <footer>
    Powered by <a href="https://api.wulong.dev" target="_blank">api.wulong.dev</a>
    · Replicates <a href="https://clawhub.com" target="_blank">ClawHub</a>'s search scoring pipeline
    · <a href="https://github.com/oolong-tea-2026/clawhub-scorer" target="_blank">Source</a>
  </footer>
</div>

<script>
const API = "https://api.wulong.dev/clawhub-skill-score/v1";

// Tabs
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById("tab-" + tab.dataset.tab).classList.add("active");
  });
});

// Download from ClawHub
document.getElementById("download-btn").addEventListener("click", async () => {
  const slug = document.getElementById("skill-slug-download").value.trim();
  if (!slug) return;

  const btn = document.getElementById("download-btn");
  btn.disabled = true;
  btn.innerHTML = '<span class="spinner"></span> Downloading...';

  try {
    // Download ZIP and fetch detail in parallel
    const [zipResp, detailResp] = await Promise.all([
      fetch(\`\${API}/download?slug=\${encodeURIComponent(slug)}\`),
      fetch(\`\${API}/detail?slug=\${encodeURIComponent(slug)}\`),
    ]);

    if (!zipResp.ok) {
      const err = await zipResp.json().catch(() => ({ error: zipResp.statusText }));
      throw new Error(err.error || \`HTTP \${zipResp.status}\`);
    }

    const blob = await zipResp.blob();
    const file = new File([blob], \`\${slug}.zip\`, { type: "application/zip" });

    // Set file input
    const dt = new DataTransfer();
    dt.items.add(file);
    document.getElementById("skill-zip").files = dt.files;

    // Auto-fill slug
    if (!document.getElementById("slug").value) {
      document.getElementById("slug").value = slug;
    }

    // Auto-fill display name and downloads from detail API
    if (detailResp.ok) {
      const detail = await detailResp.json();
      const skill = detail.skill || detail;
      if (skill.displayName && !document.getElementById("display-name").value) {
        document.getElementById("display-name").value = skill.displayName;
      }
      if (skill.stats && typeof skill.stats.downloads === "number") {
        document.getElementById("downloads").value = skill.stats.downloads;
      }
    }

    btn.innerHTML = '✓ Loaded';
    setTimeout(() => { btn.innerHTML = 'Download &amp; Load'; }, 2000);
  } catch (e) {
    document.getElementById("score-result").innerHTML =
      \`<div class="error-msg">\${escapeHtml(e.message)}</div>\`;
    btn.innerHTML = 'Download &amp; Load';
  } finally {
    btn.disabled = false;
  }
});

// Score form
document.getElementById("score-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const btn = document.getElementById("score-btn");
  const resultEl = document.getElementById("score-result");

  const file = document.getElementById("skill-zip").files[0];
  if (!file) { resultEl.innerHTML = '<div class="error-msg">Please select a ZIP file</div>'; return; }

  btn.disabled = true;
  btn.innerHTML = '<span class="spinner"></span> Scoring...';
  resultEl.innerHTML = "";

  const fd = new FormData();
  fd.append("query", document.getElementById("query").value.trim());
  fd.append("skill", file);

  const slug = document.getElementById("slug").value.trim();
  if (slug) fd.append("slug", slug);
  const dn = document.getElementById("display-name").value.trim();
  if (dn) fd.append("displayName", dn);
  fd.append("downloads", document.getElementById("downloads").value || "0");

  try {
    const resp = await fetch(\`\${API}/score\`, { method: "POST", body: fd });
    const data = await resp.json();
    if (data.error) throw new Error(data.error);
    resultEl.innerHTML = renderScoreResult(data);
  } catch (e) {
    resultEl.innerHTML = \`<div class="error-msg">\${escapeHtml(e.message)}</div>\`;
  } finally {
    btn.disabled = false;
    btn.innerHTML = "Score Skill";
  }
});

// Search form
document.getElementById("search-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const btn = document.getElementById("search-btn");
  const resultEl = document.getElementById("search-result");

  btn.disabled = true;
  btn.innerHTML = '<span class="spinner"></span> Searching...';
  resultEl.innerHTML = "";

  const params = new URLSearchParams({
    q: document.getElementById("search-query").value.trim(),
    limit: document.getElementById("search-limit").value || "25",
  });
  if (document.getElementById("search-highlighted").checked) params.set("highlightedOnly", "true");
  if (document.getElementById("search-nonsuspicious").checked) params.set("nonSuspiciousOnly", "true");

  try {
    const resp = await fetch(\`\${API}/search?\${params}\`);
    const data = await resp.json();
    if (data.error) throw new Error(data.error);
    resultEl.innerHTML = renderSearchResults(data);
  } catch (e) {
    resultEl.innerHTML = \`<div class="error-msg">\${escapeHtml(e.message)}</div>\`;
  } finally {
    btn.disabled = false;
    btn.innerHTML = "Search";
  }
});

function renderScoreResult(data) {
  const s = data.scores;
  const d = data.diagnostics;

  const color = s.final >= 2.5 ? "green" : s.final >= 1.8 ? "yellow" : s.final >= 1.0 ? "orange" : "red";
  const verdict = s.final >= 2.5 ? "🟢 Excellent — very likely top result"
    : s.final >= 1.8 ? "🟡 Good — likely in top results"
    : s.final >= 1.0 ? "🟠 Moderate — may appear on first page"
    : "🔴 Low — likely buried or not found";

  let html = \`<div class="result-card">
    <div class="score-hero">
      <div class="score" style="color:var(--\${color})">\${s.final.toFixed(4)}</div>
      <div class="verdict">\${verdict}</div>
    </div>
    <div class="breakdown">
      <div class="breakdown-item">
        <div class="value">\${s.breakdown.vector.toFixed(4)}</div>
        <div class="label">Vector Similarity</div>
      </div>
      <div class="breakdown-item">
        <div class="value">+\${s.breakdown.lexical.total.toFixed(1)}</div>
        <div class="label">Lexical Boost</div>
      </div>
      <div class="breakdown-item">
        <div class="value">+\${s.breakdown.popularity.boost.toFixed(4)}</div>
        <div class="label">Popularity (\${s.breakdown.popularity.downloads} downloads)</div>
      </div>
    </div>\`;

  // Lexical detail
  const lex = s.breakdown.lexical;
  html += \`<div class="detail-section">
    <h3>Lexical Matching</h3>
    <div class="detail-grid">
      <div class="detail-row">
        <span class="key">Slug [\${lex.slug.tokens.join(", ")}]</span>
        <span>\${lex.slug.match} <span class="badge badge-\${lex.slug.boost > 0 ? 'green' : 'red'}">+\${lex.slug.boost}</span></span>
      </div>
      <div class="detail-row">
        <span class="key">Name [\${lex.name.tokens.join(", ")}]</span>
        <span>\${lex.name.match} <span class="badge badge-\${lex.name.boost > 0 ? 'green' : 'red'}">+\${lex.name.boost}</span></span>
      </div>
    </div>
  </div>\`;

  // Diagnostics
  html += \`<div class="detail-section">
    <h3>Diagnostics</h3>
    <div class="detail-grid">
      <div class="detail-row">
        <span class="key">Token Filter</span>
        <span class="badge badge-\${d.passesTokenFilter ? 'green' : 'red'}">\${d.passesTokenFilter ? '✅ PASS' : '❌ FAIL'}</span>
      </div>
      <div class="detail-row">
        <span class="key">Slug Recall</span>
        <span>\${d.slugRecall ? '✅ Yes' : '—'} (candidate: \${d.candidateSlug})</span>
      </div>
      <div class="detail-row">
        <span class="key">Embedding Text</span>
        <span>\${d.embeddingTextLength.toLocaleString()} / \${d.embeddingMaxChars.toLocaleString()} chars \${d.embeddingTruncated ? '⚠️ truncated' : ''}</span>
      </div>
      <div class="detail-row">
        <span class="key">Files in Embedding</span>
        <span>\${d.filesInEmbedding} / \${d.filesInZip} total</span>
      </div>
    </div>
  </div>\`;

  // Suggestions
  const suggestions = [];
  if (lex.slug.match === "none") suggestions.push("Slug doesn't match query. Consider renaming to include key search terms.");
  if (lex.slug.match === "prefix") suggestions.push(\`Slug has prefix match (+\${0.8}). Full match would give +\${1.4}.\`);
  if (lex.name.match === "none") suggestions.push("Display name doesn't match query. Include key search terms in the name.");
  if (!d.passesTokenFilter && !d.slugRecall) suggestions.push("⚠️ Fails token filter AND no slug recall — INVISIBLE for this query.");
  if (s.breakdown.vector < 0.3) suggestions.push("Low vector similarity. Rewrite SKILL.md description to better cover this topic.");
  if (d.embeddingTruncated) suggestions.push("Embedding text truncated. Put the most important content at the top of SKILL.md.");

  if (suggestions.length) {
    html += \`<div class="suggestions"><h4>Suggestions</h4><ul>\${suggestions.map(s => \`<li>\${escapeHtml(s)}</li>\`).join("")}</ul></div>\`;
  }

  html += \`</div>\`;

  // Skill info
  html = \`<div style="margin-top:1rem;font-size:0.85rem;color:var(--text-muted)">
    Skill: <strong style="color:var(--text)">\${escapeHtml(data.skill.displayName)}</strong>
    · <code>\${escapeHtml(data.skill.slug)}</code>
    · Query: "\${escapeHtml(data.query)}" → [\${data.queryTokens.join(", ")}]
  </div>\` + html;

  return html;
}

function renderSearchResults(data) {
  const results = data.results || [];
  if (!results.length) return '<div class="error-msg">No results found</div>';

  let html = \`<div class="search-results">
    <p style="color:var(--text-muted);font-size:0.85rem;margin-bottom:1rem">\${results.length} results</p>\`;

  results.forEach((r, i) => {
    html += \`<div class="search-item">
      <div class="search-rank">#\${i + 1}</div>
      <div class="search-info">
        <h4>\${escapeHtml(r.displayName || r.slug)}</h4>
        <div class="slug">\${escapeHtml(r.slug)}</div>
        <div class="summary">\${escapeHtml(r.summary || "")}</div>
      </div>
      <div class="search-score">\${r.score.toFixed(4)}</div>
    </div>\`;
  });

  html += \`</div>\`;
  return html;
}

function escapeHtml(s) {
  if (!s) return "";
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}
</script>
</body>
</html>
`;

export default {
  async fetch(request) {
    return new Response(HTML, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }
};
