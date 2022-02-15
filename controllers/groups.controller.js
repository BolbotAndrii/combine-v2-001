const Groups = require('../models/Groups/Groups')


const createGroup = async ( req, res ) => {
    try {
        const {
            groupName,
            groupReg,
            groupCloud,
            groupKeitaro,
            groupQiwi,
            groupUsers,
            groupShop,
            registrRadio,
            cloudRadio,
            keitaroRadio,
            qiwiRadio,
            userRadio,
            shopRadio
        } = req.body

        const groupNameLower = groupName.toLowerCase()

        const groupExist = await Groups.findOne({ groupName } )

        if ( groupExist )  {
            res.status( 400 ).json( { message: "Error! Group exists!" } )
            return
        }

        const createdUserGroup = await new Groups( {
            groupName:      groupNameLower,
            groupAccess:    [
                {
                    name: 'registrar',
                    access: groupReg === 'on' ? true : false
                },
                {
                    name: 'cloudflare',
                    access: groupCloud === 'on' ? true : false
                },
                {
                    name: 'qiwi',
                    access: groupQiwi === 'on' ? true : false
                },
                {
                    name: 'users',
                    access: groupUsers === 'on' ? true : false
                },
                {
                    name: 'keitaro',
                    access: groupKeitaro === 'on' ? true : false
                },
                {
                    name: 'shop',
                    access: groupShop === 'on' ? true : false
                }
            ],
            groupPagePerm:  [
                {
                    name: 'registrar',
                    access: registrRadio === 'on' ? true : false
                },
                {
                    name: 'cloudflare',
                    access: cloudRadio === 'on' ? true : false
                },
                {
                    name: 'qiwi',
                    access: qiwiRadio === 'on' ? true : false
                },
                {
                    name: 'users',
                    access: userRadio === 'on' ? true : false
                },
                {
                    name: 'keitaro',
                    access: keitaroRadio === 'on' ? true : false
                },
                {
                    name: 'shop',
                    access: shopRadio === 'on' ? true : false
                }
            ]
        } )

        const savedGroup = await createdUserGroup.save()

        if(!savedGroup) {
            res.status( 400 ).json( { message: "Error! Group is not created!" } )
            return
        }

        res.status( 201 ).json( { message: 'Group created!' } )
    } catch ( err ) {
        res.status( 500 ).json( { message: 'Server error!', error: err } )
    }
}

const getGroups = async ( req, res ) => {
    try {
        const groups = await Groups.find()

        res.status( 200 ).json( groups )

    } catch ( err ) {
        res.status( 500 ).json( { message: 'Server error!', error: err } )
    }
}

const getGroup = async ( req, res ) => {
    try {
        const group = await Groups.findById( req.params.id )
        res.status( 200 ).json( group )
    } catch ( err ) {
        res.status( 500 ).json( { message: 'Server error!', error: err } )
    }
}


const getGroupByName = async ( req, res ) => {
    try {
        const group = await Groups.findOne( { groupName: req.params.name } )

        const accessedPages = group.groupAccess
            .filter( item => item.access === true )
            .map( elems =>  elems.name )

        res.status( 200 ).json(accessedPages)
    } catch ( err ) {
        res.status( 500 ).json( { message: 'Server error!', error: err } )
    }
}


const deleteGroup = async ( req, res ) => {
    try {
        await Groups.findByIdAndDelete( req.params.id )
        res.status( 200 ).json( { message: 'The group was successfully deleted' } )
    } catch ( err ) {
        res.status( 500 ).json( { message: 'Server error!', error: err } )
    }
}

const updateGroup = async ( req, res ) => {
    try {
        const filter = { _id: req.params.id }
        const update = req.body

        await Groups.findByIdAndUpdate( filter, update, {
            new: true
        })

        res.status( 204 ).json( { message: 'The group was successfully updated ' } )
    } catch ( err ) {
        res.status( 500 ).json( { message: 'Server error!', error: err } )
    }
}


module.exports = { getGroup, getGroups, createGroup, deleteGroup, updateGroup, getGroupByName }