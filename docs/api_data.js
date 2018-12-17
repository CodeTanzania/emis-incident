define({ "api": [
  {
    "type": "delete",
    "url": "/actions/:id",
    "title": "Delete Existing Action",
    "version": "1.0.0",
    "name": "DeleteAction",
    "group": "Action",
    "description": "<p>Delete existing incident</p>",
    "filename": "lib/action.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-incident.herokuapp.com/v1/actions/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique action identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": false,
            "field": "incidentType",
            "description": "<p>An incident type(or nature) under which an action belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Incident",
            "optional": false,
            "field": "incident",
            "description": "<p>An incident under which an action is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "phase",
            "defaultValue": "Mitigation",
            "description": "<p>Emergency(or disaster) management phase under which an action is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name(or title) of an action.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about an action i.e additional details that clarify what an action is.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when action was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when action was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"incidentType: {\n   \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Flood\"\n   \"nature\": \"Natural\",\n   \"family\": \"Hydrological\",\n   \"color\": \"#F7EF18\",\n  },\n  \"incident: {\n   \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Nobis\",\n   \"startedAt\": \"2018-06-06T10:16:19.230Z\",\n   \"endedAt\": \"2018-06-07T10:16:19.230Z\",\n  },\n  \"phase\": \"Mitigation\",\n  \"name\": \"Provident aliquam\",\n  \"description\": \"Nobis provident aliquam nobis.\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/actions/:id",
    "title": "Get Existing Action",
    "version": "1.0.0",
    "name": "GetAction",
    "group": "Action",
    "description": "<p>Get existing incident</p>",
    "filename": "lib/action.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-incident.herokuapp.com/v1/actions/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique action identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": false,
            "field": "incidentType",
            "description": "<p>An incident type(or nature) under which an action belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Incident",
            "optional": false,
            "field": "incident",
            "description": "<p>An incident under which an action is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "phase",
            "defaultValue": "Mitigation",
            "description": "<p>Emergency(or disaster) management phase under which an action is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name(or title) of an action.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about an action i.e additional details that clarify what an action is.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when action was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when action was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"incidentType: {\n   \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Flood\"\n   \"nature\": \"Natural\",\n   \"family\": \"Hydrological\",\n   \"color\": \"#F7EF18\",\n  },\n  \"incident: {\n   \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Nobis\",\n   \"startedAt\": \"2018-06-06T10:16:19.230Z\",\n   \"endedAt\": \"2018-06-07T10:16:19.230Z\",\n  },\n  \"phase\": \"Mitigation\",\n  \"name\": \"Provident aliquam\",\n  \"description\": \"Nobis provident aliquam nobis.\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/actions/schema",
    "title": "Get Action Schema",
    "version": "1.0.0",
    "name": "GetActionSchema",
    "group": "Action",
    "description": "<p>Returns incident json schema definition</p>",
    "filename": "lib/action.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-incident.herokuapp.com/v1/actions/schema"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/actions",
    "title": "List Actions",
    "version": "1.0.0",
    "name": "GetActions",
    "group": "Action",
    "description": "<p>Returns a list of actions</p>",
    "filename": "lib/action.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-incident.herokuapp.com/v1/actions"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Action[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of actions</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>Unique action identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": false,
            "field": "data.incidentType",
            "description": "<p>An incident type(or nature) under which an action belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Incident",
            "optional": false,
            "field": "data.incident",
            "description": "<p>An incident under which a action is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.phase",
            "defaultValue": "Mitigation",
            "description": "<p>Emergency(or disaster) management phase under which an action is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Human readable name(or title) of an action.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.description",
            "description": "<p>A brief summary about an action i.e additional details that clarify what an action is.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date when action was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date when action was last updated</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of actions</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>Number of actions returned</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Query limit used</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Query skip/offset used</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Total number of pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "lastModified",
            "description": "<p>Date and time at which latest actions was last modified</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"data\": [\n    {\n      \"_id\": \"5aeed5f37e422f2743b97eb0\",\n      \"incidentType: {\n        \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n        \"name\": \"Flood\"\n        \"nature\": \"Natural\",\n        \"family\": \"Hydrological\",\n        \"color\": \"#F7EF18\",\n      },\n      \"incident: {\n        \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n        \"name\": \"Nobis\",\n        \"startedAt\": \"2018-06-06T10:16:19.230Z\",\n        \"endedAt\": \"2018-06-07T10:16:19.230Z\",\n      },\n      \"phase\": \"Mitigation\",\n      \"name\": \"Provident aliquam\",\n      \"description\": \"Nobis provident aliquam nobis.\",\n      \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n      \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n   }\n  ],\n  \"total\": 10,\n  \"size\": 2,\n  \"limit\": 2,\n  \"skip\": 0,\n  \"page\": 1,\n  \"pages\": 5,\n  \"lastModified\": \"2018-05-06T10:19:04.910Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/actions/:id",
    "title": "Patch Existing Action",
    "version": "1.0.0",
    "name": "PatchAction",
    "group": "Action",
    "description": "<p>Patch existing incident</p>",
    "filename": "lib/action.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-incident.herokuapp.com/v1/actions/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique action identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": false,
            "field": "incidentType",
            "description": "<p>An incident type(or nature) under which an action belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Incident",
            "optional": false,
            "field": "incident",
            "description": "<p>An incident under which an action is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "phase",
            "defaultValue": "Mitigation",
            "description": "<p>Emergency(or disaster) management phase under which an action is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name(or title) of an action.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about an action i.e additional details that clarify what an action is.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when action was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when action was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"incidentType: {\n   \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Flood\"\n   \"nature\": \"Natural\",\n   \"family\": \"Hydrological\",\n   \"color\": \"#F7EF18\",\n  },\n  \"incident: {\n   \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Nobis\",\n   \"startedAt\": \"2018-06-06T10:16:19.230Z\",\n   \"endedAt\": \"2018-06-07T10:16:19.230Z\",\n  },\n  \"phase\": \"Mitigation\",\n  \"name\": \"Provident aliquam\",\n  \"description\": \"Nobis provident aliquam nobis.\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/actions",
    "title": "Create New Action",
    "version": "1.0.0",
    "name": "PostAction",
    "group": "Action",
    "description": "<p>Create new incident</p>",
    "filename": "lib/action.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-incident.herokuapp.com/v1/actions"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique action identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": false,
            "field": "incidentType",
            "description": "<p>An incident type(or nature) under which an action belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Incident",
            "optional": false,
            "field": "incident",
            "description": "<p>An incident under which an action is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "phase",
            "defaultValue": "Mitigation",
            "description": "<p>Emergency(or disaster) management phase under which an action is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name(or title) of an action.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about an action i.e additional details that clarify what an action is.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when action was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when action was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"incidentType: {\n   \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Flood\"\n   \"nature\": \"Natural\",\n   \"family\": \"Hydrological\",\n   \"color\": \"#F7EF18\",\n  },\n  \"incident: {\n   \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Nobis\",\n   \"startedAt\": \"2018-06-06T10:16:19.230Z\",\n   \"endedAt\": \"2018-06-07T10:16:19.230Z\",\n  },\n  \"phase\": \"Mitigation\",\n  \"name\": \"Provident aliquam\",\n  \"description\": \"Nobis provident aliquam nobis.\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/actions/:id",
    "title": "Put Existing Action",
    "version": "1.0.0",
    "name": "PutAction",
    "group": "Action",
    "description": "<p>Put existing incident</p>",
    "filename": "lib/action.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-incident.herokuapp.com/v1/actions/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique action identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": false,
            "field": "incidentType",
            "description": "<p>An incident type(or nature) under which an action belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Incident",
            "optional": false,
            "field": "incident",
            "description": "<p>An incident under which an action is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "phase",
            "defaultValue": "Mitigation",
            "description": "<p>Emergency(or disaster) management phase under which an action is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name(or title) of an action.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about an action i.e additional details that clarify what an action is.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when action was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when action was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"incidentType: {\n   \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Flood\"\n   \"nature\": \"Natural\",\n   \"family\": \"Hydrological\",\n   \"color\": \"#F7EF18\",\n  },\n  \"incident: {\n   \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Nobis\",\n   \"startedAt\": \"2018-06-06T10:16:19.230Z\",\n   \"endedAt\": \"2018-06-07T10:16:19.230Z\",\n  },\n  \"phase\": \"Mitigation\",\n  \"name\": \"Provident aliquam\",\n  \"description\": \"Nobis provident aliquam nobis.\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/incidents/:id",
    "title": "Delete Existing Incident",
    "version": "1.0.0",
    "name": "DeleteIncident",
    "group": "Incident",
    "description": "<p>Delete existing incident</p>",
    "filename": "lib/incident.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-incident.herokuapp.com/v1/incidents/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique incident identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": false,
            "field": "type",
            "description": "<p>An incident type(or nature) under which an incident belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Plan",
            "optional": true,
            "field": "plan",
            "description": "<p>An incident management plan activated to respond to an incident.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "number",
            "description": "<p>Human readable, system specific identifier of an incident.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>Human readable name(or title) of an incident.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "causes",
            "description": "<p>A brief summary about cause(s) or source(s) of an incident event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about an incident event i.e additional details that clarify more about an incident event.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "startedAt",
            "description": "<p>Date when an incident was effective occured(or reported).</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "areas",
            "description": "<p>Human readable text describing origin, affected and proned locations(s) of an incident event.</p>"
          },
          {
            "group": "Success 200",
            "type": "Point",
            "optional": true,
            "field": "epicentre",
            "description": "<p>A geo-point that may be considered as the center of an incident event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "remarks",
            "description": "<p>A brief human readable comments and recommendation about an incident event.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "endedAt",
            "description": "<p>Date when an incident was declared no longer a threat.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when incident was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when incident was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"type: {\n   \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Flood\"\n   \"nature\": \"Natural\",\n   \"family\": \"Hydrological\",\n   \"color\": \"#F7EF18\",\n  },\n  \"plan\": {\n    \"boundary\": {\n      \"_id\": \"5c17661e3c9d520004e2b480\"\n      \"category\": \"Boundary\",\n      \"type\": \"Administrative\",\n      \"level\": \"region\",\n      \"name\": \"Dar-es-salaam\",\n    },\n    \"owner\": {\n      \"_id\": \"5c17661e3c9d520004e2b4ab\"\n      \"name\": \"DarMAERT\",\n      \"title\": \"Dar es Salaam Multi Agency Emergency Response Team\",\n      \"email\": \"info@darmaert.com\",\n      \"mobile\": \"255654111222\",\n    }\n  },\n  \"number\": \"EQ-2018-000033-TZA\",\n  \"event\": \"Nobis\",\n  \"description\": \"Nobis provident aliquam nobis.\",\n  \"startedAt\": \"2018-06-06T10:16:19.230Z\",\n  \"endedAt\": \"2018-06-07T10:16:19.230Z\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/incidents/:id",
    "title": "Get Existing Incident",
    "version": "1.0.0",
    "name": "GetIncident",
    "group": "Incident",
    "description": "<p>Get existing incident</p>",
    "filename": "lib/incident.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-incident.herokuapp.com/v1/incidents/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique incident identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": false,
            "field": "type",
            "description": "<p>An incident type(or nature) under which an incident belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Plan",
            "optional": true,
            "field": "plan",
            "description": "<p>An incident management plan activated to respond to an incident.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "number",
            "description": "<p>Human readable, system specific identifier of an incident.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>Human readable name(or title) of an incident.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "causes",
            "description": "<p>A brief summary about cause(s) or source(s) of an incident event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about an incident event i.e additional details that clarify more about an incident event.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "startedAt",
            "description": "<p>Date when an incident was effective occured(or reported).</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "areas",
            "description": "<p>Human readable text describing origin, affected and proned locations(s) of an incident event.</p>"
          },
          {
            "group": "Success 200",
            "type": "Point",
            "optional": true,
            "field": "epicentre",
            "description": "<p>A geo-point that may be considered as the center of an incident event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "remarks",
            "description": "<p>A brief human readable comments and recommendation about an incident event.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "endedAt",
            "description": "<p>Date when an incident was declared no longer a threat.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when incident was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when incident was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"type: {\n   \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Flood\"\n   \"nature\": \"Natural\",\n   \"family\": \"Hydrological\",\n   \"color\": \"#F7EF18\",\n  },\n  \"plan\": {\n    \"boundary\": {\n      \"_id\": \"5c17661e3c9d520004e2b480\"\n      \"category\": \"Boundary\",\n      \"type\": \"Administrative\",\n      \"level\": \"region\",\n      \"name\": \"Dar-es-salaam\",\n    },\n    \"owner\": {\n      \"_id\": \"5c17661e3c9d520004e2b4ab\"\n      \"name\": \"DarMAERT\",\n      \"title\": \"Dar es Salaam Multi Agency Emergency Response Team\",\n      \"email\": \"info@darmaert.com\",\n      \"mobile\": \"255654111222\",\n    }\n  },\n  \"number\": \"EQ-2018-000033-TZA\",\n  \"event\": \"Nobis\",\n  \"description\": \"Nobis provident aliquam nobis.\",\n  \"startedAt\": \"2018-06-06T10:16:19.230Z\",\n  \"endedAt\": \"2018-06-07T10:16:19.230Z\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/incidents/schema",
    "title": "Get Incident Schema",
    "version": "1.0.0",
    "name": "GetIncidentSchema",
    "group": "Incident",
    "description": "<p>Returns incident json schema definition</p>",
    "filename": "lib/incident.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-incident.herokuapp.com/v1/incidents/schema"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/incidents",
    "title": "List Incidents",
    "version": "1.0.0",
    "name": "GetIncidents",
    "group": "Incident",
    "description": "<p>Returns a list of incidents</p>",
    "filename": "lib/incident.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-incident.herokuapp.com/v1/incidents"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Incident[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of incidents</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>Unique incident identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": false,
            "field": "data.type",
            "description": "<p>An incident type(or nature) under which an incident belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Plan",
            "optional": true,
            "field": "data.plan",
            "description": "<p>An incident management plan activated to respond to an incident.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.number",
            "description": "<p>Human readable, system specific identifier of an incident.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.event",
            "description": "<p>Human readable name(or title) of an incident.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "data.causes",
            "description": "<p>A brief summary about cause(s) or source(s) of an incident event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.description",
            "description": "<p>A brief summary about an incident event i.e additional details that clarify more about an incident event.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "data.startedAt",
            "description": "<p>Date when an incident was effective occured(or reported).</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "data.areas",
            "description": "<p>Human readable text describing origin, affected and proned locations(s) of an incident event.</p>"
          },
          {
            "group": "Success 200",
            "type": "Point",
            "optional": true,
            "field": "data.epicentre",
            "description": "<p>A geo-point that may be considered as the center of an incident event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "data.remarks",
            "description": "<p>A brief human readable comments and recommendation about an incident event.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "data.endedAt",
            "description": "<p>Date when an incident was declared no longer a threat.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date when incident was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date when incident was last updated</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of incident</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>Number of incident returned</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Query limit used</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Query skip/offset used</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Total number of pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "lastModified",
            "description": "<p>Date and time at which latest incident was last modified</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"data\": [\n{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"type: {\n   \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Flood\"\n   \"nature\": \"Natural\",\n   \"family\": \"Hydrological\",\n   \"color\": \"#F7EF18\",\n  },\n  \"plan\": {\n    \"boundary\": {\n      \"_id\": \"5c17661e3c9d520004e2b480\"\n      \"category\": \"Boundary\",\n      \"type\": \"Administrative\",\n      \"level\": \"region\",\n      \"name\": \"Dar-es-salaam\",\n    },\n    \"owner\": {\n      \"_id\": \"5c17661e3c9d520004e2b4ab\"\n      \"name\": \"DarMAERT\",\n      \"title\": \"Dar es Salaam Multi Agency Emergency Response Team\",\n      \"email\": \"info@darmaert.com\",\n      \"mobile\": \"255654111222\",\n    }\n  },\n  \"number\": \"EQ-2018-000033-TZA\",\n  \"event\": \"Nobis\",\n  \"description\": \"Nobis provident aliquam nobis.\",\n  \"startedAt\": \"2018-06-06T10:16:19.230Z\",\n  \"endedAt\": \"2018-06-07T10:16:19.230Z\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n}\n  ],\n  \"total\": 10,\n  \"size\": 2,\n  \"limit\": 2,\n  \"skip\": 0,\n  \"page\": 1,\n  \"pages\": 5,\n  \"lastModified\": \"2018-05-06T10:19:04.910Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/incidents/:id",
    "title": "Patch Existing Incident",
    "version": "1.0.0",
    "name": "PatchIncident",
    "group": "Incident",
    "description": "<p>Patch existing incident</p>",
    "filename": "lib/incident.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-incident.herokuapp.com/v1/incidents/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique incident identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": false,
            "field": "type",
            "description": "<p>An incident type(or nature) under which an incident belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Plan",
            "optional": true,
            "field": "plan",
            "description": "<p>An incident management plan activated to respond to an incident.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "number",
            "description": "<p>Human readable, system specific identifier of an incident.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>Human readable name(or title) of an incident.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "causes",
            "description": "<p>A brief summary about cause(s) or source(s) of an incident event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about an incident event i.e additional details that clarify more about an incident event.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "startedAt",
            "description": "<p>Date when an incident was effective occured(or reported).</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "areas",
            "description": "<p>Human readable text describing origin, affected and proned locations(s) of an incident event.</p>"
          },
          {
            "group": "Success 200",
            "type": "Point",
            "optional": true,
            "field": "epicentre",
            "description": "<p>A geo-point that may be considered as the center of an incident event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "remarks",
            "description": "<p>A brief human readable comments and recommendation about an incident event.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "endedAt",
            "description": "<p>Date when an incident was declared no longer a threat.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when incident was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when incident was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"type: {\n   \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Flood\"\n   \"nature\": \"Natural\",\n   \"family\": \"Hydrological\",\n   \"color\": \"#F7EF18\",\n  },\n  \"plan\": {\n    \"boundary\": {\n      \"_id\": \"5c17661e3c9d520004e2b480\"\n      \"category\": \"Boundary\",\n      \"type\": \"Administrative\",\n      \"level\": \"region\",\n      \"name\": \"Dar-es-salaam\",\n    },\n    \"owner\": {\n      \"_id\": \"5c17661e3c9d520004e2b4ab\"\n      \"name\": \"DarMAERT\",\n      \"title\": \"Dar es Salaam Multi Agency Emergency Response Team\",\n      \"email\": \"info@darmaert.com\",\n      \"mobile\": \"255654111222\",\n    }\n  },\n  \"number\": \"EQ-2018-000033-TZA\",\n  \"event\": \"Nobis\",\n  \"description\": \"Nobis provident aliquam nobis.\",\n  \"startedAt\": \"2018-06-06T10:16:19.230Z\",\n  \"endedAt\": \"2018-06-07T10:16:19.230Z\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/incidents",
    "title": "Create New Incident",
    "version": "1.0.0",
    "name": "PostIncident",
    "group": "Incident",
    "description": "<p>Create new incident</p>",
    "filename": "lib/incident.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-incident.herokuapp.com/v1/incidents"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique incident identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": false,
            "field": "type",
            "description": "<p>An incident type(or nature) under which an incident belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Plan",
            "optional": true,
            "field": "plan",
            "description": "<p>An incident management plan activated to respond to an incident.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "number",
            "description": "<p>Human readable, system specific identifier of an incident.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>Human readable name(or title) of an incident.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "causes",
            "description": "<p>A brief summary about cause(s) or source(s) of an incident event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about an incident event i.e additional details that clarify more about an incident event.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "startedAt",
            "description": "<p>Date when an incident was effective occured(or reported).</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "areas",
            "description": "<p>Human readable text describing origin, affected and proned locations(s) of an incident event.</p>"
          },
          {
            "group": "Success 200",
            "type": "Point",
            "optional": true,
            "field": "epicentre",
            "description": "<p>A geo-point that may be considered as the center of an incident event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "remarks",
            "description": "<p>A brief human readable comments and recommendation about an incident event.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "endedAt",
            "description": "<p>Date when an incident was declared no longer a threat.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when incident was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when incident was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"type: {\n   \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Flood\"\n   \"nature\": \"Natural\",\n   \"family\": \"Hydrological\",\n   \"color\": \"#F7EF18\",\n  },\n  \"plan\": {\n    \"boundary\": {\n      \"_id\": \"5c17661e3c9d520004e2b480\"\n      \"category\": \"Boundary\",\n      \"type\": \"Administrative\",\n      \"level\": \"region\",\n      \"name\": \"Dar-es-salaam\",\n    },\n    \"owner\": {\n      \"_id\": \"5c17661e3c9d520004e2b4ab\"\n      \"name\": \"DarMAERT\",\n      \"title\": \"Dar es Salaam Multi Agency Emergency Response Team\",\n      \"email\": \"info@darmaert.com\",\n      \"mobile\": \"255654111222\",\n    }\n  },\n  \"number\": \"EQ-2018-000033-TZA\",\n  \"event\": \"Nobis\",\n  \"description\": \"Nobis provident aliquam nobis.\",\n  \"startedAt\": \"2018-06-06T10:16:19.230Z\",\n  \"endedAt\": \"2018-06-07T10:16:19.230Z\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/incidents/:id",
    "title": "Put Existing Incident",
    "version": "1.0.0",
    "name": "PutIncident",
    "group": "Incident",
    "description": "<p>Put existing incident</p>",
    "filename": "lib/incident.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-incident.herokuapp.com/v1/incidents/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique incident identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": false,
            "field": "type",
            "description": "<p>An incident type(or nature) under which an incident belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Plan",
            "optional": true,
            "field": "plan",
            "description": "<p>An incident management plan activated to respond to an incident.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "number",
            "description": "<p>Human readable, system specific identifier of an incident.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>Human readable name(or title) of an incident.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "causes",
            "description": "<p>A brief summary about cause(s) or source(s) of an incident event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about an incident event i.e additional details that clarify more about an incident event.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "startedAt",
            "description": "<p>Date when an incident was effective occured(or reported).</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "areas",
            "description": "<p>Human readable text describing origin, affected and proned locations(s) of an incident event.</p>"
          },
          {
            "group": "Success 200",
            "type": "Point",
            "optional": true,
            "field": "epicentre",
            "description": "<p>A geo-point that may be considered as the center of an incident event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "remarks",
            "description": "<p>A brief human readable comments and recommendation about an incident event.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "endedAt",
            "description": "<p>Date when an incident was declared no longer a threat.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when incident was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when incident was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"type: {\n   \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Flood\"\n   \"nature\": \"Natural\",\n   \"family\": \"Hydrological\",\n   \"color\": \"#F7EF18\",\n  },\n  \"plan\": {\n    \"boundary\": {\n      \"_id\": \"5c17661e3c9d520004e2b480\"\n      \"category\": \"Boundary\",\n      \"type\": \"Administrative\",\n      \"level\": \"region\",\n      \"name\": \"Dar-es-salaam\",\n    },\n    \"owner\": {\n      \"_id\": \"5c17661e3c9d520004e2b4ab\"\n      \"name\": \"DarMAERT\",\n      \"title\": \"Dar es Salaam Multi Agency Emergency Response Team\",\n      \"email\": \"info@darmaert.com\",\n      \"mobile\": \"255654111222\",\n    }\n  },\n  \"number\": \"EQ-2018-000033-TZA\",\n  \"event\": \"Nobis\",\n  \"description\": \"Nobis provident aliquam nobis.\",\n  \"startedAt\": \"2018-06-06T10:16:19.230Z\",\n  \"endedAt\": \"2018-06-07T10:16:19.230Z\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/tasks/:id",
    "title": "Delete Existing Task",
    "version": "1.0.0",
    "name": "DeleteTask",
    "group": "Task",
    "description": "<p>Delete existing incident</p>",
    "filename": "lib/task.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-incident.herokuapp.com/v1/tasks/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique task identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": false,
            "field": "incidentType",
            "description": "<p>An incident type(or nature) under which a task belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Incident",
            "optional": false,
            "field": "incident",
            "description": "<p>An incident under which a task is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "Action",
            "optional": false,
            "field": "action",
            "description": "<p>An action under which a task is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "phase",
            "defaultValue": "Mitigation",
            "description": "<p>Emergency(or disaster) management phase under which a task is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name(or title) of a task.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about a task i.e additional details that clarify what a task is.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>Task number(or sequence) for ordering in relation to other action tasks.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when task was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when task was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"incidentType\": {\n   \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Flood\"\n   \"nature\": \"Natural\",\n   \"family\": \"Hydrological\",\n   \"color\": \"#F7EF18\",\n  },\n  \"incident\": {\n   \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Nobis\",\n   \"startedAt\": \"2018-06-06T10:16:19.230Z\",\n   \"endedAt\": \"2018-06-07T10:16:19.230Z\",\n  },\n  \"action\": {\n   \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Aliquam Nobis\",\n  },\n  \"phase\": \"Mitigation\",\n  \"name\": \"Provident aliquam\",\n  \"description\": \"Nobis provident aliquam nobis.\",\n  \"number\": 1,\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/tasks/:id",
    "title": "Get Existing Task",
    "version": "1.0.0",
    "name": "GetTask",
    "group": "Task",
    "description": "<p>Get existing incident</p>",
    "filename": "lib/task.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-incident.herokuapp.com/v1/tasks/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique task identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": false,
            "field": "incidentType",
            "description": "<p>An incident type(or nature) under which a task belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Incident",
            "optional": false,
            "field": "incident",
            "description": "<p>An incident under which a task is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "Action",
            "optional": false,
            "field": "action",
            "description": "<p>An action under which a task is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "phase",
            "defaultValue": "Mitigation",
            "description": "<p>Emergency(or disaster) management phase under which a task is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name(or title) of a task.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about a task i.e additional details that clarify what a task is.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>Task number(or sequence) for ordering in relation to other action tasks.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when task was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when task was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"incidentType\": {\n   \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Flood\"\n   \"nature\": \"Natural\",\n   \"family\": \"Hydrological\",\n   \"color\": \"#F7EF18\",\n  },\n  \"incident\": {\n   \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Nobis\",\n   \"startedAt\": \"2018-06-06T10:16:19.230Z\",\n   \"endedAt\": \"2018-06-07T10:16:19.230Z\",\n  },\n  \"action\": {\n   \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Aliquam Nobis\",\n  },\n  \"phase\": \"Mitigation\",\n  \"name\": \"Provident aliquam\",\n  \"description\": \"Nobis provident aliquam nobis.\",\n  \"number\": 1,\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/tasks/schema",
    "title": "Get Task Schema",
    "version": "1.0.0",
    "name": "GetTaskSchema",
    "group": "Task",
    "description": "<p>Returns incident json schema definition</p>",
    "filename": "lib/task.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-incident.herokuapp.com/v1/tasks/schema"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/tasks",
    "title": "List Tasks",
    "version": "1.0.0",
    "name": "GetTasks",
    "group": "Task",
    "description": "<p>Returns a list of tasks</p>",
    "filename": "lib/task.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-incident.herokuapp.com/v1/tasks"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of tasks</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>Unique action identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidenType",
            "optional": false,
            "field": "data.incidentType",
            "description": "<p>An incident type(or nature) under which a task belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Incident",
            "optional": false,
            "field": "data.incident",
            "description": "<p>An incident under which a task is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "Action",
            "optional": false,
            "field": "data.action",
            "description": "<p>An action under which a task is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.phase",
            "defaultValue": "Mitigation",
            "description": "<p>Emergency(or disaster) management phase under which a task is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Human readable name(or title) of a task.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.description",
            "description": "<p>A brief summary about a task i.e additional details that clarify what a task is.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.number",
            "description": "<p>Task number(or sequence) for ordering in relation to other action tasks.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date when task was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date when task was last updated</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of tasks</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>Number of tasks returned</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Query limit used</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Query skip/offset used</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Total number of pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "lastModified",
            "description": "<p>Date and time at which latest tasks was last modified</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"data\": [\n    {\n      \"_id\": \"5aeed5f37e422f2743b97eb0\",\n      \"incidentType\": {\n        \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n        \"name\": \"Flood\"\n        \"nature\": \"Natural\",\n        \"family\": \"Hydrological\",\n        \"color\": \"#F7EF18\",\n      },\n      \"incident\": {\n        \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n        \"name\": \"Nobis\",\n        \"startedAt\": \"2018-06-06T10:16:19.230Z\",\n        \"endedAt\": \"2018-06-07T10:16:19.230Z\",\n      },\n      \"action\": {\n        \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n        \"name\": \"Aliquam Nobis\",\n      },\n      \"phase\": \"Mitigation\",\n      \"name\": \"Provident aliquam\",\n      \"description\": \"Nobis provident aliquam nobis.\",\n      \"number\": 1,\n      \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n      \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n   }\n  ],\n  \"total\": 10,\n  \"size\": 2,\n  \"limit\": 2,\n  \"skip\": 0,\n  \"page\": 1,\n  \"pages\": 5,\n  \"lastModified\": \"2018-05-06T10:19:04.910Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/tasks/:id",
    "title": "Patch Existing Task",
    "version": "1.0.0",
    "name": "PatchTask",
    "group": "Task",
    "description": "<p>Patch existing incident</p>",
    "filename": "lib/task.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-incident.herokuapp.com/v1/tasks/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique task identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": false,
            "field": "incidentType",
            "description": "<p>An incident type(or nature) under which a task belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Incident",
            "optional": false,
            "field": "incident",
            "description": "<p>An incident under which a task is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "Action",
            "optional": false,
            "field": "action",
            "description": "<p>An action under which a task is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "phase",
            "defaultValue": "Mitigation",
            "description": "<p>Emergency(or disaster) management phase under which a task is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name(or title) of a task.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about a task i.e additional details that clarify what a task is.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>Task number(or sequence) for ordering in relation to other action tasks.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when task was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when task was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"incidentType\": {\n   \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Flood\"\n   \"nature\": \"Natural\",\n   \"family\": \"Hydrological\",\n   \"color\": \"#F7EF18\",\n  },\n  \"incident\": {\n   \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Nobis\",\n   \"startedAt\": \"2018-06-06T10:16:19.230Z\",\n   \"endedAt\": \"2018-06-07T10:16:19.230Z\",\n  },\n  \"action\": {\n   \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Aliquam Nobis\",\n  },\n  \"phase\": \"Mitigation\",\n  \"name\": \"Provident aliquam\",\n  \"description\": \"Nobis provident aliquam nobis.\",\n  \"number\": 1,\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/tasks",
    "title": "Create New Task",
    "version": "1.0.0",
    "name": "PostTask",
    "group": "Task",
    "description": "<p>Create new incident</p>",
    "filename": "lib/task.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-incident.herokuapp.com/v1/tasks"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique task identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": false,
            "field": "incidentType",
            "description": "<p>An incident type(or nature) under which a task belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Incident",
            "optional": false,
            "field": "incident",
            "description": "<p>An incident under which a task is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "Action",
            "optional": false,
            "field": "action",
            "description": "<p>An action under which a task is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "phase",
            "defaultValue": "Mitigation",
            "description": "<p>Emergency(or disaster) management phase under which a task is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name(or title) of a task.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about a task i.e additional details that clarify what a task is.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>Task number(or sequence) for ordering in relation to other action tasks.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when task was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when task was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"incidentType\": {\n   \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Flood\"\n   \"nature\": \"Natural\",\n   \"family\": \"Hydrological\",\n   \"color\": \"#F7EF18\",\n  },\n  \"incident\": {\n   \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Nobis\",\n   \"startedAt\": \"2018-06-06T10:16:19.230Z\",\n   \"endedAt\": \"2018-06-07T10:16:19.230Z\",\n  },\n  \"action\": {\n   \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Aliquam Nobis\",\n  },\n  \"phase\": \"Mitigation\",\n  \"name\": \"Provident aliquam\",\n  \"description\": \"Nobis provident aliquam nobis.\",\n  \"number\": 1,\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/tasks/:id",
    "title": "Put Existing Task",
    "version": "1.0.0",
    "name": "PutTask",
    "group": "Task",
    "description": "<p>Put existing incident</p>",
    "filename": "lib/task.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-incident.herokuapp.com/v1/tasks/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique task identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": false,
            "field": "incidentType",
            "description": "<p>An incident type(or nature) under which a task belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Incident",
            "optional": false,
            "field": "incident",
            "description": "<p>An incident under which a task is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "Action",
            "optional": false,
            "field": "action",
            "description": "<p>An action under which a task is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "phase",
            "defaultValue": "Mitigation",
            "description": "<p>Emergency(or disaster) management phase under which a task is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name(or title) of a task.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about a task i.e additional details that clarify what a task is.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>Task number(or sequence) for ordering in relation to other action tasks.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when task was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when task was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"incidentType\": {\n   \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Flood\"\n   \"nature\": \"Natural\",\n   \"family\": \"Hydrological\",\n   \"color\": \"#F7EF18\",\n  },\n  \"incident\": {\n   \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Nobis\",\n   \"startedAt\": \"2018-06-06T10:16:19.230Z\",\n   \"endedAt\": \"2018-06-07T10:16:19.230Z\",\n  },\n  \"action\": {\n   \"_id\": \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Aliquam Nobis\",\n  },\n  \"phase\": \"Mitigation\",\n  \"name\": \"Provident aliquam\",\n  \"description\": \"Nobis provident aliquam nobis.\",\n  \"number\": 1,\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  }
] });
