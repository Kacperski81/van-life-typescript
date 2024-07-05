import React from 'react'

export const createContext = <T extends object>() => {
    const Context = React.createContext<T | null>(null)

    const useContext = () => {
        const ctx = React.useContext(Context)

        if(ctx === null) {
            throw new Error('useContext must be inside a Provider with a value')
        }

        return ctx
    }

    return [useContext, Context.Provider] as const
}