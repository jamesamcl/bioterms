
import { Specifiers } from '../Specifiers'

const roles = [
    {
        name: 'CDS',
        uri: Specifiers.SO.CDS,
    },
    {
        name: 'Engineered Region',
        uri: Specifiers.SO.EngineeredRegion
    },
    {
        name: 'OriR',
        uri: Specifiers.SO.OriginOfReplication
    },
    {
        name: 'OriT',
        uri: Specifiers.SO.OriginOfTransfer
    },
    {
        name: 'Plasmid Backbone',
        uri: Specifiers.SO.PlasmidBackbone
    },
    {
        name: 'Promoter',
        uri: Specifiers.SO.Promoter
    },
    {
        name: 'RBS',
        uri: Specifiers.SO.RBS
    },
    {
        name: 'Restriction Site',
        uri: Specifiers.SO.RestrictionSite
    },
    {
        name: 'Terminator',
        uri: Specifiers.SO.Terminator
    }
]

const uriToName:Map<string, string> = new Map<string, string>()

roles.forEach((role) => {
    uriToName.set(role.uri, role.name)
})

export function roleURIToName(uri:string):string {

    return uriToName.get(uri) || uri

}

export default roles







