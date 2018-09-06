
import { Prefixes } from './Prefixes'

export namespace Predicates {

    export const a:string = Prefixes.rdf + 'type'

    export namespace SBOL2 {
        export const component:string = Prefixes.sbol2 + 'component'
        export const module:string = Prefixes.sbol2 + 'module'
        export const definition:string = Prefixes.sbol2 + 'definition'
        export const functionalComponent:string = Prefixes.sbol2 + 'functionalComponent'
        export const role:string = Prefixes.sbol2 + 'role'
        export const location:string = Prefixes.sbol2 + 'location'
        export const start:string = Prefixes.sbol2 + 'start'
        export const end:string = Prefixes.sbol2 + 'end'
        export const at:string = Prefixes.sbol2 + 'at'
        export const sequenceAnnotation:string = Prefixes.sbol2 + 'sequenceAnnotation'
        export const sequenceConstraint:string = Prefixes.sbol2 + 'sequenceConstraint'
        export const orientation:string = Prefixes.sbol2 + 'orientation'
        export const displayId:string = Prefixes.sbol2 + 'displayId'
        export const version:string = Prefixes.sbol2 + 'version'
        export const access:string = Prefixes.sbol2 + 'access'
        export const mapsTo:string = Prefixes.sbol2 + 'mapsTo'
        export const local:string = Prefixes.sbol2 + 'local'
        export const remote:string = Prefixes.sbol2 + 'remote'
        export const interaction:string = Prefixes.sbol2 + 'interaction'
        export const participation:string = Prefixes.sbol2 + 'participation'
        export const participant:string = Prefixes.sbol2 + 'participant'
        export const type:string = Prefixes.sbol2 + 'type'
        export const sequence:string = Prefixes.sbol2 + 'sequence'
        export const encoding:string = Prefixes.sbol2 + 'encoding'
        export const elements:string = Prefixes.sbol2 + 'elements'
        export const persistentIdentity:string = Prefixes.sbol2 + 'persistentIdentity'
        export const restriction:string = Prefixes.sbol2 + 'restriction'
        export const subject:string = Prefixes.sbol2 + 'subject'
        export const object:string = Prefixes.sbol2 + 'object'
        export const member:string = Prefixes.sbol2 + 'member'
        export const model:string = Prefixes.sbol2 + 'model'
        export const framework:string = Prefixes.sbol2 + 'framework'
        export const language:string = Prefixes.sbol2 + 'language'
        export const source:string = Prefixes.sbol2 + 'source'
        export const attachment:string = Prefixes.sbol2 + 'attachment'
        export const format:string = Prefixes.sbol2 + 'format'
        export const size:string = Prefixes.sbol2 + 'size'
        export const hash:string = Prefixes.sbol2 + 'hash'
        export const built:string = Prefixes.sbol2 + 'built'

    }

    export namespace SBOLX {
        export const hasSubComponent:string = Prefixes.sbolx + 'hasSubComponent'
        export const instanceOf:string = Prefixes.sbolx + 'instanceOf'
        export const hasRole:string = Prefixes.sbolx + 'hasRole'
        export const hasLocation:string = Prefixes.sbolx + 'hasLocation'
        export const rangeStart:string = Prefixes.sbolx + 'rangeStart'
        export const rangeEnd:string = Prefixes.sbolx + 'rangeEnd'
        export const cutAt:string = Prefixes.sbolx + 'cutAt'
        export const hasSequenceConstraint:string = Prefixes.sbolx + 'hasSequenceConstraint'
        export const orientation:string = Prefixes.sbolx + 'orientation'
        export const id:string = Prefixes.sbolx + 'id'
        export const version:string = Prefixes.sbolx + 'version'
        export const hasInteraction:string = Prefixes.sbolx + 'hasInteraction'
        export const hasParticipation:string = Prefixes.sbolx + 'hasParticipation'
        export const participant:string = Prefixes.sbolx + 'participant'
        export const type:string = Prefixes.sbolx + 'type'
        export const usesSequence:string = Prefixes.sbolx + 'usesSequence'
        export const sequenceEncoding:string = Prefixes.sbolx + 'sequenceEncoding'
        export const sequenceElements:string = Prefixes.sbolx + 'sequenceElements'
        export const persistentIdentity:string = Prefixes.sbolx + 'persistentIdentity'
        export const constraintRestriction:string = Prefixes.sbolx + 'constraintRestriction'
        export const constraintSubject:string = Prefixes.sbolx + 'constraintSubject'
        export const constraintObject:string = Prefixes.sbolx + 'constraintObject'
        export const hasSequenceFeature:string = Prefixes.sbolx + 'hasSequenceFeature'
        export const hasMember:string = Prefixes.sbolx + 'hasMember'

