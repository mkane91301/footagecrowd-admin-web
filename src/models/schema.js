export const schema = {
    "models": {
        "Shot": {
            "name": "Shot",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "reelID": {
                    "name": "reelID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Title": {
                    "name": "Title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Description": {
                    "name": "Description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "DateCreated": {
                    "name": "DateCreated",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "City": {
                    "name": "City",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "State": {
                    "name": "State",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Country": {
                    "name": "Country",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Keywords": {
                    "name": "Keywords",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "Color": {
                    "name": "Color",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "UsageTypes": {
                    "name": "UsageTypes",
                    "isArray": true,
                    "type": {
                        "enum": "UsageType"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "AspectRatio": {
                    "name": "AspectRatio",
                    "isArray": false,
                    "type": {
                        "enum": "AspectRatio"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "Notes": {
                    "name": "Notes",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "GPS": {
                    "name": "GPS",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Shots",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byReel",
                        "fields": [
                            "reelID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
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
        "Reel": {
            "name": "Reel",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "collectionID": {
                    "name": "collectionID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Format": {
                    "name": "Format",
                    "isArray": false,
                    "type": {
                        "enum": "Format"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "Titl": {
                    "name": "Titl",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "ShootLocation": {
                    "name": "ShootLocation",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "ShootDate": {
                    "name": "ShootDate",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "ScanningFileNumber": {
                    "name": "ScanningFileNumber",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "BackupDriveName": {
                    "name": "BackupDriveName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "ReelNotes": {
                    "name": "ReelNotes",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "MediaUrl": {
                    "name": "MediaUrl",
                    "isArray": false,
                    "type": "AWSURL",
                    "isRequired": false,
                    "attributes": []
                },
                "Shots": {
                    "name": "Shots",
                    "isArray": true,
                    "type": {
                        "model": "Shot"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "reelID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Reels",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byCollection",
                        "fields": [
                            "collectionID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
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
        "Person": {
            "name": "Person",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "collectionID": {
                    "name": "collectionID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "RelationshipToCopyrightHolder": {
                    "name": "RelationshipToCopyrightHolder",
                    "isArray": false,
                    "type": {
                        "enum": "RelationshipToCopyrightHolder"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "LastName": {
                    "name": "LastName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "FirstName": {
                    "name": "FirstName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Address": {
                    "name": "Address",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "City": {
                    "name": "City",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "State": {
                    "name": "State",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "ZipCode": {
                    "name": "ZipCode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Country": {
                    "name": "Country",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Phone": {
                    "name": "Phone",
                    "isArray": false,
                    "type": "AWSPhone",
                    "isRequired": true,
                    "attributes": []
                },
                "ContactEmai": {
                    "name": "ContactEmai",
                    "isArray": false,
                    "type": "AWSEmail",
                    "isRequired": true,
                    "attributes": []
                },
                "PaypalEmail": {
                    "name": "PaypalEmail",
                    "isArray": false,
                    "type": "AWSEmail",
                    "isRequired": false,
                    "attributes": []
                },
                "Notes": {
                    "name": "Notes",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "ModelReleaseUrl": {
                    "name": "ModelReleaseUrl",
                    "isArray": false,
                    "type": "AWSURL",
                    "isRequired": false,
                    "attributes": []
                },
                "ImageUrl": {
                    "name": "ImageUrl",
                    "isArray": false,
                    "type": "AWSURL",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "People",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byCollection",
                        "fields": [
                            "collectionID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
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
        "Collection": {
            "name": "Collection",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Name": {
                    "name": "Name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "CopyrightHolder": {
                    "name": "CopyrightHolder",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "CopyrightHolderStatus": {
                    "name": "CopyrightHolderStatus",
                    "isArray": false,
                    "type": {
                        "enum": "CopyrightHolderStatus"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "LicensingAgentOrContact": {
                    "name": "LicensingAgentOrContact",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "LicensingAgreementUrl": {
                    "name": "LicensingAgreementUrl",
                    "isArray": false,
                    "type": "AWSURL",
                    "isRequired": false,
                    "attributes": []
                },
                "AdditionalNotes": {
                    "name": "AdditionalNotes",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Signatories": {
                    "name": "Signatories",
                    "isArray": true,
                    "type": {
                        "model": "Person"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "collectionID"
                    }
                },
                "Reels": {
                    "name": "Reels",
                    "isArray": true,
                    "type": {
                        "model": "Reel"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "collectionID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Collections",
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
                                "allow": "private",
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
        "AspectRatio": {
            "name": "AspectRatio",
            "values": [
                "FOURTOTHREE",
                "SIXTEENTONINE"
            ]
        },
        "UsageType": {
            "name": "UsageType",
            "values": [
                "EDITORIAL",
                "CREATIVE",
                "PUBLICDOMAIN",
                "RIGHTSREADY"
            ]
        },
        "Format": {
            "name": "Format",
            "values": [
                "EIGHTMM",
                "SUPEREIGHT",
                "SIXTEENMM",
                "PATHE",
                "THIRTYFIVEMM",
                "OTHER"
            ]
        },
        "RelationshipToCopyrightHolder": {
            "name": "RelationshipToCopyrightHolder",
            "values": [
                "PRIMARYCONTACT",
                "CHILD",
                "RELATIVE",
                "FRIEND",
                "NORELATION",
                "SELF"
            ]
        },
        "CopyrightHolderStatus": {
            "name": "CopyrightHolderStatus",
            "values": [
                "ALIVE",
                "DECEASED"
            ]
        }
    },
    "nonModels": {},
    "version": "88815c4f3a4528f2fdfe6dd278608596"
};