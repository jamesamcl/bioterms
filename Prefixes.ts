
export namespace Prefixes {

    export const sbol1:string = 'http://sbols.org/v1#'
    export const sbol2:string = 'http://sbols.org/v2#'
    export const sbolx:string = 'http://sboldata.org/sbolx#'
    export const sbol3:string = 'http://sbols.org/v3#'

    export const rdf:string = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#'

    export const visual:string = 'http://wiki.synbiohub.org/wiki/Terms/visual#'

    export const sequenceOntologyPurl:string = 'http://purl.org/obo/owl/SO#'
    export const sequenceOntologyIdentifiersOrg:string = 'http://identifiers.org/so/'
    export const go:string = 'http://identifiers.org/go/'

    export const dcterms:string = 'http://purl.org/dc/terms/'

    export const rdfs:string = 'http://www.w3.org/2000/01/rdf-schema#'
    
    export const svg:string = 'http://www.w3.org/2000/svg#'

    export const sbo:string = 'http://identifiers.org/biomodels.sbo/'
    
    export const sboNs:string = 'https://identifiers.org/SBO:'

    export const sybio:string = 'http://www.sybio.ncl.ac.uk#'

    export const prov:string = 'http://www.w3.org/ns/prov#'

    export const enrichment:string = 'http://wiki.synbiohub.org/wiki/Terms/enrichment#'

    export const measure:string = 'http://www.ontology-of-units-of-measure.org/resource/om-2/'

}

export function prefixify(uri) {

    uri = '' + uri

    for (var i = 0; i < keys.length; ++i) {

        const prefix = keys[i]
        const uriPrefix = Prefixes[prefix]

        if (uri.indexOf(uriPrefix) === 0) {

            return prefix + ':' + uri.slice(uriPrefix.length)

        }

    }

    return uri
}

const keys = Object.keys(Prefixes)


