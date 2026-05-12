---
layout: page
title: Honors
permalink: /honors/
nav: true
nav_order: 3
header_honors_search: true
_styles: |
  .honors {
    margin-top: 1.45rem;
  }

  .post-title-search .bibsearch-form-input:focus {
    border-color: var(--global-theme-color) !important;
  }

  .honors-section {
    margin-top: 3.25rem;
  }

  .honors-section:first-child {
    margin-top: 0;
  }

  .honors-section-header {
    align-items: baseline;
    background: rgba(0, 91, 172, 0.06);
    border-left: 4px solid var(--global-theme-color);
    border-bottom: 1px solid rgba(0, 91, 172, 0.14);
    border-radius: 4px;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    margin-bottom: 0.3rem;
    padding: 0.72rem 0.9rem;
  }

  .honors-section-title {
    font-size: 1.45rem;
    font-weight: 500;
    line-height: 1.25;
    margin: 0;
  }

  .honors-section-count {
    color: var(--global-text-color-light);
    flex: 0 0 auto;
    font-size: 0.85rem;
  }

  .honors-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .honor-item {
    border-bottom: 1px solid var(--global-divider-color);
    column-gap: 1.2rem;
    display: grid;
    grid-template-columns: 5.6rem minmax(0, 1fr);
    padding: 1.15rem 0;
  }

  .honor-item:last-child {
    border-bottom: 0;
  }

  .honors-section[hidden],
  .honor-item[hidden],
  .honors-empty[hidden] {
    display: none !important;
  }

  .honor-date {
    align-self: start;
    background-color: var(--global-theme-color);
    border-radius: 2px;
    box-sizing: border-box;
    color: #fff !important;
    display: inline-flex;
    flex-direction: column;
    font-weight: 700;
    justify-self: start;
    line-height: 1.05;
    min-width: 4.3rem;
    padding: 0.42rem 0.55rem;
    text-align: center;
  }

  .honor-date * {
    color: #fff !important;
  }

  .honor-date-year {
    font-size: 0.9rem;
  }

  .honor-date-detail {
    font-size: 0.68rem;
    font-weight: 600;
    margin-top: 0.18rem;
    opacity: 0.9;
  }

  .honor-title {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.35;
    margin: 0;
  }

  .honor-title-cn {
    font-size: 0.96rem;
    font-weight: 650;
    line-height: 1.45;
    margin: 0.22rem 0 0;
  }

  .honor-awarder {
    color: var(--global-text-color-light);
    font-size: 0.92rem;
    line-height: 1.4;
    margin-top: 0.42rem;
  }

  .honor-awarder p {
    margin: 0;
  }

  .honor-summary {
    background: rgba(0, 91, 172, 0.08);
    border: 1px solid rgba(0, 91, 172, 0.18);
    border-radius: 4px;
    color: var(--global-theme-color);
    display: inline-block;
    font-size: 0.78rem;
    font-weight: 600;
    line-height: 1.25;
    margin-top: 0.55rem;
    padding: 0.22rem 0.45rem;
  }

  .honors-empty {
    color: var(--global-text-color-light);
    margin: 2rem 0 0;
    text-align: center;
  }

  @media (max-width: 575.98px) {
    .honors-section {
      margin-top: 2.4rem;
    }

    .honors-section-header {
      align-items: flex-start;
      flex-direction: column;
      gap: 0.25rem;
    }

    .honor-item {
      grid-template-columns: minmax(0, 1fr);
      padding: 1rem 0;
    }

    .honor-date {
      margin-bottom: 0.65rem;
      min-width: 4.2rem;
    }
  }
---

<!-- _pages/honors.md -->

<div class="honors">
  {% for group in site.data.honors %}
    <section class="honors-section" data-honor-section data-honor-total="{{ group.items.size }}">
      <div class="honors-section-header">
        <h2 class="honors-section-title">{{ group.category }}</h2>
        <span class="honors-section-count" data-honor-count>{{ group.items.size }} items</span>
      </div>

      <ol class="honors-list">
        {% for item in group.items %}
          {% assign title_parts = item.title | split: ' / ' %}
          {% assign awarder_parts = item.awarder | split: ' / ' %}
          {% assign date_parts = item.date | append: '' | split: '-' %}

          <li class="honor-item" data-honor-item>
            <div class="honor-date" aria-label="{{ item.date }}">
              <span class="honor-date-year">{{ date_parts[0] }}</span>
              {% if date_parts.size > 1 %}
                <span class="honor-date-detail">
                  {{- date_parts[1] -}}
                  {%- if date_parts.size > 2 -%}
                    .{{ date_parts[2] }}
                  {%- endif -%}
                </span>
              {% endif %}
            </div>

            <div class="honor-content">
              <h3 class="honor-title">{{ title_parts[0] }}</h3>
              {% if title_parts.size > 1 %}
                <p class="honor-title-cn">{{ title_parts[1] }}</p>
              {% endif %}

              <div class="honor-awarder">
                <p>{{ awarder_parts[0] }}</p>
                {% if awarder_parts.size > 1 %}
                  <p>{{ awarder_parts[1] }}</p>
                {% endif %}
              </div>

              <div class="honor-summary">{{ item.summary }}</div>
            </div>
          </li>
        {% endfor %}
      </ol>
    </section>
  {% endfor %}
  <p class="honors-empty" data-honors-empty hidden>No honors found.</p>
</div>
