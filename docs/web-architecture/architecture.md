---
title: Web Archuitecture
order: 1
---

# Overview

The intention of this project is to build/define a structure to create webs in a fast mode. To do that we will
generate a series of templates suited for different generic cases. These templates will include a document explaining the architecture of the web where the template will be used and also a small example that can be used as starting point for the web/app to be build.

## Taxonomy of webs

A hierarchy of web templates is used to cover from simple use cases to complex ones. The idea is to have a few templates with their architectures.

There are concerns that are cross-cutting and will be implemented similarly in all the templates.

### Static Site (Small)

This site represents a simple web where all the data is static. Typical example will be a landing page or a simple page for a small business where the information seldom change.

* Initial architecture
  * Remix 
    * Simple Remix project with the pages designed and created in Plasmic
    * As security always codegen the design and push it to a git repo

### Static Site (Large/Editable)

This site represents a static site that contains lots of pages, lots of information and likely there is a need for the user to add/modify the information on it.

Also is typical to have to define a taxonomy on the information domain.

Basically a web with a headless CMS.

### Dynamic Site

Any site that needs to store information that can be dynamically created/updated/deleted. Basically a site that allows CRA operations applications. This would imply in most of the cases the use of a database.

Typical example would be a calendar based app.

### Data Complex Site

Complex site that requires the visualization of complex data. Such as applications with tons of menus and maps.

Typical example would be any web/app GIS oriented.

## Cross-Cutting Concerns

### Accessibility

### Authorization

### Shopify Like

### Data Oriented (Database needed)




### Plasmic
    * Project with common styles -> https://studio.plasmic.app/projects/seaQhLVS4bbjiGvJJrRwyL
