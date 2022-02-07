
import { Prefixes } from './Prefixes'

export namespace Types {

    export namespace SBOL1 {
        export const DnaComponent:string = Prefixes.sbol1 + 'DnaComponent'
        export const DnaSequence:string = Prefixes.sbol1 + 'DnaSequence'
        export const Collection:string = Prefixes.sbol1 + 'Collection'
        export const SequenceAnnotation:string = Prefixes.sbol1 + 'SequenceAnnotation'
    }

    export namespace SBOL2 {
        export const ModuleDefinition:string = Prefixes.sbol2 + 'ModuleDefinition'
        export const ComponentDefinition:string = Prefixes.sbol2 + 'ComponentDefinition'
        export const Module:string = Prefixes.sbol2 + 'Module'
        export const Component:string = Prefixes.sbol2 + 'Component'
        export const Range:string = Prefixes.sbol2 + 'Range'
        export const Cut:string = Prefixes.sbol2 + 'Cut'
        export const GenericLocation:string = Prefixes.sbol2 + 'GenericLocation'
        export const SequenceAnnotation:string = Prefixes.sbol2 + 'SequenceAnnotation'
        export const SequenceConstraint:string = Prefixes.sbol2 + 'SequenceConstraint'
        export const Interaction:string = Prefixes.sbol2 + 'Interaction'
        export const Participation:string = Prefixes.sbol2 + 'Participation'
        export const Collection:string = Prefixes.sbol2 + 'Collection'
        export const FunctionalComponent:string = Prefixes.sbol2 + 'FunctionalComponent'
        export const Sequence:string = Prefixes.sbol2 + 'Sequence'
        export const MapsTo:string = Prefixes.sbol2 + 'MapsTo'
        export const Attachment:string = Prefixes.sbol2 + 'Attachment'
        export const Model:string = Prefixes.sbol2 + 'Model'
        export const Implementation:string = Prefixes.sbol2 + 'Implementation'
        export const Experiment:string = Prefixes.sbol2 + 'Experiment'
        export const ExperimentalData:string = Prefixes.sbol2 + 'ExperimentalData'
        export const CombinatorialDerivation:string = Prefixes.sbol2 + 'CombinatorialDerivation'
        export const VariableComponent:string = Prefixes.sbol2 + 'VariableComponent'
    }

    export namespace SBOLX {
        export const Component:string = Prefixes.sbolx + 'Component'
        export const SubComponent:string = Prefixes.sbolx + 'SubComponent'
        export const Range:string = Prefixes.sbolx + 'Range'
        export const Cut:string = Prefixes.sbolx + 'Cut'
        export const SequenceConstraint:string = Prefixes.sbolx + 'SequenceConstraint'
        export const Interaction:string = Prefixes.sbolx + 'Interaction'
        export const Participation:string = Prefixes.sbolx + 'Participation'
        export const Collection:string = Prefixes.sbolx + 'Collection'
        export const Sequence:string = Prefixes.sbolx + 'Sequence'
        export const OrientedLocation:string = Prefixes.sbolx + 'OrientedLocation'
        export const SequenceAnnotation:string = Prefixes.sbolx + 'SequenceAnnotation'
        export const Attachment:string = Prefixes.sbolx + 'Attachment'
        export const Model:string = Prefixes.sbolx + 'Model'
        export const Implementation:string = Prefixes.sbolx + 'Implementation'
        export const MapsTo:string = Prefixes.sbolx + 'MapsTo'
        export const Experiment:string = Prefixes.sbolx + 'Experiment'
        export const ExperimentalData:string = Prefixes.sbolx + 'ExperimentalData'
    }

    export namespace SBOL3 {
        export const Component:string = Prefixes.sbol3 + 'Component'
        export const SubComponent:string = Prefixes.sbol3 + 'SubComponent'
        export const Range:string = Prefixes.sbol3 + 'Range'
        export const Cut:string = Prefixes.sbol3 + 'Cut'
        export const EntireSequence:string = Prefixes.sbol3 + 'EntireSequence'
        export const Constraint:string = Prefixes.sbol3 + 'Constraint'
        export const Interaction:string = Prefixes.sbol3 + 'Interaction'
        export const Participation:string = Prefixes.sbol3 + 'Participation'
        export const Collection:string = Prefixes.sbol3 + 'Collection'
        export const Sequence:string = Prefixes.sbol3 + 'Sequence'
        export const OrientedLocation:string = Prefixes.sbol3 + 'OrientedLocation'
        export const SequenceFeature:string = Prefixes.sbol3 + 'SequenceFeature'
        export const Attachment:string = Prefixes.sbol3 + 'Attachment'
        export const Model:string = Prefixes.sbol3 + 'Model'
        export const Implementation:string = Prefixes.sbol3 + 'Implementation'
        export const MapsTo:string = Prefixes.sbol3 + 'MapsTo'
        export const Experiment:string = Prefixes.sbol3 + 'Experiment'
        export const ExperimentalData:string = Prefixes.sbol3 + 'ExperimentalData'
        export const Namespace:string = Prefixes.sbol3 + 'Namespace'
        export const CombinatorialDerivation:string = Prefixes.sbol3 + 'CombinatorialDerivation'
        export const VariableFeature:string = Prefixes.sbol3 + 'VariableFeature'
        export const Interface:string = Prefixes.sbol3 + 'Interface'
    }

    export namespace Visual {

        export const ModuleDepiction:string = Prefixes.visual + 'ModuleDepiction'
        export const ComponentDepiction:string = Prefixes.visual + 'ComponentDepiction'
        export const Glyph:string = Prefixes.visual + 'Glyph'
        export const Label:string = Prefixes.visual + 'Label'

    }

    export namespace SyBiOnt {

        export const Protein:string = Prefixes.sybio + 'Protein'
        export const InduciblePromoter:string = Prefixes.sybio + 'InduciblePromoter'
	export const Reaction:string = Prefixes.sybio + 'Reaction'
	export const ReactionParticipant:string = Prefixes.sybio + 'ReactionParticipant'
	export const Compound:string = Prefixes.sybio + 'Compound'


    }

    export namespace Prov {
        export const Agent:string = Prefixes.prov + 'Agent'
        export const Association:string = Prefixes.prov + 'Association'
        export const Activity:string = Prefixes.prov + 'Activity'
        export const Usage:string = Prefixes.prov + 'Usage'
        export const Plan:string = Prefixes.prov + 'Plan'
    }

    export namespace Enrichment {

        export const GeneProduct = Prefixes.enrichment + 'GeneProduct'

    }

    export namespace Measure {
        export const Measure = Prefixes.measure + 'Measure'
    }

}


