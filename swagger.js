
const swagger = {
  swagger: '2.0',
  info: {
    "version": "1.0.0", 
    "title": "GNEWS Simple API",
    "description": "this API fetches articles by specified filters",
    "license": {
      "name": "MIT",
      "url": "https://opensource.org/licenses/MIT"
    }
  },
  "host": "localhost:4000",
  "basePath": "/",
  "tags": [
    {
      "name": "Users",
      "description": "API for users in the system"
    }
  ],
  "schemes": ["http"],
  "produces": ["application/json"],
  "paths": {
    "/articles/2?keyword=whatsapp": {
      "get": {
        "tags": ["Article"],
        "description": "Get all articles from GNEWS API by amount and keyword",
        "produces": ["application/json"],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/Article"
            }
          }
        }
      }
    },
    "/articles/flowers": {
      "get": {
        "tags": ["Article"],
        "summary": "Get all articles from GNEWS API by keywords",
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/Article"
            }
          }
        }
      }
    },
    "/articles/summer": {
      "get": {
        "tags": ["Article"],
        "summary": "Get all articles from GNEWS API by keywords",
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/Article"
            }
          }
        }
      }
    },
    "/articles/2/cars": {
      "get": {
        "tags": ["Article"],
        "summary": "Get all articles from GNEWS API by amount and keywords",
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/Article"
            }
          }
        }
      }
    },
    "/articles/3/reports?lang=en&title=y": {
      "get": {
        "tags": ["Article"],
        "summary": "Get all articles from GNEWS API by amount, keyword, language and title",
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/Article"
            }
          }
        }
      }
    },
  },
  "definitions": {
    "Article": {
      "required": ["keyword"],
      "properties": {
        "keyword": {
          "type": "string",
          "descriptions": "By this parameters articles are sorted"
        },
        "amount": {
          "type": "number",
          "descriptions": "Maximum amount of articles"
        },
        "lang": {
          "type": "string",
          "descriptions": "Artilce's language "
        },
        "title": {
          "type": "string",
          "descriptions": "Search by title | yes or no"
        },
      }
    }
    }
}

export default swagger