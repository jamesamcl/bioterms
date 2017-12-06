"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Prefixes_1 = require("./Prefixes");
var Predicates;
(function (Predicates) {
    Predicates.a = Prefixes_1.Prefixes.rdf + 'type';
    let SBOL2;
    (function (SBOL2) {
        SBOL2.component = Prefixes_1.Prefixes.sbol2 + 'component';
        SBOL2.module = Prefixes_1.Prefixes.sbol2 + 'module';
        SBOL2.definition = Prefixes_1.Prefixes.sbol2 + 'definition';
        SBOL2.functionalComponent = Prefixes_1.Prefixes.sbol2 + 'functionalComponent';
        SBOL2.role = Prefixes_1.Prefixes.sbol2 + 'role';
        SBOL2.location = Prefixes_1.Prefixes.sbol2 + 'location';
        SBOL2.start = Prefixes_1.Prefixes.sbol2 + 'start';
        SBOL2.end = Prefixes_1.Prefixes.sbol2 + 'end';
        SBOL2.sequenceAnnotation = Prefixes_1.Prefixes.sbol2 + 'sequenceAnnotation';
        SBOL2.sequenceConstraint = Prefixes_1.Prefixes.sbol2 + 'sequenceConstraint';
        SBOL2.orientation = Prefixes_1.Prefixes.sbol2 + 'orientation';
        SBOL2.displayId = Prefixes_1.Prefixes.sbol2 + 'displayId';
        SBOL2.version = Prefixes_1.Prefixes.sbol2 + 'version';
        SBOL2.access = Prefixes_1.Prefixes.sbol2 + 'access';
        SBOL2.mapsTo = Prefixes_1.Prefixes.sbol2 + 'mapsTo';
        SBOL2.local = Prefixes_1.Prefixes.sbol2 + 'local';
        SBOL2.remote = Prefixes_1.Prefixes.sbol2 + 'remote';
        SBOL2.interaction = Prefixes_1.Prefixes.sbol2 + 'interaction';
        SBOL2.participation = Prefixes_1.Prefixes.sbol2 + 'participation';
        SBOL2.participant = Prefixes_1.Prefixes.sbol2 + 'participant';
        SBOL2.type = Prefixes_1.Prefixes.sbol2 + 'type';
        SBOL2.sequence = Prefixes_1.Prefixes.sbol2 + 'sequence';
        SBOL2.encoding = Prefixes_1.Prefixes.sbol2 + 'encoding';
        SBOL2.elements = Prefixes_1.Prefixes.sbol2 + 'elements';
        SBOL2.persistentIdentity = Prefixes_1.Prefixes.sbol2 + 'persistentIdentity';
        SBOL2.restriction = Prefixes_1.Prefixes.sbol2 + 'restriction';
        SBOL2.subject = Prefixes_1.Prefixes.sbol2 + 'subject';
        SBOL2.object = Prefixes_1.Prefixes.sbol2 + 'object';
        SBOL2.member = Prefixes_1.Prefixes.sbol2 + 'member';
    })(SBOL2 = Predicates.SBOL2 || (Predicates.SBOL2 = {}));
    let SBOLX;
    (function (SBOLX) {
        SBOLX.hasSubComponent = Prefixes_1.Prefixes.sbolx + 'hasSubComponent';
        SBOLX.instanceOf = Prefixes_1.Prefixes.sbolx + 'instanceOf';
        SBOLX.hasRole = Prefixes_1.Prefixes.sbolx + 'hasRole';
        SBOLX.hasLocation = Prefixes_1.Prefixes.sbolx + 'hasLocation';
        SBOLX.rangeStart = Prefixes_1.Prefixes.sbolx + 'rangeStart';
        SBOLX.rangeEnd = Prefixes_1.Prefixes.sbolx + 'rangeEnd';
        SBOLX.hasSequenceConstraint = Prefixes_1.Prefixes.sbolx + 'hasSequenceConstraint';
        SBOLX.orientation = Prefixes_1.Prefixes.sbolx + 'orientation';
        SBOLX.id = Prefixes_1.Prefixes.sbolx + 'id';
        SBOLX.version = Prefixes_1.Prefixes.sbolx + 'version';
        SBOLX.hasInteraction = Prefixes_1.Prefixes.sbolx + 'hasInteraction';
        SBOLX.hasParticipation = Prefixes_1.Prefixes.sbolx + 'hasParticipation';
        SBOLX.participant = Prefixes_1.Prefixes.sbolx + 'participant';
        SBOLX.type = Prefixes_1.Prefixes.sbolx + 'type';
        SBOLX.usesSequence = Prefixes_1.Prefixes.sbolx + 'usesSequence';
        SBOLX.sequenceEncoding = Prefixes_1.Prefixes.sbolx + 'sequenceEncoding';
        SBOLX.sequenceElements = Prefixes_1.Prefixes.sbolx + 'sequenceElements';
        SBOLX.persistentIdentity = Prefixes_1.Prefixes.sbolx + 'persistentIdentity';
        SBOLX.constraintRestriction = Prefixes_1.Prefixes.sbolx + 'constraintRestriction';
        SBOLX.constraintSubject = Prefixes_1.Prefixes.sbolx + 'constraintSubject';
        SBOLX.constraintObject = Prefixes_1.Prefixes.sbolx + 'constraintObject';
        SBOLX.hasSequenceFeature = Prefixes_1.Prefixes.sbolx + 'hasSequenceFeature';
        SBOLX.hasMember = Prefixes_1.Prefixes.sbolx + 'hasMember';
    })(SBOLX = Predicates.SBOLX || (Predicates.SBOLX = {}));
    let Dcterms;
    (function (Dcterms) {
        Dcterms.title = Prefixes_1.Prefixes.dcterms + 'title';
        Dcterms.description = Prefixes_1.Prefixes.dcterms + 'description';
    })(Dcterms = Predicates.Dcterms || (Predicates.Dcterms = {}));
    let SVG;
    (function (SVG) {
        SVG.fontFamily = Prefixes_1.Prefixes.svg + 'font-family';
        SVG.fontSize = Prefixes_1.Prefixes.svg + 'font-size';
        SVG.fontStyle = Prefixes_1.Prefixes.svg + 'font-style';
    })(SVG = Predicates.SVG || (Predicates.SVG = {}));
    let SyBiOnt;
    (function (SyBiOnt) {
        SyBiOnt.encodedBy = Prefixes_1.Prefixes.sybio + 'en_by';
    })(SyBiOnt = Predicates.SyBiOnt || (Predicates.SyBiOnt = {}));
    let Prov;
    (function (Prov) {
        Prov.wasDerivedFrom = Prefixes_1.Prefixes.prov + 'wasDerivedFrom';
    })(Prov = Predicates.Prov || (Predicates.Prov = {}));
    let Enrichment;
    (function (Enrichment) {
        Enrichment.hint = Prefixes_1.Prefixes.enrichment + 'hint';
        Enrichment.orfStart = Prefixes_1.Prefixes.enrichment + 'orfStart';
        Enrichment.orfEnd = Prefixes_1.Prefixes.enrichment + 'orfEnd';
    })(Enrichment = Predicates.Enrichment || (Predicates.Enrichment = {}));
})(Predicates = exports.Predicates || (exports.Predicates = {}));
//# sourceMappingURL=Predicates.js.map