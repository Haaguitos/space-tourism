import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

type DestinationContextType = {
  destination: 'moon' | 'mars' | 'europa' | 'titan'
  setDestination: Dispatch<SetStateAction<'moon' | 'mars' | 'europa' | 'titan'>>
}

const DestinationContext = createContext<DestinationContextType | undefined>(
  undefined,
)

export const DestinationContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [destination, setDestination] = useState<
    'moon' | 'mars' | 'europa' | 'titan'
  >('moon')

  return (
    <DestinationContext.Provider value={{ destination, setDestination }}>
      {children}
    </DestinationContext.Provider>
  )
}

export const useDestinationContext = (): DestinationContextType => {
  const context = useContext(DestinationContext)
  if (!context) {
    throw new Error(
      'useDestinationContext must be used within a DestinationContextProvider',
    )
  }
  return context
}
