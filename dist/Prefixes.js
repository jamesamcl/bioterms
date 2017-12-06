"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Prefixes;
(function (Prefixes) {
    Prefixes.sbol2 = 'http://sbols.org/v2#';
    Prefixes.sbolx = 'http://sboldata.org/sbolx#';
    Prefixes.rdf = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#';
    Prefixes.visual = 'http://wiki.synbiohub.org/wiki/Terms/visual#';
    Prefixes.sequenceOntologyPurl = 'http://purl.org/obo/owl/SO#';
    Prefixes.sequenceOntologyIdentifiersOrg = 'http://identifiers.org/so/';
    Prefixes.go = 'http://identifiers.org/go/';
    Prefixes.dcterms = 'http://purl.org/dc/terms/';
    Prefixes.rdfs = 'http://www.w3.org/2000/01/rdf-schema#';
    Prefixes.svg = 'http://www.w3.org/2000/svg#';
    Prefixes.sbo = 'http://identifiers.org/biomodels.sbo/';
    Prefixes.sybio = 'http://www.sybio.ncl.ac.uk#';
    Prefixes.prov = 'http://www.w3.org/ns/prov#';
    Prefixes.enrichment = 'http://wiki.synbiohub.org/wiki/Terms/enrichment#';
})(Prefixes = exports.Prefixes || (exports.Prefixes = {}));
function prefixify(uri) {
    uri = '' + uri;
    for (var i = 0; i < keys.length; ++i) {
        const prefix = keys[i];
        const uriPrefix = Prefixes[prefix];
        if (uri.indexOf(uriPrefix) === 0) {
            return prefix + ':' + uri.slice(uriPrefix.length);
        }
    }
    return uri;
}
exports.prefixify = prefixify;
const keys = Object.keys(Prefixes);
//# sourceMappingURL=Prefixes.js.map