"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Prefixes_1 = require("./Prefixes");
var Types;
(function (Types) {
    let SBOL2;
    (function (SBOL2) {
        SBOL2.ModuleDefinition = Prefixes_1.Prefixes.sbol2 + 'ModuleDefinition';
        SBOL2.ComponentDefinition = Prefixes_1.Prefixes.sbol2 + 'ComponentDefinition';
        SBOL2.Module = Prefixes_1.Prefixes.sbol2 + 'Module';
        SBOL2.Component = Prefixes_1.Prefixes.sbol2 + 'Component';
        SBOL2.Range = Prefixes_1.Prefixes.sbol2 + 'Range';
        SBOL2.SequenceAnnotation = Prefixes_1.Prefixes.sbol2 + 'SequenceAnnotation';
        SBOL2.SequenceConstraint = Prefixes_1.Prefixes.sbol2 + 'SequenceConstraint';
        SBOL2.Interaction = Prefixes_1.Prefixes.sbol2 + 'Interaction';
        SBOL2.Participation = Prefixes_1.Prefixes.sbol2 + 'Participation';
        SBOL2.Collection = Prefixes_1.Prefixes.sbol2 + 'Collection';
        SBOL2.FunctionalComponent = Prefixes_1.Prefixes.sbol2 + 'FunctionalComponent';
        SBOL2.Sequence = Prefixes_1.Prefixes.sbol2 + 'Sequence';
        SBOL2.MapsTo = Prefixes_1.Prefixes.sbol2 + 'MapsTo';
        SBOL2.GenericLocation = Prefixes_1.Prefixes.sbol2 + 'GenericLocation';
    })(SBOL2 = Types.SBOL2 || (Types.SBOL2 = {}));
    let SBOLX;
    (function (SBOLX) {
        SBOLX.Component = Prefixes_1.Prefixes.sbolx + 'Component';
        SBOLX.SubComponent = Prefixes_1.Prefixes.sbolx + 'SubComponent';
        SBOLX.Range = Prefixes_1.Prefixes.sbolx + 'Range';
        SBOLX.SequenceConstraint = Prefixes_1.Prefixes.sbolx + 'SequenceConstraint';
        SBOLX.Interaction = Prefixes_1.Prefixes.sbolx + 'Interaction';
        SBOLX.Participation = Prefixes_1.Prefixes.sbolx + 'Participation';
        SBOLX.Collection = Prefixes_1.Prefixes.sbolx + 'Collection';
        SBOLX.Sequence = Prefixes_1.Prefixes.sbolx + 'Sequence';
        SBOLX.OrientedLocation = Prefixes_1.Prefixes.sbolx + 'OrientedLocation';
        SBOLX.SequenceFeature = Prefixes_1.Prefixes.sbolx + 'SequenceFeature';
    })(SBOLX = Types.SBOLX || (Types.SBOLX = {}));
    let Visual;
    (function (Visual) {
        Visual.ModuleDepiction = Prefixes_1.Prefixes.visual + 'ModuleDepiction';
        Visual.ComponentDepiction = Prefixes_1.Prefixes.visual + 'ComponentDepiction';
        Visual.Glyph = Prefixes_1.Prefixes.visual + 'Glyph';
        Visual.Label = Prefixes_1.Prefixes.visual + 'Label';
    })(Visual = Types.Visual || (Types.Visual = {}));
    let SyBiOnt;
    (function (SyBiOnt) {
        SyBiOnt.Protein = Prefixes_1.Prefixes.sybio + 'Protein';
        SyBiOnt.InduciblePromoter = Prefixes_1.Prefixes.sybio + 'InduciblePromoter';
    })(SyBiOnt = Types.SyBiOnt || (Types.SyBiOnt = {}));
    let Enrichment;
    (function (Enrichment) {
        Enrichment.GeneProduct = Prefixes_1.Prefixes.enrichment + 'GeneProduct';
    })(Enrichment = Types.Enrichment || (Types.Enrichment = {}));
})(Types = exports.Types || (exports.Types = {}));
//# sourceMappingURL=Types.js.map