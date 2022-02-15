import { useState, useCallback, useEffect } from "react"

const storageName = 'user'

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    const [mark, setUserMark] = useState(null)
    const [name, setUserName] = useState(null)
    const [group, setUserGroup] = useState(null)


    const login = useCallback(( jwtToken, id, mark, name, group ) => {
        setToken( jwtToken )
        setUserId( id )
        setUserMark( mark )
        setUserName( name )
        setUserGroup( group )
        localStorage.setItem( storageName, JSON.stringify({
            userId: id,
            token: jwtToken,
            mark,
            name,
            group
        }))
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        setUserMark( null )
        setUserName( null )
        setUserGroup( null )
        localStorage.removeItem( storageName )
    }, [])

    useEffect(() => {
        const data = JSON.parse( localStorage.getItem( storageName ) )

        if ( data && data.token ) {
            login( data.token, data.userId, data.mark, data.name, data.group )
        }

    }, [login] )

    return { login, logout, token, userId , mark, name, group }
}