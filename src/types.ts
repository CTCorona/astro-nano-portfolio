export type Site = {
  NAME: string
  EMAIL: string
  NUM_WORKS_ON_HOMEPAGE: number
  NUM_PROJECTS_ON_HOMEPAGE: number
}

export type Metadata = {
  TITLE: string
  DESCRIPTION: string
}

export type Socials = {
  NAME: string
  HREF: string
}[]

type AttributeType = {
  [key: string]: string
}

export interface Posthog {
  init: (arg0: string, arg1: AttributeType) => void
  capture: (arg0: string, arg1: AttributeType) => void
  opt_in_capturing: () => void
  opt_out_capturing: () => void
  has_opted_out_capturing: () => boolean
  has_opted_in_capturing: () => boolean
}
