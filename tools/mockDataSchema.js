export const schema = {
    "type": "object",
    "properties": {
      "users": {
        "type": "array",
        "minItems": 3,
        "maxItems": 5,
        "items": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "unique": true,
              "minimum": 1
            },
            "firstName": {
              "type": "string",
              "faker": "name.firstName"
            },
            "lastName": {
              "type": "string",
              "faker": "name.lastName"
            },
            "email": {
              "type": "string",
              "faker": "internet.email"
            }
          },
          "required": ["id", "firstName", "lastName", "email"]
        }
      },
      "tasks": {
        "minItems": 20,
        "items": {
            "type": "object", 
            "properties": {
                "message": {
                    "type": "string"
                },
                "author": {
                    "type": "string",
                    "faker": {
                        "fake": "{{name.suffix}} {{name.firstName}}"
                    }
                },
                "completed": {
                    "type": "boolean"
                },
                "createdAt": {
                    "type": "integer",
                    "minimum": 1537489770639,
                    "maximum": 1547489770639
                }
            }, 
            "required": ["message", "author", "completed", "createdAt"]
        }
    }
    },
    "required": ["users"]
  };