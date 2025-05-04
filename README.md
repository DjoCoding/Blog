# My Personal Blog Application

A blog application built using **Next.js**.

---

## 📚 Blogs Management

To add a new blog, follow these steps:

1. Create a new folder under the directory:  
   `src/projects/<name>`

2. Inside the newly created folder, create the following files:
   - `content.md`: Contains the Markdown content for the blog post.
   - `metadata.json`: Holds metadata used for static site generation (SSG).

---

## 📁 Files Specification

### `content.md`

- A Markdown file used to generate the blog content displayed in detail view.

### `metadata.json`

- This file should have the following structure:

```json
{
  "title": "string",
  "name": "string",
  "description": "string",
  "time": "TimeFormat",
  "createdAt": "DateFormat",
  "subDescription": "string",
  "links": [
    {
      "for": "LinkType",
      "href": "string"
    }
  ]
}
```

### Types

```typescript
type LinkType = "github" | "discord" | "linkedin" | "live";

type TimeFormat = string; // should follow the format "<hours>h<minutes>min<seconds>s"

type DateFormat = string; // should follow the format "YYYY-MM-DD"
```

### Note

The name of the new blog folder `name` and the `metadata.json->name` should be identical.
