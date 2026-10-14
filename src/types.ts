export type Project = {
    name: string,
    description: string,
    stack: string[],
    href?: string
}

export type StackGroup ={
    name: string,
    items: string[]
}