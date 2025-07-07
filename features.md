# FEATURE:

## IBPSA Vietnam content generation workflow for n8n

## 🚀 Key Features

Use Tavily AND Brave Search API to search for contents relevant to the ibpsa-vietnam.org mission. And build a n8n workflow to automate the process of researching and posting to the website.

The website is a hugo framework, and the contents are saved in https://github.com/thephongh/ibpsa-vietnam-website/tree/main/content

Main content is already in Vietnamese. 
English content should be in the folder: https://github.com/thephongh/ibpsa-vietnam-website/tree/main/content/en

It is deployed to Netlify automatically.

### **🔍 Tavily Advanced Search**
- **Search API**: Intelligent web search with domain filtering
- **Extract API**: Full content extraction from discovered URLs
- **Academic Focus**: .edu, .gov, IBPSA, ASHRAE domain targeting
- **Advanced Search Depth**: Deep content analysis

### **🤖 AI Agent Processing**
- **Content Researcher Agent**: Analyzes search results and creates blog posts
- **Vietnamese Translator Agent**: Professional technical translation
- **Intelligent Summarization**: Converts raw search data into polished content

### **📚 Academic Quality Control**
- Multi-stage filtering for academic credibility
- URL verification and content validation
- Citation preservation with source links
- Tropical climate and Vietnam-specific targeting

## 🏗️ Workflow Architecture

```
Daily/Manual Trigger
       ↓
   Merge Triggers
       ↓
   ┌─────────────────────┐    ┌─────────────────────┐
   │ Tavily Search       │    │ Tavily Search       │
   │ IBPSA Research      │    │ Tropical Building   │
   └─────────────────────┘    └─────────────────────┘
       ↓                              ↓
       └──────────┬───────────────────┘
                  ↓
       Tavily Extract Article Content
                  ↓
       Process & Filter Academic Results
                  ↓
       AI Agent Content Researcher
                  ↓
       AI Agent Vietnamese Translator
                  ↓
     ┌─────────────────┐    ┌─────────────────┐
     │ Format English  │    │ Format Vietnamese│
     │ Markdown        │    │ Markdown         │
     └─────────────────┘    └─────────────────┘
          ↓                          ↓
     ┌─────────────────┐    ┌─────────────────┐
     │ Create English  │    │ Create Vietnamese│
     │ File (GitHub)   │    │ File (GitHub)    │
     └─────────────────┘    └─────────────────┘
          ↓                          ↓
          └──────────┬─────────────────┘
                     ↓
            Trigger Netlify Deploy
                     ↓
            Log Publication Success
```

## 🤖 AI Agent Prompts

### **Content Researcher Agent**
```
You are a research assistant for IBPSA Vietnam, specializing in building performance simulation, energy efficiency, and sustainable architecture.

Your task is to analyze the provided search results and extracted content from Tavily to create a comprehensive blog post.

Key Requirements:
1. Use ONLY the provided search results and extracted content
2. Focus on practical applications for Vietnamese building industry
3. Include proper citations with URLs from the search results
4. Create content relevant to tropical/subtropical climate
5. Make it accessible to both technical and non-technical audiences
6. Target 800-1200 words

Content Structure:
- Clear title (no markdown headers)
- Introduction
- Main findings with subheadings
- Vietnamese context and applications
- Practical recommendations
- Conclusion with actionable steps
- References with URLs
```

### **Vietnamese Translator Agent**
```
You are a professional Vietnamese translator specializing in technical and scientific content for the building industry.

Your task is to translate the English blog post to natural, professional Vietnamese while:

1. Maintaining technical accuracy
2. Preserving all citations and URLs exactly
3. Using appropriate Vietnamese technical terminology
4. Adapting for Vietnamese building professionals
5. Keeping the same structure and formatting
6. Using formal but accessible Vietnamese
7. Including Vietnamese equivalents for international standards when applicable
```

## 📊 Data Processing Flow

