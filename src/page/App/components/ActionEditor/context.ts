import { createContext } from "react"
import { ActionEditorContextProps } from "./interface"

export const ActionEditorContext = createContext<ActionEditorContextProps>({
  editorHeight: 0,
})
