
import { Prefixes } from './Prefixes'

export namespace Specifiers {

    export namespace SBOL2 {

        export namespace Orientation {
            export const Inline:string = Prefixes.sbol2 + 'inline'
            export const ReverseComplement:string = Prefixes.sbol2 + 'reverseComplement'
        }
        
        export namespace Direction {

            export const Input:string = Prefixes.sbol2 + 'in'
            export const Output:string = Prefixes.sbol2 + 'out'
            export const InputAndOutput:string = Prefixes.sbol2 + 'inout'
            export const None:string = Prefixes.sbol2 + 'none'

        }
        
        export namespace Access {
            export const PublicAccess:string = Prefixes.sbol2 + 'public'
            export const PrivateAccess:string = Prefixes.sbol2 + 'private'
        }

        export namespace Type {
	    export const DNA:string = Prefixes.sboNs + '0000251'
            export const RNA:string = Prefixes.sboNs + '0000250'
            export const Protein:string = Prefixes.sboNs + '0000252'
            export const SmallMolecule:string = Prefixes.sboNs + '0000247'
            export const Complex:string = Prefixes.sboNs + '0000253'
            export const Effector:string = 'http://identifiers.org/chebi/CHEBI:35224'
            export const Circular:string = Prefixes.sequenceOntologyIdentifiersOrg + 'SO:0000988'
        }

        export namespace SequenceEncoding {
            export const NucleicAcid:string = 'https://identifiers.org/edam:format_1207'
            export const RNA:string = 'https://identifiers.org/edam:format_1207'
            export const AminoAcid:string = 'https://identifiers.org/edam:format_1208'
        }

        export namespace SequenceConstraint {
            export const Precedes:string = Prefixes.sbol2 + 'precedes'
            export const OppositeOrientationAs:string = Prefixes.sbol2 + 'oppositeOrientationAs'
        }

        export namespace ProvRole {
            export const Design:string = Prefixes.sbol2 + 'design'
            export const Build:string = Prefixes.sbol2 + 'build'
            export const Test:string = Prefixes.sbol2 + 'test'
            export const Learn:string = Prefixes.sbol2 + 'learn'
        }

        export namespace MapsToRefinement {
            export const UseLocal:string = Prefixes.sbol2 + 'useLocal'
            export const UseRemote:string = Prefixes.sbol2 + 'useRemote'
        }
    }

    export namespace SBOLX {

        export namespace Orientation {
            export const Inline:string = Prefixes.sbolx + 'inline'
            export const ReverseComplement:string = Prefixes.sbolx + 'reverseComplement'
        }
        
        export namespace Direction {

            export const Input:string = Prefixes.sbolx + 'in'
            export const Output:string = Prefixes.sbolx + 'out'
            export const InputAndOutput:string = Prefixes.sbolx + 'inout'
            export const None:string = Prefixes.sbolx + 'none'

        }
        
        export namespace Access {
            export const PublicAccess:string = Prefixes.sbolx + 'public'
            export const PrivateAccess:string = Prefixes.sbolx + 'private'
        }

        export namespace Type {
            export const DNA:string = 'http://www.biopax.org/release/biopax-level3.owl#DnaRegion'
            export const RNA:string = 'http://www.biopax.org/release/biopax-level3.owl#RnaRegion'
            export const Protein:string = 'http://www.biopax.org/release/biopax-level3.owl#Protein'
            export const SmallMolecule:string = 'http://www.biopax.org/release/biopax-level3.owl#SmallMolecule'
            export const Complex:string = 'http://www.biopax.org/release/biopax-level3.owl#Complex'
            export const Effector:string = 'http://identifiers.org/chebi/CHEBI:35224'
            export const Circular:string = Prefixes.sequenceOntologyIdentifiersOrg + 'SO:0000988'
        }

        export namespace SequenceEncoding {
            export const NucleicAcid:string = 'http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html'
            export const RNA:string = 'http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html'
            export const AminoAcid:string = 'http://www.chem.qmul.ac.uk/iupac/AminoAcid/'
        }

        export namespace SequenceConstraint {
            export const Precedes:string = Prefixes.sbolx + 'precedes'
            export const OppositeOrientationAs:string = Prefixes.sbolx + 'oppositeOrientationAs'
        }

        export namespace ProvRole {
            export const Design:string = Prefixes.sbolx + 'design'
            export const Build:string = Prefixes.sbolx + 'build'
            export const Test:string = Prefixes.sbolx + 'test'
            export const Learn:string = Prefixes.sbolx + 'learn'
        }

        export namespace MapsToRefinement {
            export const UseLocal:string = Prefixes.sbolx + 'useLocal'
            export const UseRemote:string = Prefixes.sbolx + 'useRemote'
        }

    }

    export namespace SBOL3 {

        export namespace Orientation {
            export const Inline:string = Prefixes.sbol3 + 'inline'
            export const ReverseComplement:string = Prefixes.sbol3 + 'reverseComplement'
        }
        
        export namespace Direction {

            export const Input:string = Prefixes.sbol3 + 'in'
            export const Output:string = Prefixes.sbol3 + 'out'
            export const InputAndOutput:string = Prefixes.sbol3 + 'inout'
            export const None:string = Prefixes.sbol3 + 'none'

        }
        
        export namespace Access {
            export const PublicAccess:string = Prefixes.sbol3 + 'public'
            export const PrivateAccess:string = Prefixes.sbol3 + 'private'
        }

        export namespace Type {
            export const DNA:string = 'http://www.biopax.org/release/biopax-level3.owl#DnaRegion'
            export const RNA:string = 'http://www.biopax.org/release/biopax-level3.owl#RnaRegion'
            export const Protein:string = 'http://www.biopax.org/release/biopax-level3.owl#Protein'
            export const SmallMolecule:string = 'http://www.biopax.org/release/biopax-level3.owl#SmallMolecule'
            export const Complex:string = 'http://www.biopax.org/release/biopax-level3.owl#Complex'
            export const Effector:string = 'http://identifiers.org/chebi/CHEBI:35224'
            export const Circular:string = Prefixes.sequenceOntologyIdentifiersOrg + 'SO:0000988'
        }

        export namespace SequenceEncoding {
            export const NucleicAcid:string = 'http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html'
            export const RNA:string = 'http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html'
            export const AminoAcid:string = 'http://www.chem.qmul.ac.uk/iupac/AminoAcid/'
        }

        export namespace Constraint {
            export const Precedes:string = Prefixes.sbol3 + 'precedes'
            export const OppositeOrientationAs:string = Prefixes.sbol3 + 'oppositeOrientationAs'
        }

        export namespace ProvRole {
            export const Design:string = Prefixes.sbol3 + 'design'
            export const Build:string = Prefixes.sbol3 + 'build'
            export const Test:string = Prefixes.sbol3 + 'test'
            export const Learn:string = Prefixes.sbol3 + 'learn'
        }

        export namespace MapsToRefinement {
            export const UseLocal:string = Prefixes.sbol3 + 'useLocal'
            export const UseRemote:string = Prefixes.sbol3 + 'useRemote'
        }

    }



    export namespace Visual {

        /* opacity
         */
        export const Blackbox:string = Prefixes.visual + 'blackbox'
        export const Whitebox:string = Prefixes.visual + 'whitebox'

        /* display modes
         */
        export const Float:string = Prefixes.visual + 'float'
        export const Backbone:string = Prefixes.visual + 'backbone'

        /* orientation
         */
        export const Forward:string = Prefixes.visual + 'forward'
        export const Reverse:string = Prefixes.visual + 'reverse'

        /* expandability
         */
        export const Expandable:string = Prefixes.visual + 'expandable'
        export const NotExpandable:string = Prefixes.visual + 'notExpandable'

        export const AnchorTop:string = Prefixes.visual + 'anchorTop'
        export const AnchorMid:string = Prefixes.visual + 'anchorMid'
        export const AnchorBottom:string = Prefixes.visual + 'anchorBottom'
    }

    export namespace SO {
        export const CDS:string = Prefixes.sequenceOntologyIdentifiersOrg + 'SO:0000316'
        export const Promoter:string = Prefixes.sequenceOntologyIdentifiersOrg + 'SO:0000167'
        export const RBS:string = Prefixes.sequenceOntologyIdentifiersOrg + 'SO:0000139'
        export const RestrictionSite:string = Prefixes.sequenceOntologyIdentifiersOrg + 'SO:0001687'
        export const Terminator:string = Prefixes.sequenceOntologyIdentifiersOrg + 'SO:0000141'
        export const OriginOfReplication:string = Prefixes.sequenceOntologyIdentifiersOrg + 'SO:0000296'
        export const OriginOfTransfer:string = Prefixes.sequenceOntologyIdentifiersOrg + 'SO:0000724'
        export const PlasmidBackbone:string = Prefixes.sequenceOntologyIdentifiersOrg + 'SO:0000755'
        export const EngineeredRegion:string = Prefixes.sequenceOntologyIdentifiersOrg + 'SO:0000804'
    }

    export namespace SBO {
        export const Inhibition:string = Prefixes.sbo + 'SBO:0000169'
        export const Inhibitor:string = Prefixes.sbo + 'SBO:0000020'
        export const Inhibited:string = Prefixes.sbo + 'SBO:0000642'
        export const Stimulation:string = Prefixes.sbo + 'SBO:0000170'
        export const Stimulator:string = Prefixes.sbo + 'SBO:0000459'
        export const Stimulated:string = Prefixes.sbo + 'SBO:0000643'
        export const GeneticProduction:string = Prefixes.sbo + 'SBO:0000589'
        export const Product:string = Prefixes.sbo + 'SBO:0000011'
        export const Modifier:string = Prefixes.sbo + 'SBO:0000019'
        export const Promoter:string = Prefixes.sbo + 'SBO:0000598'
        export const Control:string = Prefixes.sbo + 'SBO:0000168'
    }

    export namespace GO {
        export const ProteinDepolymerization:string = Prefixes.go + 'GO:0051261'
        export const CovalentChromatinModification:string = Prefixes.go + 'GO:0016569'
        export const ProteinProcessing:string = Prefixes.go + 'GO:0016485'
        export const ProteinBinding:string = Prefixes.go + 'GO:0005515'
        export const CatalyticActivity:string = Prefixes.go + 'GO:0003824'
    }

    export namespace SyBiOnt {
	    export const Bidirectional:string = Prefixes.sybio + 'Bidirectional'
	    export const LeftToRight:string = Prefixes.sybio + 'LeftToRight'
	    export const RightToLeft:string = Prefixes.sybio + 'RightToLeft'
	    export const UndefinedDirection:string = Prefixes.sybio + 'UndefinedDirection'
	    export const LeftSide:string = Prefixes.sybio + 'LeftSide'
	    export const RightSide:string = Prefixes.sybio + 'RightSide'
    }


}