### **Search Results Processing**
1. **Dual Search**: IBPSA + Tropical building topics
2. **Content Extraction**: Full article content via Tavily Extract API
3. **Academic Filtering**: .edu, .gov, research institution domains
4. **Enhancement**: Combine search metadata with extracted content
5. **Selection**: Top 5 most relevant academic articles

### **AI Agent Processing**
1. **Research Agent**: Analyzes enhanced articles, creates comprehensive blog post
2. **Translation Agent**: Converts to professional Vietnamese
3. **Formatting**: Markdown with proper frontmatter
4. **Deployment**: GitHub commits + Netlify deployment

## 📁 Generated File Structure

```
content/
├── 2024-07-06-advanced-building-simulation.md     # Vietnamese
└── en/
    └── 2024-07-06-advanced-building-simulation.md # English
```

### **Frontmatter Format**
```yaml
---
title: "Advanced Building Performance Simulation Techniques"
date: 2024-07-06
draft: false
tags: ["IBPSA", "Building Performance", "Energy Efficiency", "Research", "Vietnam"]
categories: ["Building Performance", "Energy Efficiency", "Research"]
author: "IBPSA Vietnam"
language: "en"  # or "vi"
sources: "tavily_advanced_search"
search_summary: "Found 5 verified academic articles using Tavily advanced search"
generated_by: "ai_agent_with_tavily"
---
```

## 🎯 Workflow Advantages

### **Tavily Integration Benefits**
- ✅ **Advanced Search**: Superior to basic web scraping
- ✅ **Content Extraction**: Full article content, not just snippets
- ✅ **Domain Filtering**: Academic source focus
- ✅ **Real-time Search**: Always current results

### **AI Agent Benefits**
- ✅ **Intelligent Processing**: Context-aware content creation
- ✅ **Quality Control**: Academic-standard analysis
- ✅ **Vietnamese Expertise**: Professional technical translation
- ✅ **Consistent Output**: Structured, reliable content

### **Integration Benefits**
- ✅ **End-to-End Automation**: Search → Process → Publish
- ✅ **Quality Assurance**: Multi-stage academic filtering
- ✅ **Bilingual Output**: Professional English + Vietnamese
- ✅ **GitHub/Netlify Ready**: Automatic deployment

## 📈 Performance Metrics

### **Search Quality**
- **Academic Sources**: 80-90% from .edu/.gov/research institutions
- **Content Depth**: Full articles via Tavily Extract API
- **Relevance**: Vietnam/tropical climate focused
- **Currency**: Current year research prioritized

### **Content Quality**
- **Length**: 800-1200 words per article
- **Citations**: 5-8 academic sources with URLs
- **Structure**: Professional blog post format
- **Translation**: Technical accuracy maintained

### **Deployment Success**
- **GitHub Commits**: >99% success rate
- **Netlify Deployment**: 2-5 minute build time
- **File Structure**: Correct bilingual folder placement

### **Search Quality Metrics**
- Academic domain percentage
- Content extraction success rate
- Search result relevance scores
- URL accessibility validation

### **Content Quality Metrics**
- AI Agent processing success
- Translation accuracy checks
- Citation link validation
- Vietnamese terminology consistency


**Technology Stack**: Tavily API + Brave Search API + n8n AI Agents + GitHub + Netlify  
**Content Quality**: Academic-grade with verified sources  
**Deployment**: Fully automated bilingual publishing

## EXAMPLES:

https://n8n.io/workflows/3291-generate-seo-optimized-wordpress-content-with-ai-powered-perplexity-research/
https://n8n.io/workflows/5159-ai-content-creation-and-auto-wordpress-publishing-with-pexels-api-image-workflow/
https://n8n.io/workflows/4913-auto-publish-pr-news-articles-with-featured-images-to-wordpress-from-rss/


## DOCUMENTATION:

Read the following files & links

n8n-rules.md
https://docs.n8n.io/


## OTHER CONSIDERATIONS:

