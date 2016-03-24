# Overview 

# Definitions
- OM Application - Ontology Manager application
- Remote widget - web application, delivered by third party developers
- WorkbenchWidgetApi - communication layer between OM Application and Remote widget

# Remote widget
  Widget is html application. It is served inside iframe on a right panel 
  of OM Application. Remote widget can communicate with OM Application and 
  retrieve information about current item (current model uri, current task uri, 
  current item uri), fetching items existing in current model (including structure) 
  and navigate to items or other widgets.    
  
## Proxy mechanism
  To prevent security issues widget html file is proxy from original location to OM Application domain.
  Because of that all linked resources (js, css, fonts) needs to be referenced with full url address or included into html file.