export const schema = {
    "models": {
        "Scroll": {
            "name": "Scroll",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "ScrollPercent": {
                    "name": "ScrollPercent",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "ScrollType": {
                    "name": "ScrollType",
                    "isArray": false,
                    "type": {
                        "enum": "ScrollType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "ScrollCategory": {
                    "name": "ScrollCategory",
                    "isArray": false,
                    "type": {
                        "enum": "ScrollCategory"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "ScrollStat": {
                    "name": "ScrollStat",
                    "isArray": false,
                    "type": {
                        "enum": "ScrollStat"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "Is_A": {
                    "name": "Is_A",
                    "isArray": false,
                    "type": {
                        "model": "Item"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "scrollIs_AId"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Scrolls",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Item": {
            "name": "Item",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "ItemID": {
                    "name": "ItemID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "ItemType": {
                    "name": "ItemType",
                    "isArray": false,
                    "type": {
                        "enum": "ItemType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "ItemName": {
                    "name": "ItemName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Has": {
                    "name": "Has",
                    "isArray": true,
                    "type": {
                        "model": "Price"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "ItemID"
                    }
                },
                "Is_A": {
                    "name": "Is_A",
                    "isArray": false,
                    "type": {
                        "model": "Scroll"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": "Is_A",
                        "targetName": "itemIs_AId"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "itemIs_AId": {
                    "name": "itemIs_AId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Items",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Price": {
            "name": "Price",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "ItemID": {
                    "name": "ItemID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "TimeOfPrice": {
                    "name": "TimeOfPrice",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "PriceOfItem": {
                    "name": "PriceOfItem",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "SubmittedUser": {
                    "name": "SubmittedUser",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Has": {
                    "name": "Has",
                    "isArray": false,
                    "type": {
                        "model": "Item"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "itemHasId"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Prices",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byItem",
                        "fields": [
                            "ItemID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "ScrollStat": {
            "name": "ScrollStat",
            "values": [
                "ACC",
                "ATT",
                "DEF",
                "DEX",
                "HP",
                "INT",
                "JUMP",
                "LUK",
                "MATT",
                "MDEF",
                "MP",
                "SPEED",
                "STR"
            ]
        },
        "ScrollType": {
            "name": "ScrollType",
            "values": [
                "BOTTOMWEAR",
                "CAPE",
                "GLOVES",
                "HELMET",
                "OVERALL",
                "SHIELD",
                "SHOES",
                "TOPWEAR",
                "BOW",
                "CLAW",
                "CROSSBOW",
                "DAGGER",
                "GUN",
                "KNUCKLER",
                "ONE_HANDED_AXE",
                "ONE_HANDED_BW",
                "ONE_HANDED_SWORD",
                "POLE_ARM",
                "SPEAR",
                "STAFF",
                "TWO_HANDED_AXE",
                "TWO_HANDED_BW",
                "TWO_HANDED_SWORD",
                "WAND",
                "JUMP",
                "PET_EQUIPMENT",
                "EARRING",
                "EYE_ACCESSORY",
                "FACE_ACCESSORY"
            ]
        },
        "ScrollCategory": {
            "name": "ScrollCategory",
            "values": [
                "ARMOR",
                "WEAPON",
                "PET_EQUIPMENT",
                "ACCESSORY"
            ]
        },
        "ItemType": {
            "name": "ItemType",
            "values": [
                "SCROLL"
            ]
        }
    },
    "nonModels": {},
    "version": "63c933ca2ad35990d479253405e7ae60"
};