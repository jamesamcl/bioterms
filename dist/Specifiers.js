"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Prefixes_1 = require("./Prefixes");
var Specifiers;
(function (Specifiers) {
    let SBOL2;
    (function (SBOL2) {
        let Orientation;
        (function (Orientation) {
            Orientation.Inline = Prefixes_1.Prefixes.sbol2 + 'inline';
            Orientation.ReverseComplement = Prefixes_1.Prefixes.sbol2 + 'reverseComplement';
        })(Orientation = SBOL2.Orientation || (SBOL2.Orientation = {}));
        let Direction;
        (function (Direction) {
            Direction.Input = Prefixes_1.Prefixes.sbol2 + 'in';
            Direction.Output = Prefixes_1.Prefixes.sbol2 + 'out';
            Direction.InputAndOutput = Prefixes_1.Prefixes.sbol2 + 'inout';
            Direction.None = Prefixes_1.Prefixes.sbol2 + 'none';
        })(Direction = SBOL2.Direction || (SBOL2.Direction = {}));
        let Access;
        (function (Access) {
            Access.PublicAccess = Prefixes_1.Prefixes.sbol2 + 'public';
            Access.PrivateAccess = Prefixes_1.Prefixes.sbol2 + 'private';
        })(Access = SBOL2.Access || (SBOL2.Access = {}));
        let Role;
        (function (Role) {
            Role.CDS = Prefixes_1.Prefixes.sequenceOntologyIdentifiersOrg + 'SO:0000316';
            Role.Promoter = Prefixes_1.Prefixes.sequenceOntologyIdentifiersOrg + 'SO:0000167';
            Role.RBS = Prefixes_1.Prefixes.sequenceOntologyIdentifiersOrg + 'SO:0000139';
            Role.RestrictionSite = Prefixes_1.Prefixes.sequenceOntologyIdentifiersOrg + 'SO:0001687';
            Role.Terminator = Prefixes_1.Prefixes.sequenceOntologyIdentifiersOrg + 'SO:0000141';
            Role.OriginOfReplication = Prefixes_1.Prefixes.sequenceOntologyIdentifiersOrg + 'SO:0000296';
            Role.OriginOfTransfer = Prefixes_1.Prefixes.sequenceOntologyIdentifiersOrg + 'SO:0000724';
            Role.PlasmidBackbone = Prefixes_1.Prefixes.sequenceOntologyIdentifiersOrg + 'SO:0000755';
            Role.EngineeredRegion = Prefixes_1.Prefixes.sequenceOntologyIdentifiersOrg + 'SO:0000804';
        })(Role = SBOL2.Role || (SBOL2.Role = {}));
        let Type;
        (function (Type) {
            Type.DNA = 'http://www.biopax.org/release/biopax-level3.owl#DnaRegion';
            Type.RNA = 'http://www.biopax.org/release/biopax-level3.owl#RnaRegion';
            Type.Protein = 'http://www.biopax.org/release/biopax-level3.owl#Protein';
            Type.SmallMolecule = 'http://www.biopax.org/release/biopax-level3.owl#SmallMolecule';
            Type.Complex = 'http://www.biopax.org/release/biopax-level3.owl#Complex';
            Type.Effector = 'http://identifiers.org/chebi/CHEBI:35224';
            Type.Circular = Prefixes_1.Prefixes.sequenceOntologyIdentifiersOrg + 'SO:0000988';
        })(Type = SBOL2.Type || (SBOL2.Type = {}));
        let SequenceEncoding;
        (function (SequenceEncoding) {
            SequenceEncoding.NucleicAcid = 'http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html';
            SequenceEncoding.RNA = 'http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html';
            SequenceEncoding.AminoAcid = 'http://www.chem.qmul.ac.uk/iupac/AminoAcid/';
        })(SequenceEncoding = SBOL2.SequenceEncoding || (SBOL2.SequenceEncoding = {}));
        let SequenceConstraint;
        (function (SequenceConstraint) {
            SequenceConstraint.Precedes = Prefixes_1.Prefixes.sbol2 + 'precedes';
            SequenceConstraint.OppositeOrientationAs = Prefixes_1.Prefixes.sbol2 + 'oppositeOrientationAs';
        })(SequenceConstraint = SBOL2.SequenceConstraint || (SBOL2.SequenceConstraint = {}));
    })(SBOL2 = Specifiers.SBOL2 || (Specifiers.SBOL2 = {}));
    let SBOLX;
    (function (SBOLX) {
        let Orientation;
        (function (Orientation) {
            Orientation.Inline = Prefixes_1.Prefixes.sbolx + 'inline';
            Orientation.ReverseComplement = Prefixes_1.Prefixes.sbolx + 'reverseComplement';
        })(Orientation = SBOLX.Orientation || (SBOLX.Orientation = {}));
        let Direction;
        (function (Direction) {
            Direction.Input = Prefixes_1.Prefixes.sbolx + 'in';
            Direction.Output = Prefixes_1.Prefixes.sbolx + 'out';
            Direction.InputAndOutput = Prefixes_1.Prefixes.sbolx + 'inout';
            Direction.None = Prefixes_1.Prefixes.sbolx + 'none';
        })(Direction = SBOLX.Direction || (SBOLX.Direction = {}));
        let Access;
        (function (Access) {
            Access.PublicAccess = Prefixes_1.Prefixes.sbolx + 'public';
            Access.PrivateAccess = Prefixes_1.Prefixes.sbolx + 'private';
        })(Access = SBOLX.Access || (SBOLX.Access = {}));
        let Role;
        (function (Role) {
            Role.CDS = Prefixes_1.Prefixes.sequenceOntologyIdentifiersOrg + 'SO:0000316';
            Role.Promoter = Prefixes_1.Prefixes.sequenceOntologyIdentifiersOrg + 'SO:0000167';
            Role.RBS = Prefixes_1.Prefixes.sequenceOntologyIdentifiersOrg + 'SO:0000139';
            Role.RestrictionSite = Prefixes_1.Prefixes.sequenceOntologyIdentifiersOrg + 'SO:0001687';
            Role.Terminator = Prefixes_1.Prefixes.sequenceOntologyIdentifiersOrg + 'SO:0000141';
            Role.OriginOfReplication = Prefixes_1.Prefixes.sequenceOntologyIdentifiersOrg + 'SO:0000296';
            Role.OriginOfTransfer = Prefixes_1.Prefixes.sequenceOntologyIdentifiersOrg + 'SO:0000724';
            Role.PlasmidBackbone = Prefixes_1.Prefixes.sequenceOntologyIdentifiersOrg + 'SO:0000755';
            Role.EngineeredRegion = Prefixes_1.Prefixes.sequenceOntologyIdentifiersOrg + 'SO:0000804';
        })(Role = SBOLX.Role || (SBOLX.Role = {}));
        let Type;
        (function (Type) {
            Type.DNA = 'http://www.biopax.org/release/biopax-level3.owl#DnaRegion';
            Type.RNA = 'http://www.biopax.org/release/biopax-level3.owl#RnaRegion';
            Type.Protein = 'http://www.biopax.org/release/biopax-level3.owl#Protein';
            Type.SmallMolecule = 'http://www.biopax.org/release/biopax-level3.owl#SmallMolecule';
            Type.Complex = 'http://www.biopax.org/release/biopax-level3.owl#Complex';
            Type.Effector = 'http://identifiers.org/chebi/CHEBI:35224';
            Type.Circular = Prefixes_1.Prefixes.sequenceOntologyIdentifiersOrg + 'SO:0000988';
        })(Type = SBOLX.Type || (SBOLX.Type = {}));
        let SequenceEncoding;
        (function (SequenceEncoding) {
            SequenceEncoding.NucleicAcid = 'http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html';
            SequenceEncoding.RNA = 'http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html';
            SequenceEncoding.AminoAcid = 'http://www.chem.qmul.ac.uk/iupac/AminoAcid/';
        })(SequenceEncoding = SBOLX.SequenceEncoding || (SBOLX.SequenceEncoding = {}));
        let SequenceConstraint;
        (function (SequenceConstraint) {
            SequenceConstraint.Precedes = Prefixes_1.Prefixes.sbolx + 'precedes';
            SequenceConstraint.OppositeOrientationAs = Prefixes_1.Prefixes.sbolx + 'oppositeOrientationAs';
        })(SequenceConstraint = SBOLX.SequenceConstraint || (SBOLX.SequenceConstraint = {}));
    })(SBOLX = Specifiers.SBOLX || (Specifiers.SBOLX = {}));
    let Visual;
    (function (Visual) {
        /* opacity
         */
        Visual.Blackbox = Prefixes_1.Prefixes.visual + 'blackbox';
        Visual.Whitebox = Prefixes_1.Prefixes.visual + 'whitebox';
        /* display modes
         */
        Visual.Float = Prefixes_1.Prefixes.visual + 'float';
        Visual.Backbone = Prefixes_1.Prefixes.visual + 'backbone';
        /* orientation
         */
        Visual.Forward = Prefixes_1.Prefixes.visual + 'forward';
        Visual.Reverse = Prefixes_1.Prefixes.visual + 'reverse';
        /* expandability
         */
        Visual.Expandable = Prefixes_1.Prefixes.visual + 'expandable';
        Visual.NotExpandable = Prefixes_1.Prefixes.visual + 'notExpandable';
        Visual.AnchorTop = Prefixes_1.Prefixes.visual + 'anchorTop';
        Visual.AnchorMid = Prefixes_1.Prefixes.visual + 'anchorMid';
        Visual.AnchorBottom = Prefixes_1.Prefixes.visual + 'anchorBottom';
    })(Visual = Specifiers.Visual || (Specifiers.Visual = {}));
    let SBO;
    (function (SBO) {
        SBO.Inhibition = Prefixes_1.Prefixes.sbo + 'SBO:0000169';
        SBO.Inhibitor = Prefixes_1.Prefixes.sbo + 'SBO:0000020';
        SBO.Inhibited = Prefixes_1.Prefixes.sbo + 'SBO:0000642';
        SBO.Stimulation = Prefixes_1.Prefixes.sbo + 'SBO:0000170';
        SBO.Stimulator = Prefixes_1.Prefixes.sbo + 'SBO:0000459';
        SBO.Stimulated = Prefixes_1.Prefixes.sbo + 'SBO:0000643';
        SBO.GeneticProduction = Prefixes_1.Prefixes.sbo + 'SBO:0000589';
        SBO.Product = Prefixes_1.Prefixes.sbo + 'SBO:0000011';
        SBO.Modifier = Prefixes_1.Prefixes.sbo + 'SBO:0000019';
        SBO.Promoter = Prefixes_1.Prefixes.sbo + 'SBO:0000598';
    })(SBO = Specifiers.SBO || (Specifiers.SBO = {}));
    let GO;
    (function (GO) {
        GO.ProteinDepolymerization = Prefixes_1.Prefixes.go + 'GO:0051261';
        GO.CovalentChromatinModification = Prefixes_1.Prefixes.go + 'GO:0016569';
        GO.ProteinProcessing = Prefixes_1.Prefixes.go + 'GO:0016485';
        GO.ProteinBinding = Prefixes_1.Prefixes.go + 'GO:0005515';
        GO.CatalyticActivity = Prefixes_1.Prefixes.go + 'GO:0003824';
    })(GO = Specifiers.GO || (Specifiers.GO = {}));
})(Specifiers = exports.Specifiers || (exports.Specifiers = {}));
//# sourceMappingURL=Specifiers.js.map