"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Specifiers_1 = require("../Specifiers");
const roles = [
    {
        name: 'CDS',
        uri: Specifiers_1.Specifiers.SBOL2.Role.CDS,
    },
    {
        name: 'Engineered Region',
        uri: Specifiers_1.Specifiers.SBOL2.Role.EngineeredRegion
    },
    {
        name: 'OriR',
        uri: Specifiers_1.Specifiers.SBOL2.Role.OriginOfReplication
    },
    {
        name: 'OriT',
        uri: Specifiers_1.Specifiers.SBOL2.Role.OriginOfTransfer
    },
    {
        name: 'Plasmid Backbone',
        uri: Specifiers_1.Specifiers.SBOL2.Role.PlasmidBackbone
    },
    {
        name: 'Promoter',
        uri: Specifiers_1.Specifiers.SBOL2.Role.Promoter
    },
    {
        name: 'RBS',
        uri: Specifiers_1.Specifiers.SBOL2.Role.RBS
    },
    {
        name: 'Restriction Site',
        uri: Specifiers_1.Specifiers.SBOL2.Role.RestrictionSite
    },
    {
        name: 'Terminator',
        uri: Specifiers_1.Specifiers.SBOL2.Role.Terminator
    }
];
const uriToName = new Map();
roles.forEach((role) => {
    uriToName.set(role.uri, role.name);
});
function roleURIToName(uri) {
    return uriToName.get(uri) || uri;
}
exports.roleURIToName = roleURIToName;
exports.default = roles;
//# sourceMappingURL=roles.js.map