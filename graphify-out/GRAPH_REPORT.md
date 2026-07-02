# Graph Report - Epiphany-Unlimited-Website  (2026-07-02)

## Corpus Check
- 27 files · ~677,734 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 77 nodes · 80 edges · 14 communities (5 shown, 9 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b8c7976d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 13|Community 13]]

## God Nodes (most connected - your core abstractions)
1. `Epiphany Unlimited, Inc.` - 4 edges
2. `InsightResult` - 3 edges
3. `Testimonial` - 2 edges
4. `generateStrategicInsight()` - 2 edges
5. `rootElement` - 1 edges
6. `root` - 1 edges
7. `Service` - 1 edges
8. `PricingPlan` - 1 edges
9. `env` - 1 edges
10. `ContactFormProps` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities (14 total, 9 thin omitted)

### Community 2 - "Community 2"
Cohesion: 0.24
Nodes (7): testimonials, InsightResult, PricingPlan, Service, Testimonial, ai, generateStrategicInsight()

### Community 4 - "Community 4"
Cohesion: 0.4
Nodes (3): gradients, names, Particle

### Community 5 - "Community 5"
Cohesion: 0.4
Nodes (4): Core Philosophy, Epiphany Unlimited, Inc., Features, Technology Stack

### Community 7 - "Community 7"
Cohesion: 0.5
Nodes (3): ServiceGroup, services, ServicesProps

## Knowledge Gaps
- **25 isolated node(s):** `rootElement`, `root`, `Service`, `PricingPlan`, `env` (+20 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `rootElement`, `root`, `Service` to the rest of the system?**
  _25 weakly-connected nodes found - possible documentation gaps or missing edges._