        // attachments
        export const source:string = Prefixes.sbolx + 'source'
        export const format:string = Prefixes.sbolx + 'format'
        export const size:string = Prefixes.sbolx + 'size'
        export const hash:string = Prefixes.sbolx + 'hash'
    }

    export namespace Dcterms {

        export const title:string = Prefixes.dcterms + 'title'
        export const description:string = Prefixes.dcterms + 'description'

    }

    export namespace SVG {
        export const fontFamily:string = Prefixes.svg + 'font-family'
        export const fontSize:string = Prefixes.svg + 'font-size'
        export const fontStyle:string = Prefixes.svg + 'font-style'
    }

    export namespace SyBiOnt {

        export const encodedBy:string = Prefixes.sybio + 'encodedBy'
        export const EC:string = Prefixes.sybio + 'EC'
	export const isBalanced = Prefixes.sybio + 'isBalanced'
	export const isReactionClass = Prefixes.sybio + 'isReactionClass'
	export const inPolymerization = Prefixes.sybio + 'inPolymerization'
	export const inTransport = Prefixes.sybio + 'inTransport'
	export const reactionDirection = Prefixes.sybio + 'reactionDirection'
	export const hasReactionParticipant = Prefixes.sybio + 'hasReactionParticipant'
	export const referencesCompound = Prefixes.sybio + 'referencesCompound'
	export const reactionSide = Prefixes.sybio + 'reactionSide'
	export const reactionSummary = Prefixes.sybio + 'reactionSummary'
	export const stoicRatio =  Prefixes.sybio + 'stoichiometricRatio'
	export const compoundCharge = Prefixes.sybio + 'compoundCharge'
	export const compoundFormula = Prefixes.sybio + 'compoundFormula'
	export const compoundMass = Prefixes.sybio + 'compoundMass'
	export const compoundSmilesFormula = Prefixes.sybio + 'compoundSmilesFormula'
	export const interactsWith = Prefixes.sybio + 'interactsWith'
	export const taxId = Prefixes.sybio + 'taxId'
    }

    export namespace Prov {

        export const wasDerivedFrom:string = Prefixes.prov + 'wasDerivedFrom'
        export const wasGeneratedBy:string = Prefixes.prov + 'wasGeneratedBy'
        export const qualifiedAssociation:string = Prefixes.prov + 'qualifiedAssociation'
        export const qualifiedUsage:string = Prefixes.prov + 'qualifiedUsage'
        export const startedAtTime:string = Prefixes.prov + 'startedAtTime'
        export const endedAtTime:string = Prefixes.prov + 'endedAtTime'
        export const wasInformedBy:string = Prefixes.prov + 'wasInformedBy'
        export const agent:string = Prefixes.prov + 'agent'
        export const entity:string = Prefixes.prov + 'entity'
        export const hadRole:string = Prefixes.prov + 'hadRole'
        export const hadPlan:string = Prefixes.prov + 'hadPlan'

    }

    export namespace Enrichment {

        export const hint:string = Prefixes.enrichment + 'hint'

        export const orfStart:string = Prefixes.enrichment + 'orfStart'
        export const orfEnd:string = Prefixes.enrichment + 'orfEnd'


    }



}
