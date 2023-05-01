import { createContextProvider } from "@solid-primitives/context";

export type ClientContextParameters = {
}

export type ClientContext = {
}

const createClientContext = (_: ClientContextParameters): ClientContext => {

  return {
  } as ClientContext
}

const createInitialClientContext = (): ClientContext => {
  const params = {}
  return createClientContext(params)
}

export const ClientContext = createContextProvider<ClientContext, ClientContextParameters>(
  (params) => createClientContext(params),
  createInitialClientContext()
)

export const ClientContextProvider = ClientContext[0]
export const useClientContext = ClientContext[1]
